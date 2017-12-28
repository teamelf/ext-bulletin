/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import Page from 'teamelf/layout/Page';

export default class extends Page {
  title () {
    return '公告管理';
  }
  description () {
    return [
      <p>这里您可以给成员组或者单个成员发送公告，并且得到反馈</p>,
    ];
  }
  view () {
    return <div>Bulletin</div>;
  }
}
