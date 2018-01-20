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
use Symfony\Component\Validator\Constraints\Choice;
use TeamELF\Exception\HttpForbiddenException;
use TeamELF\Exception\HttpNotFoundException;
use TeamELF\Ext\Bulletin\BulletinFeedback;
use TeamELF\Http\AbstractController;

class BulletinFeedbackController extends AbstractController
{
    protected $needLogin = false;

    /**
     * handle the request
     *
     * @return Response
     * @throws HttpForbiddenException
     * @throws HttpNotFoundException
     */
    public function handler(): Response
    {
        $data = $this->validate([
            'accept' => [
                new Choice(['choices' => [true, false, 0, 1]])
            ],
            'remark' => []
        ]);
        $feedback = BulletinFeedback::find($this->getParameter('id'));
        if (!$feedback) {
            throw new HttpNotFoundException();
        }
        if ($feedback->isChecked() !== null) {
            throw new HttpForbiddenException();
        }
        $feedback->checked(!!$data['accept']);
        $feedback->remark($data['remark']);
        $feedback->save();
        $this->log('info', '[' . $feedback->getReceiver()->getUsername() . '] has feedback for bulletin [' . $feedback->getBulletin()->getId() . ']');
        return response();
    }
}
