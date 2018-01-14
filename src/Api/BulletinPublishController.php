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
use TeamELF\Exception\HttpForbiddenException;
use TeamELF\Exception\HttpNotFoundException;
use TeamELF\Ext\Bulletin\Bulletin;
use TeamELF\Http\AbstractController;

class BulletinPublishController extends AbstractController
{
    protected $needPermissions = ['bulletin.publish'];

    /**
     * handle the request
     *
     * @return Response
     * @throws HttpForbiddenException
     * @throws HttpNotFoundException
     */
    public function handler(): Response
    {
        $bulletin = Bulletin::find($this->getParameter('id'));
        if (!$bulletin) {
            throw new HttpNotFoundException();
        }
        if ($bulletin->isDraft()) {
            $bulletin->publish();
        } else {
            throw new HttpForbiddenException();
        }
        return response();
    }
}
