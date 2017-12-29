<?php

/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace TeamELF\Ext\Bulletin\Api;

use Symfony\Component\HttpFoundation\Response;
use TeamELF\Exception\HttpNotFoundException;
use TeamELF\Ext\Bulletin\Bulletin;
use TeamELF\Http\AbstractController;

class BulletinFeedbackListController extends AbstractController
{
    /**
     * handle the request
     *
     * @return Response
     * @throws HttpNotFoundException
     */
    public function handler(): Response
    {
        $bulletin = Bulletin::find($this->getParameter('id'));
        if (!$bulletin) {
            throw new HttpNotFoundException();
        }
        $response = [];
        foreach ($bulletin->getFeedbacks() as $feedback) {
            $response[] = [
                'id' => $feedback->getId(),
                'updatedAt' => $feedback->getUpdatedAt() ? $feedback->getUpdatedAt()->getTimestamp() : null,
                'receiver' => [
                    'id' => $feedback->getReceiver()->getId(),
                    'username' => $feedback->getReceiver()->getUsername(),
                    'name' => $feedback->getReceiver()->getName()
                ],
                'checked' => $feedback->isChecked(),
                'remark' => $feedback->getRemark()
            ];
        }
        return response($response);
    }
}
