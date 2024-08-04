import React, { useState, useEffect } from "react";
import { Container, Button, Row, Col, Badge } from "react-bootstrap";
import { FaCheck, FaTimes } from "react-icons/fa";

const Question = ({
  currentQuestionIndex,
  setCurrentQuestionIndex,
  selectedPrepositions,
  setSelectedPrepositions,
  correctAttempts,
  setCorrectAttempts,
  incorrectAttempts,
  setIncorrectAttempts,
  questions,
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(
    questions[currentQuestionIndex],
  );
  const prepositions = [
    "als",
    "an",
    "auf",
    "für",
    "gegen",
    "in",
    "nach",
    "um",
    "vor",
    "zu",
    "über",
    "bei",
    "mit",
    "von",
  ];

  useEffect(() => {
    setCurrentQuestion(questions[currentQuestionIndex]);
    setSelectedPrepositions([]);
  }, [currentQuestionIndex, setSelectedPrepositions, questions]);

  // Conditional rendering to handle empty 'questions' array
  if (!questions.length) {
    return (
      <Container className="text-center mt-5">
        <h3>Loading Questions...</h3>
      </Container>
    );
  }

  const handlePrepositionClick = (preposition) => {
    if (selectedPrepositions.includes(preposition)) {
      setSelectedPrepositions(
        selectedPrepositions.filter((item) => item !== preposition),
      );
    } else {
      setSelectedPrepositions([...selectedPrepositions, preposition]);
    }
    if (currentQuestion.prepositions.includes(preposition)) {
      setCorrectAttempts((prev) => prev + 1);
    } else {
      setIncorrectAttempts((prev) => prev + 1);
    }
  };

  const isCorrectPreposition = (preposition) =>
    currentQuestion.prepositions.includes(preposition);

  const handleNext = () => {
    setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
    setSelectedPrepositions([]); // Clear selected prepositions for new question
  };

  return (
    <Container className="text-center mt-5">
      <h2>
        {currentQuestion.verb}{" "}
        {currentQuestion.prepositions.length > 1 && (
          <Badge bg="info">X{currentQuestion.prepositions.length}</Badge>
        )}
      </h2>
      <p>{currentQuestion.translation}</p>
      {prepositions.map((preposition, index) => (
        <Button
          key={index}
          variant={
            selectedPrepositions.includes(preposition)
              ? isCorrectPreposition(preposition)
                ? "success"
                : "danger"
              : "outline-primary"
          }
          className="m-1 btn-lg"
          onClick={() => handlePrepositionClick(preposition)}
        >
          {preposition}
        </Button>
      ))}
      <hr />
      <Button variant="primary" onClick={handleNext}>
        Siguiente
      </Button>
      <hr />
      <Row className="mt-3">
        <Col>
          <h5>
            <Badge bg="success">
              <FaCheck /> Aciertos: {correctAttempts}
            </Badge>
          </h5>
        </Col>
        <Col>
          <h5>
            <Badge bg="danger">
              <FaTimes /> Errores: {incorrectAttempts}
            </Badge>
          </h5>
        </Col>
      </Row>
    </Container>
  );
};

export default Question;
