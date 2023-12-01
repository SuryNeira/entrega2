import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../estilospag/login.scss';

function Login() {
  const [recaptchaResponse, setRecaptchaResponse] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("HOLA HASTA AQUI LLEGO");
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ recaptchaResponse }),
      });

      const data = await response.json();

      if (data.success) {
        // La validación del reCAPTCHA fue exitosa, puedes realizar otras acciones aquí.
        console.log('Formulario enviado con éxito');
      } else {
        // La validación del reCAPTCHA falló, puedes mostrar un mensaje de error.
        console.error('Error al validar reCAPTCHA:', data.error);
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      // Limpiar el script si el componente se desmonta
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="login">
      <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
        <Container>
          <Row className="justify-content-center">
            <Col md={6}>
              <div className="container" id="inicio">
                <h2 className="mb-4 text-center">INICIO DE SESIÓN</h2>
              </div>

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="usuario">
                  <Form.Label>Usuario:</Form.Label>
                  <Form.Control type="text" placeholder="Ingrese su usuario" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="contrasena">
                  <Form.Label>Contraseña:</Form.Label>
                  <Form.Control type="password" placeholder="Ingrese su contraseña" />
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox1">
                  <Form.Check type="checkbox" label="Persona" />
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox2">
                  <Form.Check type="checkbox" label="Empresa" />
                </Form.Group>

                <div id="sesionUnico" className="mb-3">Marque solo una de las opciones.</div>

                <div id="captcha" className="mb-3">
                  <div className="g-recaptcha" data-sitekey="6LfPdSIpAAAAADAuKoTMClmVq_Dm_cC06fUdhwSA" onSubmit={(value) => setRecaptchaResponse(value)}>
                    HOLA SOY YO 
                  </div>
                </div>

                <div className="text-center">
                  <Button variant="primary" type="submit" className="mt-3" id="submit">
                    Iniciar Sesión
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Login;