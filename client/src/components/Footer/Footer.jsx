import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebookF, 
  faInstagram, 
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        {/* Social Links */}
        <ul className="social-links">
          <li>
            <a 
              href="https://www.facebook.com/residencia.alarcon" 
              className="facebook"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </li>
          <li>
            <a 
              href="https://www.instagram.com/residenciaalarcon/" 
              className="instagram"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a 
              href="https://www.linkedin.com/company/residencia-alarc%C3%B3n/" 
              className="linkedin"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </li>
        </ul>

        {/* Legal Links */}
        <Nav className="legal-links">
          <Link to="/aviso-legal" className="nav-link">
            Aviso Legal
          </Link>
          <Link to="/política-de-privacidad" className="nav-link">
            Política de Privacidad
          </Link>
          <Link to="/política-de-cookies" className="nav-link">
            Política de Cookies
          </Link>
        </Nav>

        {/* Slogan and Signature */}
        <div className="slogan-and-signature">
          <p className="slogan">
            Cuidando a nuestros mayores con dedicación y cariño
          </p>
          <p className="signature">
            Desarrollado por Steph Damiani & Edu Fatou
          </p>
          <p className="signature">
            © 2024
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;