import React, { Component } from 'react'
import MyHeader from './header/Header'
import MyFooter from './footer/Footer'
import MyContent from './content/Content';
import DocumentTitle from 'react-document-title'
import { Layout } from 'antd';
import '../index.css'
import ActivePage from './ActivePage';

const { Header, Footer, Content } = Layout;


class Home extends Component {
    render() {
        return (
            <DocumentTitle title='场站强军网首页'>

                <Layout>
                    <ActivePage></ActivePage>
                    <Header ><MyHeader className='myheader' /></Header>
                    <Content style={{ marginTop: 170 }}><MyContent /></Content>
                    <Footer><MyFooter /></Footer>
                </Layout>
            </DocumentTitle>
        )
    }
}

export default Home;