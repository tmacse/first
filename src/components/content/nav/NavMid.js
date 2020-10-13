import React, { Component } from 'react'
import "../../../../node_modules/video-react/dist/video-react.css";
import { Player, BigPlayButton } from 'video-react'

class NavMid extends Component {
    render() {
        return (
            <div>
                <Player
                    fluid={false}
                    width="800px"
                    playsInline
                    className="video"
                    src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                >
                    <BigPlayButton position="center" />
                </Player>
            </div >
        )
    }
}
export default NavMid;