// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAc8HFZIlOO0Ybqia1m6le_jU7EAiGDmn4",
  authDomain: "sway-44336.firebaseapp.com",
  projectId: "sway-44336",
  storageBucket: "sway-44336.appspot.com",
  messagingSenderId: "1040645703783",
  appId: "1:1040645703783:web:fbc7398af4dcf91b752cc2",
  measurementId: "G-K0Z6DTL0RM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Analytics
// const analytics = getAnalytics(app); // Add export before const analytics
// Initialize Firebase Authentication
// const auth = getAuth(app); // Add export before const auth
// Initialize Firebase Firestore
// const db = getFirestore(app); // Add export before const db

// GREAT VIDEO ON ADDING DATA TO DATABASE
// https://www.youtube.com/watch?v=uikATllLdRc