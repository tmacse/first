import React, { useState, useEffect } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import DocumentTitle from 'react-document-title'
import { NAV_LIST, BASE_VIDEO_ADDRESS } from '../../consant/Consant'
import { Row, Col, Table, Card, Pagination } from 'antd'
// import { lazy, Suspense } from 'react'
import { actionCreators } from './store';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import './list.css'
import LeftNav from '../leftNav/LeftNav';
const { Column } = Table;

const List = (props) => {

    const attr = props.match.params.attr
    const { getList } = props
    const [current, setCurrent] = useState(1)
    //通过配置OnChange实现了切换页数，随时更新页面内容的效果
    function onChange(page) {
        setCurrent(page)
        getList(attr, page)
    };

    useEffect(() => {
        getList(attr, current)
    }, [getList, attr, current]);




    const MovieList = ['movie', 'video', 'vlog', 'newsMovie']
    const data = props.list.list//获取渲染的list

    //根据currentAttr来获取title显示的值
    let result;
    let i;
    for (i = 0; i <= NAV_LIST.length; i++) {
        if (NAV_LIST[i].name === attr) {
            result = NAV_LIST[i].Cname
            break;
        }
    }

    const { total } = props.list.list //从后台反馈回来的数据中提取出total
    return (
        <DocumentTitle title={`${result}的列表`} >
            <div>
                <Header />
                <div className='list-container'>
                    <Row>
                        <Col span={7} >
                            <LeftNav attr={attr} updateList={props.getList} />
                        </Col>
                        <Col style={{ marginTop: 20 }} span={17}>
                            {
                                MovieList.indexOf(attr) === -1 ?
                                    <Table
                                        size={"middle"}
                                        showHeader={false}
                                        bordered={false}
                                        rowKey='_id'
                                        //分页的配置对象
                                        pagination={{
                                            total,
                                            defaultPageSize: 10,
                                            showQuickJumper: true,
                                            defaultCurrent: current,
                                            onChange: onChange,//要传递一个参数选择是哪一页
                                        }}
                                        dataSource={data.list} >
                                        <Column
                                            filtered={true}
                                            key="action"
                                            render={(item) => (
                                                <Link target='_black' to={`/detail/${item._id}`}> <span className='newslist-a B'>{item.title}</span> </Link>
                                            )}
                                        />
                                        <Column title='时间'
                                            render={(item) => (<span style={{ float: "right" }}>{item.time}</span>)}
                                        />
                                    </Table>
                                    : <>
                                        <Card title={`${result}的列表`}>
                                            {data.list !== undefined ?
                                                data.list.map((item) => {
                                                    const url = BASE_VIDEO_ADDRESS + item.url

                                                    return (
                                                        <>
                                                            <Link target='_black' to={`/movie_detail/${item._id}`}>
                                                                <Card
                                                                    hoverable
                                                                    style={{ width: 150, float: "left", marginLeft: '10px' }}
                                                                    cover={<video className='videoPic' alt="example" poster={item.thumbnail} src={url} />}
                                                                >
                                                                    <Card.Meta style={{ textAlign: 'center', width: '100%' }} title={item.title} description={item.director} />
                                                                </Card>
                                                            </Link>

                                                        </>)
                                                })
                                                : ''
                                            }

                                        </Card>
                                        <Pagination onChange={onChange} defaultCurrent={1} total={total} style={{ right: 0, bottom: 20, position: 'absolute' }} />
                                    </>
                            }
                        </Col>
                    </Row>
                </div>
                <Footer />
            </div>
        </DocumentTitle>
    )
}


//返回过来的状态
const mapStateToProps = (state) => ({
    list: state.get('list')
})
const mapDispatchToProps = (dispatch) => ({
    getList(attr, page) {
        dispatch(actionCreators.getList(attr, page))
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(List);

