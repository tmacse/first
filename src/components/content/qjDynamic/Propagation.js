import React, { Component } from 'react'
import { Card, List, Typography } from 'antd'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class Propagation extends Component {
    render() {
        const title = 'propagation'
        return (
            <div>
                <Card title={<Link to={`/${title}/dynamiclist`}>宣传保卫办</Link>} hoverable className="my-card">
                    <List
                        size="small"
                        bordered
                        dataSource={this.props.list}
                        renderItem={item => <List.Item id={item.get('_id')}>
                            <Typography.Text ellipsis="true">
                                <Link target="_black" to={`/detail/${item.get('_id')}`}>{item.get('title')}</Link>
                            </Typography.Text></List.Item>}>
                    </List>
                </Card>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    list: state.get('home').get('propagationlist')
})
export default connect(mapStateToProps, null)(Propagation);