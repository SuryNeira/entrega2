import React, { useState } from 'react';
import '../estilos/Busqueda.css';
const BarraBusqueda = () => {
  const [busqueda, setBusqueda] = useState('');

  const handleChange = (event) => {
    setBusqueda(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Realizando búsqueda: ', busqueda);
  };

  return (
    <form className="barra-busqueda" onSubmit={handleSubmit}>
      <input
        type="text"
        value={busqueda}
        onChange={handleChange}
        placeholder="Buscar..."
      />
      <button className="busqueda" type="submit">Buscar</button>
    </form>
  );
};

export default BarraBusqueda;
