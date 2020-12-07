import React, { Component } from 'react'
import { Card, Carousel, List, Typography } from 'antd'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
const path = require('path');

class Vlog extends Component {
    render() {
        const title = 'vlog'
        return (
            <div>
                <Card hoverable title={<Link to={`/${title}/list`}>创意视频</Link>} className="movie-card">
                    <Carousel effect="fade" autoplay>
                        {this.props.list.slice(0, 2).map((item) => {
                            const url = path.join('/public/video', item.get('url').get(0))
                            console.log(url)
                            return (
                                <div key={item.get('_id')}>
                                    <Link target="_black" to={`/movie_detail/${item.get('_id')}`}>
                                        <video
                                            poster={item.get('thumbnail')}
                                            style={{ height: '233px', width: '100%' }} src={url} alt='video' />
                                    </Link>
                                </div>
                            )
                        })}
                    </Carousel>
                    <List
                        size="small"
                        bordered
                        dataSource={this.props.list}
                        renderItem={item => <List.Item id={item.get('_id')}>
                            <Typography.Text ellipsis="true">
                                <Link target="_black" to={`/movie_detail/${item.get('_id')}`}>{item.get('title')}</Link>
                            </Typography.Text>
                            <span style={{ float: 'right' }}>{item.get('director')}</span>
                        </List.Item>}>
                    </List>
                </Card>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    list: state.get('home').get('vloglist')
})
export default connect(mapStateToProps, null)(Vlog);
