import React, { Component } from 'react'
import { Row, Col, Card, List, Typography, Carousel } from 'antd'
import { Link } from 'react-router-dom'
const data = [
    'Racing car sprays burning .',
    'Japanese princess to .',
    'Australian walks 100km ',
    'Man charged over missing',
    'Los Angeles battles',
    'Japanese princess to .',
];
const contentStyle = {
    height: '233px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
class Right extends Component {
    render() {
        return (
            <Card title="活动概况" hoverable>
                <Row>
                    <Col span={14}>
                        <Carousel >
                            <div>
                                <h3 style={contentStyle}>1</h3>
                            </div>
                            <div>
                                <h3 style={contentStyle}>2</h3>
                            </div>
                            <div>
                                <h3 style={contentStyle}>3</h3>
                            </div>
                            <div>
                                <h3 style={contentStyle}>4</h3>
                            </div>
                        </Carousel>
                    </Col>
                    <Col span={10}>
                        <List
                            size="small"
                            bordered
                            dataSource={data}
                            renderItem={item => <List.Item>
                                <Typography.Text ellipsis="true">
                                    <Link to='#'>
                                        {item}
                                    </Link>
                                </Typography.Text></List.Item>}>
                        </List>
                    </Col>
                </Row>

            </Card>
        )
    }
}
export default Right;