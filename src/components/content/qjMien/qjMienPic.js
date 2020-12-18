import { Col, Row } from 'antd'
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import './index.css'
const path = require('path');

class QjMienPic extends Component {

    render() {
        return (
            <div>
                <Row>
                    <Col span={15}>
                        {this.props.list.slice(0, 1).map(
                            (item) => {
                                const url = path.join('/public/image/picshow/', item.get('pics').get(0))
                                return (
                                    <Link key={url} target="_black" to={`/picshowdetail/${item.get('_id')}`}>
                                        <img
                                            className='newcarousel'
                                            style={{ width: 490, height: 318 }}
                                            alt='1' src={url}>
                                        </img>
                                    </Link>

                                )
                            }
                        )
                        }
                    </Col>
                    <Col span={9}>
                        {this.props.list.slice(1, 3).map(
                            (item) => {
                                const url = path.join('/public/image/picshow/', item.get('pics').get(0))
                                return (
                                    <Link key={url} target="_black" to={`/picshowdetail/${item.get('_id')}`}>
                                        <img
                                            className='newcarousel'
                                            style={{ width: 278, height: 154, marginBottom: 10 }}
                                            alt='1' src={url}>
                                        </img>
                                    </Link>
                                )
                            }
                        )}
                    </Col>
                </Row>

            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    list: state.get('home').get('picShow')
})
export default connect(mapStateToProps, null)(QjMienPic);
