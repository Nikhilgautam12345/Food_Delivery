import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCzNU4ERk4uDza0RcthIL5U550MaSmpxzM",
  authDomain: "food-delivery-227e4.firebaseapp.com",
  projectId: "food-delivery-227e4",
  storageBucket: "food-delivery-227e4.appspot.com",
  messagingSenderId: "941555569948",
  appId: "1:941555569948:web:aaf9912c24957ce80616d9",
  measurementId: "G-8Y1Q0X79W6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);