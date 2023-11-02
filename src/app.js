import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './componentes/Header';
import Inicio from './Inicio';
import Ofertas from './Ofertas';
import Login from './login';
import Registro from './registro';  // Asegúrate de ajustar la ruta a tu componente de inicio de sesión
// import otros componentes

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/ofertas" element={<Ofertas />} />
          <Route path="/login" element={<Login />} /> {/* Añade esta ruta para el componente de inicio de sesión */}
          <Route path="/registro" element={<Registro />} /> {/* Añade esta ruta para el componente de inicio de sesión */}
          {/* Agrega otras rutas aquí */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
