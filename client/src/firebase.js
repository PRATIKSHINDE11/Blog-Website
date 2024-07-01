// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-website-1250a.firebaseapp.com",
  projectId: "blog-website-1250a",
  storageBucket: "blog-website-1250a.appspot.com",
  messagingSenderId: "305871419462",
  appId: "1:305871419462:web:623b943d331bd051e6b247",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
