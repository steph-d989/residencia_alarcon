import React from "react";
import image1 from "../../../../src/assets/residencia.jpg";

const Gallery = () => {
  const images = [
    {
      src: image1,
      alt: "Primera imagen",
      label: "Primera imagen",
      description: "Abuelita feliz 1",
      interval: 1000,
    },
    {
      src: image1,
      alt: "Segunda imagen",
      label: "Segunda imagen",
      description: "Abuelita feliz 2",
      interval: 1000,
    },
    {
      src: image1,
      alt: "Tercera imagen",
      label: "Tercera imagen",
      description: "Abuelita feliz 3",
      interval: 1000,
    },
    {
      src: image1,
      alt: "Cuarta imagen",
      label: "Cuarta imagen",
      description: "Abuelita feliz 4",
      interval: 1000,
    },
    {
      src: image1,
      alt: "Quinta imagen",
      label: "Quinta imagen",
      description: "Abuelita feliz 5",
      interval: 1000,
    },
    {
      src: image1,
      alt: "Sexta imagen",
      label: "Sexta imagen",
      description: "Abuelita feliz 6",
      interval: 1000,
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
