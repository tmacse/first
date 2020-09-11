import React, { Component } from 'react'
import QjMail from './QjMail'
import Links from './Links'

export default class QjScale extends Component {
    render() {
        return (
            <div className='qj-level'>
                <div className='tangle hoverable'>
                    {/* <img  /> */}
                    <span>强军天平</span>
                </div>
                <QjMail />
                <Links />
            </div>
        )
    }
}

