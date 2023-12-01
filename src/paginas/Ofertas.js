import React from 'react';
import Header from '../componentes/Header';
import Hogar from '../componentes/Hogar';
import SeccionDescuentos from '../componentes/SeccionDescuentos';
import Filtros from '../componentes/Filtros';
import Supermercado from '../componentes/Supermercado';
import BarraBusqueda from '../componentes/BarraBusqueda';
import Footer from '../componentes/Footer';
import '../estilospag/ofertas.scss';


// <img alt='imagenlogo' src="https://media.discordapp.net/attachments/1141512201505611796/1168318100882591815/logoPNG.png?ex=65515405&is=653edf05&hm=330133ef7a6768a87b1341e972a1281a2f544b1446cb638cbbc187aeb7d67cb9&="/>
const Ofertas = () => {
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

export default Ofertas;