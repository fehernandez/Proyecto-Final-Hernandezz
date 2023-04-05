// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHXBlmLXeommlq8czNx5OLRyOk8ZpK_cI",
  authDomain: "coder-react-e937f.firebaseapp.com",
  projectId: "coder-react-e937f",
  storageBucket: "coder-react-e937f.appspot.com",
  messagingSenderId: "768785588282",
  appId: "1:768785588282:web:62b28b0550d7aba8af9503"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)