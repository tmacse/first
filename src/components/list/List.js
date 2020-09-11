import React, { Component } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { Row, Col, Card, Table } from 'antd'
import './list.css'

const { Column } = Table;
const dataSource = [
    { "title": "热烈欢迎党的十九大胜利召开", "author": "李志强", "发布时间": "2020-09-01" },
    { "title": "热烈欢迎党的十九大胜利召开", "author": "李强", "发布时间": "2020-09-01" },
    { "title": "热烈欢迎党的十九大胜利召开", "author": "强", "发布时间": "2020-09-01" },
    { "title": "热烈欢迎党的十九大胜利召开", "author": "李志强", "发布时间": "2020-09-01" },
    { "title": "热烈欢迎党的十九大胜利召开", "author": "李强", "发布时间": "2020-09-01" },
    { "title": "热烈欢迎党的十九大胜利召开", "author": "强", "发布时间": "2020-09-01" },
    { "title": "热烈欢迎党的十九大胜利召开", "author": "李志强", "发布时间": "2020-09-01" },
    { "title": "热烈欢迎党的十九大胜利召开", "author": "李强", "发布时间": "2020-09-01" },
    { "title": "热烈欢迎党的十九大胜利召开", "author": "强", "发布时间": "2020-09-01" },
    { "title": "热烈欢迎党的十九大胜利召开", "author": "李志强", "发布时间": "2020-09-01" },
    { "title": "热烈欢迎党的十九大胜利召开", "author": "李强", "发布时间": "2020-09-01" },
    { "title": "热烈欢迎党的十九大胜利召开", "author": "强", "发布时间": "2020-09-01" },
    { "title": "热烈欢迎党的十九大胜利召开", "author": "李志强", "发布时间": "2020-09-01" },
    { "title": "热烈欢迎党的十九大胜利召开", "author": "李强", "发布时间": "2020-09-01" },
    { "title": "热烈欢迎党的十九大胜利召开", "author": "强", "发布时间": "2020-09-01" }
]

export default class List extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className='list-container'>
                    <Row>
                        <Col span={14} offset={5}>
                            <Card>
                                <Table sticky size="middle" bordered={false} dataSource={dataSource} >
                                    <Column title="标题" dataIndex='title' />
                                    <Column title="作者" dataIndex="author" />
                                    <Column title="发布时间" dataIndex="发布时间" />
                                </Table>
                            </Card>
                        </Col>
                    </Row>
                </div>
                <Footer />
            </div>
        )
    }
}
