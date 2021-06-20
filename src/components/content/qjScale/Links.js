import React from 'react'
import { BASE_LINKS, BASE_AIRFORCE, BASE_XFY } from '../../../consant/Consant'
import { Layout, Row, Col, Divider } from 'antd'
const Links = () => {
    return (
        <Layout className="links">
            <Row style={{ marginTop: 25 }}>
                <Col span={4}><span className='links-left'>军委及相关部队：</span></Col>
                <Col span={18}>
                    {
                        BASE_LINKS.map((item) => {
                            return <a key={item.name} target="_black" href={item.url}>{item.name}</a>
                        })
                    }
                </Col>
            </Row>
            <Divider />
            <Row>
                <Col span={4}><span className='links-left'>空军及相关部队：</span></Col>
                <Col span={18}>
                    {BASE_AIRFORCE.map((item) => {
                        return <a key={item.name} target="_black" href={item.url}>{item.name}</a>
                    })}
                </Col>
            </Row>
            <Divider />
            <Row>
                <Col span={4}><span className='links-left'>学院及相关部队：</span></Col>
                <Col span={18}>
                    {BASE_XFY.map((item) => {
                        return <a key={item.name} target="_black" href={item.url} > {item.name}</a>
                    })}
                </Col>
            </Row>
        </Layout >
    )
}

export default Links