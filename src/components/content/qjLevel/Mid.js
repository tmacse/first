import React from 'react'
import { connect } from 'react-redux';
import LevelTemp from './LevelTemp';

const Mid = (props) => {

    const { list } = props
    const title = 'case'
    return (
        <LevelTemp list={list} title={title} />
    )
}

const mapStateToProps = (state) => ({
    list: state.get('home').get('casebooklist')
})
export default connect(mapStateToProps, null)(Mid);