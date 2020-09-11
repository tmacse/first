import React, { Component } from 'react'
import { Row, Col } from 'antd'
import Movie from './Movie'
import Video from './Video'
import Vlog from './Vlog'

class QjCulture extends Component {
    render() {
        return (
            <div className='qj-level'>
                <div className='tangle hoverable'>
                    {/* <img  /> */}
                    <span>强军文化</span>
                </div>
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
}
export default QjCulture;