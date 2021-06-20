import React from 'react'
import { Row, Col } from 'antd'
import Government from './Government';
import Train from './Train';
import Organization from './Organization';
import Propagantion from './Propagation';
import ManPower from './ManPower';
import '../content.css'


const QjDynamic = () => {


    return (
        <div className='qj-level'>
            <div>
                <img alt='1' style={{ marginTop: 20, marginBottom: 20 }} src={require('../../../img/qjdt.png')}></img>
            </div>
            <Row style={{ marginTop: "10px", height: "233px", display: 'flex' }}>
                <Col style={{ flex: 1 }}>
                    <Government />
                </Col>
                <Col style={{ flex: 1 }}>
                    <Train />
                </Col>
                <Col style={{ flex: 1 }}>
                    <Organization />
                </Col>
                <Col style={{ flex: 1 }}>
                    <Propagantion />
                </Col>
                <Col style={{ flex: 1 }}>
                    <ManPower />
                </Col>

            </Row>
        </div>
    )
}


export default QjDynamic;