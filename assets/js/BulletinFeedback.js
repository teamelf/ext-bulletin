/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const { Card, Table, Tag, Checkbox } = antd;

export const FeedbackTagUnread = props => <Tag>{props.number}未查阅</Tag>;
export const FeedbackTagNoresponse = props => <Tag color="orange">{props.number}已读</Tag>;
export const FeedbackTagConfirm = props => <Tag color="green">{props.number}确认</Tag>;
export const FeedbackTagRefuse = props => <Tag color="red">{props.number}拒绝</Tag>;

export default class extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      filter: ['unread', 'noresponse', 'confirm', 'refuse']
    };
  }
  getDataSource () {
    let dataSource = [];
    const getStatus = feedback => {
      if (feedback.checked === true) {
        return ['confirm', <FeedbackTagConfirm/>];
      } else if (feedback.checked === false) {
        return ['refuse', <FeedbackTagRefuse/>];
      } else {
        if (feedback.updatedAt === null) {
          return ['unread', <FeedbackTagUnread/>];
        } else {
          return ['noresponse', <FeedbackTagNoresponse/>];
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
      {label: <FeedbackTagUnread number={this.props.statistics.unread}/>, value: 'unread'},
      {label: <FeedbackTagNoresponse number={this.props.statistics.noresponse}/>, value: 'noresponse'},
      {label: <FeedbackTagConfirm number={this.props.statistics.confirm}/>, value: 'confirm'},
      {label: <FeedbackTagRefuse number={this.props.statistics.refuse}/>, value: 'refuse'},
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
