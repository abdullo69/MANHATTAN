
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { getAuth } from "firebase/auth"
// require('dotenv').config()
// import Dotenv from "dotenv"
const firebaseConfig = {
    apiKey: "AIzaSyAlPfSu-bziW0qt3c32fZIOQrxGx5CdfjM",
    authDomain: "abdullo-66eff.firebaseapp.com",
    projectId: "abdullo-66eff",
    storageBucket: "abdullo-66eff.appspot.com",
    messagingSenderId: "69121451702",
    appId: "1:69121451702:web:858866bf4292e40a34a817"
};
const app = initializeApp(firebaseConfig);
const firestore = getFirestore()
export const storage = getStorage()
export const auth = getAuth()
export default firestore 
