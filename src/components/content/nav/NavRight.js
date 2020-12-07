import React, { Component } from 'react'
import { Card, Divider, List, Typography } from 'antd'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class NavRight extends Component {
    render() {
        const title = 'notices'
        return (
            <Card style={{ height: "300px" }}>
                <div className="junwang">
                    <Link to={`/${title}/list`}>
                        <span style={{ marginLeft: "10px", color: 'black' }}>通知公告</span>
                    </Link>
                </div>
                <Divider />
                <List
                    size="small"
                    bordered
                    dataSource={this.props.list}
                    renderItem={item => <List.Item id={item.get('_id')} >
                        <Typography.Text ellipsis="true">
                            <Link target="_black" to={`/detail/${item.get('_id')}`}>{item.get('title')}</Link>
                        </Typography.Text></List.Item>}>
                </List>
                <Divider style={{ marginTop: 7, marginBottom: 7 }} />
                <div className='navleft-11'>
                    <span style={{ float: 'left', marginLeft: 20 }}>值班领导：</span>
                    <span style={{ float: 'right', marginRight: 20 }}><bold>李志强</bold></span>
                </div>
                <div className='navleft-22'>
                    <span style={{ float: 'left', marginLeft: 20 }}>值班参谋：</span>
                    <span style={{ float: 'right', marginRight: 20 }}>孙同山</span>
                </div>
            </Card>

        )
    }
}
const mapStateToProps = (state) => ({
    list: state.get('home').get('noticelist')
})


export default connect(mapStateToProps, null)(NavRight);