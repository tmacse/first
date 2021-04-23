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
                    <Col flex='240px'>
                        <Government />
                    </Col>
                    <Col flex='240px'>
                        <Train />
                    </Col>
                    <Col flex='240px'>
                        <Organization />
                    </Col>
                    <Col flex='240px'>
                        <Propagantion />
                    </Col>
                    <Col flex='auto'>
                        <ManPower />
                    </Col>

                </Row>
            </div>
        )
    }
}

export default QjDynamic;