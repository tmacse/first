import React, { Component } from 'react'
import Footer from '../footer/Footer'
import DetailHeader from '../header/DetailHeader'
import { Table, Row, Col } from 'antd';
import { connect } from 'react-redux';
import { actionCreators } from './store';


class Statistics extends Component {
    state = {
        filteredInfo: null,
        sortedInfo: null,
    };

    handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        this.setState({
            filteredInfo: filters,
            sortedInfo: sorter,
        });
    };

    clearFilters = () => {
        this.setState({ filteredInfo: null });
    };

    clearAll = () => {
        this.setState({
            filteredInfo: null,
            sortedInfo: null,
        });
    };

    setAgeSort = () => {
        this.setState({
            sortedInfo: {
                order: 'ascend',
                columnKey: 'total',
            },
        });
    };

    render() {

        let { sortedInfo } = this.state;
        sortedInfo = sortedInfo || {};
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
                sortOrder: sortedInfo.columnKey === 'total' && sortedInfo.order,
                ellipsis: true,
            },
            {
                title: '本月稿件量',
                dataIndex: 'this_month',
                key: 'this_month',
                sorter: (a, b) => a.this_month - b.this_month,
                sortOrder: sortedInfo.columnKey === 'this_month' && sortedInfo.order,
                ellipsis: true,
            },
            {
                title: '上月稿件量',
                dataIndex: 'last_month',
                key: 'last_month',
                sorter: (a, b) => a.last_month - b.last_month,
                sortOrder: sortedInfo.columnKey === 'last_month' && sortedInfo.order,
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
                            dataSource={this.props.list && this.props.list.toJS()}
                            bordered={true}
                            pagination={false}
                            onChange={this.handleChange}
                            rowKey={record => record._id}
                        />
                    </Col>
                </Row>
                <Footer />
            </div>
        )
    }
    componentDidMount() {
        this.props.get_statistics();
    }
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
