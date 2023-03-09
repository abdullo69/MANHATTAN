import React from 'react'
import MensFooter from '../MensFooter/MensFooter'
import "./Recen.scss"
function Recen() {
    return (
        <div className='recen'>
            <div className="recen_texts1">
                <h1>ERKAKLAR KIYIMLARI VA POYABAFLARI</h1>
                <p>Ijodkor sifatida siz qachon va qayerda o'zingizni ifoda etish yo'llarini qidirasiz, oxirgi takrorlashdan tortib ko'cha kiyim uslubingizni rivojlantirishgacha. Kirish millari yoki sezgir tamponlama bilan erkaklar poyafzalidagi asosiy chiziqni yirtib tashlang. Sport merosidan kelib chiqqan turmush tarzi kiyimida sport uslubini maydon tashqarisida takrorlang. Sportchilardan tortib to ko'cha kiyimi ishqibozlarigacha, Adidas erkaklar kiyimi va poyafzallari sizga qattiqroq borish, chuqurroq qazish va o'zingizdan maksimal darajada foydalanish imkonini beradi - maydondan ko'chagacha, kamroq sayohat qilingan yo'lgacha.
                </p>
            </div>

            <div className='recen_carts'>
                <div className="recen_cart">
                    <h4>
                        ERKAKLAR KIYIMLARI</h4>
                    <p>futbolkalar</p>
                    <p>
                        Kurtkalar</p>
                    <p>Qisqa shimlar</p>
                    <p>
                        Shimlar va joggerlar</p>
                </div>

                <div className="recen_cart">
                    <h4>
                        ERKAKLAR POYABAFLI</h4>
                    <p>Kundalik krossovkalar</p>
                    <p>
                        Yuqori krossovkalar</p>
                    <p>
                        Klassik krossovkalar</p>
                    <p>
                        Slip On Krossovkalar</p>
                </div>

                <div className="recen_cart">
                    <h4>
                        ERKAKLAR AKSESUARLARI</h4>
                    <p>
                        Erkaklar ryukzaklari</p>
                    <p>

                        Erkaklar duffle sumkalari</p>
                    <p>
                        Erkaklar paypoqlari</p>
                    <p>

                        Erkaklar bosh kiyimlari</p>
                </div>

                <div className="recen_cart">
                    <h4>
                        ERKAKLAR KOLEKSIYALARI</h4>
                    <p>

                        Erkaklar yugurish</p>
                    <p>

                        Erkaklar duffle sumkalari</p>
                    <p>

                        Erkaklar futboli</p>
                    <p>


                        Erkaklar dam olish kiyimlari</p>
                </div>
            </div>
            <MensFooter />
        </div>
    )
}

export default Recen