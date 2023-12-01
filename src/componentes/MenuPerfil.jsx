import React from 'react';
import Usuario from './Usuario';
import '../estilos/MenuPerfil.scss';

const MenuPerfil = ({ usuario, onProductosFavoritosClick }) => {
  return (
    <div className="menu-perfil">
      <h2>Mi Perfil</h2>
      <Usuario {...usuario} foto="URL_DE_LA_FOTO" />

      <button className="boton-menu" onClick={onProductosFavoritosClick}>
        Productos Favoritos
      </button>
    </div>
  );
};

export default MenuPerfil;
