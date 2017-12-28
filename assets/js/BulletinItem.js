/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import Page from 'teamelf/layout/Page';
const { Row, Col, Button, Input, Checkbox, TreeSelect, Icon } = antd;
import BulletinProcess from 'teamelf/bulletin/BulletinProcess';

export default class extends Page {
  constructor (props) {
    super(props);
    this.state = {
      autoSave: true,
      saving: false,
      publishing: false,
      deleting: false,
      changed: false,
      bulletin: null
    };
    this.fetchBulletin();
  }
  fetchBulletin () {
    const id = this.props.match.params.id;
    return axios.get('bulletin/' + id).then(r => {
      this.setState({bulletin: r.data});
      this.autoSave();
    });
  }
  save () {
    const data = {
      title: this.state.bulletin.title || '',
      content: this.state.bulletin.content || '',
    };
    const id = this.props.match.params.id;
    this.setState({saving: true});
    return axios.put('bulletin/' + id, data).then(r => {
      this.setState({saving: false, changed: false});
    }).catch(e => {
      this.setState({saving: false});
    });
  }
  async publish () {
    const id = this.props.match.params.id;
    await this.save();
    this.setState({publishing: true});
    return axios.put(`bulletin/${id}/publish`).then(r => {
      this.setState({publishing: false});
      this.fetchBulletin();
    }).catch(e => {
      this.setState({publishing: false});
    });
  }
  del () {
    const id = this.props.match.params.id;
    this.setState({deleting: false});
    return axios.delete('bulletin/' + id).then(r => {
      this.setState({deleting: false});
      window.location.href = '/bulletin';
    }).catch(e => {
      this.setState({deleting: false});
    });
  }
  async autoSave () {
    if (this.state.changed && this.state.autoSave) {
      await this.save();
    }
    setTimeout(this.autoSave.bind(this), 60000);
  }
  title () {
    if (this.state.bulletin) {
      return this.state.bulletin.title;
    }
  }
  description () {
    if (this.state.bulletin) {
      return (
        <Row type="flex" gutter={16}>
          <Col xs={24} md={12}>
            <div style={{marginBottom: 16}}>
              <strong>创建时间：</strong>
              <span>{moment.unix(this.state.bulletin.createdAt).format('YYYY-MM-DD HH:mm:ss')}</span>
            </div>
            <div style={{marginBottom: 16}}>
              <strong>最后更新：</strong>
              <span>{moment.unix(this.state.bulletin.updatedAt).format('YYYY-MM-DD HH:mm:ss')}</span>
            </div>
          </Col>
          <Col xs={24} md={12}>
            <div style={{marginBottom: 16}}>
              <Checkbox
                checked={this.state.autoSave}
                onChange={e => this.setState({autoSave: e.target.checked})}
              >{(this.state.autoSave && this.state.saving)
                ? [<Icon type="loading"/>, ' 保存中...']
                : '自动存草稿'
              }</Checkbox>
            </div>
            {this.state.bulletin.step === 0 &&
              <Row type="flex" justify="start" gutter={16}>
                <Col>
                  <Button
                    type="primary"
                    onClick={this.save.bind(this)}
                    loading={this.state.saving}
                  >保存草稿</Button>
                </Col>
                <Col>
                  <Button
                    type="primary"
                    onClick={this.publish.bind(this)}
                    loading={this.state.publishing}
                  >发布公告</Button>
                </Col>
                <Col>
                  <Button
                    type="danger"
                    onClick={this.del.bind(this)}
                    loading={this.state.deleting}
                  >舍弃</Button>
                </Col>
              </Row>
            }
          </Col>
        </Row>
      );
    }
  }
  handleBulletinChange (key, e) {
    const bulletin = this.state.bulletin;
    bulletin[key] = e.target.value;
    this.setState({bulletin, changed: true});
  }
  renderView () {
    return (
      <Row type="flex" gutter={16}>
        <Col xs={24} md={12}>
          <div style={{marginBottom: 16}}>
            <Input
              size="large"
              value={this.state.bulletin.title}
              onChange={this.handleBulletinChange.bind(this, 'title')}
            />
          </div>
          <div style={{marginBottom: 16}}>
            <TreeSelect
              size="large" style={{width: '100%'}}
              treeCheckable={true}
              showCheckedStrategy={TreeSelect.SHOW_PARENT}
              searchPlaceholder="选择要通知的人"
              treeData={[]}
              value={[]}
              onChange={e => console.log(e)}
            />
          </div>
          <div style={{marginBottom: 16}}>
            <Input.TextArea
              size="large"
              autosize={{minRows: 10, maxRows: 30}}
              value={this.state.bulletin.content}
              onChange={this.handleBulletinChange.bind(this, 'content')}
            />
          </div>
        </Col>
        <Col xs={24} md={12}>
          <div>{this.state.bulletin.title}</div>
          <div>{this.state.bulletin.content}</div>
        </Col>
      </Row>
    );
  }
  view () {
    if (this.state.bulletin) {
      return [
        <BulletinProcess step={this.state.bulletin.step}/>,
        this.renderView()
      ];
    }
  }
}
