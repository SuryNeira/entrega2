import React from 'react';
import '../estilos/Descuento.scss'; 

const Descuento = ({ imagen }) => {
  return (
    <div className="descuento-container">
      <div className="circle">
        <img src={imagen} alt="imagen" />
      </div>
      <p className="text">Texto con descuento</p>
    </div>
  );
};

export default Descuento;
