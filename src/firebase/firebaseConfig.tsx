// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrcDMdmH7pf6iYGWYnAX5WmDxhww6vFUg",
  authDomain: "edugrade-810d2.firebaseapp.com",
  projectId: "edugrade-810d2",
  storageBucket: "edugrade-810d2.firebasestorage.app",
  messagingSenderId: "385632012053",
  appId: "1:385632012053:web:cef771ea8f3af050b34b1c",
  measurementId: "G-9VMD0QBMTB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
const store = getStorage(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { app, db, auth, store}