import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './componentes/Header';
import Inicio from './paginas/Inicio';
import Ofertas from './paginas/Ofertas';
import Login from './paginas/login';
import Registro from './paginas/registro';  // Asegúrate de ajustar la ruta a tu componente de inicio de sesión
import Footer from './componentes/Footer';
import MenuPerfil from './componentes/MenuPerfil';
import Preguntas from './componentes/preguntas';

// import otros componentes

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/paginas/inicio/" element={<Inicio />} />
          <Route path="/paginas/Ofertas" element={<Ofertas />} />
          <Route path="/paginas/login" element={<Login />} /> {/* Añade esta ruta para el componente de inicio de sesión */}
          <Route path="/paginas/registro" element={<Registro />} /> {/* Añade esta ruta para el componente de inicio de sesión */}
          <Route path="/paginas/PerfilUser" element={<MenuPerfil />} />
          <Route path="/paginas/preguntas" element={<Preguntas />} />
          {/* Agregar otras rutas aquí */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
