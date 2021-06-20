import React from 'react'
import { connect } from 'react-redux';
import DynamicTemp from './DynamicTemp';

const Organization = (props) => {
    const { list } = props
    const title = 'organization'
    return (
        <DynamicTemp list={list} title={title} />
    )
}
const mapStateToProps = (state) => ({
    list: state.get('home').get('organizationlist')
})
export default connect(mapStateToProps, null)(Organization);