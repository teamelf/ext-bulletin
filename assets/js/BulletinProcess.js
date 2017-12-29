/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const { Steps, Icon } = antd;

export default class extends React.Component {
  constructor (props) {
    super(props);
    this.steps = [
      {title: '编辑', icon: 'edit'},
      {title: '发布公告', icon: 'notification'},
      {title: '反馈', icon: 'solution'},
    ];
  }
  render () {
    return (
      <Steps
        current={this.props.isDraft ? 0 : 2}
        style={{marginBottom: 16}}
      >
        {this.steps.map(o => (
          <Steps.Step
            title={o.title}
            icon={<Icon type={o.icon}/>}
          />
        ))}
      </Steps>
    );
  }
}
