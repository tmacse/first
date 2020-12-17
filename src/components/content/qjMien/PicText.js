import { List, Typography } from 'antd';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'


class MienText extends Component {
    render() {
        return (
            <List
                bordered
                dataSource={this.props.list}
                renderItem={item => (
                    <List.Item style={{ paddingLeft: 0, paddingRight: 0 }}>
                        <Link key={item.get('_id')} target="_black" to={`/picshowdetail/${item.get('_id')}`}>
                            <div className='status-point' style={{ backgroundColor: '#DE2910' }}> </div>
                            <Typography.Text
                                style={{ width: 380, }}
                                ellipsis="true">
                                {item.get('title')}
                            </Typography.Text>
                        </Link>
                    </List.Item>
                )}
            />
        )
    }
}
const mapStateToProps = (state) => ({
    list: state.get('home').get('picShow')
})
export default connect(mapStateToProps, null)(MienText);
