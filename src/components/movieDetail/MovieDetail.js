import React, { Component } from 'react'
import { Row, Col, Card, Descriptions } from 'antd'
import "../../../node_modules/video-react/dist/video-react.css";
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title'
import { BASE_VIDEO_ADDRESS } from '../../consant/Consant'
import { actionCreators } from './store';
import DetailHeader from '../header/DetailHeader'
import Footer from '../footer/Footer'
import { Player, BigPlayButton } from 'video-react'

// const path = require('path');

class MovieDetail extends Component {
    render() {
        const url = this.props.url
        console.log(url, this.props.name)
        return (
            <DocumentTitle title={this.props.name}>
                <div>
                    <DetailHeader />
                    <Row style={{ marginBottom: "40px" }}>
                        <Col span={14} offset={3}>
                            {this.props.url.length !== 0 && <div key={url}>
                                {this.props.url.map((item) => {
                                    return (
                                        <Player
                                            key={url}
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
                            </div>
                            }
                        </Col>
                        <Col span={4}>
                            <Card className="video-recommend">
                                <Descriptions layout='horizontal' title="视频介绍">
                                    <Descriptions.Item span={4} label="视频名">{this.props.name}</Descriptions.Item>
                                    <Descriptions.Item span={4} label="导演">{this.props.director}</Descriptions.Item>
                                    <Descriptions.Item span={4} label="主要演员">{this.props.main_actor}</Descriptions.Item>
                                    <Descriptions.Item span={4} label="简介">{this.props.desc}</Descriptions.Item>
                                </Descriptions>
                            </Card>
                        </Col>
                    </Row>
                    <Footer />
                </div>
            </DocumentTitle>
        )
    }
    componentDidMount() {
        this.props.getDetail(this.props.match.params.id)
    }
}
//返回过来的状态
const mapStateToProps = (state) => ({
    name: state.get('moviedetail').get('title'),
    url: state.getIn(['moviedetail', 'url']),
    director: state.getIn(['moviedetail', 'director']),
    main_actor: state.getIn(['moviedetail', 'main_actor']),
    desc: state.getIn(['moviedetail', 'desc']),
    attr: state.getIn(['moviedetail', 'attr']),

})
const mapDispatchToProps = (dispatch) => ({
    getDetail(id) {
        dispatch(actionCreators.getDetail(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);