import React, { useState } from 'react';
import { BASE_ALL_DEPARTMENT } from '../../../consant/Consant'
import { Col, Row, Tabs, List, Typography, Carousel } from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { reqNews } from '../../../api/index'
// import * as moment from 'moment';
const path = require('path');

const { TabPane } = Tabs;



const QjNews = (props) => {
    const { list } = props
    const [newList, setNewList] = useState([])
    async function tabClick(key) {
        let result;
        result = await reqNews(key)
        const { list, err } = result
        if (err === 0) {
            setNewList(list)
        }
        else {
            console.log('没有取到数据')
        }
    }
    return (
        <div className='qj-level' style={{ minHeight: 200 }}>
            <div style={{ marginTop: 40 }} className="card-container">
                <img alt='1' style={{ marginTop: 10 }} src={require('../../../img/qjxw.png')}></img>
                <Tabs defaultActiveKey="警卫连"
                    type="card"
                    onTabClick={tabClick}
                    centered={true}
                    animated={{ tabPane: true }}>
                    {//通过map将数组中的数据取出来
                        BASE_ALL_DEPARTMENT.slice(2).map((item) => (
                            <TabPane
                                tab={
                                    <span className='msHeiTi' >
                                        {item}
                                    </span>
                                }
                                key={item}
                                id={item}
                            >
                                {
                                    item === '警卫连' ?
                                        <RowTemp list={list} />
                                        :
                                        <RowTemp list={newList} />
                                }

                            </TabPane>))
                    }
                </Tabs>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    list: state.get('home').get('jwNewslist')
})
export default connect(mapStateToProps, null)(QjNews);

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