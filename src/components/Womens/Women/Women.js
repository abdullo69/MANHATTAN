import React from 'react'
import Navbar from '../../Navbar/Navbar'
import logo from "../../../images/logo.jpg"
import { AiOutlineRight } from "react-icons/ai"
import Women from "../../../images/Women.png"
import WomenShoes from "../WomenShoes/WomenShoes"
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
                        <img src={Women} alt="" />

                    </div>
                </div>
            </div>
            <WomenShoes />
        </div>
    )
}

export default Men