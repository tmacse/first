import React from 'react'
import { Row, Col } from 'antd'
import { MailOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

//可以放在constant下
const MAIL = [
    { classname: 'station-master-mail', link: '/mail/zz', name: '站长' },
    { classname: 'commissioner-mail', link: '/mail/zw', name: '政委' },
    { classname: 'officer-mail', link: '/mail/zr', name: '主任' },
    { classname: 'discipline-mail', link: '/mail/jw', name: '纪委' },
]
const QjMail = () => {
    return (
        <Row>
            {MAIL.map((item) => {
                return (
                    <Col key={item.name} className={item.classname} span={6}>
                        <Link to={item.link}>
                            <MailOutlined />
                            <span className="mail-text">{item.name}信箱</span>
                        </Link>
                    </Col>
                )
            })}
        </Row>
    )
}

export default QjMail