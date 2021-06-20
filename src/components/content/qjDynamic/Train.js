import React from 'react'
import { connect } from 'react-redux';
import DynamicTemp from './DynamicTemp';

const Train = (props) => {
    const { list } = props
    const title = 'train'
    return (
        <DynamicTemp list={list} title={title} />
    )
}
const mapStateToProps = (state) => ({
    list: state.get('home').get('trainlist')
})
export default connect(mapStateToProps, null)(Train);