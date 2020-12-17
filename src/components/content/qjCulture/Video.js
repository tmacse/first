import React, { Component } from 'react'
import { Card, Carousel, List, Typography } from 'antd'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
const path = require('path');

class Video extends Component {
    render() {
        const title = 'video'
        return (
            <div>
                <Card hoverable className="movie-card" title={<Link to={`/${title}/list`}><span className='msHeiTi bigger-font'>练兵备战</span></Link>}>
                    <Carousel effect="fade" autoplay>
                        {this.props.list.slice(0, 2).map((item) => {
                            const url = path.join('/public/video', item.get('url').get(0))
                            return (
                                <div key={item.get('_id')}>
                                    <Link target="_black" to={`/movie_detail/${item.get('_id')}`}>
                                        <video
                                            className='newcarousel'
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
                                <div className='status-point'> </div>
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
    list: state.get('home').get('videolist')
})
export default connect(mapStateToProps, null)(Video);
