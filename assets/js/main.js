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
  permissions.push({
    name: '公告管理',
    children: [
      {name: '查看通知列表', permission: 'bulletin.list'},
      {name: '查看通知详情', permission: 'bulletin.item'},
      {name: '创建新通知', permission: 'bulletin.create'},
      {name: '编辑未发布的通知', permission: 'bulletin.update'},
      {name: '发布通知', permission: 'bulletin.publish'},
      {name: '查看通知反馈', permission: 'bulletin.feedback.list'}
    ]
  });
});
