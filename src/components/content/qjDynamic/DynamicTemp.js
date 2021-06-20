import React from 'react'
import { Card, List, Typography } from 'antd'
import { Link } from 'react-router-dom'
import './dynamic.css'
const DynamicTemp = ({ title, list }) => {
    return (
        <div>
            <Card hoverable title={<Link to={`/${title}/dynamiclist`}><span className='msHeiTi bigger-font'>部队管理办</span></Link>} className="my-card">
                <List
                    size="small"
                    bordered
                    dataSource={list}
                    renderItem={item => <List.Item id={item.get('_id')}>
                        <Typography.Text ellipsis="true" className='my-text'>
                            <div className='status-point' style={{ backgroundColor: '#DE2910' }}> </div>
                            <Link target="_black" to={`/detail/${item.get('_id')}`}>
                                <span style={{ fontSize: 14 }}>{item.get('title')}</span>
                            </Link>
                        </Typography.Text></List.Item>}>
                </List>
            </Card>
        </div>
    )
}
export default DynamicTemp