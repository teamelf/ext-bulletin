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

use TeamELF\Ext\Bulletin\Bulletin;
use TeamELF\Ext\Bulletin\BulletinFeedback;
use TeamELF\Http\ViewController;

class BulletinViewController extends ViewController
{
    protected $template = '@ext-bulletin/view.twig';

    protected function middleware()
    {
        $bulletin = Bulletin::find($this->getParameter('id'));
        $feedback = BulletinFeedback::find($this->request->get('token'));
        if (!$bulletin || !$feedback) {
            $this->redirect = '/';
        }
        if (!$feedback->getUpdatedAt()) {
            $feedback->save(); // read it!
        }
        $this->data = [
            'bulletin' => [
                'title' => $bulletin->getTitle(),
                'content' => $bulletin->getContent(),
                'updatedAt' => $bulletin->getUpdatedAt()->getTimestamp(),
            ],
            'feedback' => $feedback->isChecked(),
            'remark' => $feedback->getRemark()
        ];
    }

    protected function addAssets()
    {
        parent::addAssets();
        $this->assets
            ->addJs(__DIR__ . '/../../assets/dist/bulletin.js')
            ->entry('teamelf/bulletin/view');
    }
}
