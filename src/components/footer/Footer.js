import React, { Component } from 'react'
import './footer.css'
import { Row, Col } from 'antd'
import { RightOutlined, PhoneOutlined, MailOutlined, EnvironmentOutlined } from '@ant-design/icons';


class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <Row>
                    <Col span={6}>
                        <span className="foot-logo">南充场站强军网</span>
                        <span className="copyright">Copyright ©1999-2020 ,All Rights Reserved</span>
                    </Col>
                    <Col span={6}>
                        <div>
                            <span className="yellow" />
                            <span style={{ "fontSize": "16px", "fontWeight": "bold" }}>发现更多</span>
                            <div className='foot-to-top'>
                                <RightOutlined />
                                <span className="padding-left">强军阶梯</span>
                            </div>
                            <div className='foot-to-top'>
                                <RightOutlined />
                                <span className="padding-left">强军动态</span>
                            </div>
                            <div className='foot-to-top'>
                                <RightOutlined />
                                <span className="padding-left">强军文化</span>
                            </div>
                            <div className='foot-to-top'>
                                <RightOutlined />
                                <span className="padding-left">强军天平</span>
                            </div>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div>
                            <span className="yellow" />
                            <span style={{ "fontSize": "16px", "fontWeight": "bold" }}>联系我们</span>
                            <div className='foot-to-top-center'>
                                <PhoneOutlined />
                                <span className="padding-left">0817-368730</span>
                            </div>
                            <div className='foot-to-top-center'>
                                <MailOutlined />
                                <span className="padding-left">强军动态</span>
                            </div>
                            <div className='foot-to-top-center'>
                                <EnvironmentOutlined />
                                <span className="padding-left">四川省南充市高坪区</span>
                            </div>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div>
                            <span className="yellow" />
                            <span style={{ "fontSize": "16px", "fontWeight": "bold" }}>关注我们</span>
                            <img alt='1' className="QRcode" src={require('../../img/QRcode.png')} />
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Footer;