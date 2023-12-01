import React from "react";
import "../estilos/Categoria.scss";

function Categoria(props) {
  const handleClick = () => {
   
  };

  return (
    <button  onClick={handleClick}>
      <div className="contenedor-categoria">
        <img className="imagen-categoria" src={props.imagen} alt={props.nombre} />
        <p className="nombre-categoria">{props.nombre}</p>
      </div>
    </button>
  );
}

export default Categoria;