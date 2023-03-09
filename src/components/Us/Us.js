import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./Us.scss"
import logo from "../../images/logo.jpg"
import { AiOutlineRight } from "react-icons/ai"
import bg from "../../images/bg.png"
import Qiziqasizmi from './Qiqasizmi/Qiziqasizmi'

function Us() {
    return (
        <div>
            <div>
                <Navbar />
                <div className='us'>
                    <div className='us_text'>
                        <img src={logo} alt="" />
                        <h1>PARK YO'LI</h1>
                        <button>HOZIR OLISH <AiOutlineRight /></button>
                    </div>
                    <div className='us_img'>
                        <img src={bg} alt="" />

                    </div>
                </div>
            </div>
            <Qiziqasizmi />
        </div>
    )
}

export default Us