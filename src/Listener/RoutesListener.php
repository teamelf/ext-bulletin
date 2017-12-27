<?php

/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace TeamELF\Ext\Bulletin\Listener;

use TeamELF\Event\RoutesWillBeLoaded;
use TeamELF\Ext\Bulletin\Api\BulletinCreateController;
use TeamELF\Ext\Bulletin\Api\BulletinItemController;
use TeamELF\Ext\Bulletin\Api\BulletinListController;

class RoutesListener
{
    public function subscribe()
    {
        app()->listen(RoutesWillBeLoaded::class, [$this, 'handler']);
    }

    public function handler(RoutesWillBeLoaded $event)
    {
        $event->getRouter()->prefix('/api')
            ->get('bulletin-list', '/bulletin', BulletinListController::class)
            ->post('bulletin-create', '/bulletin', BulletinCreateController::class)
            ->get('bulletin-item', '/bulletin/{id}', BulletinItemController::class);
    }
}
