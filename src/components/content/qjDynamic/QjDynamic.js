import React, { Component } from 'react'
import { Row, Col } from 'antd'
// import { Link } from 'react-router-dom'
import Government from './Government';
import Train from './Train';
import '../content.css'
import Organization from './Organization';
import Propagantion from './Propagation';
import ManPower from './ManPower';


class QjDynamic extends Component {

    render() {
        // const title = 'dynamic'
        return (
            <div className='qj-level'>
                <div>
                    <img alt='1' style={{ marginTop: 20, marginBottom: 20 }} src={require('../../../img/qjdt.png')}></img>
                </div>
                <Row style={{ marginTop: "10px", height: "233px" }}>
                    <Col span={5} flex={1}>
                        <Government />
                    </Col>
                    <Col span={5} flex={1}>
                        <Train />
                    </Col>
                    <Col span={5} flex={1}>
                        <Organization />
                    </Col>
                    <Col span={5} flex={1}>
                        <Propagantion />
                    </Col>
                    <Col span={5} flex={1}>
                        <ManPower />
                    </Col>

                </Row>
            </div>
        )
    }
}

export default QjDynamic;