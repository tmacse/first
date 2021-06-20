import React from 'react'
import { connect } from 'react-redux';
import { BASE_FILE_ADDRESS } from '../../consant/Consant'
import DocumentTitle from 'react-document-title'
import { actionCreators } from './store';
import DetailHeader from '../header/DetailHeader'
import Footer from '../footer/Footer'
import { Row, Col, Typography } from 'antd'
import './detail.css'
import { useEffect } from 'react';
const { Title } = Typography;

const MyTitle = (title) => {
    return (
        <Title level={3} style={{ textAlign: "center", marginTop: "40px" }}>
            {title.title}
        </Title>
    )
}

const Detail = (props) => {
    const id = props.match.params._id
    const { title, time, department, content, download_url } = props
    useEffect(() => {
        props.getDetail(id)
    }, [props, id])
    return (
        <DocumentTitle title={title}>
            <div>
                <DetailHeader />
                <Row style={{ minHeight: '700px' }}>
                    <Col span={14} offset={5}>

                        <MyTitle title={title}></MyTitle>
                        <div className='content-bt-xia'>
                            <span>时间：{time}</span>
                            <span>单位：{department}</span>
                        </div>
                        <Typography style={{ marginTop: 20, textAlign: "center" }}
                            dangerouslySetInnerHTML={{ __html: content }}
                        />
                        {//文件下载的路面(判断是否有下载地址，来显示不同的内容)
                            download_url !== undefined ?
                                download_url.map((item) => {
                                    return (
                                        <span>
                                            教案下载地址：
                                            <Typography.Link href={BASE_FILE_ADDRESS + item} alt='file'>
                                                <span>
                                                    {item}
                                                </span>
                                            </Typography.Link>
                                        </span>)
                                }) :
                                '' //如果没有数据，则为空
                        }
                    </Col>
                </Row>
                <Footer />
            </div>
        </DocumentTitle>
    )
}


//返回过来的状态
const mapStateToProps = (state) => ({
    title: state.get('detail').get('title'),
    content: state.getIn(['detail', 'content']),
    time: state.getIn(['detail', 'time']),
    department: state.getIn(['detail', 'department']),
    download_url: state.getIn(['detail', 'download_url'])

})
const mapDispatchToProps = (dispatch) => ({
    getDetail(id) {
        dispatch(actionCreators.getDetail(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
