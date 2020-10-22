import React, { Component } from 'react'
import { Row, Col } from 'antd'
import { MailOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export default class QjMail extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col className="station-master-mail" span={6}>
                        <MailOutlined />
                        <Link to='/mail/zz'>
                            <span className="mail-text">站长信箱</span>
                        </Link>

                    </Col>
                    <Col className="commissioner-mail" span={6}>
                        <MailOutlined />
                        <span className="mail-text">政委信箱</span>
                    </Col>
                    <Col className="officer-mail" span={6}>
                        <MailOutlined />
                        <span className="mail-text">主任信箱</span>
                    </Col>
                    <Col className="discipline-mail" span={6}>
                        <MailOutlined />
                        <span className="mail-text">纪委信箱</span>
                    </Col>
                </Row>
            </div>
        )
    }
}
