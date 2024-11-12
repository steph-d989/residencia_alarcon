import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebookF, 
  faTwitter, 
  faInstagram, 
  faLinkedinIn, 
  faXTwitter
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        {/* Social Links */}
        <ul className="social-links">
          <li>
            <a 
              href="#" 
              className="facebook"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </li>
          <li>
            <a 
              href="#" 
              className="X"
              aria-label="X"
            >
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
          </li>
          <li>
            <a 
              href="#" 
              className="instagram"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a 
              href="#" 
              className="linkedin"
              aria-label="LinkedIn"
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
            Desarrollado por Stephani Damiani & Edu Fatou
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