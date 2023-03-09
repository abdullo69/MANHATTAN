import React from 'react'
import WomenKros from "../../../images/WomenKros.webp"
import WomenTops from "../../../images/WomenTops.webp"
import WomenShim from "../../../images/WomenShim.webp"
import Toplamlar from "../../../images/Toplamlar.webp"
import WomenFuture from "../WomenFuture/WomenFuture"
function MenShoes() {
    return (
        <div>
            <div className='Menshoes'>
                <div className="Menshoes_card">
                    <img src={WomenKros} alt="" />
                    <h2>
                        Krossovkalar</h2>
                </div>
                <div className="Menshoes_card">
                    <img src={WomenTops} alt="" />
                    <h2>Tops</h2>
                </div>
                <div className="Menshoes_card">
                    <img src={WomenShim} alt="" />
                    <h2>Shimlar</h2>
                </div>
                <div className="Menshoes_card">
                    <img src={Toplamlar} alt="" />
                    <h2>Toplamlar</h2>
                </div>
            </div>
            <WomenFuture />
        </div>
    )
}

export default MenShoes