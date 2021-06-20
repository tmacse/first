import React from 'react';
import { Col, Row, List, Typography, Carousel } from 'antd';
import { Link } from 'react-router-dom'

const path = require('path');

const MidTemp = ({ list }) => {
    return (
        <List
            size="small"
            bordered
            dataSource={list}
            renderItem={item =>
                <List.Item id={item.get('_id')} >
                    <Typography.Text style={{ width: 315, marginLeft: 10 }} ellipsis="true">
                        <Link target="_black" to={`/detail/${item.get('_id')}`}>
                            <div className='status-point'> </div>
                            {item.get('title')}</Link>
                    </Typography.Text>
                    <span className='newsTime'>[{item.get('time').slice(5, 7)}-{item.get('time').slice(8, 10)}]</span>
                </List.Item>
            }>
        </List>
    )
}

const RowTemp = ({ list }) => {
    return (
        <Row>
            <Col span={8}>
                <Carousel >
                    {
                        list.slice(0, 1).map((article) => {
                            const url = path.join('/public/image/articles', article.get('thumbnail').get(0))
                            return (
                                <div key={article.get('_id')}>
                                    <Link target="_black" to={`/detail/${article.get('_id')}`}>
                                        <img className='newcarousel' style={{ height: '251px', width: '100%' }} src={url} alt='imag' />
                                        <div className='news-title-bg'>
                                            <div className='news-title'>
                                                {article.get('title')}
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </Carousel>
            </Col>
            <Col span={8}>
                <MidTemp list={list.slice(0, 6)} />
            </Col>
            <Col span={8}>

                <MidTemp list={list.slice(6, 12)} />
            </Col>
        </Row>
    )
}
export default RowTemp