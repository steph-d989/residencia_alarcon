import React, { useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  const images = [
    { src: image1, alt: "Satisfacción de nuestros huéspedes" },
    { src: image2, alt: "Nuestra residencia" },
    { src: image3, alt: "Ubicación accesible" },
    { src: image4, alt: "Áreas comunes" },
    { src: image5, alt: "Quinta imagen" },
    { src: image6, alt: "Sexta imagen" },
    { src: image7, alt: "Séptima imagen" },
    { src: image8, alt: "Octava imagen" },
    { src: image9, alt: "Novena imagen" },
  ];

  const openImage = (index) => {
    setIsOpen(true);
    setCurrentImageIndex(index);
  };

  const closeImage = () => {
    setIsOpen(false);
    setCurrentImageIndex(null);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <h1>Te mostramos un poco de nosotros...</h1>
      <div className="polaroid-gallery">
        {images.map((image, index) => (
          <div
            key={index}
            className="polaroid-item"
            onClick={() => openImage(index)}
          >
            <img src={image.src} alt={image.alt} />
            <p>{image.alt}</p>
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="overlay" onClick={closeImage}>
          <div className="carousel" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
            />
            <div className="navigation">
              <button className="nav-btn" onClick={prevImage}>
                ❮
              </button>
              <button className="nav-btn" onClick={nextImage}>
                ❯
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
