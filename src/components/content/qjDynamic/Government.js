import React, { Component } from 'react'
import { Card, List, Typography } from 'antd'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class Government extends Component {
    render() {
        const title = 'goverment'
        return (
            <div>
                <Card hoverable title={<Link to={`/${title}/dynamiclist`}><span className='msHeiTi bigger-font'>部队管理办</span></Link>} className="my-card">
                    <List
                        size="small"
                        bordered
                        dataSource={this.props.list}
                        renderItem={item => <List.Item id={item.get('_id')}>
                            <Typography.Text ellipsis="true">
                                <div className='status-point' style={{ backgroundColor: '#DE2910' }}> </div>
                                <Link target="_black" to={`/detail/${item.get('_id')}`}>
                                    <span style={{ fontSize: 14 }}>{item.get('title')}</span>
                                </Link>
                            </Typography.Text></List.Item>}>
                    </List>
                </Card>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    list: state.get('home').get('governmentlist')
})
export default connect(mapStateToProps, null)(Government);
