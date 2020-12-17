import React, { Component } from 'react'
import { Row, Col, Card, List, Typography, Carousel } from 'antd'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
const path = require('path');

class Right extends Component {
    render() {
        const title = 'symposia'
        return (
            <Card hoverable title={<Link target="_black" to={`/${title}/list`}><span className='msHeiTi bigger-font'>新闻动态</span></Link>}>
                <Row>
                    <Col span={14}>
                        <Carousel >
                            {
                                this.props.list.slice(0, 1).map((item) => {
                                    const url = path.join('/public/image/articles', item.get('thumbnail').get(0))
                                    console.log(url)
                                    return (
                                        <div key={item.get('_id')}>
                                            <Link target="_black" to={`/detail/${item.get('_id')}`}>
                                                <img className='newcarousel' style={{ height: '251px', width: '100%' }} src={url} alt='imag' />
                                                <div className='news-title-bg'>
                                                    <div className='news-title'>
                                                        {item.get('title')}
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                })
                            }
                        </Carousel>
                    </Col>
                    <Col span={10}>
                        <List
                            size="small"
                            bordered
                            dataSource={this.props.list}
                            renderItem={item => <List.Item id={item.get('_id')}>
                                <Typography.Text style={{ marginLeft: 10, width: 240 }} ellipsis="true">

                                    <Link target="_black" to={`/detail/${item.get('_id')}`}>{item.get('title')}</Link>
                                </Typography.Text></List.Item>}>
                        </List>
                    </Col>
                </Row>

            </Card>
        )
    }
}
const mapStateToProps = (state) => ({
    list: state.get('home').get('summarylist')
})
export default connect(mapStateToProps, null)(Right);