/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import extend from 'teamelf/common/extend';
import 'teamelf/bulletin/markdown-settings';
import Bulletin from 'teamelf/bulletin/Bulletin';
import App from 'teamelf/App';
import { SideNav } from 'teamelf/layout/SideNav';
import Permission from 'teamelf/Permission';

extend(App.prototype, 'routes', routes => {
  routes.push(...[
    {path: '/bulletin', component: Bulletin}
  ]);
});

extend(SideNav.prototype, 'navigations', navigations => {
  navigations.push(...[
    {path: '/bulletin', icon: 'notification', title: '公告管理'}
  ]);
});

extend(Permission.prototype, 'permissions', permissions => {
  permissions.push(...[
    {name: '查看所有通知', permission: 'bulletin.list'},
    {name: '发送通知', permission: 'bulletin.create'}
  ]);
});
