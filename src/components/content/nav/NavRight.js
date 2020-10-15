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
                    <Link to={`/list/${title}`}>
                        <span style={{ marginLeft: "10px" }}>{title}</span>
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

            </Card >

        )
    }
}
const mapStateToProps = (state) => ({
    list: state.get('home').get('noticelist')
})


export default connect(mapStateToProps, null)(NavRight);