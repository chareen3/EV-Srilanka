// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGFZyqfS-WvHVguJFi6VdXh7n_Dc1UqfQ",
  authDomain: "ev-charger-7c3f5.firebaseapp.com",
  projectId: "ev-charger-7c3f5",
  storageBucket: "ev-charger-7c3f5.appspot.com",
  messagingSenderId: "191016641203",
  appId: "1:191016641203:web:88a7a5f8e74e3fc80946c6",
  measurementId: "G-QSKJB70CL5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);