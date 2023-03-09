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
import "./Uldra.scss"
import Recen from '../Recen/Recen';
export default () => {
    const { getAdmin } = useContext(AuthContext)
    console.log(getAdmin)
    const [data, setData] = useState([])
    const [updateTitle, setUpdateTitle] = useState("")

    useEffect(() => {
        const getData = async () => {
            let box = []
            let FirebaseData = await getDocs(collection(db, "uldra"))
            FirebaseData.forEach(doc => {
                return box.push({ data: doc.data(), id: doc.id })
            })
            setData(box)
        }
        getData()

    }, [])

    const deleteBlog = async (docs) => {
        deleteStorageImage(docs.data.imgFileName)
        await deleteDoc(doc(db, "uldra", docs.id));
        window.location.reload()
    }
    const titleUpdate = async (id) => {

        const Update = doc(db, "uldra", id);

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
            <Swiper className='Womenuldra'
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={window.screen.width < 500 ? 2 : 4}

                navigation
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {data.map((doc, inx) => (
                    <SwiperSlide className='Womenuldra_card' key={inx}>
                        <img src={doc.data.image} alt="" />

                        <div className='Womenuldra_text'>
                            <h3>{doc.data.narxi}</h3>
                            <p>{doc.data.title}</p>
                            <h4>{doc.data.cheuldra}</h4>

                        </div>
                        <h3 style={{ paddingLeft: "10px", textDecoration: "underline" }}>Learn More</h3>
                    </SwiperSlide>
                ))
                }





            </Swiper >
            <Recen />
        </div>
    );
};