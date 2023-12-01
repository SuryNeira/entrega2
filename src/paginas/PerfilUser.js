import React from 'react';
import Filtros from '../componentes/Filtros';
import '../estilospag/ofertas.scss';

const PerfilUser = () => {
  return (
    <div className="contenedor-inicio">
      <div className="contenedor-principal">
        <div className="contenedor-filtros">
          <Filtros />
        </div>
        <div className="contenedor-barra">

        </div>
        
      </div>
      
    </div>
    
  );
};

export default PerfilUser;