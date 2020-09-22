import React, { Component } from 'react'
import { Card, Divider, List, Typography } from 'antd'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'



class NavRight extends Component {



    render() {
        return (

            <Card style={{ height: "300px" }}>
                <div className="junwang">
                    <Link to='/list'>
                        <span style={{ marginLeft: "10px" }}>通知、公告栏</span>
                    </Link>
                </div>
                <Divider />
                <List
                    size="small"
                    bordered
                    dataSource={this.props.list}
                    renderItem={item => <List.Item>
                        <Typography.Text ellipsis="true">
                            <Link to='/detail'>{item.get('title')}</Link>
                        </Typography.Text></List.Item>}>
                </List>
            </Card>

        )
    }
}
const mapStateToProps = (state) => ({
    list: state.get('home').get('noticelist')
})

export default connect(mapStateToProps, null)(NavRight);