/**
 * This file is part of TeamELF
 *
 * (c) GuessEver <guessever@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import Page from 'teamelf/layout/Page';
const { Row, Col, Button } = antd;
import BulletinCardItem from 'teamelf/bulletin/BulletinCardItem';

export default class extends Page {
  constructor (props) {
    super(props);
    this.state = {
      bulletins: []
    };
    this.fetchBulletins();
  }
  fetchBulletins () {
    axios.get('bulletin').then(r => {
      this.setState({bulletins: r.data});
    });
  }
  title () {
    return '公告管理';
  }
  description () {
    return [
      <p>这里您可以给成员组或者单个成员发送公告，并且得到反馈</p>,
      <Button
        type="primary"
        onClick={this.createBulletin.bind(this)}
      >新建公告</Button>
    ];
  }
  createBulletin () {
    axios.post('bulletin').then(r => {
      window.location.href = '/bulletin/' + r.data.id;
    });
  }
  view () {
    return (
      <Row type="flex" gutter={16}>
        {this.state.bulletins.map(o => (
          <Col sm={24} md={12} lg={8} xxl={6}>
            <BulletinCardItem {...o}/>
          </Col>
        ))}
      </Row>
    );
  }
}
