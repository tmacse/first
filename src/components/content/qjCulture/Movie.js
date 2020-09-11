import React, { Component } from 'react'
import { Card, Carousel, List, Typography } from 'antd'
import { Link } from 'react-router-dom'
const contentStyle = {
    height: '255px',
    color: '#fff',
    lineHeight: '255px',
    textAlign: 'center',
    background: '#364d79',
};
const data = [
    'Racing car sprays burning .',
    'Japanese princess to 111.',
    'Australian walks 100km ',
];

export default class Movie extends Component {
    render() {
        return (
            <div>
                <Card hoverable title="强军影视" class="movie-card">
                    <Carousel effect="fade" autoplay>
                        <div>
                            <h3 style={contentStyle}>1</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>2</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>3</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>4</h3>
                        </div>
                    </Carousel>
                    <List
                        size="small"
                        bordered
                        dataSource={data}
                        renderItem={item => <List.Item>
                            <Typography.Text ellipsis="true">
                                <Link to='/movie_detail'>
                                    {item}
                                </Link>
                            </Typography.Text></List.Item>}>
                    </List>
                </Card>
            </div>
        )
    }
}
