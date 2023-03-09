import React from 'react'
import Navbar from "../Navbar/Navbar"
import "./Exchanges.scss"
import Footer from "./ExchangesFooter"
function Exchanges() {
    return (
        <div>
            <Navbar />
            <div className='exchans'>
                <div className='exchan'>
                    <h2>Exchanges & Returns</h2>
                    <button className='btn1'>FREE SIZE EXCHAGE</button>
                    <br />
                    <button className='btn2'>START YOUR RETURN</button>
                    <h3>TRACK YOUR RETURN</h3>
                </div>
            </div>
            <ul id="accordion">
                <li>
                    <label for="first">FAQ: RETURNS <span>&#x3e;</span></label>
                    <input type="radio" name="accordion" id="first" checked />
                    <div class="content">
                        <p><span style={{ fontWeight: "600" }}>How many days do I have to return?</span><br />
                            We offer free returns and exchanges within 30 days of your delivery. <span style={{ fontWeight: "600" }}>We are extending the return window to 60 days for 10/18/22 to 1/10/23.</span>
                            Hype products such as Yeezy should be returned via the <span style={{ textDecoration: "underline", cursor: "pointer" }}>online returns</span> portal within seven days of the delivery date. The product page communicates the seven-day return window during the ordering process. <br /> <br />

                            <span style={{ fontWeight: "600" }}>   How do I return my order? </span><br />
                            Create your return from adidas.com and we will provide a pre-pad return label. Simply print and place the label on your return package and drop off at the nearest FedEx location <br /> <br />

                            <span style={{ fontWeight: "600" }}>How quickly will my return be processed? </span><br />
                            We will process your return within 21 business days from the time it is received to our warehouse. Please allow up to 21 business days for your refund to post to your account once your return has been processed by our warehouse.
                            <br /> <br />
                            <span style={{ fontWeight: '600' }}> Can I mail back a return using my own label?</span> <br />
                            No, returns must be created from adidas.com and mailed back with the trackable FedEx label provided.

                        </p>
                    </div>
                </li>

                <li>
                    <label for="second">FAQ: EXCHANGES <span>&#x3e;</span></label>
                    <input type="radio" name="accordion" id="second" />
                    <div class="content">
                        <p><span style={{ fontWeight: '600' }}>How long does an exchange take?
                        </span><br />
                            A new exchange order will be created for the size you selected. Your exchange order is valid for seven days; therefore, you will need to drop the original item off at the return carrier within that timeframe*. Your exchange order will start processing once our warehouse team has processed the returned product. All returned/exchanged items are subject to inspection by our Warehouse Team. Please allow up to 21 business days plus standard shipping times for delivery of all exchanged items. An email with your exchange order tracking will be sent once your order ships. You can also find your tracking information in your Order History. <br /> <br />

                            <span style={{ fontWeight: '600' }}>How long is my exchange request good for?</span> <br />
                            Your new product is held for up to 10 days from when you start an exchange. In the event you mail back the item after the 10 day period we will process it as a normal return and refund your original method of payment. <br /> <br />

                            <span style={{ fontWeight: "600" }}>Can I exchange for a different product?</span> <br />
                            We only offer exchanges on the same product in a different size at this time.</p>
                    </div>
                </li>

                <li>
                    <label for="third">FAQ: REFUND <span>&#x3e;</span></label>
                    <input type="radio" name="accordion" id="third" />
                    <div class="content">
                        <p><span style={{ fontWeight: "600" }}>When will I get my refund?</span> <br />
                            Refunds will be issued back to your original form of payment within 21 business days once our warehouse team has processed the returned product. Please allow up to 21 business days for your refund to post to your account. Normal bank processing times do apply and may take up to a full billing cycle.<br /><br />

                            <span style={{ fontWeight: "600" }}>  How will I be refunded if I paid with a gift card?</span><br />
                            Orders paid with a gift cards will be refunded with a new digital gift card, emailed directly to the email address on file for the order. Returns on orders paid partially with a gift card will have the gift card balance refunded in full prior to refunding the credit card on file.<br /><br />

                            <span style={{ fontWeight: "600" }}> Will I be refunded for the shipping fee?</span><br />
                            No, we do not refund the shipping fee. Sign up for adiClub and receive free shipping and many other benefits!</p>
                    </div>
                </li>

                <button className='need'>NEED MORE INFO OR HELP?</button>
            </ul>

            <Footer />
        </div>
    )
}

export default Exchanges