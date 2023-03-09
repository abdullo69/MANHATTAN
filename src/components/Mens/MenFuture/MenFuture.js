import React from 'react'
import "./MenFuture.scss"
import vidio from "../../../images/vidio.mp4"
import future from "../../../images/menfuture.jpg"
import arsenal from "../../../images/arsenal.jpg"
import harakter from "../../../images/harakter.png"
import MensSavdo from '../MensSavdo/MensSavdo'
function MenFuture() {
    return (
        <div>
            <div className='Menfuture'>
                <div className='Menfuture_cart'>
                    <img src={future} alt="" />
                    <h4>ONWARD IN NMD</h4>
                    <p>NMD is always moving forward, just like you.</p>
                    <h5>SHOP NOW</h5>
                </div>
                <div className='Menfuture_cart'>
                    <video autoPlay loop muted src={vidio}></video>
                    <h4>4DFWD 2. THE FUTURE OF RUNNING.</h4>
                    <p>Redefining forward motion. Forever. Coming soon.</p>
                    <h5>SHOP NOW</h5>
                </div>
                <div className='Menfuture_cart'>
                    <div className='Menfuture_cart'>
                        <img src={arsenal} alt="" />
                        <h4>MANHATTAN x JAMAICA 2023</h4>
                        <p>A new partnership celebrating Jamaican style and culture through soccer.</p>
                        <h5>SHOP NOW</h5>
                    </div>
                </div>
                <div className='Menfuture_cart'>
                    <div className='Menfuture_cart'>
                        <img src={harakter} alt="" />
                        <h4>MADE FOR MAIN CHARACTERS
                        </h4>
                        <p>When you focus on the future, nothing can hold  you back.</p>
                        <h5>SHOP NOW</h5>
                    </div>
                </div>
            </div>
            <MensSavdo />
        </div>
    )
}

export default MenFuture