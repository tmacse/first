import React, { Component } from 'react'
import backgroundImage from '../../../img/navleft.jpeg'

class NavLeft extends Component {
    render() {
        return (
            <div style={{
                "backgroundImage": `url(${backgroundImage})`,
                "height": '300px', 'width': '250px'
            }}>
            </div>
        )
    }
}
export default NavLeft;