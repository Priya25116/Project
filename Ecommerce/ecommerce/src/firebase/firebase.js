// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_jgnyCWWoWqMfQyLuPLqx2zMaPBUTTx0",
  authDomain: "project-366e3.firebaseapp.com",
  databaseURL: "https://project-366e3-default-rtdb.firebaseio.com",
  projectId: "project-366e3",
  storageBucket: "project-366e3.appspot.com",
  messagingSenderId: "222559911671",
  appId: "1:222559911671:web:8bef6c48e76db9b3cc9df2",
  measurementId: "G-PPF5TGJ1S8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}