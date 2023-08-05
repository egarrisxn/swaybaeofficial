// Import functions you need from the SDKs here: https://firebase.google.com/docs/web/setup#available-libraries

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Analytics
export const analytics = getAnalytics(app);



// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";



// Initialize Firebase Authentication
// export const auth = getAuth(app);
// Initialize Firebase Firestore
// export const db = getFirestore(app);

// GREAT VIDEO ON ADDING DATA TO DATABASE
// https://www.youtube.com/watch?v=uikATllLdRc