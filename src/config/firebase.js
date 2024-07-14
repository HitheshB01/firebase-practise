// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// import {getFireStore} from 'firebase/firestore'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBD2bWw3qzrDiaDbydOiNhJUuD_LYxzy88",
  authDomain: "fir-practise-919d0.firebaseapp.com",
  projectId: "fir-practise-919d0",
  storageBucket: "fir-practise-919d0.appspot.com",
  messagingSenderId: "408612113721",
  appId: "1:408612113721:web:c268d8bca7cd455c9aece8",
  measurementId: "G-1885N9GZTV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth= getAuth(app)
export const googleProvider= new GoogleAuthProvider()
export const db= getFirestore(app)