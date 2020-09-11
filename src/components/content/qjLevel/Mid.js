import React, { Component } from 'react'
import { Card, List, Typography } from 'antd'
import { Link } from 'react-router-dom'

const data = [
    'Racing car sprays burning .',
    'Japanese princess to .',
    'Australian walks 100km ',
    'Man charged over missing',
    'Los Angeles battles',
    'Racing car sprays burning .',
];
class Mid extends Component {
    render() {
        return (
            <div>
                <Card title="案例分析" hoverable>
                    <List
                        size="small"
                        bordered
                        dataSource={data}
                        renderItem={item => <List.Item>
                            <Typography.Text ellipsis="true">
                                <Link>
                                    {item}
                                </Link>
                            </Typography.Text></List.Item>}>
                    </List>
                </Card>
            </div>
        )
    }
}
export default Mid;