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
                    poster="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598585166565&di=631ea2b3ae30c158d97cef1e3bae1760&imgtype=0&src=http%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D3568922409%2C458394541%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1500%26h%3D900"
                    src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                >
                    <BigPlayButton position="center" />
                </Player>
            </div >
        )
    }
}
export default NavMid;