import React, { Component } from 'react';
import { Row, Col, Typography, Image } from 'antd';
import { connect } from 'react-redux';
import DetailHeader from '../header/DetailHeader'
import Footer from '../footer/Footer'
import { BASE_PICSHOW_ADDRESS } from '../../consant/Consant'
import { actionCreators } from './store';
const { Title } = Typography;


class PicShowDetail extends Component {


    render() {
        const contentStyle = {
            marginTop: 10,
            width: '100%',
            height: 290,
        };
        return (
            <div>
                <DetailHeader />
                <Row style={{ minHeight: 500, }}>
                    <Col style={{ background: '#e9fcfc' }} span={16} offset={4}  >
                        <Title
                            level={3}
                            style={{ textAlign: "left", marginLeft: 40 }}
                        >
                            标题：{this.props.title}</Title>
                        <span style={{ display: 'block', marginLeft: 40 }}>作者：{this.props.author}</span>
                        {this.props.pics.length !== 0 && this.props.pics.map((item) => (
                            <Col span={11} offset={1} style={{ marginTop: 10, marginBottom: 20, float: 'left' }} key={item}>
                                <Image className='newcarousel'
                                    alt='1' style={contentStyle} src={BASE_PICSHOW_ADDRESS + item} >
                                </Image>
                            </Col>
                        ))}
                    </Col>
                </Row>
                <Footer />
            </div>
        )
    }
    componentDidMount() {
        this.props.getPicShowDetail(this.props.match.params._id)
    }
}

const mapStateToProps = (state) => ({
    title: state.get('picshowdetail').get('title'),
    author: state.getIn(['picshowdetail', 'author']),
    pics: state.getIn(['picshowdetail', 'pics'])

})
const mapDispatchToProps = (dispatch) => ({
    getPicShowDetail(id) {
        dispatch(actionCreators.getPicShowDetail(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(PicShowDetail);
