import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { FcLike } from "react-icons/fc"
import { collection, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { useState, useEffect, useContext } from "react";
import db, { storage } from "../../../firebase/FirebaseConfig";
import { ref, deleteObject } from "firebase/storage";
import { AuthContext } from "../../../context/AuthContext";
import "./MensSavdo.scss"
import Uldra from '../Uldra/Uldra';


function MensSavdo() {
    const { getAdmin } = useContext(AuthContext)
    console.log(getAdmin)
    const [data, setData] = useState([])
    const [updateTitle, setUpdateTitle] = useState("")

    useEffect(() => {
        const getData = async () => {
            let box = []
            let FirebaseData = await getDocs(collection(db, "savdo"))
            FirebaseData.forEach(doc => {
                return box.push({ data: doc.data(), id: doc.id })
            })
            setData(box)
        }
        getData()

    }, [])

    const deleteBlog = async (docs) => {
        deleteStorageImage(docs.data.imgFileName)
        await deleteDoc(doc(db, "savdo", docs.id));
        window.location.reload()
    }
    const titleUpdate = async (id) => {

        const Update = doc(db, "savdo", id);

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

    console.log(window.screen.width);

    return (



        <div>
            <Swiper className='Mensarri_carts'
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={window.screen.width < 500 ? 2 : 4}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {data.map((doc, inx) => (
                    <SwiperSlide className='Mensarri_card' key={inx}>
                        <img src={doc.data.image} alt="" />
                        <p>{doc.data.narxi}</p>
                        <p>{doc.data.title}</p>
                        <p>{doc.data.chegirma}</p>
                        <p>{doc.data.new}</p>

                        {getAdmin === true ? <div className='admin_btn'>
                            <button onClick={() => titleUpdate(doc.id)}>Update blog</button>
                            <button onClick={() => deleteBlog(doc)}>Delete blog</button>
                        </div> :
                            <div className='card_btn'>
                                <button>Xarid qilish</button>
                                <button><FcLike /></button>
                            </div>}
                    </SwiperSlide>
                ))}


            </Swiper>

            <Uldra />
        </div>
    )

}

export default MensSavdo