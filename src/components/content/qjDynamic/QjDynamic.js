import React, { Component } from 'react'
import { Row, Col } from 'antd'
import Government from './Government';
import Train from './Train';
import '../content.css'
import Organization from './Organization';
import Propagantion from './Propagation';
import ManPower from './ManPower';


class QjDynamic extends Component {

    render() {
        return (
            <div className='qj-level'>
                <div className='tangle hoverable'>
                    {/* <img  /> */}
                    <span>强军动态</span>
                </div>
                <Row style={{ marginTop: "10px", height: "233px" }}>
                    <Col flex={1}>
                        <Government />
                    </Col>
                    <Col flex={1}>
                        <Train />
                    </Col>
                    <Col flex={1}>
                        <Organization />
                    </Col>
                    <Col flex={1}>
                        <Propagantion />
                    </Col>
                    <Col flex={1}>
                        <ManPower />
                    </Col>

                </Row>
            </div>
        )
    }
}

export default QjDynamic;