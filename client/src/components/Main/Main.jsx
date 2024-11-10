import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Home/Home";
import Services from "./Services/Services";
import Blog from "./Blog/Blog";
import Gallery from "./Gallery/Gallery";
import FAQ from "./FAQ/FAQ";
import Contact from "./Contact/Contact";
import Team from "./Team/Team";
// import CookiesPolicy from "./CookiesPolicy";
// import PrivacyPolicy from "./PrivacyPolicy";
// import LegalAgreement from "./LegalAgreement";

const Main = () => {
  return <main className="main">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/servicios" element={<Services />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/galería" element={<Gallery />} />
      <Route path="/FAQ" element={<FAQ />} />
      <Route path="/contacto" element={<Contact />} />
      <Route path="/nosotros" element={<Team />} />
      {/* <Route path="/política-de-cookies" element={<CookiesPolicy />} />
      <Route path="/política-de-privacidad" element={<PrivacyPolicy />} />
      <Route path="/aviso-legal" element={<LegalAgreement />} /> */}
      <Route path="/*" element={<Navigate to={"/"} />} />
    </Routes>
  </main>;
};

export default Main;
