import React from 'react'
import oyoq from "../../../images/oyoq.png"
import futbolka from "../../../images/futbolka.webp"
import pants from "../../../images/pants.webp"
import sovga from "../../../images/sovga.jpg"
import "./MenShoes.scss"
import MenFuture from '../MenFuture/MenFuture'
function MenShoes() {
    return (
        <div>
            <div className='Menshoes'>
                <div className="Menshoes_card">
                    <img src={oyoq} alt="" />
                    <h2>
                        Krossovkalar</h2>
                </div>
                <div className="Menshoes_card">
                    <img src={futbolka} alt="" />
                    <h2>Tops</h2>
                </div>
                <div className="Menshoes_card">
                    <img src={sovga} alt="" />
                    <h2>Sovg'a</h2>
                </div>
                <div className="Menshoes_card">
                    <img src={pants} alt="" />
                    <h2>Pants</h2>
                </div>
            </div>
            <MenFuture />
        </div>
    )
}

export default MenShoes