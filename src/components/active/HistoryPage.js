import { Col, Divider, Row, Empty, Card } from 'antd'
import React, { Component } from 'react'
import { actionCreators } from './store';
import { Typography } from 'antd';
import { connect } from 'react-redux';
import { BASE_VIDEO_ADDRESS } from '../../consant/Consant'
import { Link } from 'react-router-dom'
import History from '../../img/history.png'
import Footer from '../footer/Footer';
import '../active.css'

const { Paragraph } = Typography;
const blockContent = `根据空军党委《关于庆祝中国共产党成立100周年在空军部队开展党史学习教育和系列宣传文化活动的通知》安排，场站机关
                    以党史、军史、空军史和英雄人物事迹为主线，创作了强军微视频，并遴选了百部优秀红色电影展播，欢迎各位战友积极观看，
                    学习百年党史、争做时代楷模。`;

class HistoryPage extends Component {
    render() {
        console.log('res', this.props.list)
        return (
            <Row>
                <Col span={24}>
                    <img style={{ width: '100%', height: '100%' }} src={History} alt='jpeg'></img>
                </Col>
                <div className='historyContent'>
                    <Paragraph>
                        <blockquote style={{ fontSize: 18 }}>{blockContent}</blockquote>
                    </Paragraph>
                    <Divider />
                    <p>党史微视频（持续更新，敬请期待……）</p>
                    <Divider />

                    <Row>
                        <Col span={6}><Empty /></Col>
                        <Col span={6}><Empty /></Col>
                        <Col span={6}><Empty /></Col>
                        <Col span={6}><Empty /></Col>
                    </Row>
                    <Row>
                        <Col span={6}><Empty /></Col>
                        <Col span={6}><Empty /></Col>
                        <Col span={6}><Empty /></Col>
                        <Col span={6}><Empty /></Col>
                    </Row>

                    <Divider />
                    <p>百部红色电影（持续更新，敬请期待……）</p>
                    <Divider />
                    <Row>
                        {this.props.list.map((item) => {
                            const url = BASE_VIDEO_ADDRESS + item.get('url').get('0')
                            return (
                                <Link target='_black' to={`/movie_detail/${item.get('_id')}`}>
                                    <Col span={5} offset={1}>
                                        <Card
                                            hoverable
                                            style={{ float: "left", width: 205, height: 150, margin: 6 }}
                                            // 写入样式来改变流式布局
                                            cover={<video style={{ height: 121, width: 205 }} alt="example" poster={item.get('thumbnail')} src={url} />}
                                        >
                                            <Card.Meta style={{ textAlign: 'center' }} title={item.get('title')} />
                                        </Card>
                                    </Col>

                                </Link>
                            )
                        })}
                    </Row>


                </div>
                <Footer />
            </Row>

        )
    }
    componentDidMount() {
        this.props.getHistory();
    }
}

const mapStateToProps = (state) => ({
    list: state.get('history').get('historylist')
})
const mapDispatch = (dispatch) => ({
    getHistory() {
        const action = actionCreators.get_history_detail();
        dispatch(action);
    }
});
export default connect(mapStateToProps, mapDispatch)(HistoryPage);