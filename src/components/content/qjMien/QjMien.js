//这是一个强军风采的界面
import { Col, Row } from 'antd'
import React, { Component } from 'react'
import MienText from './PicText'
import QjMienPic from './qjMienPic'

export default class QjMien extends Component {
    render() {
        return (
            <div className='qj-level'>
                <div>
                    <img style={{ marginTop: 20, marginBottom: 20 }} alt='1' src={require('../../../img/qjfc.png')} />
                    <Row>
                        <Col span={16}>
                            <QjMienPic />
                        </Col>
                        <Col span={8}>
                            <MienText />
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
