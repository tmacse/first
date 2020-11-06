import React, { Component } from 'react'
import QjMail from './QjMail'
import Links from './Links'
import { Link } from 'react-router-dom'

export default class QjScale extends Component {
    render() {
        return (
            <div className='qj-level'>
                <div className='tangle hoverable'>
                    <Link target='_black' to='/mail/zw'>
                        {/* <img  /> */}
                        <span>强军天平</span>
                    </Link>

                </div>
                <QjMail />
                <Links />
            </div>
        )
    }
}

