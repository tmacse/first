import React from 'react'
import { Row, Col } from 'antd'
import Movie from './Movie'
import Video from './Video'
import Vlog from './Vlog'


const QjCulture = () => {

    return (
        <div className='qj-level' >
            <div><img alt='1' src={require('../../../img/qjwh.png')}></img></div>
            <Row style={{ marginTop: "10px" }}>
                <Col span={8}>
                    <Movie />
                </Col>
                <Col span={8}>
                    <Video />
                </Col>
                <Col span={8}>
                    <Vlog />
                </Col>

            </Row>
        </div>
    )
}

export default QjCulture;