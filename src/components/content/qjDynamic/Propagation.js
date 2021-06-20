import React from 'react'
import { connect } from 'react-redux';
import DynamicTemp from './DynamicTemp';

const Propagation = (props) => {
    const { list } = props
    const title = 'propagation'
    return (
        <DynamicTemp list={list} title={title} />
    )
}
const mapStateToProps = (state) => ({
    list: state.get('home').get('propagationlist')
})
export default connect(mapStateToProps, null)(Propagation);