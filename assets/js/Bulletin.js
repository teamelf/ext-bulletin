/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const { Switch, Route } = ReactRouterDOM;
import { RedirectAs404 } from 'teamelf/Error'
import BulletinList from 'teamelf/bulletin/BulletinList';
import BulletinItem from 'teamelf/bulletin/BulletinItem';

export default class extends React.Component {
  constructor (props) {
    super(props);
    this.routes = [
      {path: '/bulletin', exact: true, component: BulletinList},
      {path: '/bulletin/:id', exact: true, component: BulletinItem}
    ];
  }
  render () {
    return (
      <Switch>
        {this.routes.map(o => <Route exact={o.exact}  path={o.path} component={o.component}/>)}
        <Route component={RedirectAs404}/>
      </Switch>
    );
  }
}
