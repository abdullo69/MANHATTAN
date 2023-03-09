import React from 'react'
import "./Future.scss"
import img1 from "../../../images/yashil.webp"
import vidio from "../../../images/boy.jpg"
import jamike from "../../../images/8.png"
import oyoq from "../../../images/3.jpg"
import More from '../../More/More'
import Find from '../Find/Find'

function Future1() {
    return (
        <div>
            <div className='future'>
                <div className='future_cart'>
                    <img src={img1} alt="" />
                    <h4>SNEAKER SEEKER</h4>
                    <p>Iconic sportswear reimagined for any wear. On or off the pitch.</p>
                    <h5>SHOP NOW</h5>
                </div>
                <div className='future_cart'>
                    <img src={vidio} alt="" />
                    <h4>MADE FOR MAIN CHARACTERS</h4>
                    <p>Redefining forward motion. Forever. Coming soon.</p>
                    <h5>SHOP NOW</h5>
                </div>
                <div className='future_cart'>
                    <div className='future_cart'>
                        <img src={jamike} alt="" />
                        <h4>ICONIC FEELS</h4>
                        <p>A new partnership celebrating Jamaican style and culture through soccer.</p>
                        <h5>SHOP NOW</h5>
                    </div>
                </div>
                <div className='future_cart'>
                    <div className='future_cart'>
                        <img src={oyoq} alt="" />
                        <h4>YOUTH</h4>
                        <p>Shop the latest clothes and shoes for 8–14-year-olds.</p>
                        <h5>SHOP NOW</h5>
                    </div>
                </div>
            </div>
            <Find />
        </div>
    )
}

export default Future1