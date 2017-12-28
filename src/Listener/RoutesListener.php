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
use TeamELF\Ext\Bulletin\Api\BulletinDeleteController;
use TeamELF\Ext\Bulletin\Api\BulletinItemController;
use TeamELF\Ext\Bulletin\Api\BulletinListController;
use TeamELF\Ext\Bulletin\Api\BulletinPublishController;
use TeamELF\Ext\Bulletin\Api\BulletinUpdateController;

class RoutesListener
{
    public function subscribe()
    {
        app()->listen(RoutesWillBeLoaded::class, [$this, 'handler']);
    }

    public function handler(RoutesWillBeLoaded $event)
    {
        $event->getRouter()
            ->prefix('/api/bulletin')
            ->get('bulletin-list', '', BulletinListController::class)
            ->post('bulletin-create', '', BulletinCreateController::class)
            ->get('bulletin-item', '/{id}', BulletinItemController::class)
            ->put('bulletin-update', '/{id}', BulletinUpdateController::class)
            ->put('bulletin-publish', '/{id}/publish', BulletinPublishController::class)
            ->delete('bulletin-delete', '/{id}', BulletinDeleteController::class);
    }
}
