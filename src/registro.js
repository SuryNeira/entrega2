import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './estilospag/registro.scss';
import React, { useEffect } from 'react';
import $ from 'jquery';
import 'jquery-validation';

function registro() {
    return (
      <div className="registro">
        <Container>
            <Row>
                <Col sm={12} md={6} lg={6} xl={6} id="formulario1">
                    <h2 className="mt-4" id="h2Under">PERSONA</h2>
                    <Form id="formularioUsuario">
                        <Form.Group className="mb-3" controlId="inputUserName">
                            <Form.Label>Nombre de Usuario</Form.Label>
                            <Form.Control type="text" name="inputUserName" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="inputRut">
                            <Form.Label>RUT</Form.Label>
                            <Form.Control type="text" name="inputRut" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="inputEmail">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="email" name="inputEmail" />
                            <Form.Text>Tu correo será siempre privado.</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="inputPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" name="inputPassword" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="inputRePassword">
                            <Form.Label>Confirmar contraseña</Form.Label>
                            <Form.Control type="password" name="inputRePassword" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="inputRegion">
                            <Form.Label>Región</Form.Label>
                            <Form.Control type="text" name="inputRegion" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="inputComuna">
                            <Form.Label>Comuna</Form.Label>
                            <Form.Control type="text" name="inputComuna" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="inputNombreApellido">
                            <Form.Label>Nombre y Apellido</Form.Label>
                            <Form.Control type="text" name="inputNombreApellido" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="fechaNacimiento">
                            <Form.Label>Fecha de Nacimiento</Form.Label>
                            <Form.Control type="date" name="fechaNacimiento" />
                        </Form.Group>
                        <Form.Group className="mb-3 form-check">
                            <Form.Check type="checkbox" label="Acepto terminos y condiciones" />
                        </Form.Group>
                        <Button variant="primary" type="submit" id="enviar">Registrarse</Button>
                    </Form>
                </Col>
                <Col sm={12} md={6} lg={6} xl={6} id="formulario2">
                    <h2 className="mt-4" id="h2Under">COMERCIO</h2>
                    <Form id="formularioComercio">
                        <Form.Group className="mb-3" controlId="inputUserName2">
                            <Form.Label>Nombre Empresa</Form.Label>
                            <Form.Control type="text" name="inputUserName2" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="inputDireccion">
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control type="text" name="inputDireccion" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="inputEmail2">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="email" name="inputEmail2" />
                            <Form.Text>Tu correo será siempre privado.</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="inputPassword2">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" name="inputPassword2" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="inputRePassword2">
                            <Form.Label>Confirmar contraseña</Form.Label>
                            <Form.Control type="password" name="inputRePassword2" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="inputRepresentante">
                            <Form.Label>Representante</Form.Label>
                            <Form.Control type="text" name="inputRepresentante" />
                        </Form.Group>
                        <Form.Group className="mb-3 form-check">
                            <Form.Check type="checkbox" label="Acepto terminos y condiciones" />
                        </Form.Group>
                        <Button variant="primary" type="submit">Registrarse</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
      </div>
    );
  }
  
  export default registro;