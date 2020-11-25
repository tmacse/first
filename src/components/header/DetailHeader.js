import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Row, Col, Divider } from 'antd';
const { SubMenu } = Menu;

export default class DetailHeader extends Component {
    state = {
        current: 'mail',
    }
    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
    };
    render() {
        const { current } = this.state;
        return (
            <div>
                <Row className='detail-header'>
                    <Col span={18} offset={3}>
                        <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                            <Menu.Item>
                                <Link target='_black' to='/newsMovie/list'>新闻联播</Link>
                            </Menu.Item>
                            <SubMenu title='强军阶梯'>
                                <Menu.Item><Link target='_black' to='/curriculum/list'>精品课程</Link></Menu.Item>
                                <Menu.Item><Link target='_black' to='/case/list'>案例分析</Link></Menu.Item>
                                <Menu.Item><Link target='_black' to='/symposia/list'>活动概况</Link></Menu.Item>
                            </SubMenu>
                            <SubMenu title='强军动态'>
                                <Menu.Item><Link target='_black' to='/goverment/dynamiclist'>部队管理办</Link></Menu.Item>
                                <Menu.Item><Link target='_black' to='/train/dynamiclist'>战勤办</Link></Menu.Item>
                                <Menu.Item><Link target='_black' to='/organization/dynamiclist'>组织办</Link></Menu.Item>
                                <Menu.Item><Link target='_black' to='/propagation/dynamiclist'>宣传保卫办</Link></Menu.Item>
                                <Menu.Item><Link target='_black' to='/manpower/dynamiclist'>人力资源办</Link></Menu.Item>
                            </SubMenu>
                            <SubMenu title='强军文化'>
                                <Menu.Item><Link target='_black' to='/movie/list'>强军影视</Link></Menu.Item>
                                <Menu.Item><Link target='_black' to='/video/list'>练兵备战</Link></Menu.Item>
                                <Menu.Item><Link target='_black' to='/vlog/list'>创意视频</Link></Menu.Item>
                            </SubMenu>
                            <SubMenu title='强军天平'>
                                <Menu.Item><Link target='_black' to='/mail/zz'>站长信箱</Link></Menu.Item>
                                <Menu.Item><Link target='_black' to='/mail/zw'>政委信箱</Link></Menu.Item>
                                <Menu.Item><Link target='_black' to='/mail/zr'>主任信箱</Link></Menu.Item>
                                <Menu.Item><Link target='_black' to='/mail/jw'>纪委信箱</Link></Menu.Item>
                            </SubMenu>
                        </Menu>
                        <Divider />
                    </Col>

                </Row>


            </div>
        )
    }

}
