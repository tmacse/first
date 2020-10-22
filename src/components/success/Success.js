import React, { Component } from 'react'
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';

export default class Success extends Component {

    render() {
        //获取从上个页面传来的信息
        const leader = this.props.location.state
        console.log(leader)
        return (
            <>
                <Header />
                <Result
                    style={{ minHeight: 500 }}
                    status="success"
                    title={"你已经成功提交至" +
                        (leader === "jw" ? "纪委信箱" : leader === 'zz' ? "站长信箱" : leader === 'zw' ? "政委信箱" : "主任信箱")
                        + "，请耐心等待解答"}
                    extra={[
                        <Link to='/'><Button type="primary" key="home">回网站主页</Button></Link>,
                        <Link to={{
                            pathname: leader === "jw" ? "/mail/jw" : leader === 'zz' ? "/mail/zz" : leader === 'zw' ? "/mail/zw" : "/mail/zr"
                        }}>
                            <Button key="again">
                                {leader === "jw" ? "继续向纪委举报" : leader === 'zz' ? "继续写信给站长" : leader === 'zw' ? "继续写信给政委" : "继续写信给主任"}
                            </Button>
                        </Link>

                    ]}
                />
                <Footer />
            </>
        )
    }
}
