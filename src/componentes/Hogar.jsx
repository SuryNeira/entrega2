import React from "react";
import Categoria from "./Categoria";
import '../estilos/HogarEstilos.css';

const Hogar = () => {
  const categoriasH = [
    { nombre: "Libros", imagen: "data:image/jpeg;base64,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" },
    { nombre: "Instrumentos", imagen: "https://media.discordapp.net/attachments/1141512201505611796/1168318100882591815/logoPNG.png?ex=65515405&is=653edf05&hm=330133ef7a6768a87b1341e972a1281a2f544b1446cb638cbbc187aeb7d67cb9&=" },
    // Asegúrate de completar el resto de las categorías
  ];

  const handleClick = (nombre) => {
    // Agrega la lógica que deseas ejecutar al hacer clic en la categoría aquí
    console.log(`Se ha hecho clic en la categoría ${nombre}`);
  };

  return (
    <div>
      <h2 className="titulos">Hogar</h2>
      <div className="contenedor-hogar">
        {categoriasH.map((categoria, index) => (
          <Categoria
            key={index}
            nombre={categoria.nombre}
            imagen={categoria.imagen}
            onClick={() => handleClick(categoria.nombre)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hogar;