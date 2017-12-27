<?php

/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace TeamELF\Ext\Bulletin\View;

use TeamELF\Http\ViewController;

class BulletinViewController extends ViewController
{
    protected $template = '@ext-bulletin/bulletin.twig';

    protected function addAssets()
    {
        parent::addAssets();
        $this->assets
            ->addJs(__DIR__ . '/../../assets/dist/bulletin.js')
            ->entry('teamelf/bulletin/main');
    }
}
