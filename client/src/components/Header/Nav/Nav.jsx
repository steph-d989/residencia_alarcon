import React from 'react';
import { Navbar, Nav as Navigation, Container } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  return (
    <Navbar className="navbar" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Residencia Alarcón</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Navigation className="mr-auto">
            <Navigation.Link as={Link} to="/">Nosotros</Navigation.Link>
            <Navigation.Link as={Link} to="/servicios">Servicios</Navigation.Link>
            <Navigation.Link as={Link} to="/galería">Galería</Navigation.Link>
            <Navigation.Link as={Link} to="/blog">Blog</Navigation.Link>
            <Navigation.Link as={Link} to="/FAQ">FAQ</Navigation.Link>
            <Navigation.Link as={Link} to="/contacto">Contacto</Navigation.Link>
          </Navigation>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Nav;