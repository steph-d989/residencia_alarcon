import React, { useState } from "react";
import { Container, Row, Col, Card, Badge, Form, Button } from "react-bootstrap";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const blogPosts = [
    {
      id: 1,
      title: "Actividades para mantener la mente activa en la tercera edad",
      date: "6 Mayo 2024",
      category: "Salud Mental",
      image: "/blog-images/actividades-mente.jpg",
      excerpt: "Descubre las mejores actividades y ejercicios para mantener una mente ágil y saludable durante la tercera edad.",
      content: "Los ejercicios mentales y las actividades cognitivas son fundamentales...",
      author: "Dra. María González",
      readTime: "5 min"
    },
    {
      id: 2,
      title: "Beneficios del ejercicio físico para personas mayores",
      date: "3 Mayo 2024",
      category: "Ejercicio",
      image: "/blog-images/ejercicio-mayores.jpg",
      excerpt: "El ejercicio regular puede mejorar significativamente la calidad de vida de las personas mayores.",
      content: "Mantenerse activo físicamente durante la tercera edad...",
      author: "Dr. Juan Pérez",
      readTime: "4 min"
    },
    {
      id: 3,
      title: "Nutrición saludable en la tercera edad",
      date: "1 Mayo 2024",
      category: "Nutrición",
      image: "/blog-images/nutricion-mayores.jpg",
      excerpt: "Una alimentación equilibrada es clave para mantener una buena salud en la tercera edad.",
      content: "La correcta alimentación juega un papel fundamental...",
      author: "Dra. Ana Martínez",
      readTime: "6 min"
    },
  ];

  const categories = ["all", ...new Set(blogPosts.map(post => post.category))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="blog-page">
      <Container>
        <div className="blog-header">
          <h1>Nuestro Blog</h1>
          <p>Mantente informado sobre el cuidado y bienestar en la tercera edad</p>
        </div>
        <div className="blog-filters">
          <Row className="g-3">
            <Col md={8}>
              <Form.Control
                type="search"
                placeholder="Buscar artículos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </Col>
            <Col md={4}>
              <Form.Select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="category-select"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === "all" ? "Todas las categorías" : category}
                  </option>
                ))}
              </Form.Select>
            </Col>
          </Row>
        </div>
        <Row className="blog-grid g-4">
          {filteredPosts.map(post => (
            <Col key={post.id} lg={4} md={6}>
              <Card className="blog-card h-100">
                <div className="card-img-wrapper">
                  <Card.Img variant="top" src={post.image} alt={post.title} />
                </div>
                <Card.Body>
                  <div className="card-meta">
                    <Badge bg="primary" className="category-badge">
                      {post.category}
                    </Badge>
                    <span className="post-date">{post.date}</span>
                  </div>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.excerpt}</Card.Text>
                  <div className="card-footer-meta">
                    <span className="author">{post.author}</span>
                    <span className="read-time">{post.readTime}</span>
                  </div>
                  <Button  className="read-more-btn">
                    Leer más
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        {filteredPosts.length === 0 && (
          <div className="no-results">
            <h3>No se encontraron artículos</h3>
            <p>Intenta con otros términos de búsqueda o categoría</p>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Blog;