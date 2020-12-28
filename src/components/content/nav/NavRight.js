import React, { Component } from 'react'
import { Card, Divider, List, Typography } from 'antd'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { SoundFilled } from '@ant-design/icons'

class NavRight extends Component {

    render() {
        console.log(this.props.leader)
        const title = 'notices'
        return (
            <Card style={{ height: "300px" }}>
                <div style={{ minHeight: 206 }}>
                    <div className="junwang">
                        <Link to={`/${title}/list`}>
                            <span className='msHeiTi' style={{ marginLeft: "10px", color: 'black' }}>通知公告</span>
                        </Link>
                    </div>
                    <Divider />
                    <List
                        style={{ overflow: 'auto', maxHeight: 168 }}
                        size="small"
                        bordered
                        split={false}
                        dataSource={this.props.list}
                        renderItem={item => <List.Item id={item.get('_id')} >
                            <SoundFilled style={{ color: '#DE2910', width: 24 }} />
                            <Typography.Text>

                                <span style={{ fontFamily: '宋体', fontSize: 14 }}>
                                    {item.get('title')}
                                </span>
                                <Link target="_black" to={`/detail/${item.get('_id')}`}>
                                    <span style={{ color: '#0d61a8', fontSize: 14, marginLeft: 2 }}>查看详情{'>>'}</span>
                                </Link>

                            </Typography.Text></List.Item>}>
                    </List>
                </div>
                <Divider style={{ marginTop: 0, marginBottom: 3 }} />
                <div className='navleft-11'>
                    <span className='msHeiTi' style={{ float: 'left', marginLeft: 20 }}>值班领导：</span>
                    <span className='msHeiTi' style={{ float: 'right', marginRight: 20 }}>
                        {this.props.leader.map((item) => {
                            return (
                                <span key={item.get('_id')}>{item.get('leader')}</span>
                            )
                        })}
                    </span>
                </div>
                <div className='navleft-22'>
                    <span className='msHeiTi' style={{ float: 'left', marginLeft: 20 }}>值班参谋：</span>
                    <span className='msHeiTi' style={{ float: 'right', marginRight: 20 }}>
                        {this.props.leader.map((item) => {
                            return (
                                <span key={item.get('_id')}> { item.get('adviser')}</span>
                            )
                        })}
                    </span>
                </div>
            </Card >

        )
    }
}
const mapStateToProps = (state) => ({
    list: state.get('home').get('noticelist'),
    leader: state.get('home').get('leaderName'),
})


export default connect(mapStateToProps, null)(NavRight);