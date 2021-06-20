import React, { useEffect } from 'react';
import { Row, Col, Typography, Image } from 'antd';
import { connect } from 'react-redux';
import DetailHeader from '../header/DetailHeader'
import DocumentTitle from 'react-document-title'
import Footer from '../footer/Footer'
import { BASE_PICSHOW_ADDRESS } from '../../consant/Consant'
import { actionCreators } from './store';
const { Title } = Typography;

const contentStyle = {
    marginTop: 10,
    width: '100%',
    height: 290,
};

const PicShowDetail = (props) => {
    const { getPicShowDetail, pics, title, author } = props
    const id = props.match.params._id
    useEffect(() => {
        getPicShowDetail(id)

    }, [getPicShowDetail, id])

    return (
        <DocumentTitle title={title}>
            <div>
                <DetailHeader />
                <Row style={{ minHeight: 500, }}>
                    <Col style={{ background: '#e9fcfc' }} span={16} offset={4}  >
                        <Title
                            level={3}
                            style={{ textAlign: "left", marginLeft: 40 }}
                        >
                            标题：{title}</Title>
                        <span style={{ display: 'block', marginLeft: 40 }}>作者：{author}</span>
                        {pics.length !== 0 && pics.map((item) => (
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
        </DocumentTitle>
    )
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
