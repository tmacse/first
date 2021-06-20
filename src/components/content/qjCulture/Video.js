import React from 'react'
import { connect } from 'react-redux';
import TempVideo from './TempVideo'

const Video = (props) => {
    const { list } = props
    const title = 'video'
    return (
        <TempVideo list={list} title={title} />
    )
}

const mapStateToProps = (state) => ({
    list: state.get('home').get('videolist')
})
export default connect(mapStateToProps, null)(Video);
