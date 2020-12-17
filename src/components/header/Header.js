import React, { Component } from 'react'
import './header.css'
import { Button } from 'antd';
import { FormOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';


class Header extends Component {

    render() {
        return (
            <div className="header" style={{ background: 'url(/public/image/background.png);' }}>
                <Button type="primary" className='header-icon' danger>
                    <a target='_black' href='http://28.27.40.77:5000'>
                        <FormOutlined />
                        <span>投稿</span>
                    </a>
                </Button>
                <Link to='/'>
                    <span alt="1" className="font-logo newcarousel" />
                </Link>
            </div>


        )
    }
}

export default Header;