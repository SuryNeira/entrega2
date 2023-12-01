import React from "react";
import Categoria from "./Categoria";
import Producto from "./Producto";
import '../estilos/SuperEstilo.scss';

const Supermercado = () => {
  const categorias = [
    { nombre: "Frutas y verduras", imagen: "data:image/jpeg;RCvAsmD0BeoiyAiIgCIiAIiIAiIgP/9k=" },
    { nombre: "Frutas y verduras", imagen: "https://media.discordapp.net/attachments/1141512201505611796/1168318100882591815/logoPNG.png?ex=65515405&is=653edf05&hm=330133ef7a6768a87b1341e972a1281a2f544b1446cb638cbbc187aeb7d67cb9&=" },
    { nombre: "Frutas y verduras", imagen: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMS" },
    { nombre: "Frutas y verduras", imagen: "https://media.discordapp.net/attachments/1141512201505611796/1168318100882591815/logoPNG.png?ex=65515405&is=653edf05&hm=330133ef7a6768a87b1341e972a1281a2f544b1446cb638cbbc187aeb7d67cb9&=" },
    { nombre: "Frutas y verduras", imagen: "data:image/jpeg;RCvAsmD0BeoiyAiIgCIiAIiIAiIgP/9k=" },
    { nombre: "Frutas y verduras", imagen: "https://media.discordapp.net/attachments/1141512201505611796/1168318100882591815/logoPNG.png?ex=65515405&is=653edf05&hm=330133ef7a6768a87b1341e972a1281a2f544b1446cb638cbbc187aeb7d67cb9&=" },
    { nombre: "Frutas y verduras", imagen: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMS" },
    { nombre: "Frutas y verduras", imagen: "https://media.discordapp.net/attachments/1141512201505611796/1168318100882591815/logoPNG.png?ex=65515405&is=653edf05&hm=330133ef7a6768a87b1341e972a1281a2f544b1446cb638cbbc187aeb7d67cb9&=" },
    
    
  ];

  const handleClick = (nombre) => {
    
    console.log(`Se ha hecho clic en la categoría ${nombre}`);
  };

  return (
    <div>
      <h2 className="titulos">Supermercado</h2>
      <div className="contenedor-supermercado">
        {categorias.map((categoria, index) => (
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

export default Supermercado