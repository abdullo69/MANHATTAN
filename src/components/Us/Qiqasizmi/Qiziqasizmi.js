import React from 'react'
import "./Qiziqasizmi.scss"
import { FcLike } from "react-icons/fc"
import { collection, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { useState, useEffect, useContext } from "react";
import db, { storage } from "../../../firebase/FirebaseConfig";
import { ref, deleteObject } from "firebase/storage";
import { AuthContext } from "../../../context/AuthContext";
import oyoq from "../../../images/oyoq.png"
import erkak from "../../../images/erkak.png"
import ayol from "../../../images/ayol.png"
import barcha from "../../../images/barcha.png"
import Arri from '../Arri/Arri';
function Qiziqasizmi() {
    const { getAdmin } = useContext(AuthContext)
    console.log(getAdmin)
    const [data, setData] = useState([])
    const [updateTitle, setUpdateTitle] = useState("")

    useEffect(() => {
        const getData = async () => {
            let box = []
            let FirebaseData = await getDocs(collection(db, "qiziqasizmi"))
            FirebaseData.forEach(doc => {
                return box.push({ data: doc.data(), id: doc.id })
            })
            setData(box)
        }
        getData()

    }, [])
    // console.log(first)

    const deleteBlog = async (docs) => {
        deleteStorageImage(docs.data.imgFileName)
        await deleteDoc(doc(db, "qiziqasizmi", docs.id));
        // console.log(docs.data.imgFileName)
        window.location.reload()
    }
    const titleUpdate = async (id) => {

        const Update = doc(db, "qiziqasizmi", id);

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
            <div className='qiziqasizmi'>
                <h1 style={{ paddingLeft: "70px" }}>Qiziqasizmi</h1>
                <div className='qiziq_carts'>

                    {data.map((doc, inx) => (
                        < div className='qiziq_card' key={inx}>
                            <img src={doc.data.image} alt="" />
                            <h5 style={{ paddingLeft: "10px" }}>{doc.data.narxi}</h5>
                            <h4 style={{ paddingLeft: "10px" }}>{doc.data.title}</h4>
                            <p style={{ paddingLeft: "10px" }}>{doc.data.chegirma}</p>

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
            </div >
            <div className='Ashoes'>
                <div className="Ashoes_card">
                    <img src={oyoq} alt="" />
                    <h2>Oyoq kiyim</h2>
                </div>
                <div className="Ashoes_card">
                    <img src={erkak} alt="" />
                    <h2>Erkaklar</h2>
                </div>
                <div className="Ashoes_card">
                    <img src={ayol} alt="" />
                    <h2>Ayollar</h2>
                </div>
                <div className="Ashoes_card">
                    <img src={barcha} alt="" />
                    <h2>Barchasi</h2>
                </div>
            </div>
            <Arri />
        </div>
    )
}

export default Qiziqasizmi