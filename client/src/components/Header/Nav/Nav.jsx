import React from "react";

const Nav = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><a href="#inicio" className="nav-link">Inicio</a></li>
        <li className="nav-item"><a href="#servicios" className="nav-link">Servicios</a></li>
        <li className="nav-item"><a href="#blog" className="nav-link">Blog</a></li>
        <li className="nav-item"><a href="#galeria" className="nav-link">Galería</a></li>
        <li className="nav-item"><a href="#faq" className="nav-link">FAQ</a></li>
        <li className="nav-item"><a href="#contacto" className="nav-link">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
