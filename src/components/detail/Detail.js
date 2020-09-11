import React, { Component } from 'react'
import DetailHeader from '../header/DetailHeader'
import Footer from '../footer/Footer'
import { Row, Col, Typography } from 'antd'
import './detail.css'
const { Title } = Typography;

const data = {
    title: "习近平与经济特区的不解之缘",
    time: "2020-08-26 09:17",
    department: '央视网',
    content: "2020年8月24日，习近平总书记在中南海主持召开经济社会领域专家座谈会并发表重要讲话。如果说改革开放后的中国经济社会发展是一本厚重的书，那么“经济特区”无疑是其中“最精彩的故事”之一，故事的“主人公”正是深圳、珠海、汕头、厦门、海南等几个省市。从上世纪80年代在厦门主抓经济社会发展工作，到近年来多次赴深圳、珠海等经济特区考察调研，习近平总书记一直十分关心、支持经济特区发展，并对未来给予厚望：“经济特区不仅要继续办下去，而且要办得更好、办出水平。"
}

export default class Detail extends Component {
    render() {
        return (
            <div>
                <DetailHeader />
                <Row style={{ minHeight: '700px' }}>
                    <Col span={14} offset={5}>
                        <Title
                            level={3}
                            style={{ textAlign: "center", marginTop: "40px" }}
                        >
                            {data.title}
                        </Title>
                        <div className='content-bt-xia'>
                            <span>时间：{data.time}</span>
                            <span>单位：{data.department}</span>
                        </div>
                        <Typography style={{ marginTop: 20, textAlign: "center" }}
                            dangerouslySetInnerHTML={{ __html: data.content }}
                        />
                    </Col>
                </Row>
                <Footer />
            </div>
        )
    }
}
