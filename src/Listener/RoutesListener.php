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
use TeamELF\Ext\Bulletin\Api\BulletinAttachmentUploadController;
use TeamELF\Ext\Bulletin\Api\BulletinCreateController;
use TeamELF\Ext\Bulletin\Api\BulletinDeleteController;
use TeamELF\Ext\Bulletin\Api\BulletinFeedbackController;
use TeamELF\Ext\Bulletin\Api\BulletinFeedbackListController;
use TeamELF\Ext\Bulletin\Api\BulletinItemController;
use TeamELF\Ext\Bulletin\Api\BulletinListController;
use TeamELF\Ext\Bulletin\Api\BulletinPublishController;
use TeamELF\Ext\Bulletin\Api\BulletinUpdateController;
use TeamELF\Ext\Bulletin\View\BulletinViewController;

class RoutesListener
{
    public function subscribe()
    {
        app()->listen(RoutesWillBeLoaded::class, [$this, 'handler']);
    }

    public function handler(RoutesWillBeLoaded $event)
    {
        $event->getRouter()
            ->prefix('/bulletin')
            ->get('bulletin-view', '/{id}/view', BulletinViewController::class)

            ->prefix('/api/bulletin')
            ->get('bulletin-list', '', BulletinListController::class)
            ->post('bulletin-create', '', BulletinCreateController::class)
            ->get('bulletin-item', '/{id}', BulletinItemController::class)
            ->put('bulletin-update', '/{id}', BulletinUpdateController::class)
            ->put('bulletin-publish', '/{id}/publish', BulletinPublishController::class)
            ->post('bulletin-attachment-upload', '/{id}/attachment', BulletinAttachmentUploadController::class)
            ->delete('bulletin-delete', '/{id}', BulletinDeleteController::class)
            ->get('bulletin-feedback-list', '/{id}/feedback', BulletinFeedbackListController::class)
            ->put('bulletin-feedback', '/feedback/{id}', BulletinFeedbackController::class);
    }
}
