import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.css";
import Home from "./components/Home.js"; // Add .js
import Question from "./components/Question.js"; // Add .js
import Form from "./components/Form.js"; // Add .js
import ArtikelQuestion from "./components/ArtikelQuestion.js"; // Add .js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUNR-ghrJGEdGT1B9g68fuG2XQhOl84wQ",
  authDomain: "trivia-german1.firebaseapp.com",
  projectId: "trivia-german1",
  storageBucket: "trivia-german1.appspot.com",
  messagingSenderId: "13189188115",
  appId: "1:13189188115:web:793f4c52609ffcbdbbcde6",
};

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedPrepositions, setSelectedPrepositions] = useState([]);
  const [correctAttempts, setCorrectAttempts] = useState(0);
  const [incorrectAttempts, setIncorrectAttempts] = useState(0);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const questionsCollectionRef = collection(db, "questions");

    const fetchData = async () => {
      const querySnapshot = await getDocs(questionsCollectionRef);
      const loadedQuestions = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setQuestions(loadedQuestions);
    };

    fetchData();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/question"
          element={
            <Question
              currentQuestionIndex={currentQuestionIndex}
              setCurrentQuestionIndex={setCurrentQuestionIndex}
              selectedPrepositions={selectedPrepositions}
              setSelectedPrepositions={setSelectedPrepositions}
              correctAttempts={correctAttempts}
              setCorrectAttempts={setCorrectAttempts}
              incorrectAttempts={incorrectAttempts}
              setIncorrectAttempts={setIncorrectAttempts}
              questions={questions}
            />
          }
        />
        <Route path="/form" element={<Form />} />
        <Route path="/artikel-question" element={<ArtikelQuestion />} />
      </Routes>
    </Router>
  );
};

export default App;
