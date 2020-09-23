import React, { Component } from 'react'
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { actionCreators } from './store';
import DetailHeader from '../header/DetailHeader'
import Footer from '../footer/Footer'
import { Row, Col, Typography } from 'antd'
import './detail.css'
const { Title } = Typography;

class Detail extends Component {
    render() {
        // const content = this.props.content
        const {title, time, department, content} = this.props
        return (
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
        )
    }
    componentDidMount() {
        this.props.getDepartmentDetail(this.props.match.params._id)
        console.log(this.props.match.params._id)
    }
}
const mapStateToProps = (state) => ({
    title: state.get('detail').get('title'),
    content: state.getIn(['detail', 'content'])

})
const mapDispatchToProps = (dispatch) => ({

    getDepartmentDetail(id) {
        dispatch(actionCreators.getDepartmentDetail(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
