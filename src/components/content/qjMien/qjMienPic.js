import { Col, Row } from 'antd'
import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import './index.css'
const path = require('path');

const QjMienPic = ({ list }) => {
    return (
        <div>
            <Row>
                <Col span={15}>
                    {list.slice(0, 1).map(
                        (item) => {
                            return (
                                <PicTemp
                                    key={item}
                                    item={item}
                                    style={{ width: 490, height: 318 }}
                                />
                            )
                        }
                    )
                    }
                </Col>
                <Col span={9}>
                    {list.slice(1, 3).map(
                        (item) => {
                            return (
                                <PicTemp
                                    key={item}
                                    item={item}
                                    style={{ width: 278, height: 154, marginBottom: 10 }}
                                />
                            )
                        }
                    )}
                </Col>
            </Row>
        </div>
    )
}

const mapStateToProps = (state) => ({
    list: state.get('home').get('picShow')
})
export default connect(mapStateToProps, null)(QjMienPic);

const PicTemp = ({ item, style }) => {
    const url = path.join('/public/image/picshow/', item.get('pics').get(0))
    return (
        <Link key={url} target="_black" to={`/picshowdetail/${item.get('_id')}`}>
            <img
                className='newcarousel'
                style={style}
                alt='1' src={url}>
            </img>
        </Link>

    )
}