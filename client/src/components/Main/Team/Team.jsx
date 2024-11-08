// Team.js
import React from "react";

const Team = () => {
  return (
    <section className="team">
      <div className="team-container">
        <section className="introduction">
          <h1>Bienvenidos a Residencia Alarcón</h1>
          <p>
            En Residencia Alarcón, nos dedicamos a ofrecer un hogar cálido y
            acogedor para nuestros residentes mayores. Con un equipo de
            profesionales comprometidos y capacitados, brindamos atención
            personalizada y de calidad, priorizando el bienestar y la dignidad
            de cada uno de nuestros habitantes.
          </p>
          <h2>Nuestra Misión</h2>
          <p>
            Crear un entorno donde nuestros residentes puedan disfrutar de una
            vida activa y plena, rodeados de apoyo y compañía. Ofrecemos una
            variedad de actividades recreativas, programas de salud y servicios
            personalizados, que fomentan la independencia y el desarrollo de
            relaciones significativas.
          </p>
          <p>
            Ubicados en un entorno tranquilo y seguro, nuestras instalaciones
            están diseñadas para proporcionar comodidad y accesibilidad,
            asegurando que nuestros residentes se sientan en casa. Valoramos la
            familia y la comunidad, y trabajamos en estrecha colaboración con
            los seres queridos de nuestros residentes para garantizar que sus
            necesidades y deseos sean atendidos.
          </p>
          <p>
            En Residencia Alarcón, cada día es una oportunidad para celebrar la
            vida y fomentar el respeto y la compasión. Te invitamos a conocernos
            y a descubrir cómo podemos contribuir a la calidad de vida de tus
            seres queridos.
          </p>
          <h2>Lo que piensan nuestros huespedes</h2>
        </section>

        <section className="indicators">
          <div className="indicator">
            <div className="circle satisfaction">
              <span className="percentage">98%</span>
            </div>
            <p>Satisfacción de los Clientes</p>
          </div>

          <div className="indicator">
            <div className="circle personalized-care">
              <span className="percentage">90%</span>
            </div>
            <p>Atención Personalizada</p>
          </div>

          <div className="indicator">
            <div className="circle service-quality">
              <span className="percentage">95%</span>
            </div>
            <p>Calidad de Servicios</p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Team;