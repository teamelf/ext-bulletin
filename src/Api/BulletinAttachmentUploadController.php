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
use TeamELF\Exception\HttpValidationException;
use TeamELF\Ext\Bulletin\Bulletin;
use TeamELF\Http\AbstractController;
use PascalDeVink\ShortUuid\ShortUuid;

class BulletinAttachmentUploadController extends AbstractController
{
    /**
     * handle the request
     *
     * @return Response
     * @throws HttpNotFoundException
     * @throws HttpValidationException
     */
    public function handler(): Response
    {
        $bulletin = Bulletin::find($this->getParameter('id'));
        if (!$bulletin) {
            throw new HttpNotFoundException();
        }
        $attachment = $this->request->files->get('attachment');
        if (!$attachment) {
            throw new HttpValidationException();
        }
        $directory = app()->getStoragePath() . '/public/bulletin/' . $bulletin->getId();
        $filename = ShortUuid::uuid4() . '.' . $attachment->guessExtension();
        $attachment->move($directory, $filename);
        return response([
            'url' => '/storage/bulletin/' . $bulletin->getId() . '/' . $filename,
        ]);
    }
}
