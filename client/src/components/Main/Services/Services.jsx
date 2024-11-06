import React from "react";

const ServiceSection = ({ title, description, items }) => (
  <div className="service-card">
    <h3 className="service-title">{title}</h3>
    {description && <p className="service-description">{description}</p>}
    <ul className="service-list">
      {items.map((item, index) => (
        <li key={index} className="service-item">{item}</li>
      ))}
    </ul>
  </div>
);

const Services = () => {
  const services = [
    {
      title: "Médicos",
      description: "Mantenemos una estrecha relación con los familiares desde el pre ingreso del residente. De esta forma, proveemos de información sobre el estado, progresos y evolución en los distintos tratamientos",
      items: [
        "Valoración geriátrica",
        "Atención médica",
        "Podología",
        "Unidad de farmacia"
      ]
    },
    {
      title: "Rehabilitación",
      description: "Después de una lesión, una enfermedad o una cirugía, la recuperación puede ser lenta. En este proceso contamos con profesionales que ayudarán a nuestros residentes a recuperar nuevamente su fortaleza y habilidades.",
      items: [
        "Fisioterapia",
        "Movilidad",
        "Rehabilitación específica",
        "Terapia ocupacional"
      ]
    },
    {
      title: "Actividades",
      description: "Favorecemos la convivencia en un entorno seguro y animamos a participar en las terapias ocupacionales y en los distintos talleres de la residencia",
      items: [
        "Juegos y entretenimientos",
        "Actividades culturales",
        "Talleres de teatro"
      ]
    },
    {
      title: "Varios",
      description: "Disponemos de menús y dietas especiales prescritas por el médico con posibilidad de elegir entre varias alternativas. Además contamos con:",
      items: [
        "Servicio religioso",
        "Lavandería y planchado",
        "Terraza",
        "Servicio de peluquería",
        "Servicio de acompañamiento a Hospitales"
      ]
    }
  ];

  return (
    <div className="services-container">
      <h1 className="services-main-title">Nuestros Servicios</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <ServiceSection
            key={index}
            title={service.title}
            description={service.description}
            items={service.items}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;