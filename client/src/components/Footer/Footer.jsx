import React from 'react';
// import CookiesPolicy from "./CookiesPolicy";
// import LegalAgreement from "./LegalAgreement";
// import PrivacyPolicy from "./PrivacyPolicy";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        
        <ul className="social-links">
          <li>
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
        </ul>

        
        <ul className="legal-links">
          {/* <li>
            <LegalAgreement />
          </li>
          <li>
            <PrivacyPolicy />
          </li>
          <li>
            <CookiesPolicy />
          </li> */}
        </ul>

        
        <div className="slogan-and-signature">
          <p>Cuidando a nuestros mayores con dedicación y cariño</p>
          <p>Perutech Solutions © 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;