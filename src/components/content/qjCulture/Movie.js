import React from 'react'
import { connect } from 'react-redux';
import TempVideo from './TempVideo';

const Movie = (props) => {
    const { list } = props
    const title = 'movie'
    return (
        <TempVideo list={list} title={title} />
    )
}

const mapStateToProps = (state) => ({
    list: state.get('home').get('movielist')
})
export default connect(mapStateToProps, null)(Movie);
