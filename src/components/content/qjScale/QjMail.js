import React, { Component } from 'react'
import { Row, Col } from 'antd'
import { MailOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export default class QjMail extends Component {
    render() {
        return (
            <>
                <Row>
                    <Col className="station-master-mail" span={6}>
                        <Link to='/mail/zz'>
                            <MailOutlined />
                            <span className="mail-text">站长信箱</span>
                        </Link>

                    </Col>
                    <Col className="commissioner-mail" span={6}>
                        <Link to='/mail/zw'>
                            <MailOutlined />
                            <span className="mail-text">政委信箱</span>
                        </Link>
                    </Col>
                    <Col className="officer-mail" span={6}>

                        <Link to='/mail/zr'>
                            <MailOutlined />
                            <span className="mail-text">主任信箱</span>
                        </Link>

                    </Col>
                    <Col className="discipline-mail" span={6}>
                        <Link to='/mail/jw'>
                            <MailOutlined />
                            <span className="mail-text">纪委信箱</span>
                        </Link>

                    </Col>
                </Row>
            </>
        )
    }
}
