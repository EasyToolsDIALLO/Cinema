// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQpz_3gaxVpkBYTszakDIi1BRL-kWol6c",
  authDomain: "cinema-5fafd.firebaseapp.com",
  projectId: "cinema-5fafd",
  storageBucket: "cinema-5fafd.appspot.com",
  messagingSenderId: "173734064399",
  appId: "1:173734064399:web:29c7b4fd20105a506d0e7a",
  measurementId: "G-ZBDBEMZJGE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export { auth };
