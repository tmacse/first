import React from 'react'
import './footer.css'
import { Row, Col } from 'antd'
import { RightOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';


const FOOTLIKS = [
    { url: '/curriculum/list', name: '强军阶梯' },
    { url: '/dynamic/list', name: '强军动态' },
    { url: '/movie/list', name: '强军文化' },
    { url: '/mail/zw', name: '强军天平' },
]
const Footer = () => {
    return (
        <div className="footer">
            <Row>
                <Col span={6}>
                    <Link to='/'><span className="foot-logo">南充场站强军网</span></Link>
                    <span className="copyright">
                        Copyright ©1999-2020 ,All Rights Reserved
                    </span>
                </Col>
                <Col span={6}>
                    <div>
                        <span className="yellow" />
                        <span style={{ "fontSize": "16px", "fontWeight": "bold" }}>发现更多</span>
                        {
                            FOOTLIKS.map((item) => {
                                return (
                                    <div key={item.url} className='foot-to-top'>
                                        <Link to={item.url}>
                                            <RightOutlined />
                                            <span className="padding-left">{item.name}</span>
                                        </Link>
                                    </div>
                                )
                            })
                        }

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


export default Footer;