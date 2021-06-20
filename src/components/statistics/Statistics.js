import React, { useEffect, useState } from 'react'
import Footer from '../footer/Footer'
import DetailHeader from '../header/DetailHeader'
import { Table, Row, Col } from 'antd';
import { connect } from 'react-redux';
import { actionCreators } from './store';


const Statistics = (props) => {
    const { get_statistics } = props
    const [sortedInfo, setSortedInfo] = useState(null)

    useEffect(() => {
        get_statistics();

    }, [get_statistics])
    function handleChange(pagination, filters, sorter) {
        setSortedInfo(sorter)
    };

    // function clearFilters() {
    //     setFilteredInfo(null)
    // };

    // function clearAll() {
    //     setFilteredInfo(null)
    //     setSortedInfo(null)
    // };

    // function setAgeSort() {
    //     setSortedInfo({
    //         order: 'ascend',
    //         columnKey: 'total',
    //     })
    // };

    const sortedinfo = sortedInfo || {};
    const columns = [
        {
            title: '单位',
            dataIndex: 'name',
            key: 'name',

        },
        {
            title: '稿件总数',
            dataIndex: 'total',
            key: 'total',
            sorter: (a, b) => a.total - b.total,
            sortOrder: sortedinfo.columnKey === 'total' && sortedinfo.order,
            ellipsis: true,
        },
        {
            title: '本月稿件量',
            dataIndex: 'this_month',
            key: 'this_month',
            sorter: (a, b) => a.this_month - b.this_month,
            sortOrder: sortedinfo.columnKey === 'this_month' && sortedinfo.order,
            ellipsis: true,
        },
        {
            title: '上月稿件量',
            dataIndex: 'last_month',
            key: 'last_month',
            sorter: (a, b) => a.last_month - b.last_month,
            sortOrder: sortedinfo.columnKey === 'last_month' && sortedinfo.order,
            ellipsis: true,
        },

    ];
    return (
        <div>
            <DetailHeader />
            <Row style={{ minHeight: 600 }}>
                <Col span={16} offset={4}>
                    <Table
                        columns={columns}
                        dataSource={props.list && props.list.toJS()}
                        bordered={true}
                        pagination={false}
                        onChange={handleChange}
                        rowKey={record => record._id}
                    />
                </Col>
            </Row>
            <Footer />
        </div>
    )
}


const mapStateToProps = (state) => ({
    list: state.getIn(['statistics', 'data', 'data'])
})
const mapDispatch = (dispatch) => ({
    get_statistics() {
        const action = actionCreators.get_statistics_detail();
        dispatch(action);
    }
});
export default connect(mapStateToProps, mapDispatch)(Statistics);
