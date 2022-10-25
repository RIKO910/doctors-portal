// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFfZfK8L_AuYISDN6af75pjjQPlua6N9A",
  authDomain: "doctors-portal-e2703.firebaseapp.com",
  projectId: "doctors-portal-e2703",
  storageBucket: "doctors-portal-e2703.appspot.com",
  messagingSenderId: "687032695524",
  appId: "1:687032695524:web:a6d3def0f6bff6826a8af1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
export default auth;