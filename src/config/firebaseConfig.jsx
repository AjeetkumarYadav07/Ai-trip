// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuMrdKB4MGU7Hzd7LPT5bVWzTrW7TpBJU",
  authDomain: "ai-travel-app-645e7.firebaseapp.com",
  projectId: "ai-travel-app-645e7",
  storageBucket: "ai-travel-app-645e7.firebasestorage.app",
  messagingSenderId: "572569625274",
  appId: "1:572569625274:web:d0f40e0e8fe233307b5883",
  measurementId: "G-RS18HCPSZW"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const db=getFirestore();

// const analytics = getAnalytics(app);