import React, { Component } from 'react'
import { Row, Col, Card, List, Typography, Carousel } from 'antd'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
const path = require('path');

class Right extends Component {
    render() {
        const title = 'symposia'
        return (
            <Card hoverable title={<Link target="_black" to={`/${title}/list`}>活动概况</Link>}>
                <Row>
                    <Col span={14}>
                        <Carousel >
                            {
                                this.props.list.map((item) => {
                                    const url = path.join('/public/image/articles', item.get('thumbnail').get(0))
                                    console.log(url)
                                    return (
                                        <div key={item.get('_id')}>
                                            <Link target="_black" to={`/detail/${item.get('_id')}`}>
                                                <img style={{ height: '233px', width: '100%' }} src={url} alt='imag' />
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
                                <Typography.Text ellipsis="true">
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