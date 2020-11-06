import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { NAV_LIST, NAV_DEPARTMENT_LIST, DEPARTMENGT } from '../../consant/Consant'

class LeftNav extends Component {

    render() {
        const head = this.props.attr//从父组件获得属性（attr）值，来判断在哪一个栏目（列表页）界面
        //栏目的名称（首页，通知公告；精品课程；案例分析；活动概况；强军动态；强军影视；练兵备战；创意视频）
        // console.log(this.props.updateList)
        return (
            DEPARTMENGT.indexOf(head) !== -1 ?
                <ul className="detail-left-ul">
                    {NAV_DEPARTMENT_LIST.map((item) => (
                        <li key={item.name} className={item.name === head ? 'awalys' : 'detail-left-li'}>
                            {item.name === 'index' ?
                                <NavLink to='/'>{item.Cname}</NavLink> :
                                <NavLink to={`/dynamiclist/${item.name}`}>{item.Cname}</NavLink>}
                        </li>
                    ))}
                </ul>
                :
                <ul className="detail-left-ul">
                    {NAV_LIST.map((item) => (
                        <li key={item.name} className={item.name === head ? 'awalys' : 'detail-left-li'}>
                            {item.name === 'index' ?
                                <NavLink to='/'>{item.Cname}</NavLink> :
                                <NavLink to={`/list/${item.name}`}>{item.Cname}</NavLink>}
                        </li>
                    ))}
                </ul>
        )
    }
}
export default withRouter(LeftNav);