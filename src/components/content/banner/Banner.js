import React from 'react'
import './banner.css'

const Banner = () => {

    return (
        <div style={{ marginTop: "15px", height: "60px" }}>
            <div className='banner left' style={{ width: "500px" }}>
                <span>学习贯彻军队基层纲要</span>
            </div>
            <div className='banner' style={{ width: "400px" }}>
                <span>传承红色基因，担当强军重任</span>
            </div>
            <div className='banner right' style={{ width: "300px" }}>
                <span>基层微行动</span>
            </div>

        </div>
    )
}
export default Banner;