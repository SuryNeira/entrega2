
import React, { useState } from 'react';
import '../estilos/EstiloFiltros.scss';

const Filtros = () => {
  const [expandirFiltros, setExpandirFiltros] = useState(false);

  const toggleFiltros = () => {
    setExpandirFiltros(!expandirFiltros);
  };

  const [expandirOrdenarPor, setExpandirOrdenarPor] = useState(false);
  const [expandirHorario, setExpandirHorario] = useState(false);
  const [expandirGuardados, setExpandirGuardados] = useState(false);

  const toggleCategoria = (categoria) => {
    switch (categoria) {
      case 'OrdenarPor':
        setExpandirOrdenarPor(!expandirOrdenarPor);
        break;
      case 'Horario':
        setExpandirHorario(!expandirHorario);
        break;
      case 'Guardados':
        setExpandirGuardados(!expandirGuardados);
        break;
      default:
        break;
    }
  };

  return (
    <div className={`filtros ${expandirFiltros ? 'expandir' : ''}`}>
      <div className="encabezado" onClick={toggleFiltros}>
        Filtros
        <span className={`flecha ${expandirFiltros ? 'arriba' : 'abajo'}`}>
          {expandirFiltros ? '▲' : '▼'}
        </span>
      </div>
  
      {expandirFiltros && (
        <div className="categorias">
          <div className="categoria">
            <h3 onClick={() => toggleCategoria('OrdenarPor')}>Ordenar por</h3>
            {expandirOrdenarPor && (
              <div>
                <button className="boton-filtro" onClick={() => console.log('Clic en Mas cercano')}>
                  Mas cercano
                </button>
                <button className="boton-filtro"  onClick={() => console.log('Clic en Precio')}>Precio</button>
                <button className="boton-filtro" onClick={() => console.log('Clic en Popularidad')}>
                  Popularidad
                </button>
              </div>
            )}
          </div>
  
          <div className="categoria">
            <h3 onClick={() => toggleCategoria('Horario')}>Horario</h3>
            {expandirHorario && (
              <div>
                <button className="boton-filtro" onClick={() => console.log('Clic en Mañana')}>Mañana</button>
                <button className="boton-filtro" onClick={() => console.log('Clic en Tarde')}>Tarde</button>
                <button className="boton-filtro" onClick={() => console.log('Clic en 24 horas')}>24 horas</button>
              </div>
            )}
          </div>
  
          <div className="categoria">
            <h3 onClick={() => toggleCategoria('Guardados')}>Guardados</h3>
            {expandirGuardados && (
              <div>
                <button className="boton-filtro" onClick={() => console.log('Clic en Favoritos')}>
                  Favoritos
                </button>
                <button className="boton-filtro" onClick={() => console.log('Clic en Guardados recientemente')}>
                  Guardados recientemente
                </button>
                <button className="boton-filtro" onClick={() => console.log('Clic en Destacados')}>
                  Destacados
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
  };
  
  export default Filtros;
  