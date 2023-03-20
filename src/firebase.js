// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCe7MqKCWOMAYZUe2s2xaWaUhWJaUbldTs",
  authDomain: "todoapp-69fc5.firebaseapp.com",
  projectId: "todoapp-69fc5",
  storageBucket: "todoapp-69fc5.appspot.com",
  messagingSenderId: "171672236608",
  appId: "1:171672236608:web:7dc6514c1b5a8b27a925a5",
  measurementId: "G-HSM1DCT65D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
