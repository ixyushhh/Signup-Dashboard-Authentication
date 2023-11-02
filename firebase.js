// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3XDpwSZHxOnoGLUVpzwRA9MhlVh4gbMg",
  authDomain: "sample-signup-b6d59.firebaseapp.com",
  projectId: "sample-signup-b6d59",
  storageBucket: "sample-signup-b6d59.appspot.com",
  messagingSenderId: "976828999549",
  appId: "1:976828999549:web:7850b296f6e9e1b60c8e14",
  measurementId: "G-8CPGGN1JDD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

