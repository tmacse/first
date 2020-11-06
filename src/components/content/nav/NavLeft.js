import { CodeOutlined, ContainerOutlined, HighlightOutlined, YoutubeOutlined } from '@ant-design/icons';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import backgroundImage from '../../../img/navleft.jpeg'

class NavLeft extends Component {
    render() {
        return (
            <div style={{
                "backgroundImage": `url(${backgroundImage})`,
                "height": '300px', 'width': '250px', "position": "relative"
            }}>
                <Link to='/'>
                    <div className='navleft-1'>
                        <HighlightOutlined className='navleft-icon' />
                        <span className='navleft-span'>考试网</span>
                    </div>
                </Link>

                <Link target='_black' to='/list/movie'>
                    <div className='navleft-2'>
                        <YoutubeOutlined className='navleft-icon' />
                        <span className='navleft-span'>精品视频观看</span>
                    </div>
                </Link>
                <Link to='/'>
                    <div className='navleft-3'>
                        <CodeOutlined className='navleft-icon' />
                        <span className='navleft-span'>量化记录评比</span>
                    </div>
                </Link>
                <Link to='/'>
                    <div className='navleft-4'>
                        <ContainerOutlined className='navleft-icon' />
                        <span className='navleft-span'>问卷调查</span>
                    </div>
                </Link>

            </div>
        )
    }
}
export default NavLeft;