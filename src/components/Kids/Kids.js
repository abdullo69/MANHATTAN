import React from 'react'
import logo from '../../images/logo.jpg'
import { AiOutlineRight } from 'react-icons/ai'
import bg from "../../images/2.jpg"
import "./Kids.scss";
import Future1 from './Future1/Future'
import Navbar from "../Navbar/Navbar"
function Kids() {
    return (
        <div>
            <Navbar />
            <div className='us1'>
                <div className='us_text1'>
                    <img src={logo} alt="" />
                    <h1>PARK YO'LI</h1>
                    <p>Qoidalar bo'yicha o'ynashdan bosh tortgan avlod uchun qayta tug'iladi. Yangi davrga xush kelibsiz.</p>
                    <button> HOZIR OLISH <AiOutlineRight /></button>
                </div>
                <div className='us_img1'>
                    <img src={bg} alt="" />

                </div>
            </div>
            <Future1 />
        </div>
    )
}

export default Kids