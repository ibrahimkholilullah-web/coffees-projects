// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp8YssqYmrPndBXZFzeBMj6dWdLgzdWFQ",
  authDomain: "mongodb-projects-7c724.firebaseapp.com",
  projectId: "mongodb-projects-7c724",
  storageBucket: "mongodb-projects-7c724.firebasestorage.app",
  messagingSenderId: "67866622327",
  appId: "1:67866622327:web:32d466ac7b21b9721ec972"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);
