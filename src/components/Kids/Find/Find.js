import React from 'react'
import "./Find.scss"
import find1 from "../../../images/find1.webp"
import find2 from "../../../images/find2.webp"
import Swiper from '../Swiper/Swiper'
function Find() {
    return (
        <div>
            <div className='finds'>
                <div className="find1">
                    <img src={find1} alt="" />
                    <h4>FIND THEIR FIT</h4>
                    <p>Kids feet grow fast. Use our Kids Shoe Size Guide for step-by-step instructions on how to measure, complete with fit tips and product suggestions.</p>
                    <h5>GO TO SHOE SIZE GUIDE</h5>
                </div>

                <div className='find2'>
                    <img src={find2} alt="" />
                    <h4>THE RIGHT SIZE MATTERS</h4>
                    <p>Buying clothes for kids can be tricky. Check out our Kids Clothing Size Guide to learn how to measure and find their perfect fit.</p>
                    <h5>GO TO SHOE SIZE GUIDE</h5>
                </div>
            </div>
            <Swiper />
        </div>
    )
}

export default Find