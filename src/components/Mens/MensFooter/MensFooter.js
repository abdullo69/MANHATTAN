import React from 'react'
import "./MensFooter.scss"
import { BsFacebook, BsInstagram, BsTwitter, BsTelegram } from "react-icons/bs"
function MensFooter() {
    return (
        <div>
            <div className='Mensfooter'>
                <div className='Mensfooter_navbar'>
                    <h1>JOIN OUR ADICLUB & GET <br /> 15% OFF</h1>
                    <button>SIGN UP FOR FREE</button>
                </div>

                <div className='Mensfooter_carts'>
                    <div className='Mensfooter_cart'>
                        <h3>PRODUCTS</h3>
                        <p>Shoes</p>
                        <p>Clothing</p>
                        <p>Accessories</p>
                        <p>Gift Cards</p>
                    </div>

                    <div className='Mensfooter_cart'>
                        <h3>SPORTS</h3>
                        <p>Soccer</p>
                        <p>Running</p>
                        <p>Basketbaal</p>
                        <p>Football</p>
                    </div>


                    <div className='Mensfooter_cart'>
                        <h3>COLLECTIONS</h3>
                        <p>Adicolor</p>
                        <p>Ultraboost</p>
                        <p>NMD</p>
                        <p>Forum</p>
                    </div>

                    <div className='Mensfooter_cart'>
                        <h3>SUPPORT</h3>
                        <p>Help</p>
                        <p>Returs & Exchanges</p>
                        <p>Shipping</p>
                        <p>Order Tracker</p>
                    </div>

                    <div className='Mensfooter_cart'>
                        <h3>FOLLOW US</h3>
                        <div className="iconss">
                            <p><BsFacebook style={{ fontSize: "20px", marginTop: "10px", cursor: "pointer" }} /></p>
                            <p><BsInstagram style={{ fontSize: "20px", marginTop: "10px", cursor: "pointer" }} /></p>
                            <p><BsTwitter style={{ fontSize: "20px", marginTop: "10px", cursor: "pointer" }} /></p>
                            <p><BsTelegram style={{ fontSize: "20px", marginTop: "10px", cursor: "pointer" }} /></p>
                        </div>
                    </div>

                </div>

            </div>
            <div className='Mensfooter2'>
                <div className='Mensfooter2_data'><p>Data settings |
                    Do not sell my personal information |
                    Privacy Policy |
                    Terms and Conditions</p></div>

                <h6>© 2023 manhattan America, Inc.</h6>
            </div>
        </div>
    )
}

export default MensFooter