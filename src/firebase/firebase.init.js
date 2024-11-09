
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyzrQcOJbgNSGY_SaGpqhznLi9yaZkU8M",
  authDomain: "fir-project-2-16c34.firebaseapp.com",
  projectId: "fir-project-2-16c34",
  storageBucket: "fir-project-2-16c34.firebasestorage.app",
  messagingSenderId: "845018850234",
  appId: "1:845018850234:web:057560521d2689e8d83383"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default(auth);