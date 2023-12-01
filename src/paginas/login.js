import React from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../estilospag/login.scss'; // Importa tu archivo de estilos Sass aquí
import axios from 'axios';

const login = async (email, password) => {
  try {
     const response = await axios.post('/api/login', { email, password });
     return response.data;
  } catch (error) {
     console.error(error);
     return { error: 'Error en el inicio de sesión' };
  }
 };
function Login() {
  return (
    <div className="login">
      <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
        <Container>
          <Row className="justify-content-center">
            <Col md={6}>
              <div className="container" id="inicio">
                <h2 className="mb-4 text-center">INICIO DE SESIÓN</h2>
              </div>

              <Form>
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