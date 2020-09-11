import React, { Component } from 'react'
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
                                新闻联播
                            </Menu.Item>
                            <SubMenu title='强军阶梯'>
                                <Menu.Item>政工专栏</Menu.Item>
                                <Menu.Item>案列分析</Menu.Item>
                                <Menu.Item>活动概况</Menu.Item>
                            </SubMenu>
                            <SubMenu title='强军动态'>
                                <Menu.Item>部队管理办</Menu.Item>
                                <Menu.Item>战勤办</Menu.Item>
                                <Menu.Item>组织办</Menu.Item>
                                <Menu.Item>宣传保卫办</Menu.Item>
                                <Menu.Item>人力资源办</Menu.Item>
                            </SubMenu>
                            <SubMenu title='强军文化'>
                                <Menu.Item>强军影视</Menu.Item>
                                <Menu.Item>练兵备战</Menu.Item>
                                <Menu.Item>创意视频</Menu.Item>
                            </SubMenu>
                            <SubMenu title='强军天平'>
                                <Menu.Item>站长信箱</Menu.Item>
                                <Menu.Item>政委信箱</Menu.Item>
                                <Menu.Item>主任信箱</Menu.Item>
                                <Menu.Item>纪委信箱</Menu.Item>
                            </SubMenu>
                        </Menu>
                        <Divider />
                    </Col>

                </Row>


            </div>
        )
    }

}
