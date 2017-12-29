/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const { Card, Table, Tag, Checkbox } = antd;

export default class extends React.Component {
  constructor (props) {
    super(props);
    this.tags = {
      unread: <Tag>未查阅</Tag>,
      noresponse: <Tag color="orange">已读</Tag>,
      confirm: <Tag color="green">确认</Tag>,
      refuse: <Tag color="red">拒绝</Tag>
    };
    this.state = {
      filter: ['unread', 'noresponse', 'confirm', 'refuse']
    };
  }
  getDataSource () {
    let dataSource = [];
    const getStatus = feedback => {
      if (feedback.checked === true) {
        return ['confirm', this.tags.confirm];
      } else if (feedback.checked === false) {
        return ['refuse', this.tags.refuse];
      } else {
        if (feedback.updatedAt === null) {
          return ['unread', this.tags.unread];
        } else {
          return ['noresponse', this.tags.noresponse];
        }
      }
    };
    for (let feedback of this.props.feedbacks) {
      const [status, tag] = getStatus(feedback);
      if (this.state.filter.find(o => o === status)) {
        dataSource.push({
          receiver: feedback.receiver.name,
          status: tag,
          remark: feedback.remark
        });
      }
    }
    return dataSource;
  }
  render () {
    const columns = [
      {title: '接收人', dataIndex: 'receiver', key: 'receiver'},
      {title: '状态', dataIndex: 'status', key: 'status'},
      {title: '备注', dataIndex: 'remark', key: 'remark'}
    ];
    const filterOptions = [
      {label: this.tags.unread, value: 'unread'},
      {label: this.tags.noresponse, value: 'noresponse'},
      {label: this.tags.confirm, value: 'confirm'},
      {label: this.tags.refuse, value: 'refuse'},
    ];
    return (
      <Card>
        <div style={{marginBottom: 16}}>
          <Checkbox.Group
            options={filterOptions}
            value={this.state.filter}
            onChange={e => this.setState({filter: e})}
          />
        </div>
        <div style={{margin: '0 -24px -24px'}}>
          <Table
            columns={columns}
            dataSource={this.getDataSource()}
            pagination={false}
          />
        </div>
      </Card>
    );
  }
}
