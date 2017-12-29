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
use TeamELF\Core\Config;
use TeamELF\Ext\Bulletin\Bulletin;
use TeamELF\Http\AbstractController;

class BulletinCreateController extends AbstractController
{
    /**
     * handle the request
     *
     * @return Response
     */
    public function handler(): Response
    {
        $bulletin = (new Bulletin())
            ->title(date('Ymd', time()) . '公告')
            ->content('全体 ' . Config::get('name') . ' 成员:')
            ->save();
        return response([
            'id' => $bulletin->getId()
        ]);
    }
}
