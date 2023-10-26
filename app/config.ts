require('dotenv').config()
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCAZRpzFDH-zxFBOc_2VRshFoD74qdYnNY",
  authDomain: "restaurante-yokz.firebaseapp.com",
  projectId: "restaurante-yokz",
  storageBucket: "restaurante-yokz.appspot.com",
  messagingSenderId: "82757028993",
  appId: "1:82757028993:web:6e4a44ce1dd2efb1a4d180",
  measurementId: "G-NX7NQ013H9"
};

let firebase_app = initializeApp(firebaseConfig)

const db = getFirestore()

export { firebase_app, db }
