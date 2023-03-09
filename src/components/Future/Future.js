import React from 'react'
import "./Future.scss"
import img1 from "../../images/img1.webp"
import vidio from "../../images/vidio.mp4"
import jamike from "../../images/jamike.png"
import oyoq from "../../images/oyoq.png"
import More from '../More/More'
function Future() {
    return (
        <div>
            <div className='Afuture'>
                <div className='Afuture_cart'>
                    <img src={img1} alt="" />
                    <h4>MANHATTAN SPORTSWEAR</h4>
                    <p>Iconic sportswear reimagined for any wear. On or off the pitch.</p>
                    <h5>SHOP NOW</h5>
                </div>
                <div className='Afuture_cart'>
                    <video autoPlay loop muted src={vidio}></video>
                    <h4>4DFWD 2. THE FUTURE OF RUNNING.</h4>
                    <p>Redefining forward motion. Forever. Coming soon.</p>
                    <h5>SHOP NOW</h5>
                </div>
                <div className='Afuture_cart'>
                    <div className='Afuture_cart'>
                        <img src={jamike} alt="" />
                        <h4>MANHATTAN x JAMAICA 2023</h4>
                        <p>A new partnership celebrating Jamaican style and culture through soccer.</p>
                        <h5>SHOP NOW</h5>
                    </div>
                </div>
                <div className='Afuture_cart'>
                    <div className='Afuture_cart'>
                        <img src={oyoq} alt="" />
                        <h4>FIND YOUR FUTURE</h4>
                        <p>When you focus on the future, nothing can hold  you back.</p>
                        <h5>SHOP NOW</h5>
                    </div>
                </div>
            </div>
            <More />
        </div>
    )
}

export default Future