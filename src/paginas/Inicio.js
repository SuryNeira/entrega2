import React from 'react';
import { Link } from 'react-router-dom';
import Hogar from '../componentes/Hogar';
import Filtros from '../componentes/Filtros';
import SeccionOfertas from '../componentes/SeccionOfertas';
import Supermercado from '../componentes/Supermercado';
import BarraBusqueda from '../componentes/BarraBusqueda';
import Footer from '../componentes/Footer';
import '../estilospag/inicio.scss';

const Inicio = () => {
  return (
    <div className="contenedor-inicio">

      <div className="contenedor-principal">
        <div className="contenedor-filtros">
          <Filtros />
        </div>
        <div className="contenedor-barra">
          <BarraBusqueda />
          <Link to="/ofertas" className="link-ofertas">
            <SeccionOfertas />
          </Link>
          <Supermercado />
          <Hogar />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Inicio;