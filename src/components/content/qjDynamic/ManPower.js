import React from 'react'
import { connect } from 'react-redux';

import DynamicTemp from './DynamicTemp';

const ManPower = (props) => {
    const { list } = props
    const title = 'manpower'
    return (
        <DynamicTemp list={list} title={title} />
    )
}
const mapStateToProps = (state) => ({
    list: state.get('home').get('manpowerlist')
})
export default connect(mapStateToProps, null)(ManPower);