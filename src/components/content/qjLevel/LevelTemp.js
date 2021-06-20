import React from 'react'
import { Card, List, Typography } from 'antd'
import { Link } from 'react-router-dom'
import { StarFilled } from '@ant-design/icons';
const LevelTemp = ({ list, title }) => {
    return (
        <div>
            <Card
                hoverable
                title={<Link target="_black" to={`/${title}/list`}>
                    <span className='msHeiTi bigger-font'>精品课程</span>
                </Link>}>
                <List
                    size="small"
                    bordered
                    dataSource={list}
                    renderItem={item => <List.Item id={item.get('_id')}>
                        <Typography.Text ellipsis="true" style={{ width: 280 }}>
                            <StarFilled className='starColor' style={{ marginRight: 10 }} />
                            <Link target="_black" to={`/detail/${item.get('_id')}`}>{item.get('title')}</Link>
                        </Typography.Text>
                    </List.Item>}>
                </List>
            </Card>
        </div>
    )
}
export default LevelTemp