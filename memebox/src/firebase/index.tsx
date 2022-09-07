// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyCxFcuuXVZXbvXYFJq6JlOXZMJPSoDUiy0",
  authDomain: "memebox-d7f31.firebaseapp.com",
  databaseURL: "https://memebox-d7f31-default-rtdb.firebaseio.com",
  projectId: "memebox-d7f31",
  storageBucket: "memebox-d7f31.appspot.com",
  messagingSenderId: "779262569392",
  appId: "1:779262569392:web:73b2a261726a5106f0c475",
  measurementId: "G-F62E5JXL7G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication=getAuth(app)