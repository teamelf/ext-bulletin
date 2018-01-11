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
import BulletinPreview from 'teamelf/bulletin/BulletinPreview';
import BulletinFeedback from 'teamelf/bulletin/BulletinFeedback';

export default class extends Page {
  constructor (props) {
    super(props);
    this.state = {
      autoSave: true,
      saving: false,
      publishing: false,
      deleting: false,
      changed: false,
      refreshing: false,
      autoRefresh: false,
      mentionList: [],
      bulletin: null,
      feedbacks: []
    };
    this.fetchMentionList();
    this.fetchBulletin();
  }
  async fetchMentionList () {
    let roles = (await axios.get('role')).data.map(o => ({
      label: o.name,
      value: 'r_' + o.slug,
      key: 'r_' + o.slug,
      children: []
    }));
    for (let member of (await axios.get('member')).data) {
      let role = roles.find(o => o.value === 'r_' + member.role.slug);
      role.children.push({
        label: member.name,
        value: 'm_' + member.username,
        key: 'm_' + member.username
      });
    }
    this.setState({mentionList: roles});
    this.fetchFeedback();
  }
  fetchBulletin () {
    const id = this.props.match.params.id;
    return axios.get('bulletin/' + id).then(r => {
      this.setState({bulletin: r.data});
      if (r.data.isDraft) {
        this.autoSave();
      } else {
        this.setState({autoRefresh: true});
        this.autoRefreshFeedback();
      }
    });
  }
  save () {
    const data = {
      title: this.state.bulletin.title || '',
      content: this.state.bulletin.content || '',
      receivers: this.state.bulletin.receivers || []
    };
    const id = this.props.match.params.id;
    this.setState({saving: true});
    return axios.put('bulletin/' + id, data).then(r => {
      this.setState({saving: false, changed: false});
      this.fetchBulletin();
    }).catch(e => {
      this.setState({saving: false});
    });
  }
  async publish () {
    const id = this.props.match.params.id;
    await this.save();
    this.setState({publishing: true});
    return axios.put(`bulletin/${id}/publish`).then(r => {
      window.location.reload();
    }).catch(e => {
      this.setState({publishing: false});
    });
  }
  del () {
    antd.Modal.confirm({
      title: '不可恢复',
      content: '确定要删除么？该操作可能无法恢复',
      onOk: () => {
        const id = this.props.match.params.id;
        this.setState({deleting: true});
        return axios.delete('bulletin/' + id).then(r => {
          this.setState({deleting: false});
          window.location.href = '/bulletin';
        }).catch(e => {
          this.setState({deleting: false});
        });
      }
    });
  }
  async autoSave () {
    if (this.state.changed && this.state.autoSave) {
      await this.save();
    }
    setTimeout(this.autoSave.bind(this), 60000);
  }
  fetchFeedback () {
    const id = this.props.match.params.id;
    this.setState({refreshing: true});
    return axios.get(`bulletin/${id}/feedback`).then(r => {
      this.setState({feedbacks: r.data});
      this.setState({refreshing: false});
    }).catch(e => {
      this.setState({refreshing: false});
    });
  }
  async autoRefreshFeedback () {
    if (this.state.autoRefresh) {
      await this.fetchFeedback();
    }
    setTimeout(this.autoRefreshFeedback.bind(this), 60000);
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
            {this.state.bulletin.isDraft &&
            <div style={{marginBottom: 16}}>
              <Checkbox
                checked={this.state.autoSave}
                onChange={e => this.setState({autoSave: e.target.checked})}
              >{(this.state.autoSave && this.state.saving)
                ? [<Icon type="loading"/>, ' 保存中...']
                : '自动存草稿'
              }</Checkbox>
            </div>
            }
            {!this.state.bulletin.isDraft && [
              <div style={{marginBottom: 16}}>
                <Checkbox
                  checked={this.state.autoRefresh}
                  onChange={e => this.setState({autoRefresh: e.target.checked})}
                >自动刷新反馈</Checkbox>
              </div>,
              <div style={{marginBottom: 16}}>
                <Button
                  type="primary"
                  icon="reload"
                  onClick={this.fetchFeedback.bind(this)}
                  loading={this.state.refreshing}
                >刷新反馈</Button>
              </div>
            ]}
            {this.state.bulletin.isDraft &&
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
  handleBulletinChange (key, value) {
    const bulletin = this.state.bulletin;
    bulletin[key] = value;
    this.setState({bulletin, changed: true});
  }
  renderEditor () {
    return (
      <div>
        <div style={{marginBottom: 16}}>
          <Input
            size="large"
            value={this.state.bulletin.title}
            onChange={e => this.handleBulletinChange('title', e.target.value)}
          />
        </div>
        <div style={{marginBottom: 16}}>
          <TreeSelect
            size="large" style={{width: '100%'}}
            treeCheckable
            showCheckedStrategy={TreeSelect.SHOW_PARENT}
            searchPlaceholder="选择要通知的人"
            treeData={this.state.mentionList}
            value={this.state.bulletin.receivers}
            onChange={e => this.handleBulletinChange('receivers', e)}
            allowClear
          />
        </div>
        <div style={{marginBottom: 16}}>
          <Input.TextArea
            size="large"
            autosize={{minRows: 10, maxRows: 999999}}
            value={this.state.bulletin.content}
            onChange={e => this.handleBulletinChange('content', e.target.value)}
          />
        </div>
      </div>
    );
  }
  view () {
    if (this.state.bulletin) {
      return [
        <BulletinProcess isDraft={this.state.bulletin.isDraft}/>,
        <Row type="flex" gutter={16}>
          {this.state.bulletin.isDraft &&
          <Col xs={24} md={12}>
            {this.renderEditor()}
          </Col>
          }
          <Col xs={24} md={12}>
            <BulletinPreview {...this.state.bulletin}/>
          </Col>
          {!this.state.bulletin.isDraft &&
          <Col xs={24} md={12}>
            <BulletinFeedback
              statistics={this.state.bulletin.statistics}
              feedbacks={this.state.feedbacks}
            />
          </Col>
          }
        </Row>
      ];
    }
  }
}
