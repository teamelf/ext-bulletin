/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const { Card, Divider } = antd;
import BulletinProcess from 'teamelf/bulletin/BulletinProcess';

export default class extends React.Component {
  render () {
    return (
      <Card
        style={{marginBottom: 16}}
        title={this.props.title}
        extra={moment.unix(this.props.createdAt).format('YYYY-MM-DD')}
        hoverable
        onClick={e => window.location.href = `/bulletin/${this.props.id}`}
      >
        <div>{this.props.abstract}</div>
        <Divider/>
        <BulletinProcess isDraft={this.props.isDraft}/>
      </Card>
    );
  }
}
