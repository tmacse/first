import React from 'react'
import { connect } from 'react-redux';
import LevelTemp from './LevelTemp';

const Left = (props) => {

    const { list } = props
    const title = 'curriculum'
    return (
        <LevelTemp list={list} title={title} />
    )
}

const mapStateToProps = (state) => ({
    list: state.get('home').get('curriculumlist')
})
export default connect(mapStateToProps, null)(Left);