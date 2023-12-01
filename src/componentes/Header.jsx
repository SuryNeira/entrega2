import React from 'react';
import { Link } from 'react-router-dom';
import { Registro } from 'react-router-dom';
import '../estilos/EstilosHeader.scss';
const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <Link to="../paginas/inicio">
          <button className="bothead">Inicio</button>
        </Link>
        <Link to="../paginas/preguntas">
          <button className="bothead">Preguntas Frecuentes</button>
        </Link>
        <Link to="../paginas/Ofertas">
          <button className="bothead">Ofertas</button>
        </Link>
       
      </div>
      <div className="header-right">
      <Link to="../paginas/PerfilUser">
          <button className="bothead">Mi Perfil</button>
        </Link>
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