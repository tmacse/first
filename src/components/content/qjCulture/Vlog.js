import React from 'react'
import { connect } from 'react-redux';
import TempVideo from './TempVideo';


const Vlog = (props) => {
    const { list } = props
    const title = 'vlog'
    return (
        <TempVideo list={list} title={title} />
    )
}

const mapStateToProps = (state) => ({
    list: state.get('home').get('vloglist')
})
export default connect(mapStateToProps, null)(Vlog);
