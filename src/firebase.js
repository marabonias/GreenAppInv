// Import the functions you need from the SDKs you need
import { getStorage } from "@firebase/storage";
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore, collection } from "firebase/firestore"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDk-zWaX7WXS8y7HVk0oNpfXsS8AWMIPKc",
  authDomain: "jetforce-1d009.firebaseapp.com",
  projectId: "jetforce-1d009",
  storageBucket: "jetforce-1d009.firebasestorage.app",
  messagingSenderId: "118785417994",
  appId: "1:118785417994:web:3fdbbf7fe9e6e93cfb10f3",
  measurementId: "G-PEM9JYV61G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)

export const auth = getAuth(app)

export const db = getFirestore(app)


