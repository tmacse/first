import React, { Component } from 'react'
import { Row, Col, Card, List } from 'antd'
import "../../../node_modules/video-react/dist/video-react.css";
import DetailHeader from '../header/DetailHeader'
import Footer from '../footer/Footer'

import { Player, BigPlayButton } from 'video-react'

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];

export default class MovieDetail extends Component {
    render() {
        return (
            <div>
                <DetailHeader />
                <Row style={{ marginBottom: "40px" }}>
                    <Col span={14} offset={3}>
                        <Player
                            fluid={false}
                            height="450px"
                            width="800px"
                            playsInline
                            className="video-detail"
                            poster="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598585166565&di=631ea2b3ae30c158d97cef1e3bae1760&imgtype=0&src=http%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D3568922409%2C458394541%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1500%26h%3D900"
                            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                        >
                            <BigPlayButton position="center" />
                        </Player>
                    </Col>
                    <Col span={4}>

                        <Card className="video-recommend">
                            <List
                                itemLayout="horizontal"
                                dataSource={data}
                                extra={
                                    <img
                                        width={272}
                                        alt="logo"
                                        src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                                    />
                                }
                                renderItem={item => (
                                    <List.Item>
                                        <List.Item.Meta

                                            title={<a href="https://ant.design">{item.title}</a>}
                                            description="Ant Design, a design language "
                                        />

                                    </List.Item>
                                )}
                            />
                        </Card>


                    </Col>
                </Row>
                <Footer />
            </div>
        )
    }
}
