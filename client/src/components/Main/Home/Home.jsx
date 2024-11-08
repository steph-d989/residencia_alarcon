import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <section className="home">
      <div className="home-bg"></div>
      <Container>
        <Row className="justify-content-center align-items-center h-100">
          <Col md={8} className="text-center">
            <h1 className="home-title">Bienvenidos a Residencia Alarcón</h1>
            <p className="home-description">
              Un hogar cálido y acogedor para nuestros residentes mayores.
            </p>
            <p className="home-description">
              Donde cada día es una oportunidad para celebrar la vida.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;