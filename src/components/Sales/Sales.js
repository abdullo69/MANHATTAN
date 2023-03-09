import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./Sales.scss"
import { FcLike } from "react-icons/fc"
import { collection, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { useState, useEffect, useContext } from "react";
import db, { storage } from "../../firebase/FirebaseConfig";
import { ref, deleteObject } from "firebase/storage";
import { AuthContext } from "../../context/AuthContext";
import img from "../../images/img1.webp"
import Sne from './Sne/Sne';
function Sales() {
    const { getAdmin } = useContext(AuthContext)
    console.log(getAdmin)
    const [data, setData] = useState([])
    const [updateTitle, setUpdateTitle] = useState("")

    useEffect(() => {
        const getData = async () => {
            let box = []
            let FirebaseData = await getDocs(collection(db, "sale"))
            FirebaseData.forEach(doc => {
                return box.push({ data: doc.data(), id: doc.id })
            })
            setData(box)
        }
        getData()

    }, [])

    const deleteBlog = async (docs) => {
        deleteStorageImage(docs.data.imgFileName)
        await deleteDoc(doc(db, "sale", docs.id));
        window.location.reload()
    }
    const titleUpdate = async (id) => {

        const Update = doc(db, "sale", id);

        await updateDoc(Update, {
            title: updateTitle
        });
        window.location.reload()

    }


    const deleteStorageImage = async (imgDelete) => {
        const desertRef = ref(storage, `images/${imgDelete}`);
        console.log(imgDelete)
        await deleteObject(desertRef).then((del) => {
            console.log("del : ", del)
        }).catch((error) => {
            console.log("error chiqdi", error)
        });
    }

    return (
        <div>
            <Navbar />
            <div className="sale_navbar">
                <h1>KIYIM, POYABAL VA AKSESSUARLAR CHEKTILARI: KOD* BAHO BILAN 65% CHEGIRMA [4579]</h1>
                <p>Manhattanning yangi sotuv uslublari zaxiralar tugagunga qadar mavjud – shuning uchun ular tugashidan oldin sevimlilaringizni oling. Toʻlov paytida SCORE kod bilan 65% gacha chegirmadan bahramand boʻling. Taklif 16.02.21 dan 02.02.21 gacha onlayn va doʻkonda amal qiladi, yetkazib berish muddati tugaydi. Istisnolar qo'llaniladi.</p>
                <h1>BIZNING BARCHA MAXSULOTLARIMIZ</h1>
            </div>

            <div className='sale_carts'>

                {data.map((doc, inx) => (
                    <div className="sale_cart" key={inx}>
                        <img src={doc.data.image} alt="" />
                        <p>{doc.data.narxi}</p>
                        <p>{doc.data.title}</p>
                        <p>{doc.data.chegirma}</p>

                        {getAdmin === true ? <div className='admin_btn'>
                            <button onClick={() => titleUpdate(doc.id)}>Update blog</button>
                            <button onClick={() => deleteBlog(doc)}>Delete blog</button>
                        </div> :
                            <div className='card_btn'>
                                <button>Xarid qilish</button>
                                <button><FcLike /></button>
                            </div>}
                    </div>
                ))}



            </div>
            <Sne />
        </div>
    )
}

export default Sales