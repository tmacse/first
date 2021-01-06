import React, { Component } from 'react'
import { Tabs } from 'antd';

const { TabPane } = Tabs;

export default class SoloQuantization extends Component {
    render() {
        return (
            <div>
                <Tabs centered defaultActiveKey='11'>
                    <TabPane tab={<h3>一季度优秀个人</h3>} key='11'>1</TabPane>
                    <TabPane tab={<h3>二季度优秀个人</h3>} key='22'>2</TabPane>
                    <TabPane tab={<h3>三季度优秀个人</h3>} key='33'>3</TabPane>
                    <TabPane tab={<h3>四季度优秀个人</h3>} key='44'>4</TabPane>
                </Tabs>
            </div>
        )
    }
}
