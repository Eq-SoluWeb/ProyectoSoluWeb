import './App.css';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import NuevoUsuario from './components/NuevoUsuario';
import Usuarios from './components/Usuarios';
import Registro from './components/Registro';
import Login from './components/Login';
import Proyectos from './components/Proyectos';
import Inscripciones from './components/Inscripciones';
import Avances from './components/Avances';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Registro" element={<Registro />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/NuevoUsuario" element={<NuevoUsuario />} />
        <Route path="/Usuarios" element={<Usuarios />} />
        <Route path="/Proyectos" element={<Proyectos />} />
        <Route path="/Inscripciones" element={<Inscripciones />} />
        <Route path="/Avances" element={<Avances />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
