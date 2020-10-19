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
    state = {
        current: 1,
    };
    //通过配置OnChange实现了切换页数，随时更新页面内容的效果
    onChange = page => {
        this.setState({ current: page, });
        this.props.getList(this.props.match.params.attr, page)
    };
    componentDidMount() {
        this.props.getList(this.props.match.params.attr, this.state.current)
        console.log(this.props)
    }

    render() {
        const data = this.props.list.list
        const { total } = this.props.list.list
        return (
            <div>
                <Header />
                <div className='list-container'>
                    <Row>
                        <Col span={7} >
                            <LeftNav attr={this.props.match.params.attr} updateList={this.props.getList} />
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
                                    defaultPageSize: 10,
                                    showQuickJumper: true,
                                    defaultCurrent: this.state.current,
                                    onChange: this.onChange,//要传递一个参数选择是哪一页
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
    //通过此生命周期，拿到了更新后的attr值(实现了点击左边LeftNav的值实现了切换的效果)
    componentWillReceiveProps(nextProps) {
        if (nextProps.location.pathname !== this.props.location.pathname) {
            this.props.getList(nextProps.match.params.attr, 1)
        }

    }
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

