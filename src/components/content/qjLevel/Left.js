import React, { Component } from 'react'
import { Card, List, Typography } from 'antd'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class Left extends Component {

    render() {
        const title = 'curriculum'
        return (
            <div>
                <Card hoverable title={<Link target="_black" to={`/list/${title}`}>精品课程</Link>}>
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
    list: state.get('home').get('curriculumlist')
})
export default connect(mapStateToProps, null)(Left);