import React from 'react'
import vidio from "../../../images/vidio.mp4"
import future from "../../../images/WomenKros2.webp"
import arsenal from "../../../images/WomenSport.jpg"
import harakter from "../../../images/harakter.png"
import WomenShavdo from "../WomenShavdo/WomenShavdo"
function MenFuture() {
    return (
        <div>
            <div className='Menfuture'>
                <div className='Menfuture_cart'>
                    <img src={future} alt="" />
                    <h4>FIND YOUR FUTURE</h4>
                    <p>When you focus on the future, nothing can hold  you back.</p>
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
                        <h4>MAKE YOUR HARDER WORKOUTS EASIER</h4>
                        <p>Move supported. Stay free from distractions.</p>
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
            <WomenShavdo />
        </div>
    )
}

export default MenFuture