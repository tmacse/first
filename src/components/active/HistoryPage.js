import { Col, Divider, Row, Card } from 'antd'
import React, { useEffect } from 'react'
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

const HistoryPage = (props) => {
    const { getHistory, minivlog, list } = props
    console.log(minivlog)
    useEffect(() => {
        getHistory();

    }, [getHistory])

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
                    {
                        minivlog.slice(0, 4).map((item) => {
                            const url = BASE_VIDEO_ADDRESS + item.get('url').get('0')
                            return <HistoryTemp
                                span={6}
                                key={item.url}
                                item={item}
                                style={{ float: "left", width: 280, height: 200, margin: 6 }}
                                cover={<video style={{ height: 165, width: 280 }}
                                    alt="example" poster={item.get('thumbnail')}
                                    src={url} />}

                            />
                        })
                    }
                </Row>
                <Row>
                    {
                        minivlog.slice(4, 8).map((item) => {
                            const url = BASE_VIDEO_ADDRESS + item.get('url').get('0')
                            return <HistoryTemp
                                span={6}
                                key={item.url}
                                item={item}
                                style={{ float: "left", width: 280, height: 200, margin: 6 }}
                                cover={<video style={{ height: 165, width: 280 }}
                                    alt="example" poster={item.get('thumbnail')}
                                    src={url} />}

                            />
                        })
                    }
                </Row>

                <Divider />
                <p>百部红色电影（持续更新，敬请期待……）</p>
                <Divider />
                <Row>
                    {
                        list.map((item) => {
                            const url = BASE_VIDEO_ADDRESS + item.get('url').get('0')
                            return < HistoryTemp
                                key={item.url}
                                style={{ float: "left", width: 205, height: 150, margin: 6 }}
                                cover={<video style={{ height: 121, width: 205 }}
                                    alt="example" poster={item.get('thumbnail')}
                                    src={url} />}
                                span={5}
                                offset={1}
                                item={item}
                                url={url} />
                        })
                    }
                </Row>
            </div>
            <Footer />
        </Row>
    )
}


const mapStateToProps = (state) => ({
    list: state.get('history').get('historylist'),
    minivlog: state.get('history').get('minivlog')
})
const mapDispatch = (dispatch) => ({
    getHistory() {
        const action = actionCreators.get_history_detail();
        dispatch(action);
    }
});
export default connect(mapStateToProps, mapDispatch)(HistoryPage);

const HistoryTemp = ({ item, style, cover = null, span, offset = 0 }) => {
    return (
        <>
            {
                <Link target='_black' to={`/movie_detail/${item.get('_id')}`}>
                    <Col span={span} offset={offset}>
                        <Card
                            hoverable
                            style={style}
                            // 写入样式来改变流式布局
                            cover={cover}
                        >
                            <Card.Meta style={{ textAlign: 'center' }} title={item.get('title')} />
                        </Card>
                    </Col>
                </Link>

            }
        </>
    )
}