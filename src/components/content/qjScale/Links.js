import React, { Component } from 'react'
import { Layout, Row, Col, Divider } from 'antd'
export default class Links extends Component {
    render() {
        return (
            <Layout className="links">
                <Row style={{ marginTop: 25 }}>
                    <Col span={4}><span className='links-left'>军委及相关部队：</span></Col>
                    <Col span={18}>
                        <a href='http://www.qjw.jw/'>全军强军网</a>
                        <a href='http://www.qjw.db/'>东部战区</a>
                        <a href='http://www.qjw.nb/'>南部战区</a>
                        <a href='http://www.qjw.xb/'>西部战区</a>
                        <a href='http://www.qjw.bb/'>北部战区</a>
                        <a href='http://www.qjw.zb/'>中部战区</a>
                        <a href='http://www.qjw.lj/'>陆军</a>
                        <a href='http://www.qjw.hj/'>海军</a>
                        <a href='http://www.qjw.kj/'>空军</a>
                        <a href='http://www.qjw.hjj/'>火箭军</a>
                        <a href='http://www.qjw.zy/'>战略支援部队</a>
                        <a href='http://27.144.32.99/'>联勤保障部队</a>
                        <a href='http://www.qjw.jk/'>军事科学院</a>
                        <a href='http://www.gfdxqjw.mtn/'>国防大学</a>
                        <a href='http://www.gfkdqjw.mtn/'>国防科技大学</a>
                        <a href='http://www.qjw.wj/'>武警部队</a>
                    </Col>
                </Row>
                <Divider />
                <Row>
                    <Col span={4}><span className='links-left'>空军及相关部队：</span></Col>
                    <Col span={18}>
                        <a href='http://www.qjw.kj/'>空军强军网</a>
                        <a href='http://www.dbkjqjw.kj/'>东部战区空军</a>
                        <a href='http://27.57.34.13/'>南部战区空军</a>
                        <a href='http://28.27.64.7/'>西部战区空军</a>
                        <a href='http://bbzqkj.zzb.kj/'>北部战区空军</a>
                        <a href='http://21.127.64.9/'>中部战区空军</a>
                        <a href='http://qjw.kjbj.kj/'>空降兵军</a>
                        <a href='http://24.47.32.66/'>试训基地</a>
                        <a href='http://zgw.kjzh.mtn/'>指挥学院</a>
                        <a href='http://22.89.213.2/'>航空大学</a>
                        <a href='http://zzb.kgd.mtn/'>工程大学</a>
                        <a href='http://zzb.kjld.mtn/'>预警学院</a>
                        <a href='http://qjw.fmmu.mtn/index.jsp'>军医大学</a>
                        <a href='http://22.120.131.98/'>哈飞院</a>
                        <a href='http://23.105.129.69/'>石飞院</a>
                        <a href='http://24.85.163.111/'>西飞院</a>
                        <a href='http://21.125.176.81/'>空34师</a>
                        <a href='http://21.125.104.138/'>飞训基地</a>
                        <a href='http://www.kqwqjw.mtn/index.jsp'>勤务学院</a>
                        <a href='http://dlsgxx.zzb.kj/'>士官学校</a>
                        <a href='http://khqjw.zzb.kj/'>空军后勤部</a>
                        <a href='http://jw.qjw.kj/'>空军纪委</a>
                    </Col>
                </Row>
                <Divider />
                <Row>
                    <Col span={4}><span className='links-left'>学院及相关部队：</span></Col>
                    <Col span={18}><a href='http://24.85.163.111/'>西安飞行学院强军网</a>
                        <a href='http://25.36.80.80/'>一旅强军网</a>
                        <a href='http://24.145.81.50/'>二旅强军网</a>
                        <a href='http://24.41.136.83/'>三旅强军网</a>
                        <a href='http://24.32.240.7/'>四旅强军网</a></Col>
                </Row>
            </Layout>
        )
    }
}
