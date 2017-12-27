/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import Bulletin from 'teamelf/bulletin/Bulletin';
import App from 'teamelf/App';
import { SideNav } from 'teamelf/layout/SideNav';
import Permission from 'teamelf/Permission';

App.prototype.routes = [
  {path: '/bulletin', exact: true, component: Bulletin},
];
SideNav.prototype.navigations = [
  {path: '/bulletin', icon: 'notification', title: '公告管理'}
];
Permission.prototype.permissions = [
  {name: '查看所有通知', permission: 'bulletin.list'},
  {name: '发送通知', permission: 'bulletin.create'},
];
