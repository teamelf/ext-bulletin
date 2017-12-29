/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const gulp = require('teamelf-gulp');

gulp({
  files: [
    './bower_components/marked/marked.min.js'
  ],
  modules: {
    'teamelf/bulletin': './js/**/*.js'
  },
  output: './dist/bulletin.js'
}, {
  modules: [
    './less/**/*.less'
  ],
  output: './dist/bulletin.css'
});
