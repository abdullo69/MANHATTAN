import React from 'react'
import Navbar from "../Navbar/Navbar"
import "./Help.scss"
import Top from './Top/Top'
function Help() {
    return (
        <div>
            <Navbar />
            <div className='help'>
                <h1>FREQUENTLY ASKED QUESTIONS</h1>
                <h3>WHAT IS THE ADIDAS EMPLOYEE STORE DIGITAL PASS?</h3>
                <h3>HOW DO I RETURN MY PRODUCT(S)?</h3>
                <h3>WHAT ARE THE TERMS AND CONDITIONS?</h3>
                <h3>WHY CAN'T I FIND MY ORDER IN MY ORDER HISTORY?
                </h3>
                <h3>WHY DOESN’T MY PROMOTION CODE APPLY THE CORRECT DISCOUNT TO MY ORDER?</h3>
                <h3>HOW DO I CREATE AN ACCOUNT?
                </h3>
                <h3>WHAT SHOULD I KNOW ABOUT PERSONALIZED GEAR?</h3>
                <h3>HOW DO I RESET MY ACCOUNT PASSWORD?</h3>
            </div>

            <Top />
        </div>
    )
}

export default Help