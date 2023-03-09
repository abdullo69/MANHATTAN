import React, { useContext, useState } from 'react'
import "./Navbar.scss"
import { BsSearch } from "react-icons/bs"
import { AiOutlineUser, AiOutlineBars, AiOutlineShoppingCart } from "react-icons/ai"
import { GrUserAdmin } from "react-icons/gr"
import { FcLike } from "react-icons/fc"
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"
import { auth } from '../../firebase/FirebaseConfig'

import logo from "../../images/logo.jpg"
function Navbar() {
    const [googleData, setGoogleData] = useState({
        Name: "",
        Email: "",
        Img: "",
    })

    const { } = useContext
    const provider = new GoogleAuthProvider()
    const SignInWithGoogle = () => {
        signInWithPopup(auth, provider).then(res => {
            window.location.reload()
        }).catch(
            err => console.log("internet topilmadi.")
        )
    }


    const SIGNOUT = () => {
        signOut(auth)
        window.location.reload()
    }
    return (
        <div className='navbar'>
            <div className='navbar_1'>
                <a href="help"><p>help</p></a>
                <a href="excan"><p>exchanges & returns</p></a>
            </div>

            <div className='navbar2'>
                <AiOutlineBars className='bars' />

                <a href="us"><div className='img'>
                    <img src={logo} alt="" /></div></a>
                <ul>
                    <li className='men' style={{ fontWeight: "600" }}><a href='men' style={{ color: "black", textDecoration: "none" }}>MEN</a>
                        <div className='men_card'>
                            <div className='new'>
                                <h3>YANGI & SAVDOLAR</h3>
                                <p>YANGI ERKAKLAR KIYMI</p>
                                <p>YANGI AYOLLAR KIYMI</p>
                                <p>YANGI BOLALAR KIYMI</p>
                            </div>

                            <div className='new'>
                                <h3>POYAPZAL</h3>
                                <p>CLASSCIK</p>
                                <p>O'LCHAMLI</p>
                                <p>SPORT</p>
                            </div>

                            <div className='new'>
                                <h3>SPORT KIYIMLARI</h3>
                                <p>Futbool</p>
                                <p>Baketbol</p>
                                <p>Suzis</p>
                            </div>



                            <div className='new'>
                                <h3>Zamonaviy kiyimlar</h3>
                                <p>Futbolka</p>
                                <p>Shim</p>
                                <p>Oyoq kiyim</p>
                            </div>



                        </div>
                    </li>


                    <li className='women' style={{ fontWeight: "600", }}><a href='women' style={{ color: "black", textDecoration: "none" }}>WOMEN</a>
                        <div className='women_cards'>
                            <div className='women_card'>
                                <h3>YANGI & SAVDOLAR</h3>
                                <p>YANGI AYOLLAR KIYMI</p>
                                <p>YANGI ERKAKLAR KIYMI</p>
                                <p>YANGI BOLALAR KIYMI</p>
                            </div>

                            <div className='women_card'>
                                <h3>Ko'ylaklar</h3>
                                <p>Uy uchun</p>
                                <p>To'y va bazmlar uchun</p>
                                <p>Oddiy</p>
                            </div>

                            <div className='women_card'>
                                <h3>Muslima ayollar uchun</h3>
                                <p>Hijob</p>
                                <p>Hijob uchun kiyim</p>
                                <p>Kamplect</p>
                            </div>



                            <div className='women_card'>
                                <h3>Zamonaviy kiyimlar</h3>
                                <p>Futbolka</p>
                                <p>Shim</p>
                                <p>Oyoq kiyim</p>
                            </div>



                        </div>
                    </li>


                    <li className='kids' style={{ fontWeight: "600" }}><a href='kids' style={{ textDecoration: "none", color: "black    " }}>KIDS</a>
                        <div className='kids_cards'>
                            <div className='kids_card'>
                                <h3>YANGI & SAVDOLAR</h3>
                                <p>YANGI BOLALAR KIYMI</p>
                                <p>YANGI ERKAKLAR KIYMI</p>
                                <p>YANGI AYOLLAR KIYMI</p>
                            </div>

                            <div className='kids_card'>
                                <h3>Bolalar uchun</h3>
                                <p>O'g'il bola</p>
                                <p>Qiz bola</p>
                                <p>Egizak</p>
                            </div>

                            <div className='kids_card'>
                                <h3>Bolalar uchun</h3>
                                <p>1-5 yoshgacha</p>
                                <p>5-8 yoshgacha</p>
                                <p>8-10-yoshgacha</p>
                            </div>



                            <div className='kids_card'>
                                <h3>Zamonaviy kiyimlar</h3>
                                <p>Futbolka</p>
                                <p>Shim</p>
                                <p>Oyoq kiyim</p>
                            </div>



                        </div>
                    </li>



                    <li className='sale'><a href='sales' style={{ color: "black", textDecoration: "none" }}>SALE</a>
                        <div className='sale_cards'>
                            <div className='sale_card'>
                                <h3>BIZ BILAN SOTISH</h3>
                                <p>Yangi bo'lganlarga 50% chegirma</p>
                            </div>

                            <div className='sale_card'>
                                <h3>Erkaklar</h3>
                                <p>Pozabzal</p>
                                <p>Kiyim</p>
                                <p>Barchasi</p>
                            </div>

                            <div className='sale_card'>
                                <h3>Ayollar va qizlar</h3>
                                <p>Poyabzal</p>
                                <p>Kiyim</p>
                                <p>Barchasi</p>
                            </div>



                            <div className='sale_card'>
                                <h3>Bolalar uchun</h3>
                                <p>O'g'il bolalar</p>
                                <p>Qiz bo'lalar</p>
                                <p>Barchasi</p>
                            </div>



                        </div>
                    </li>

                </ul>

                <input type="text" name="" id="" placeholder='search' />
                <BsSearch className='search' />


                {localStorage.getItem("Email") === "" ? < div onAuxClick={SignInWithGoogle} className='icons'>
                    <AiOutlineUser className='users' onClick={SignInWithGoogle} />
                    <FcLike />
                    <AiOutlineShoppingCart />
                </div> :


                    <div>

                        <button className='sign' onClick={SIGNOUT}>Sign Out</button>
                        <a style={{ paddingLeft: "40px", fontSize: "25px", position: "absolute" }} href="admin"><GrUserAdmin className='user' /></a>

                    </div>
                }



                <div className='over'>
                    <h1 className='over_text'>{localStorage.getItem("Name")}</h1>

                </div>



            </div>
        </div>
    )
}

export default Navbar