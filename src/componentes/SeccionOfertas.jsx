import React from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de tener instalada la biblioteca react-router-dom
import '../estilos/SeccionOfertas.scss'; 

const SeccionOfertas = () => {
  return (
    <div className="seccion-ofertas">
      <h2>
      <Link to="/paginas/ofertas">Ver todas las ofertas</Link>
      </h2>
    </div>
  );
};

export default SeccionOfertas;
