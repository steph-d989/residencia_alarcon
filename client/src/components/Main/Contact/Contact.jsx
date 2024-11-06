import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Contact = () => {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="contact-page">
      <Container>
        <h1 className="text-center mb-5">Contacto</h1>
        
        {/* Información de contacto */}
        <Row className="info-section mb-5">
          <Col md={6}>
            <div className="contact-info">
              <h2>Información de Contacto</h2>
              <div className="info-block">
                <h3>Teléfonos</h3>
                <p>913510918 / 649118329</p>
                <h3>Horario</h3>
                <p>09:00 a 14:00 y de 16:00 a 18:00</p>
                <h3>Dirección</h3>
                <p>
                  Residencia Alarcón<br />
                  Calle de la Caridad, 34<br />
                  28224, Pozuelo de Alarcón<br />
                  Madrid, España
                </p>
              </div>
              <div className="contact-message">
                <p>No dude en ponerse en contacto con nosotros si usted o alguno de sus seres queridos necesita asesoramiento. Estamos encantados de ayudarle.</p>
              </div>
            </div>
          </Col>
          
          <Col md={6}>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.969977939899!2d-3.8138889999999997!3d40.4338889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd418f6b2800d8a9%3A0x7c0b9144ca3b8e21!2sCalle%20de%20la%20Caridad%2C%2034%2C%2028224%20Pozuelo%20de%20Alarc%C3%B3n%2C%20Madrid!5e0!3m2!1ses!2ses!4v1620000000000!5m2!1ses!2ses"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>
        </Row>

        {/* Formulario de contacto */}
        <Row className="form-section">
          <Col lg={8} className="mx-auto">
            <div className="contact-form">
              <h2 className="text-center mb-4">¡Póngase en contacto si desea ampliar información!</h2>
              <p className="text-center mb-4">
                La forma más sencilla de ponerse en contacto con nosotros es utilizando este formulario. 
                Nos pondremos en contacto con usted lo antes posible.
              </p>
              
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Nombre *</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                      />
                      <Form.Control.Feedback type="invalid">
                        Por favor, ingrese su nombre.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Apellido(s) *</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="apellidos"
                        value={formData.apellidos}
                        onChange={handleChange}
                      />
                      <Form.Control.Feedback type="invalid">
                        Por favor, ingrese sus apellidos.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email *</Form.Label>
                      <Form.Control
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      <Form.Control.Feedback type="invalid">
                        Por favor, ingrese un email válido.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Teléfono</Form.Label>
                      <Form.Control
                        type="tel"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Mensaje *</Form.Label>
                  <Form.Control
                    required
                    as="textarea"
                    rows={4}
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor, ingrese su mensaje.
                  </Form.Control.Feedback>
                </Form.Group>

                <div className="text-center">
                  <Button type="submit" className="submit-button">
                    Enviar mensaje
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;