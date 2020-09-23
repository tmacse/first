import React, { Component } from 'react'
import { Card, List, Typography } from 'antd'
import { Link } from 'react-router-dom'

const data = [
    'Racing car sprays burning .',
    'Japanese princess to .',
    'Australian walks 100km ',
    'Man charged over missing',
    'Los Angeles battles',
    'Man charged over missing',
];

class ManPower extends Component {
    render() {
        return (
            <div>
                <Card hoverable title="人力资源办" className="my-card">
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
                </Card>
            </div>
        )
    }
}
export default ManPower;