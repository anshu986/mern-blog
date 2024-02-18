// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-748f7.firebaseapp.com",
  projectId: "mern-blog-748f7",
  storageBucket: "mern-blog-748f7.appspot.com",
  messagingSenderId: "257806339989",
  appId: "1:257806339989:web:21c0dbc81a12d08524b09c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);