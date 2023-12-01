import React from 'react';

const Usuario = ({ nombre, edad, correo, direccion, foto }) => {
  return (
    <div>
      <h2>Datos del Usuario</h2>
      {foto && <img src={foto} alt="Foto de usuario" style={{ maxWidth: '100%', borderRadius: '50%' }} />}
      <p><strong>Nombre:</strong> {nombre}</p>
      <p><strong>Edad:</strong> {edad}</p>
      <p><strong>Correo:</strong> {correo}</p>
      <p><strong>Dirección:</strong> {direccion}</p>
    </div>
  );
};

export default Usuario;
