import React, { Component } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { Row, Col, Table } from 'antd'
import { actionCreators } from './store';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import './list.css'
import LeftNav from '../leftNav/LeftNav';
const { Column } = Table;

class List extends Component {

    render() {
        const data = this.props.list.list
        const { total, PAGE_SIZE } = this.props.list
        console.log(this.props.match.params.attr)
        return (
            <div>
                <Header />
                <div className='list-container'>
                    <Row>
                        <Col span={7} >
                            <LeftNav attr={this.props.match.params.attr} />
                        </Col>
                        <Col style={{ marginTop: 20 }} span={17}>
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
                                    defaultCurrent: 1,
                                    // onChange: this.props.getList(PAGE_NUM),//要传递一个参数选择是哪一页
                                }}
                                dataSource={data.list} >
                                <Column
                                    filtered={true}
                                    key="action"
                                    render={(item) => (
                                        <Link to={`/detail/${item._id}`}>
                                            <span className='newslist-a'></span>
                                            {item.title}
                                        </Link>)}
                                />
                                <Column title='时间'
                                    render={(item) => (<span style={{ float: "right" }}>{item.time}</span>)}
                                />
                            </Table>
                        </Col>
                    </Row>

                </div>
                <Footer />
            </div>
        )
    }
    componentDidMount() {
        this.props.getList(this.props.match.params.attr)
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

