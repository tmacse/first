import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Dropdown } from 'antd';

const menu = (
    <Menu>
        <Menu.Item style={{ textAlign: 'center' }}><Link to='/department/zuzhi'>组织科</Link></Menu.Item>
        <Menu.Item style={{ textAlign: 'center' }}><Link to='/department/renli'>人力资源科</Link></Menu.Item>
        <Menu.Item style={{ textAlign: 'center' }}><Link to='/department/xuanchuan'>宣传科</Link></Menu.Item>
        <Menu.Item style={{ textAlign: 'center' }}><Link to='/department/jijian'>纪检监察科</Link></Menu.Item>
        <Menu.Item style={{ textAlign: 'center' }}><Link to='/department/baowei'>保卫科</Link></Menu.Item>
    </Menu>);

class LeftNav extends Component {
    render() {
        const head = this.props.attr
        console.log(head)
        const list = ['index', 'notices', 'curriculum', 'case', 'symposia', 'dynamic', 'movie', 'video', 'vlog']
        return (
            <ul className="detail-left-ul">
                {list.map((item) => (
                    <li className={item === head ? 'awalys' : 'detail-left-li'}>{item}</li>
                ))}
                {/* <li className='detail-left-li'><Link to='/'>场站首页</Link></li>
                <li className='detail-left-li'><Link to='/list/notices'>通知公告</Link></li>
                <li className='detail-left-li'><Link to='/list'>精品课程</Link></li>
                <li className='detail-left-li'><Link to='/list'>案例分析</Link></li>
                <li className='detail-left-li'><Link to='/list'>活动概况</Link></li>
                <li className='detail-left-li'><Link to='/list'>强军动态</Link></li>
                <li className='detail-left-li'><Link to='/list'>强军文化</Link></li>
                <li className='detail-left-li'><Link to='/list'>强军天平</Link></li>
                <li className='awalys'><Link style={{ color: '#FFFFFF' }} to='/bookfilelist'>政工教案</Link></li>
                <li className='detail-left-li'>
                    <Dropdown overlay={menu}>
                        <Link to='/department'>科室动态</Link>
                    </Dropdown>
                </li> */}

            </ul>
        )
    }
}
export default LeftNav;