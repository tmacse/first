import React, { Component } from 'react'
import { actionCreators } from './store';
import { connect } from 'react-redux';

import "./content.css"
import Nav from './nav/Nav'
import QjLevel from './qjLevel/QjLevel'
import Banner from './banner/Banner'
import QjDynamic from './qjDynamic/QjDynamic'
import QjCulture from './qjCulture/QjCulture'
import QjMien from './qjMien/QjMien'
import QjScale from './qjScale/QjScale'
import QjNews from './qjNews/QjNews';
import QjPolicy from './qjPolicy/QjPolicy';

class Content extends Component {
    render() {
        return (
            <div className="container">
                <Nav />
                <QjLevel />
                <Banner />
                <QjDynamic />
                <QjNews />
                {/* <Banner /> */}
                <QjCulture />
                <QjMien />
                <QjPolicy />
                <QjScale />

            </div>
        )
    }
    componentDidMount() {
        this.props.changeHomeData();
    }
}
const mapDispatch = (dispatch) => ({
    changeHomeData() {
        const action = actionCreators.getHomeInfo();
        dispatch(action);
    }
});
export default connect(null, mapDispatch)(Content);