/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import 'teamelf/bulletin/markdown-settings';
import BulletinView from 'teamelf/bulletin/BulletinView';

const target = document.getElementById('react-render-target-bulletin-view');
if (target) {
  ReactDOM.render(<BulletinView {...window.bulletin} feedback={window.feedback}/>, target);
}
