import React, { Component } from 'react'
import { Row, Col, Card, List } from 'antd'
import "../../../node_modules/video-react/dist/video-react.css";
import { connect } from 'react-redux';
import { BASE_VIDEO_ADDRESS } from '../../constant'
import { actionCreators } from './store';
import DetailHeader from '../header/DetailHeader'
import Footer from '../footer/Footer'
import { Player, BigPlayButton } from 'video-react'

// const path = require('path');

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];

class MovieDetail extends Component {
    render() {
        const url = this.props.url
        console.log(url)
        return (
            <div>
                <DetailHeader />
                <Row style={{ marginBottom: "40px" }}>
                    <Col span={14} offset={3}>

                        {this.props.url.length !== 0 && <p key={url}>
                            {this.props.url.map((item) => {
                                return (
                                    <Player
                                        fluid={false}
                                        height="450px"
                                        width="800px"
                                        playsInline
                                        className="video-detail"
                                        src={BASE_VIDEO_ADDRESS + item}
                                    >
                                        <BigPlayButton position="center" />
                                    </Player>
                                )
                            })}
                        </p>
                        }
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
    componentDidMount() {
        this.props.getDetail(this.props.match.params.id)
        console.log(this.props.match.params.id)
    }
}
//返回过来的状态
const mapStateToProps = (state) => ({
    name: state.get('moviedetail').get('name'),
    url: state.getIn(['moviedetail', 'url']),

})
const mapDispatchToProps = (dispatch) => ({
    getDetail(id) {
        dispatch(actionCreators.getDetail(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);