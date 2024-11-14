import React, { useState } from "react";
import { Container, Row, Col, Card, Badge, Form } from "react-bootstrap";
import Navidad from "../../../assets/navidad.jpeg";
import Aniversario from "../../../assets/aniversario.jpeg";
import Abuelo from "../../../assets/dia-del-abuelo.jpeg";

const BlogEventos = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const eventos = [
    {
      id: 2,
      title: "Aniversario de la Residencia Alarcón",
      date: "15 Octubre 2024",
      image: Aniversario,
      description: "Únete a la celebración del aniversario de nuestra residencia, un momento para recordar los buenos tiempos y mirar al futuro juntos.",
      readTime: "4 min"
    },
    {
      id: 3,
      title: "Navidad en Familia",
      date: "25 Diciembre 2024",
      image: Navidad,
      description: "Celebremos la Navidad con una cena especial y actividades para compartir la alegría de la época en compañía de familiares y amigos.",
      readTime: "5 min"
    },
    {
      id: 1,
      title: "Celebración del Día del Abuelo",
      date: "26 Julio 2024",
      image: Abuelo,
      description: "Un hermoso día para honrar y celebrar a nuestros queridos abuelos. ¡Ven y disfruta de una tarde especial llena de actividades y recuerdos!",
      readTime: "3 min"
    }
  ];

  const filteredEventos = eventos.filter(evento =>
    evento.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="blog-eventos">
      <Container>
        <div className="header">
        <h1>Nuestro Blog</h1>
          <p>Momentos especiales para nuestros residentes y sus familias</p>
        </div>
        <div className="filters">
          <Form.Control
            type="search"
            placeholder="Buscar eventos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        <Row className="event-grid g-4">
          {filteredEventos.map(evento => (
            <Col key={evento.id} lg={4} md={6}>
              <Card className="event-card h-100">
                <div className="card-img-wrapper">
                  <Card.Img variant="top" src={evento.image} alt={evento.title} />
                </div>
                <Card.Body>
                  <div className="card-meta">
                    <Badge bg="primary" className="date-badge">{evento.date}</Badge>
                    <span className="read-time">{evento.readTime}</span>
                  </div>
                  <Card.Title>{evento.title}</Card.Title>
                  <Card.Text>{evento.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        {filteredEventos.length === 0 && (
          <div className="no-results">
            <h3>No se encontraron eventos</h3>
            <p>Intenta con otros términos de búsqueda</p>
          </div>
        )}
      </Container>
    </div>
  );
};

export default BlogEventos;
