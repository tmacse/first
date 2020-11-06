import React, { Component } from 'react'
import { Row, Col } from 'antd'
import Left from './Left';
import Mid from './Mid';
import Right from './Right';
import { Link } from 'react-router-dom';

class QjLevel extends Component {

    render() {
        return (
            <div className='qj-level'>

                <Link to='/list/curriculum'>
                    <div className='tangle hoverable'>
                        {/* <img  /> */}
                        <span>强军阶梯</span>
                    </div></Link>
                <Row style={{ marginTop: "10px", height: "233px" }}>
                    <Col span={6}  >
                        <Left />
                    </Col>
                    <Col span={6}>
                        <Mid />
                    </Col>
                    <Col span={12}>
                        <Right />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default QjLevel;