/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const { Card, Divider } = antd;
import Editor from 'teamelf/components/Editor';

export default class extends React.Component {
  render () {
    return (
      <Card>
        <h2>{this.props.title}</h2>
        <Divider/>
        <Editor preview value={this.props.content}/>
      </Card>
    );
  }
}
