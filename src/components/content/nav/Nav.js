import React from 'react'
import { Row, Col } from 'antd';
// import "./content.css"
import NavLeft from './NavLeft';
import NavMid from './NavMid';
import NavRight from './NavRight';

const Nav = () => {

    return (
        <div className="nav">
            <Row gutter={16}>
                <Col span={5}><NavLeft /></Col>
                <Col span={14}><NavMid /></Col>
                <Col span={5}><NavRight /></Col>
            </Row>
        </div>
    )
}


export default Nav;