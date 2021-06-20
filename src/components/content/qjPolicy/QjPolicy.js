import React from 'react'
import { StarFilled } from '@ant-design/icons';
import { Col, Row } from 'antd'
import { List, Typography } from 'antd';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const QjPolicy = (props) => {
    const { list } = props
    return (
        <div className='qj-level'>
            <img style={{ marginTop: 20, marginBottom: 20 }} alt='1' src={require('../../../img/qjzc.png')}></img>
            <Row>
                <Col span={11}>
                    <ListTemp list={list.slice(0, 7)} />
                </Col>
                <Col span={11} offset={2}>
                    <ListTemp list={list.slice(7, 14)} />

                </Col>
            </Row>
        </div>
    )
}

const mapStateToProps = (state) => ({
    list: state.get('home').get('qjPolicy')
})
export default connect(mapStateToProps, null)(QjPolicy);

const ListTemp = ({ list }) => {
    return (
        <List
            bordered
            dataSource={list}
            renderItem={item => (
                <List.Item style={{ paddingLeft: 0, paddingRight: 0 }}>
                    <Link key={item.get('_id')} target="_black" to={`/detail/${item.get('_id')}`}>
                        <StarFilled className='starColor' style={{ marginRight: 10 }} />
                        <Typography.Text
                            style={{ width: 340 }}
                            ellipsis="true">
                            {item.get('title')}

                        </Typography.Text>
                        <span className='pictext-right'>{item.get('department')}</span>

                    </Link>
                </List.Item>
            )}
        />
    )
}