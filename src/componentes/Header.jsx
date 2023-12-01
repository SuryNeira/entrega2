import React from 'react';
import { Link } from 'react-router-dom';
import { Registro } from 'react-router-dom';
import '../estilos/EstilosHeader.scss';
const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <button className="bothead">Ayuda</button>
        <button className="bothead">Sobre nosotros</button>
        <button className="bothead">¿Cómo ser parte de nosotros?</button>
      </div>
      <div className="header-right">
        <button className="bothead">Lista de deseos</button>
        <button className="bothead">Mi cesta</button>
        <Link to="../paginas/login">
          <button className="bothead">Iniciar sesión</button>
        </Link>
        <Link to="../paginas/registro">
          <button className="bothead">Registro</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;