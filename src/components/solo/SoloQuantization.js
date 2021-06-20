import React, { useState, useEffect } from 'react'
import { Tabs, Table } from 'antd';
import { reqSolo } from '../../api/index.js'
import { connect } from 'react-redux';
import { actionCreators } from './store';

const { TabPane } = Tabs;
const JIDU = ['一季度优秀个人', '二季度优秀个人', '三季度优秀个人', '四季度优秀个人']
//设置了样式
const columns = [
    {
        title: '单位',
        dataIndex: 'department',
        key: 'department',
        render: text => <strong style={{ width: 100, display: 'block' }}>{text}</strong>,
    },
    { title: '优秀个人', dataIndex: 'names', key: 'names' }
]

const SoloQuantization = (props) => {
    const { get_solo } = props
    const { content } = props.list
    const [soloList, setSoloList] = useState([])
    //定义切换取到后台反馈数据的函数
    async function tabClick(key) {
        let result;
        result = await reqSolo(key)
        const { success, content } = result
        if (success) {
            setSoloList(content)
        }
    };

    useEffect(() => {
        get_solo()
    }, [get_solo])

    return (
        <div>
            <Tabs
                type="card"
                centered
                onTabClick={tabClick}
                defaultActiveKey='一季度优秀个人'>
                {
                    JIDU.map((item) => (
                        <TabPane tab={item} key={item}>
                            {
                                item === '一季度优秀个人' ?
                                    <Table
                                        showHeader={false}
                                        pagination={false}
                                        bordered={true}
                                        rowKey={record => record._id}
                                        dataSource={content}
                                        columns={columns}
                                    >
                                    </Table>
                                    :
                                    <Table
                                        pagination={false}
                                        bordered={true}
                                        rowKey={record => record._id}
                                        dataSource={soloList} columns={columns}
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

const mapStateToProps = (state) => ({
    list: state.getIn(['solo', 'data'])
})
const mapDispatch = (dispatch) => ({
    get_solo() {
        const action = actionCreators.get_solo_detail();
        dispatch(action);
    }
});
export default connect(mapStateToProps, mapDispatch)(SoloQuantization);