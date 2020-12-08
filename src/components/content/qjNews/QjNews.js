import React, { Component } from 'react';
import { BASE_ALL_DEPARTMENT } from '../../../consant/Consant'
import { Col, Row, Tabs, List, Typography, Carousel } from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { reqNews } from '../../../api/index'
const path = require('path');

const { TabPane } = Tabs;



class QjNews extends Component {
    state = {
        newList: [] //反馈的新闻新闻列表
    }
    //定义取到后台反馈数据的函数
    callback = async (key) => {
        console.log(key)
        let result;
        result = await reqNews(key)
        // console.log(result)
        const { list, err } = result
        if (err === 0) {
            this.setState({ newList: list })
        }

    }
    render() {
        return (
            <div className='qj-level' style={{ minHeight: 200 }}>
                <div style={{ marginTop: 40 }} className="card-container">

                    <img alt='1' src={require('../../../img/qjxw.png')}></img>
                    <Tabs defaultActiveKey="警卫连"
                        type="card"
                        onChange={this.callback}
                        centered={true}
                        animated={{ tabPane: true }}>
                        {//通过map将数组中的数据取出来
                            BASE_ALL_DEPARTMENT.slice(2).map((item) => (
                                <TabPane tab={item} key={item} id={item}>
                                    {
                                        item === '警卫连' ?
                                            <Row>
                                                <Col span={8}>
                                                    <Carousel >
                                                        {
                                                            this.props.list.map((article) => {
                                                                const url = path.join('/public/image/articles', article.get('thumbnail').get(0))

                                                                return (
                                                                    <div key={article.get('_id')}>
                                                                        <Link target="_black" to={`/detail/${article.get('_id')}`}>
                                                                            <img style={{ height: '233px', width: '100%' }} src={url} alt='imag' />
                                                                        </Link>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </Carousel>
                                                </Col>
                                                <Col span={8}>
                                                    <List
                                                        size="small"
                                                        bordered
                                                        dataSource={this.props.list}
                                                        renderItem={item =>
                                                            <List.Item id={item.get('_id')}>
                                                                <Typography.Text ellipsis="true">
                                                                    <Link target="_black" to={`/detail/${item.get('_id')}`}>{item.get('title')}</Link>
                                                                </Typography.Text>
                                                            </List.Item>
                                                        }>
                                                    </List>
                                                </Col>
                                                <Col span={8}>
                                                    <List
                                                        size="small"
                                                        bordered
                                                        dataSource={this.props.list.slice(1)}
                                                        renderItem={item =>
                                                            <List.Item id={item.get('_id')}>
                                                                <Typography.Text ellipsis="true">
                                                                    <Link target="_black" to={`/detail/${item.get('_id')}`}>{item.get('title')}</Link>
                                                                </Typography.Text>
                                                            </List.Item>
                                                        }>
                                                    </List>
                                                </Col>
                                            </Row>
                                            :
                                            <Row>
                                                <Col span={8}>
                                                    <Carousel >
                                                        {
                                                            this.state.newList.slice(0, 2).map((article) => {
                                                                const url = path.join('/public/image/articles', article.thumbnail[0])
                                                                return (
                                                                    <div key={article._id}>
                                                                        <Link target="_black" to={`/detail/${article._id}`}>
                                                                            <img style={{ height: '233px', width: '100%' }} src={url} alt='imag' />
                                                                        </Link>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </Carousel>
                                                </Col>
                                                <Col span={8}>
                                                    <List
                                                        size="small"
                                                        bordered
                                                        dataSource={this.state.newList.slice(0, 8)}
                                                        renderItem={item =>
                                                            <List.Item id={item._id}>
                                                                <Typography.Text ellipsis="true">
                                                                    <Link target="_black" to={`/detail/${item._id}`}>{item.title}</Link>
                                                                </Typography.Text>
                                                            </List.Item>
                                                        }>
                                                    </List>
                                                </Col>
                                                <Col span={8}>
                                                    <List
                                                        size="small"
                                                        bordered
                                                        dataSource={this.state.newList.slice(9, 16)}
                                                        renderItem={item =>
                                                            <List.Item id={item._id}>
                                                                <Typography.Text ellipsis="true">
                                                                    <Link target="_black" to={`/detail/${item._id}`}>{item.title}</Link>
                                                                </Typography.Text>
                                                            </List.Item>
                                                        }>
                                                    </List>
                                                </Col>
                                            </Row>

                                    }

                                </TabPane>))
                        }
                    </Tabs>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    list: state.get('home').get('jwNewslist')
})
export default connect(mapStateToProps, null)(QjNews);