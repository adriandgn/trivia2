import db from "./firebase.config.js";
import { getFirestore, collection, addDoc } from "firebase/firestore";

import questionsOld from "./data/questions-old.js"; // Assuming this is your old data file

const questionsCollectionRef = collection(db, "questions");

// Function to add each question to Firestore
async function addQuestionToFirestore(question) {
  try {
    const docRef = await addDoc(questionsCollectionRef, question);
    console.log("Question added with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}

// Loop through your old data and add to Firestore
questionsOld.forEach((question) => {
  addQuestionToFirestore(question);
});
