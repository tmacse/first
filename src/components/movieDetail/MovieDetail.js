import React, { Component } from 'react'
import { Row, Col, Card, Descriptions, Divider } from 'antd'
import "../../../node_modules/video-react/dist/video-react.css";
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title'
import { BASE_VIDEO_ADDRESS } from '../../consant/Consant'
import { actionCreators } from './store';
import DetailHeader from '../header/DetailHeader'
import Footer from '../footer/Footer'
import { Player, BigPlayButton } from 'video-react'
import { LikeTwoTone } from '@ant-design/icons';
import './movie.css'
// import Header from '../header/Header';

// const path = require('path');


class MovieDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            thumbNum: 100,
            liked: 'null',
        };
    }
    // componentDidUpdate() {
    //     this.setState({ thumbNum: 1000 })
    // }
    //点赞功能函数
    thumbClick = () => {
        let storage = window.sessionStorage
        storage.setItem('name', 'hujun')


    }
    islike = () => {
        let liked = this.state.liked;
        if (liked) {
            if (liked === 'like') {
                this.setState({ liked: null })
                this.setState({ like: this.state.like - 1 });
            }
            else {
                this.setState({ liked: 'like' });
                this.setState({ like: this.state.like + 1, });

            }
        }
        else {
            this.setState({
                like: this.state.like + 1,
            });
            this.setState({ liked: 'like' });
        }
    }

    render() {
        const url = this.props.url

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
                                            width='100%'
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
                            <Divider />
                            {/* 以下为点赞 */}
                            <Row>
                                <Col span={4}>
                                    <LikeTwoTone
                                        //  onClick={this.islike} 
                                        onClick={this.thumbClick}
                                        className={this.state.liked === 'like' ? 'filled' : 'not_filled'} />
                                    <span style={{ marginLeft: 5 }}>{this.state.thumbNum}</span>
                                </Col>
                            </Row>
                            <Divider dashed />
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
    //返回的点击量的数字
    thumb_num: state.getIn(['moviedetail', 'thumb_num'])

})
const mapDispatchToProps = (dispatch) => ({
    getDetail(id) {
        dispatch(actionCreators.getDetail(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);