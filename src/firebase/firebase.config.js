// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRfgYJHiAUCt4VUKkSH2tn5rvBmo_GPYo",
  authDomain: "gragon-news-auth.firebaseapp.com",
  projectId: "gragon-news-auth",
  storageBucket: "gragon-news-auth.firebasestorage.app",
  messagingSenderId: "1007686828243",
  appId: "1:1007686828243:web:272fd39c571a2e82c55426"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app