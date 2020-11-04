//这是一个强军风采的界面
import React, { Component } from 'react'

export default class QjMien extends Component {
    render() {
        return (
            <div className='qj-level'>
                <div className='tangle hoverable'>
                    {/* <img  /> */}
                    <span>强军风采</span>
                    <img alt='1' src={require('../../../img/mien.png')} />
                </div>
            </div>
        )
    }
}
