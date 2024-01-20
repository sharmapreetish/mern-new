// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-new-1686c.firebaseapp.com",
  projectId: "mern-new-1686c",
  storageBucket: "mern-new-1686c.appspot.com",
  messagingSenderId: "508252293461",
  appId: "1:508252293461:web:ce53c144df643f541a47dc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);