import React, { Component } from 'react'
import { Tabs, Table } from 'antd';
import { reqSolo } from '../../api/index.js'
import { connect } from 'react-redux';
import { actionCreators } from './store';

const { TabPane } = Tabs;
const JIDU = ['一季度优秀个人', '二季度优秀个人', '三季度优秀个人', '四季度优秀个人']
//设置了样式
const columns = [
    { title: '单位', dataIndex: 'department', key: 'department' },
    { title: '“四有”优秀个人', dataIndex: 'names', key: 'names' }
]

class SoloQuantization extends Component {
    state = {
        soloList: [],//反馈的人员列表列表
    }
    //定义切换取到后台反馈数据的函数
    tabClick = async (key) => {
        let result;
        console.log(key)
        result = await reqSolo(key)
        const { success, content } = result
        // console.log(success, title, content)
        if (success) {
            this.setState({ soloList: content })
        } else {
            console.log('222')
        }
    }
    render() {
        return (
            <div>
                <Tabs
                    type="card"
                    centered
                    onTabClick={this.tabClick}
                    defaultActiveKey='一季度优秀个人'>
                    {
                        JIDU.map((item) => (
                            <TabPane tab={item} key={item}>
                                {
                                    item === '一季度优秀个人' ?
                                        <Table
                                            pagination={false}
                                            rowKey={record => record._id}
                                            dataSource={this.props.list.toJS()} columns={columns}
                                        >
                                        </Table>
                                        :
                                        <Table
                                            pagination={false}
                                            rowKey={record => record._id}
                                            dataSource={this.state.soloList} columns={columns}
                                        >
                                        </Table>
                                }

                            </TabPane>
                        ))
                    }
                </Tabs>
            </div>
        )
    }
    componentDidMount() {
        this.props.get_solo();
    }
}
const mapStateToProps = (state) => ({
    list: state.getIn(['solo', 'data', 'content'])
})
const mapDispatch = (dispatch) => ({
    get_solo() {
        const action = actionCreators.get_solo_detail();
        dispatch(action);
    }
});
export default connect(mapStateToProps, mapDispatch)(SoloQuantization);