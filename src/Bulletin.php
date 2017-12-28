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

use TeamELF\Database\AbstractModel;

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
     * @var int
     *
     * @Column(type="integer", options={"default":0})
     */
    protected $step;

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
     * getter of $step
     *
     * @return int
     */
    public function getStep()
    {
        return $this->step;
    }

    /**
     * setter of $step
     *
     * @param $step
     * @return $this
     */
    public function step($step)
    {
        $this->step = $step;
        return $this;
    }

    // ----------------------------------------
    // | HELPER FUNCTIONS

    /**
     * publish the bulletin
     *
     * @return $this
     */
    public function publish()
    {
        $this->step(2)->save();
        // TODO: ADD PUBLISH EVENT
        return $this;
    }
}
