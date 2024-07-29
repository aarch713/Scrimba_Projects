// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8XlAgHu-U0Hdd_urTl-xta96TAMIRJTE",
  authDomain: "react-noteapp-f23cc.firebaseapp.com",
  projectId: "react-noteapp-f23cc",
  storageBucket: "react-noteapp-f23cc.appspot.com",
  messagingSenderId: "68650268433",
  appId: "1:68650268433:web:3bfd6be8f21463ca0a7eb0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const notesCollection = collection(db, "notes")