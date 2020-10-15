import React, { Component } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { Row, Col, Card, Table } from 'antd'
import { actionCreators } from './store';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom'
import './list.css'
const { Column } = Table;

class List extends Component {
    render() {
        const data = this.props.list.list
        const { total, PAGE_SIZE, } = this.props.list
        // console.log(data, data.list.list)
        return (
            <div>
                <Header />
                <div className='list-container'>
                    <Row>
                        <Col span={14} offset={5}>
                            <Card>
                                <Table
                                    size={"middle"}
                                    showHeader={false}
                                    bordered={false}
                                    rowKey='_id'
                                    //分页的配置对象
                                    pagination={{
                                        total,
                                        defaultPageSize: PAGE_SIZE,
                                        showQuickJumper: true,
                                        onChange: this.getNews,//要传递一个参数选择是哪一页
                                    }}
                                    dataSource={data.list} >
                                    <Column title='title' dataIndex="title" key='title' />
                                    <Column title='author' dataIndex="author" key='author' />
                                </Table>
                            </Card>
                        </Col>
                    </Row>

                </div>
                <Footer />
            </div>
        )
    }
    componentDidMount() {
        this.props.getList(this.props.match.params.attr,)
    }

}
//返回过来的状态
const mapStateToProps = (state) => ({
    list: state.get('list')
})
const mapDispatchToProps = (dispatch) => ({
    getList(attr) {
        dispatch(actionCreators.getList(attr))
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(List);

