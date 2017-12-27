/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import Bulletin from 'teamelf/bulletin/Bulletin';

const target = document.getElementById('react-render-target-bulletin');
if (target) {
  ReactDOM.render(<Bulletin/>, target);
}
