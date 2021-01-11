import React, { Component } from 'react'
import { Table, Tag, Row, Col, Tabs } from 'antd';
import DetailHeader from '../header/DetailHeader';
import SoloQuantization from './SoloQuantization';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import Column from 'antd/lib/table/Column';

const { TabPane } = Tabs;

//定义随着内容改变tag颜色的函数
const changeTagsColor = (text) => {
    let color = text === '好' ? 'red' : text === '中' ? 'volcano' : 'geekblue';
    return (
        <Tag color={color}>
            <span style={{ fontSize: 14 }}>{text}</span>
        </Tag>
    )
}
class Quantization extends Component {
    render() {
        return (
            <>
                <DetailHeader />
                <Row>
                    <Col span={16} offset={4} >
                        <h1 style={{ textAlign: 'center', marginTop: 10, marginBottom: 10 }}>
                            《争创“四铁”先进单位，争当“四有”优秀个人活动》信息服务平台
                        </h1>
                        <Tabs defaultActiveKey="1" centered>
                            <TabPane tab={<h2>争创“四铁”先进单位</h2>} key="1">
                                <Table
                                    pagination={false}
                                    dataSource={this.props.list.toJS()}
                                    rowKey={record => record._id}
                                >
                                    <Column
                                        title="单位"
                                        dataIndex="name"
                                        render={text => <span style={{ fontSize: 16 }}>{text}</span>}
                                    />
                                    <Column
                                        title="第一季度"
                                        dataIndex="season1"
                                        key='_id'
                                        render={changeTagsColor}
                                    />
                                    <Column
                                        title="第二季度"
                                        dataIndex="season2"
                                        key='_id'
                                        render={changeTagsColor}
                                    />
                                    <Column
                                        title="第三季度"
                                        dataIndex="season3"
                                        key='_id'
                                        render={changeTagsColor}
                                    />
                                    <Column
                                        title="第四季度(年终总评)"
                                        dataIndex="season4"
                                        key='_id'
                                        render={changeTagsColor}
                                    />
                                </Table>
                            </TabPane>
                            <TabPane tab={<h2>争当“四有”优秀个人</h2>} key="2">
                                <SoloQuantization />
                            </TabPane>
                        </Tabs>
                    </Col>
                </Row>
            </>
        )
    }
    componentDidMount() {
        this.props.get_quantization();
    }
}
const mapStateToProps = (state) => ({
    list: state.get('quantization').get('data')
})
const mapDispatch = (dispatch) => ({
    get_quantization() {
        const action = actionCreators.get_quantization_detail();
        dispatch(action);
    }
});
export default connect(mapStateToProps, mapDispatch)(Quantization);