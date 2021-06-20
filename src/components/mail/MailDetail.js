import { Col, Row, Form, Input, Button, Select, message } from 'antd'
import React from 'react'
import DocumentTitle from 'react-document-title'
import { LEADER_LIST } from '../../consant/Consant'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import { reqAddMail } from '../../api'
const { Item } = Form
const { TextArea } = Input
const { Option } = Select
//设置填空选项的样式和提交按钮的样式
const layout = { labelCol: { span: 6 }, wrapperCol: { span: 16 }, };
const tailLayout = { wrapperCol: { offset: 6, span: 16 }, };


function MailDetail() {
    const attr = this.props.match.params.attr
    //定义提交的反馈
    function onFinish(values) {
        const result = reqAddMail(values)
        if (result.err === 0) {
            message.success('邮件成功投递')
            this.props.history.push('/success', values.leader)
        }
        else {
            message.error('邮件发送失败，请与管理员联系')
        }
    }
    //定义提交失败的反馈
    function onFinishFailed(errorInfo) { console.log('Failed:', errorInfo); };
    //获取前段传来的值
    //根据传递来的值确定title的值
    let toptitle;
    let i;
    for (i = 0; i <= LEADER_LIST.length; i++) {
        if (LEADER_LIST[i].abbr === attr) {
            toptitle = LEADER_LIST[i].leader
            break;
        }
    }
    return (
        <DocumentTitle title={`欢迎来到${toptitle}信箱`}>
            <Header />
            <Row>
                <Col span={16} offset={4} style={{ marginTop: 60 }}>
                    <Form {...layout} name="basic"
                        initialValues={{ leader: attr }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}>
                        <Item label='首长' name='leader' rules={[{ required: true, message: '请选择首长' }]}>
                            <Select >
                                <Option value="zw">政委信箱</Option>
                                <Option value="zz">站长信箱</Option>
                                <Option value="zr">主任信箱</Option>
                                <Option value="jw">纪委信箱</Option>
                            </Select>
                        </Item>

                        <Item label="主题"
                            name="title"
                            rules={[{ required: true, message: '请输入邮件主题' }]} >
                            <Input placeholder='请输入邮件主题' />
                        </Item>
                        <Item label="内容" name="content"
                            rules={[{ required: true, message: '请输入邮件内容' }]} >
                            <TextArea rows={6} placeholder='请输入邮件正文' />
                        </Item>
                        <Item label="单位" name="department"
                            rules={[{ message: '请填写单位' },]}>
                            <Input placeholder='选填' />
                        </Item>
                        <Item label="发信人" name="name" rules={[{ message: '请填写姓名' }]}>
                            <Input placeholder='选填' />
                        </Item>
                        <Form.Item {...tailLayout}>
                            <Button block type="primary" htmlType="submit">
                                提交
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
            <Footer />
        </DocumentTitle>
    )
}

export default MailDetail;
