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
use TeamELF\Database\AbstractModel;

/**
 * @Entity
 * @Table(name="bulletin_feedback")
 */
class BulletinFeedback extends AbstractModel
{
    // ----------------------------------------
    // | ORM DEFINITIONS

    /**
     * @var Bulletin
     *
     * @ManyToOne(targetEntity="Bulletin")
     * @JoinColumn(name="bulletin_id", referencedColumnName="id")
     */
    protected $bulletin;


    /**
     * @var Member
     *
     * @ManyToOne(targetEntity="TeamELF\Core\Member")
     * @JoinColumn(name="member_id", referencedColumnName="id")
     */
    protected $receiver;

    /**
     * @var null|boolean
     *
     * @Column(type="boolean", nullable=TRUE)
     */
    protected $checked;

    /**
     * @var string
     *
     * @Column(type="string", nullable=TRUE)
     */
    protected $remark;

    // ----------------------------------------
    // | GETTERS & SETTERS

    /**
     * getter of $bulletin
     *
     * @return Bulletin
     */
    public function getBulletin()
    {
        return $this->bulletin;
    }

    /**
     * setter of $bulletin
     *
     * @param Bulletin $bulletin
     * @return $this
     */
    public function bulletin(Bulletin $bulletin)
    {
        $this->bulletin = $bulletin;
        return $this;
    }

    /**
     * getter of $receiver
     *
     * @return Member
     */
    public function getReceiver()
    {
        return $this->receiver;
    }

    /**
     * setter of $receiver
     *
     * @param Member $receiver
     * @return $this
     */
    public function receiver(Member $receiver)
    {
        $this->receiver = $receiver;
        return $this;
    }

    /**
     * getter of $checked
     *
     * @return bool|null
     */
    public function isChecked()
    {
        return $this->checked;
    }

    /**
     * setter of $checked
     *
     * @param boolean $checked
     * @return $this
     */
    public function checked(bool $checked)
    {
        $this->checked = $checked;
        return $this;
    }

    /**
     * getter of $remark
     *
     * @return string
     */
    public function getRemark()
    {
        return $this->remark;
    }

    /**
     * setter of $remark
     *
     * @param string $remark
     * @return $this
     */
    public function remark($remark)
    {
        $this->remark = $remark;
        return $this;
    }

    // ----------------------------------------
    // | HELPER FUNCTIONS
}
