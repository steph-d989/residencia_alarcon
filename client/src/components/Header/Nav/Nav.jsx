import React, { useState } from 'react';
import { Navbar, Nav as Navigation, Container } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import logo from '../../../../public/logo.png';

const Nav = () => {
  const [expanded, setExpanded] = useState(false);

  const closeNav = () => setExpanded(false);

  return (
    <Navbar 
      className="navbar" 
      expand="lg"
      expanded={expanded}
      onToggle={(expanded) => setExpanded(expanded)}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-container" onClick={closeNav}>
          <img
            src={logo}
            alt="Residencia Alarcón Logo"
            className="navbar-logo"
          />
          <span className="brand-name">Residencia Alarcón</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Navigation className="ms-auto nav-links">
            <Navigation.Link as={Link} to="/nosotros" onClick={closeNav}>Nosotros</Navigation.Link>
            <Navigation.Link as={Link} to="/servicios" onClick={closeNav}>Servicios</Navigation.Link>
            <Navigation.Link as={Link} to="/galería" onClick={closeNav}>Galería</Navigation.Link>
            <Navigation.Link as={Link} to="/blog" onClick={closeNav}>Blog</Navigation.Link>
            <Navigation.Link as={Link} to="/FAQ" onClick={closeNav}>FAQ</Navigation.Link>
            <Navigation.Link as={Link} to="/contacto" onClick={closeNav}>Contacto</Navigation.Link>
          </Navigation>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Nav;