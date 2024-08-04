import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container className="text-center mt-5">
      <h1>Inicio</h1>
      <Button variant="primary" className="m-2" onClick={() => navigate('/question')}>Verbos</Button>
      <Button variant="secondary" className="m-2" onClick={() => navigate('/form')}>Formulario</Button>
      <Button variant="success" className="m-2" onClick={() => navigate('/artikel-question')}>Artículos</Button>
    </Container>
  );
};

export default Home;
