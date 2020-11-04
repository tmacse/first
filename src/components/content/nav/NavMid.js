import React, { Component } from 'react'
import { connect } from 'react-redux';
// import { BASE_VIDEO_ADDRESS } from '../../../consant/Consant'
import "../../../../node_modules/video-react/dist/video-react.css";
import { Player, BigPlayButton } from 'video-react'
const path = require('path');

class NavMid extends Component {
    render() {
        // console.log('新闻', this.props.list)
        // const url = this.props.url
        return (
            <>
                {//从后台取到数据，通过redux传递到前段界面，获得视频地址
                    this.props.list.map((item) => {
                        const url = path.join('/public/video', item.get('url').get(0))
                        console.log('111', url)
                        return (
                            <Player
                                fluid={false}
                                width="800px"
                                playsInline
                                className="video"
                                src={url}
                            >
                                <BigPlayButton position="center" />
                            </Player>
                        )
                    })

                }

            </>
        )
    }
}
const mapStateToProps = (state) => ({
    list: state.get('home').get('videoNewslist'),
})
export default connect(mapStateToProps, null)(NavMid);