import React from 'react';
import { useNavigate } from 'react-router-dom';
import questions from '../data/questions-old';
import { Container, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import { FaCheck, FaTimes } from 'react-icons/fa';

const ArtikelResult = ({ currentQuestionIndex, setCurrentQuestionIndex, selectedPrepositions }) => {
  const navigate = useNavigate();
  const currentQuestion = questions[currentQuestionIndex];

  const handleNext = () => {
    setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
    navigate('/question');
  };

  return (
    <Container className="text-center mt-5">
      <h2>{currentQuestion.verb}</h2>
      <ListGroup className="mt-3">
        {currentQuestion.prepositions.map((preposition, index) => (
          <ListGroupItem key={index} variant={selectedPrepositions.includes(preposition) ? 'success' : 'danger'}>
            {preposition} {selectedPrepositions.includes(preposition) ? <FaCheck /> : <FaTimes />}
          </ListGroupItem>
        ))}
      </ListGroup>
      <Button className="mt-3" variant="primary" onClick={handleNext}>
        Siguiente
      </Button>
    </Container>
  );
};

export default ArtikelResult;
