import React, { Component } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import DocumentTitle from 'react-document-title'
import { NAV_LIST, BASE_VIDEO_ADDRESS } from '../../consant/Consant'
import { Row, Col, Table, Card } from 'antd'
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
    }

    render() {
        const MovieList = ['movie', 'video', 'vlog', 'newsMovie']
        const data = this.props.list.list//获取渲染的list
        const currentAttr = this.props.match.params.attr;//获取当前的attr来判断进入不同的detail界面
        //根据currentAttr来获取title显示的值
        let result;
        let i;
        for (i = 0; i <= NAV_LIST.length; i++) {
            if (NAV_LIST[i].name === currentAttr) {
                result = NAV_LIST[i].Cname
                break;
            }
        }

        const { total } = this.props.list.list //从后台反馈回来的数据中提取出total
        return (
            <DocumentTitle title={`${result}的列表`} >
                <div>
                    <Header />
                    <div className='list-container'>
                        <Row>
                            <Col span={7} >
                                <LeftNav attr={this.props.match.params.attr} updateList={this.props.getList} />
                            </Col>
                            <Col style={{ marginTop: 20 }} span={17}>
                                {
                                    MovieList.indexOf(currentAttr) === -1 ?
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
                                                    <Link target='_black' to={`/detail/${item._id}`}> <span className='newslist-a'></span> {item.title}</Link>
                                                )}
                                            />
                                            <Column title='时间'
                                                render={(item) => (<span style={{ float: "right" }}>{item.time}</span>)}
                                            />
                                        </Table>
                                        : <Card title={`${result}的列表`}>
                                            {data.list !== undefined ?
                                                data.list.map((item) => {
                                                    const url = BASE_VIDEO_ADDRESS + item.url
                                                    return (
                                                        <>
                                                            <Link target='_black' to={`/movie_detail/${item._id}`}>
                                                                <Card
                                                                    hoverable
                                                                    style={{ width: 160, float: "left" }}
                                                                    cover={<video className='videoPic' alt="example" src={url} />}
                                                                >
                                                                    <Card.Meta title={item.title} description={item.desc} />
                                                                </Card>
                                                            </Link>
                                                        </>)
                                                })
                                                : ''
                                            }
                                        </Card>
                                }
                            </Col>
                        </Row>
                    </div>
                    <Footer />
                </div>
            </DocumentTitle>
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

