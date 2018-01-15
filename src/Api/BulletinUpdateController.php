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
use Symfony\Component\Validator\Constraints\NotBlank;
use TeamELF\Exception\HttpForbiddenException;
use TeamELF\Exception\HttpNotFoundException;
use TeamELF\Ext\Bulletin\Bulletin;
use TeamELF\Http\AbstractController;

class BulletinUpdateController extends AbstractController
{
    protected $needPermissions = ['bulletin.update'];

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
        if (!$bulletin->isDraft()) {
            throw new HttpForbiddenException();
        }
        $data = $this->validate([
            'title' => [
                new NotBlank()
            ],
            'content' => [
                new NotBlank()
            ],
            'receivers' => []
        ]);
        $bulletin->update($data);
        $this->log('info', 'Update bulletin [' . $bulletin->getId() . ']');
        return response();
    }
}
