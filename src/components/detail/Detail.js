import React, { Component } from 'react'
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import DocumentTitle from 'react-document-title'
import { actionCreators } from './store';
import DetailHeader from '../header/DetailHeader'
import Footer from '../footer/Footer'
import { Row, Col, Typography } from 'antd'
import './detail.css'
const { Title } = Typography;

class Detail extends Component {
    render() {
        const { title, time, department, content } = this.props
        return (
            <DocumentTitle title={title}>
                <div>
                    <DetailHeader />
                    <Row style={{ minHeight: '700px' }}>
                        <Col span={14} offset={5}>
                            <Title
                                level={3}
                                style={{ textAlign: "center", marginTop: "40px" }}
                            >
                                {title}
                            </Title>
                            <div className='content-bt-xia'>
                                <span>时间：{time}</span>
                                <span>单位：{department}</span>
                            </div>
                            <Typography style={{ marginTop: 20, textAlign: "center" }}
                                dangerouslySetInnerHTML={{ __html: content }}
                            />
                        </Col>
                    </Row>
                    <Footer />
                </div>
            </DocumentTitle>
        )
    }
    componentDidMount() {
        this.props.getDetail(this.props.match.params._id)
    }
}
//返回过来的状态
const mapStateToProps = (state) => ({
    title: state.get('detail').get('title'),
    content: state.getIn(['detail', 'content']),
    time: state.getIn(['detail', 'time']),
    department: state.getIn(['detail', 'department'])

})
const mapDispatchToProps = (dispatch) => ({
    getDetail(id) {
        dispatch(actionCreators.getDetail(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
