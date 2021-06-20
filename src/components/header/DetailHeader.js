import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Row, Col, Divider } from 'antd';
const { SubMenu } = Menu;

const DetailHeader = () => {

    const [current, setCurrent] = useState('mail')

    return (
        <>
            <Row>
                <Col span={16} offset={4}>
                    <Link to='/'>
                        <div
                            style={{
                                height: 100,
                                marginTop: 20,
                                background: 'url(/public/image/7.png) no-repeat'
                            }}>
                        </div>
                    </Link>
                </Col>
            </Row>
            <Row className='detail-header'>
                <Col span={24} style={{ backgroundColor: '#3c9ee9' }}>
                    <Col span={16} offset={4}>
                        <Menu style={{ backgroundColor: '#3c9ee9' }} onClick={() => setCurrent(e => e.key)} selectedKeys={current} mode="horizontal">
                            <Menu.Item key={1}>
                                <Link style={{ fontSize: '1.05em' }} target='_black' to='/newsMovie/list'>
                                    <h2 style={{ color: 'white', marginBottom: 7, marginTop: 7 }}>新闻联播</h2>
                                </Link>
                            </Menu.Item>
                            <SubMenu key={2} title={<h2 style={{ color: 'white', marginBottom: 7, marginTop: 7 }}>强军阶梯</h2>}>
                                <Menu.Item key={21}><Link target='_black' to='/curriculum/list'>精品课程</Link></Menu.Item>
                                <Menu.Item key={22}><Link target='_black' to='/case/list'>案例分析</Link></Menu.Item>
                                <Menu.Item key={23}><Link target='_black' to='/symposia/list'>活动概况</Link></Menu.Item>
                            </SubMenu>
                            <SubMenu key={3} title={<h2 style={{ color: 'white', marginBottom: 7, marginTop: 7 }}>强军动态</h2>}>
                                <Menu.Item key={30}><Link target='_black' to='/goverment/dynamiclist'>部队管理办</Link></Menu.Item>
                                <Menu.Item key={31}><Link target='_black' to='/train/dynamiclist'>战勤办</Link></Menu.Item>
                                <Menu.Item key={32}><Link target='_black' to='/organization/dynamiclist'>组织办</Link></Menu.Item>
                                <Menu.Item key={33}><Link target='_black' to='/propagation/dynamiclist'>宣传保卫办</Link></Menu.Item>
                                <Menu.Item key={34}><Link target='_black' to='/manpower/dynamiclist'>人力资源办</Link></Menu.Item>
                            </SubMenu>
                            <SubMenu key={4} title={<h2 style={{ color: 'white', marginBottom: 7, marginTop: 7 }}>强军文化</h2>}>
                                <Menu.Item key={41}><Link target='_black' to='/movie/list'>强军影视</Link></Menu.Item>
                                <Menu.Item key={42}><Link target='_black' to='/video/list'>练兵备战</Link></Menu.Item>
                                <Menu.Item key={43}><Link target='_black' to='/vlog/list'>创意视频</Link></Menu.Item>
                            </SubMenu>
                            <SubMenu key={5} title={<h2 style={{ color: 'white', marginBottom: 7, marginTop: 7 }}>强军天平</h2>}>
                                <Menu.Item key={51}><Link target='_black' to='/mail/zz'>站长信箱</Link></Menu.Item>
                                <Menu.Item key={52}><Link target='_black' to='/mail/zw'>政委信箱</Link></Menu.Item>
                                <Menu.Item key={53}><Link target='_black' to='/mail/zr'>主任信箱</Link></Menu.Item>
                                <Menu.Item key={54}><Link target='_black' to='/mail/jw'>纪委信箱</Link></Menu.Item>
                            </SubMenu>
                            <Menu.Item key={6}>
                                <Link style={{ fontSize: '1.05em' }} target='_black' to='/'>
                                    <h2 style={{ color: 'white', marginBottom: 7, marginTop: 7 }}>强军风采</h2>
                                </Link>
                            </Menu.Item>
                        </Menu>
                    </Col>


                </Col>
                <Divider />
            </Row>


        </>
    )
}


export default DetailHeader