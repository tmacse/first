import React, { Component } from 'react'

import "./content.css"
import Nav from './nav/Nav'
import QjLevel from './qjLevel/QjLevel'
import Banner from './banner/Banner'
import QjDynamic from './qjDynamic/QjDynamic'
import QjCulture from './qjCulture/QjCulture'
import QjMien from './qjMien/QjMien'
import QjScale from './qjScale/QjScale'

class Content extends Component {
    render() {
        return (
            <div className="container">
                <Nav />
                <QjLevel />
                <Banner />
                <QjDynamic />
                <Banner />
                <QjCulture />
                <QjMien />
                <QjScale />
            </div>
        )
    }
}

export default Content;