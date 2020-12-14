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

                <Link to='/curriculum/list'>
                    <img style={{ marginTop: 20, marginBottom: 20 }} alt='1' src={require('../../../img/qjjt.png')}></img>
                </Link>
                <Row style={{ marginTop: "10px" }}>
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