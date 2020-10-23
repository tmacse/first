import React, { Component } from 'react'
import MyHeader from './header/Header'
import MyFooter from './footer/Footer'
import MyContent from './content/Content';
import DocumentTitle from 'react-document-title'
import { Layout } from 'antd';
import '../index.css'

const { Header, Footer, Content } = Layout;


class Home extends Component {
    render() {
        return (
            <DocumentTitle title='场站强军网首页'>
                <Layout>
                    <Header style={{ "height": "250px" }}><MyHeader className='myheader' /></Header>
                    <Content><MyContent /></Content>
                    <Footer><MyFooter /></Footer>
                </Layout>
            </DocumentTitle>
        )
    }
}

export default Home;