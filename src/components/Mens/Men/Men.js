import React from 'react'
import Navbar from '../../Navbar/Navbar'
import logo from "../../../images/logo.jpg"
import { AiOutlineRight } from "react-icons/ai"
import Bg from "../../../images/bg2.png"
import MenShoes from '../MenShoes/MenShoes'
function Men() {
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
                        <img src={Bg} alt="" />

                    </div>
                </div>
            </div>
            <MenShoes />
        </div>
    )
}

export default Men