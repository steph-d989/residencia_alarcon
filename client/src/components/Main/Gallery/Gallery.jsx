import React from "react";
import image1 from "../../../../src/assets/resi.jpg";
import image2 from "../../../../src/assets/002-foto resi 9.png";
import image3 from "../../../../src/assets/003-foto resi 5 nuevo.png";
import image4 from "../../../../src/assets/004-foto resi 4.png";
import image5 from "../../../../src/assets/006-foto resi 2.png";
import image6 from "../../../../src/assets/007-foto resi 3.png";
import image7 from "../../../../src/assets/008-foto resi 6.png";
import image8 from "../../../../src/assets/009-foto resi 7.png";
import image9 from "../../../../src/assets/010-foto resi 8.png";


const Gallery = () => {
  const images = [
    {
      src: image1,
      alt: "Primera imagen",
      label: "Satisfacción de nuestros huespedes",
      description: "Nos dedicamos a ofrecer un hogar cálido y acogedor para nuestros residentes mayores.",
      interval: 100,
    },
    {
      src: image2,
      alt: "Segunda imagen",
      label: "Nuestra residencia",
      description: "Con la ubicación precisa para poder proporcionar comodidad y accesibilidad",
      interval: 100,
    },
    {
      src: image3,
      alt: "Tercera imagen",
      label: "Nuestra residencia",
      description: "Con la ubicación precisa para poder proporcionar comodidad y accesibilidad",
      interval: 100,
    },
    {
      src: image4,
      alt: "Cuarta imagen",
      label: "Areas comunes",
      description: "Ideales para pasar momentos de relax",
      interval: 100,
    },
    {
      src: image5,
      alt: "Quinta imagen",
      label: "Quinta imagen",
      description: "Abuelita feliz 5",
      interval: 100,
    },
    {
      src: image6,
      alt: "Sexta imagen",
      label: "Sexta imagen",
      description: "Abuelita feliz 6",
      interval: 100,
    },
    {
      src: image7,
      alt: "Sexta imagen",
      label: "Sexta imagen",
      description: "Abuelita feliz 6",
      interval: 100,
    },
    {
      src: image8,
      alt: "Sexta imagen",
      label: "Sexta imagen",
      description: "Abuelita feliz 6",
      interval: 100,
    },
    {
      src: image9,
      alt: "Sexta imagen",
      label: "Sexta imagen",
      description: "Abuelita feliz 6",
      interval: 100,
    },
  ];

  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide">
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : undefined}
            aria-label={`Slide ${index + 1}`}
            key={index}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            data-bs-interval={image.interval}
            key={index}
          >
            <img src={image.src} className="d-block w-100" alt={image.alt} />
            <div className="carousel-caption d-none d-md-block">
              <h5>{image.label}</h5>
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Gallery;
