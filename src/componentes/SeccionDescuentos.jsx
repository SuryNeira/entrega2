
import React from 'react';
import Descuento from './Descuento'; // Asegúrate de importar el componente Descuento

const SeccionDescuentos = () => {
  const imagenes = [
    "ruta-imagen-1.png",
    "ruta-imagen-2.png",
    "ruta-imagen-3.png",
    "ruta-imagen-4.png"
  ];

  return (
    <div className="seccion-descuentos-container">
      {imagenes.map((imagen, index) => (
        <button key={index}>
          <Descuento imagen={imagen} />
        </button>
      ))}
    </div>
  );
};

export default SeccionDescuentos;
