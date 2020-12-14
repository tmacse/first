import React, { Component } from 'react'
import { Card, List, Typography } from 'antd'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { StarFilled } from '@ant-design/icons';

class Left extends Component {

    render() {
        const title = 'curriculum'
        return (
            <div>
                <Card hoverable title={<Link target="_black" to={`/${title}/list`}><span className='msHeiTi bigger-font'>精品课程</span></Link>}>
                    <List
                        size="small"
                        bordered
                        dataSource={this.props.list}
                        renderItem={item => <List.Item id={item.get('_id')}>
                            <Typography.Text ellipsis="true" style={{ width: 280 }}>
                                <StarFilled className='starColor' style={{ marginRight: 10 }} />
                                <Link target="_black" to={`/detail/${item.get('_id')}`}>{item.get('title')}</Link>
                            </Typography.Text>
                        </List.Item>}>
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