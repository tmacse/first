import React, { Component } from 'react'
import { Card, List, Typography } from 'antd'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

class Mid extends Component {
    render() {
        const title = 'case'
        return (
            <div>
                <Card hoverable title={<Link target="_black" to={`/${title}/list`}><span className='msHeiTi bigger-font'>案例分析</span></Link>}>
                    <List
                        size="small"
                        bordered
                        dataSource={this.props.list}
                        renderItem={item =>
                            <List.Item id={item.get('_id')}>
                                <Typography.Text ellipsis="true" style={{ width: 280 }}>
                                    <div className='status-point' style={{ backgroundColor: '#DE2910' }}> </div>
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
    list: state.get('home').get('casebooklist')
})
export default connect(mapStateToProps, null)(Mid);