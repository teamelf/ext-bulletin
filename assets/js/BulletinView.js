/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import SimpleLayout from 'teamelf/common/SimpleLayout';
const { Button, Row, Col, Input, Alert } = antd;

export default class extends SimpleLayout {
  constructor (props) {
    super(props);
    this.state = {
      remark: ''
    };
  }
  feedback (accept) {
    const query = new URLSearchParams(window.location.search);
    const data = {
      accept,
      remark: this.state.remark
    };
    axios.put('bulletin/feedback/' + query.get('token'), data).then(r => {
      window.location.reload();
    });
  }
  renderOptionChoice () {
    if (this.props.feedback === null) {
      return [
        <Row type="flex" align="space-around" style={{marginBottom: 10}}>
          <Col>
            <Button
              size="large" type="primary"
              onClick={this.feedback.bind(this, true)}
            >确认</Button>
          </Col>
          <Col>
            <Button
              size="large" type="danger"
              onClick={this.feedback.bind(this, false)}
            >拒绝</Button>
          </Col>
        </Row>,
        <Input
          placeholder="Leave a message here ..."
          size="large"
          value={this.state.remark}
          onChange={e => this.setState({remark: e.target.value})}
        />
      ];
    } else {
      return [
        <Alert
          type={this.props.feedback ? 'success' : 'error'} showIcon
          message={this.props.feedback ? '接受' : '拒绝'}
          description="您已做出选择，不能修改"
        />,
        <Alert
          style={{marginTop: 20}}
          type="info" showIcon
          message="您的反馈留言"
          description={window.remark}
        />
      ];
    }
  }
  view () {
    return [
      <h1>{this.props.title}</h1>,
      <div
        style={{textAlign: 'left'}}
        className="markdown"
        dangerouslySetInnerHTML={{__html: marked(this.props.content)}}
      />,
      <div
        style={{textAlign: 'right'}}
      >发布于：{moment.unix(this.props.updatedAt).format('YYYY-MM-DD HH:mm:ss')}</div>,
      <div style={{textAlign: 'left', marginTop: 30}}>{this.renderOptionChoice()}</div>
    ];
  }
}
