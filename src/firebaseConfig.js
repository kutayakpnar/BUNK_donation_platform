// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTnDt2Sj6JQFB5Bvnf4V7zcVw0m83LxsQ",
  authDomain: "bunk-70891.firebaseapp.com",
  projectId: "bunk-70891",
  storageBucket: "bunk-70891.appspot.com",
  messagingSenderId: "184406451622",
  appId: "1:184406451622:web:92e138b3e8343444d79b67",
  measurementId: "G-JYGF7SG0SP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };