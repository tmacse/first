import React from 'react'
import QjMail from './QjMail'
import Links from './Links'
import { Link } from 'react-router-dom'

const QjScale = () => {
    return (
        <div className='qj-level'>
            <div>
                <Link target='_black' to='/mail/zw'>
                    <img style={{ marginTop: 20, marginBottom: 20 }}
                        alt='1'
                        src={require('../../../img/qjtp.png')} />
                </Link>

            </div>
            <QjMail />
            <Links />
        </div>
    )
}

export default QjScale
