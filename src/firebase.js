// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3vWV_5tKWoEW__b0AmOmwUc81GGxkT-w",
  authDomain: "realtor-clone-react-89686.firebaseapp.com",
  projectId: "realtor-clone-react-89686",
  storageBucket: "realtor-clone-react-89686.appspot.com",
  messagingSenderId: "98342601738",
  appId: "1:98342601738:web:c37ad21d6290e8bb9d4bf3"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
