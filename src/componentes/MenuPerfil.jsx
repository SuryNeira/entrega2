import React from 'react';
import Usuario from './Usuario';
import '../estilos/MenuPerfil.scss';

import fotoUsuario from '../imagenes/perfil.png';

const MenuPerfil = ({ usuario, onProductosFavoritosClick }) => {
  return (
    <div className="menu-perfil">
      <h2>Mi Perfil</h2>
      {/* Usa la imagen importada */}
      <Usuario {...usuario} foto={fotoUsuario} />

      <button className="boton-menu" onClick={onProductosFavoritosClick}>
        Productos Favoritos
      </button>
    </div>
  );
};

export default MenuPerfil;
