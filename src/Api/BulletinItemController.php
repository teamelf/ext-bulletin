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

class BulletinItemController extends AbstractController
{
    protected $needPermissions = ['bulletin.item'];

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
        return response([
            'id' => $bulletin->getId(),
            'createdAt' => $bulletin->getCreatedAt()->getTimestamp(),
            'updatedAt' => ($bulletin->getUpdatedAt() ?? $bulletin->getCreatedAt())->getTimestamp(),
            'title' => $bulletin->getTitle(),
            'content' => $bulletin->getContent(),
            'isDraft' => $bulletin->isDraft(),
            'receivers' => $bulletin->getReceivers(),
            'statistics' => $bulletin->getStatistics()
        ]);
    }
}
