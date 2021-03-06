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
use TeamELF\Ext\Bulletin\Bulletin;
use TeamELF\Http\AbstractController;

class BulletinListController extends AbstractController
{
    protected $needPermissions = ['bulletin.list'];

    /**
     * handle the request
     *
     * @return Response
     */
    public function handler(): Response
    {
        $response = [];
        foreach (Bulletin::all() as $bulletin) {
            $response[] = [
                'id' => $bulletin->getId(),
                'createdAt' => $bulletin->getCreatedAt()->getTimestamp(),
                'title' => $bulletin->getTitle(),
                'abstract' => $bulletin->getAbstract(),
                'isDraft' => $bulletin->isDraft(),
                'statistics' => $bulletin->getStatistics()
            ];
        }
        return response($response);
    }
}
