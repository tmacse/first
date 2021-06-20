import React from 'react'
import { connect } from 'react-redux';
import DynamicTemp from './DynamicTemp';

const Government = (props) => {
    const { list } = props
    const title = 'goverment'
    return (
        <DynamicTemp list={list} title={title} />
    )
}

const mapStateToProps = (state) => ({
    list: state.get('home').get('governmentlist')
})
export default connect(mapStateToProps, null)(Government);
