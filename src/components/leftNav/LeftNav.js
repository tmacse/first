import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const list = [
    { name: 'index', Cname: '首页' }, { name: 'notices', Cname: '通知公告' },
    { name: 'curriculum', Cname: '精品课程' }, { name: 'case', Cname: '案例分析' },
    { name: 'symposia', Cname: '活动概况' }, { name: 'dynamic', Cname: '强军动态' },
    { name: 'movie', Cname: '强军影视' }, { name: 'video', Cname: '练兵备战' }, { name: 'vlog', Cname: '创意视频' },
]
class LeftNav extends Component {
    render() {
        const head = this.props.attr//从父组件获得属性（attr）值，来判断在哪一个栏目（列表页）界面
        //栏目的名称（首页，通知公告；精品课程；案例分析；活动概况；强军动态；强军影视；练兵备战；创意视频）
        return (
            <ul className="detail-left-ul">
                {list.map((item) => (
                    <li key={item.name} className={item.name === head ? 'awalys' : 'detail-left-li'}>
                        {item.name === 'index' ?
                            <Link to='/'>{item.Cname}</Link> :
                            <Link to={`/list/${item.name}`}>{item.Cname}</Link>}
                    </li>
                ))}
            </ul>
        )
    }
}
export default LeftNav;