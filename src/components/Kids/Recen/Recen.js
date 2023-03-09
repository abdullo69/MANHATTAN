import React from 'react'
import Footer from '../Footer/Footer'
import "./Recen.scss"
function Recen() {
    return (
        <div className='Womenrecen'>
            <div className="Womenrecen_texts1">
                <h1>
                    MANHATTAN BOLALAR KIYIMLARI VA BOLALAR OYUBBIYLARI</h1>
                <p>Ular dam olish kunlaridagi turnirda o‘ynayotgan katta bolalar bo‘ladimi yoki maymun barlarini o‘zlashtirgan kichkina bolalar bo‘ladimi, yosh ijodkor bo‘lish – tinmay o‘ynab, zavqlanishdir. Qizlar va o'g'il bolalarning o'yinini va uslubini qo'llab-quvvatlash uchun poyabzal toping. Adidas'dan o'g'il bolalar va qizlar kiyimlari va poyafzallari har qanday yoshdagi va bosqichdagi bolalarga qulaylik va ishonchni birinchi qadamlardan tortib shaxsiy yutuqlarigacha berish uchun yaratilgan.
                </p>
            </div>

            <div className='Womenrecen_carts'>
                <div className="Womenrecen_cart">
                    <h4>
                        Bolalar KIYIMLARI</h4>
                    <p>
                        Sport uchun sutyen</p>
                    <p>
                        Kurtkalar</p>
                    <p>Qisqa shimlar</p>
                    <p>
                        Shimlar va joggerlar</p>
                </div>

                <div className="Womenrecen_cart">
                    <h4>
                        Bolalar POYABAFLI</h4>
                    <p>Kundalik krossovkalar</p>
                    <p>
                        Yuqori krossovkalar</p>
                    <p>
                        Klassik krossovkalar</p>
                    <p>
                        Slip On Krossovkalar</p>
                </div>

                <div className="Womenrecen_cart">
                    <h4>
                        Bolalar AKSESUARLARI</h4>
                    <p>
                        Bolalar ryukzaklari</p>
                    <p>

                        Bolalar duffle sumkalari</p>
                    <p>
                        Bolalar paypoqlari</p>
                    <p>

                        Bolalar bosh kiyimlari</p>
                </div>

                <div className="Womenrecen_cart">
                    <h4>
                        Bolalar KOLEKSIYALARI</h4>
                    <p>

                        Bolalar yugurish</p>
                    <p>

                        Bolalar duffle sumkalari</p>
                    <p>

                        Bolalar futboli</p>
                    <p>


                        Bolalar dam olish kiyimlari</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Recen