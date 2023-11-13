// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPEly8NFcKZpvdheAncoyGptjJPuL_T58",
  authDomain: "vite-contact-d388f.firebaseapp.com",
  projectId: "vite-contact-d388f",
  storageBucket: "vite-contact-d388f.appspot.com",
  messagingSenderId: "587003211921",
  appId: "1:587003211921:web:b5dcbe98d3724b4d9d0f30"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);