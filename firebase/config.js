// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKjbL8MerKVSIbiOR39ApY8-uzEx5qdeY",
  authDomain: "recepies-a7807.firebaseapp.com",
  projectId: "recepies-a7807",
  storageBucket: "recepies-a7807.firebasestorage.app",
  messagingSenderId: "563493444425",
  appId: "1:563493444425:web:e1965609b6d71c9dfd5898"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()