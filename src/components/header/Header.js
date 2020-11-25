import React, { Component } from 'react'
import './header.css'
import { Carousel, Button } from 'antd';
import { FormOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const contentStyle = {
    height: '250px',
    color: '#fff',
    width: '100%',
    pading: '0',
    lineHeight: '250px',
    textAlign: 'center',
    background: '#364d79',
};

class Header extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
    }
    next() {
        this.slider.slick.slickNext();
    }
    prev() {
        this.slider.slick.slickPrev();
    }
    render() {
        return (
            <div className="header">
                <Carousel className="carousel" autoplay ref={el => (this.slider = el)}>
                    <div>
                        <h3 style={contentStyle}><img alt="1" src={require('../../img/background.png')} /></h3>
                    </div>
                    {/* <div>
                        <h3 style={contentStyle}>2</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>3</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>4</h3>
                    </div> */}

                </Carousel>
                <div>
                    <LeftOutlined onClick={this.prev} className='flex-left' />
                    <RightOutlined onClick={this.next} className='flex-right' />
                </div>
                <Button type="primary" className='header-icon' danger>
                    <a target='_black' href='http://28.27.40.77:5000'>
                        <FormOutlined />
                        <span>投稿</span>
                    </a>
                </Button>
                <Link to='/'>
                    <img alt="1" className="font-logo" src={require('../../img/font-logo.png')} />
                </Link>

            </div>


        )
    }
}

export default Header;