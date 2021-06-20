import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { BASE_VIDEO_ADDRESS } from '../../../consant/Consant'
import "../../../../node_modules/video-react/dist/video-react.css";
import { Player, BigPlayButton } from 'video-react'
import { MenuUnfoldOutlined } from '@ant-design/icons';


const NavMid = (props) => {

    const { list } = props
    return (
        <>
            <Link target='_black' to='/newsMovie/list'>
                <MenuUnfoldOutlined className='newsIcon' />
            </Link>
            {//从后台取到数据，通过redux传递到前段界面，获得视频地址
                list.map((item) => {
                    const url = BASE_VIDEO_ADDRESS + item.get('url').get(0)
                    console.log(url)
                    return (
                        <Player
                            key={item.get('url').get(0)}
                            fluid={false}
                            width="800px"
                            playsInline
                            className="video"
                            poster={item.get('thumbnail')}
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

const mapStateToProps = (state) => ({
    list: state.get('home').get('videoNewslist'),
})
export default connect(mapStateToProps, null)(NavMid);