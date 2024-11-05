import React from "react";
import Services from "../Services/Services";
import Gallery from "../Gallery/Gallery";
import FAQ from "../FAQ/FAQ";
import Contact from "../Contact/Contact";

const Home = () => {
  return <section className="home">
    <article>
      <h3>Bienvenid@ a Residencia Alarcón</h3>
      <p>
        Posiblemente, la mejor residencia para mayores en Alarcón
      </p>
    </article>
    <article>
      <Services />
    </article>
    <article>
      <Gallery />
    </article>
    <article>
      <FAQ />
    </article>
    <article>
      <Contact />
    </article>

  </section>
};

export default Home;
