import React from 'react'
import "./Admin.scss"
import { collection, addDoc } from "firebase/firestore"
import { useNavigate } from 'react-router-dom'
import db, { storage } from "../firebase/FirebaseConfig"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { useState } from 'react'

function Admin() {
    const [ImageUpload, setImageUpload] = useState(null)
    const [inputData, setInputData] = useState({
        title: "",
        narxi: "",
        chegirma: 0,
        category: "",
        new: "",
    })
    const [load, setLoad] = useState(false)
    console.log(inputData)
    const navigate = useNavigate()

    const SentBlog = async (e) => {
        e.preventDefault()
        console.log("ishladi");
        UploadImage()

    }

    async function SendFirebase(imgLink) {
        if (inputData.title === "" || inputData.narxi === "" || inputData.chegirma === 0) {
            alert("joylarni toldiring!")
        } else {
            await addDoc(collection(db, inputData.category), {
                title: inputData.title,
                narxi: inputData.narxi,
                chegirma: inputData.chegirma,

            });
            setLoad(false)

            navigate("/")
        }


    }

    function UploadImage() {
        const storageRef = ref(storage, `images/${ImageUpload.name}`);
        const uploadTask = uploadBytesResumable(storageRef, ImageUpload);
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {
                // Handle unsuccessful uploads
            },
            () => {

                getDownloadURL(uploadTask.snapshot.ref).then((imgLink) => {
                    SendFirebase(imgLink)
                    console.log(imgLink)
                });
            }
        );
    }
    const GetImage = (e) => {
        setImageUpload(e.target.files[0])
        console.log(e.target.files[0])
    }








    return (
        <div>
            <form action="" onSubmit={SentBlog}>
                <h3>Qiziqasizmi</h3>

                <input className='custom-file-input' type="file" onChange={GetImage} />
                <label htmlFor="">Narxi</label>
                <input name="" onChange={(e) => setInputData({ ...inputData, narxi: e.target.value })} placeholder='Narxi...' />
                <label htmlFor="">Title</label>

                <input onChange={(e) => setInputData({ ...inputData, title: e.target.value })} className='input' type="text" placeholder='Title...' />


                <label htmlFor="">Original</label>
                <input type="text" onChange={(e) => setInputData({ ...inputData, chegirma: e.target.value })} placeholder='Blog number...' />
                <select onChange={(e) => setInputData({ ...inputData, category: e.target.value })} name="" id="">
                    <option value="">Kategoriyalar</option>
                    <option value="yangi">Yangi</option>
                    <option value="qiziqasizmi">Qiziqasizmi</option>
                    <option value="savdo">Savdo</option>
                    <option value="uldra">Ultra</option>
                    <option value="recen">Recen</option>
                    <option value="women">Women</option>
                    <option value="kid">Kids</option>
                    <option value="sale">Sele</option>
                </select>
                <button>Add blog</button>

            </form>




        </div>



    )
}

export default Admin