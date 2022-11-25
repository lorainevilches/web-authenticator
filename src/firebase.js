// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0SZF0vu6XQgSp5CJDgOjV0Czz-xTlIOM",
  authDomain: "frat-authentication.firebaseapp.com",
  projectId: "frat-authentication",
  storageBucket: "frat-authentication.appspot.com",
  messagingSenderId: "697805542885",
  appId: "1:697805542885:web:0de20a6e6aa99e51e88b0c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);