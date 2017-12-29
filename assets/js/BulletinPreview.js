/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const { Card, Divider } = antd;

export default class extends React.Component {
  render () {
    return (
      <Card>
        <h2>{this.props.title}</h2>
        <Divider/>
        <div>{this.props.content}</div>
      </Card>
    );
  }
}
