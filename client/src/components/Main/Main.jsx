import React from "react";
import Home from "./Home/Home";
import Services from "./Services/Services";
import Blog from "./Blog/Blog";
import Gallery from "./Gallery/Gallery";
import FAQ from "./FAQ/FAQ";
import Contact from "./Contact/Contact";

const Main = () => {
  return <div>
    <Home />
    <Services />
    <Blog />
    <Gallery />
    <FAQ />
    <Contact />
  </div>;
};

export default Main;
