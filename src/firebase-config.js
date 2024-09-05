// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4Xu4bqq8_57ulU_VI3S61fKHyLEGdWmw",
  authDomain: "lawyer-web-9eb0e.firebaseapp.com",
  projectId: "lawyer-web-9eb0e",
  storageBucket: "lawyer-web-9eb0e.appspot.com",
  messagingSenderId: "456364597976",
  appId: "1:456364597976:web:281f074a4370b94e22edad",
  measurementId: "G-R0JQ5T32ZP"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };