import React from 'react'
import "./Top.scss"
import Footer from "../Footer/Footer"
function Top() {
    return (
        <div>
            <div className='top'>
                <div className='top_text'>
                    <div className='top_cart'>
                        <h2>ACCOUNT NEWSLETTER</h2>
                        <div className='cart_text'>
                            <p>How do I change my account settings?</p>
                            <p>How do I stop receiving newsletters or other marketing emails?</p>
                            <p>How do I create an account?</p>
                            <p>How do I reset my account password?
                            </p>

                        </div>
                    </div>

                    <div className='top_cart'>
                        <h2>MANHATTAN RUNTASTIC</h2>
                        <div style={{ marginTop: "35px" }} className='cart_text'>
                            <p>How do I export or delete my fitness data?</p>
                            <p>How do I reset my password?</p>
                            <p>I'm having issues with my adidas fitness app(s) by Runtastic - what should I do?</p>
                            <p>How can I change my email address?</p>
                            <p>How do I delete my adidas and/or Runtastic account(s)?</p>
                            <p>I'm having issues with my adidas Runtastic premium membership - What should I do?</p>
                            <p>How can I unsubscribe from newsletters or other marketing emails from adidas and/or Runtastic?
                                WHERE</p>
                        </div>
                    </div>

                    <div className='top_cart'>
                        <h2>
                            COMPANY INFORMATION
                        </h2>
                        <div className='cart_text' style={{ marginTop: "-220px" }}>
                            <p>What donations does the adidas Group make?</p>
                            <p>What is adidas x Parley</p>
                            <p>What is #YESadidas?</p>
                            <p>How do I find a store nearby?</p>
                            <p>What are you doing to be sustainable?</p>

                        </div>
                    </div> <div className='top_cart'>
                        <h2>ADICLUB</h2>
                        <div className='cart_text' style={{ marginTop: "-150px" }}>
                            <p>What rewards can I get in the adiClub?</p>
                            <p>How can I get free shipping?</p>
                            <p>What are the adiClub terms and conditions?</p>
                            <p>How Can I Earn adiClub Points in the adidas Training by Runtastic app</p>
                            <p>What is adidas Runtastic Premium?</p>
                            <p>How do I become a member of the adiClub?</p>
                            <p>Do my adiClub points and/or member level expire?</p>
                            <p>Can I get adiClub points for past purchases?</p>
                            <p>How Can I Earn adiClub Points in the adidas Running by Runtastic app</p>
                            <p>Why should I join the adiClub?</p>
                            <p>How can I leave the adiClub?</p>
                        </div>
                    </div> <div className='top_cart'>
                        <h2>ORDENING</h2>
                        <div className='cart_text' style={{ marginTop: "-280px" }}>
                            <p>When will my order arrive?</p>
                            <p>What should I do if I haven’t received my package?
                                WHERE</p>
                            <p>How do I manage the content of my shopping bag?</p>
                            <p>How to choose different shipping methods</p>
                            <p>What are the Delivery Terms?</p>
                            <p>What emails will I receive regarding my order?</p>
                            <p>Where does adidas ship from?</p>
                            <p>Why can't I find my order in my order history?</p>
                            <p>How can adidas help with orders placed through a 3rd party?</p>
                            <p>How to edit shipping/billing info after placing order
                                WHERE</p>
                            <p>adidas Help & Customer Service Phone Number | adidas US</p>
                            <p>What is the adidas C02 Footprint?
                            </p>
                        </div>
                    </div>
                </div>
                <div className='top_text2'></div>
            </div>
            <Footer />
        </div>
    )
}

export default Top