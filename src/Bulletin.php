<?php

/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace TeamELF\Ext\Bulletin;

use TeamELF\Core\Member;
use TeamELF\Core\Role;
use TeamELF\Database\AbstractModel;
use TeamELF\Ext\Mailer\Event\MessageNeedsToBeSent;
use TeamELF\View\ViewService;

/**
 * @Entity
 * @Table(name="bulletin")
 */
class Bulletin extends AbstractModel
{
    // ----------------------------------------
    // | ORM DEFINITIONS

    /**
     * @var string
     *
     * @Column(type="string", length=100)
     */
    protected $title;

    /**
     * @var string
     *
     * @Column(type="text")
     */
    protected $content;

    /**
     * @var boolean
     *
     * @Column(type="boolean", options={"default":TRUE})
     */
    protected $draft = true;

    /**
     * @var string
     *
     * @Column(type="text", nullable=TRUE)
     */
    protected $receivers;

    /**
     * @var BulletinFeedback[]
     *
     * @OneToMany(targetEntity="BulletinFeedback", mappedBy="bulletin")
     */
    protected $feedbacks;


    // ----------------------------------------
    // | GETTERS & SETTERS

    /**
     * getter of $title
     *
     * @return string
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * setter of $title
     *
     * @param string $title
     * @return $this
     */
    public function title($title)
    {
        $this->title = $title;
        return $this;
    }

    /**
     * getter of $content
     *
     * @return string
     */
    public function getContent()
    {
        return $this->content;
    }

    /**
     * setter of $content
     *
     * @param string $content
     * @return $this
     */
    public function content($content)
    {
        $this->content = $content;
        return $this;
    }

    /**
     * getter of $draft
     *
     * @return boolean
     */
    public function isDraft()
    {
        return !!$this->draft;
    }

    /**
     * setter of $draft
     *
     * @param bool $draft
     * @return $this
     */
    public function draft(bool $draft)
    {
        $this->draft = $draft;
        return $this;
    }

    /**
     * getter of receivers
     *
     * @return string[]
     */
    public function getReceivers()
    {
        return json_decode($this->receivers ?? '[]', true);
    }

    /**
     * setter of $receivers
     *
     * @param string[] $receivers
     * @return $this
     */
    public function receivers(array $receivers)
    {
        $this->receivers = json_encode($receivers);
        return $this;
    }

    /**
     * getter of $feedbacks
     *
     * @return BulletinFeedback[]
     */
    public function getFeedbacks()
    {
        return $this->feedbacks;
    }

    // ----------------------------------------
    // | HELPER FUNCTIONS

    /**
     * get content's abstract
     *
     * @param int $length
     * @return string
     */
    public function getAbstract($length = 100)
    {
        $content = $this->getContent();
        if (mb_strlen($content) > $length - 3) {
            return mb_substr($content, 0, $length - 3) . '...';
        } else {
            return $content;
        }
    }

    public function getStatistics()
    {
        $statistics = [
            'unread' => 0,
            'noresponse' => 0,
            'confirm' => 0,
            'refuse' => 0
        ];
        foreach ($this->getFeedbacks() as $feedback) {
            if ($feedback->isChecked() === true) {
                $statistics['confirm'] += 1;
            } elseif ($feedback->isChecked() === false) {
                $statistics['refuse'] += 1;
            } else {
                if ($feedback->getUpdatedAt() === null) {
                    $statistics['unread'] += 1;
                } else {
                    $statistics['noresponse'] += 1;
                }
            }
        }
        return $statistics;
    }

    /**
     * publish the bulletin
     *
     * @return $this
     */
    public function publish()
    {
        $members = [];
        foreach ($this->getReceivers() as $receiver) {
            $type = substr($receiver, 0, 1);
            $identity = substr($receiver, 2);
            if ($type === 'r') {
                $role = Role::findBy(['slug' => $identity]);
                if ($role) {
                    foreach ($role->getMembers() as $member) {
                        $members[] = $member;
                    }
                }
            } else if ($type === 'm') {
                $member = Member::findBy(['username' => $identity]);
                if ($member) {
                    $members[] = $member;
                }
            }
        }
        $emails = [];
        foreach ($members as $member) {
            (new BulletinFeedback([
                'bulletin' => $this,
                'receiver' => $member
            ]))->save();
            $emails[] = $member->getEmail();
        }
        app()->dispatch(new MessageNeedsToBeSent(
            $emails,
            $this->getTitle(),
            ViewService::getEngine()->render('@ext-bulletin/bulletin.twig', [
                'content' => \Parsedown::instance()->setUrlsLinked(false)->text($this->getContent())
            ]),
            null
        ));
        $this->draft(false)->save();
        return $this;
    }
}
