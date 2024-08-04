// firebase.config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUNR-ghrJGEdGT1B9g68fuG2XQhOl84wQ",
  authDomain: "trivia-german1.firebaseapp.com",
  projectId: "trivia-german1",
  storageBucket: "trivia-german1.appspot.com",
  messagingSenderId: "13189188115",
  appId: "1:13189188115:web:793f4c52609ffcbdbbcde6",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db; // Export the db variable
