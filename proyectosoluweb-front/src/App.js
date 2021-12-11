import './App.css';
import AppRouter from './routers/AppRouter';
import AuthProvider from './auth/AuthProvider';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/layouts/Layout';

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
<<<<<<< HEAD
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
=======
    <div >
     <BrowserRouter>
        <AuthProvider>
        <Layout>
          <AppRouter />
          </Layout>
        </AuthProvider>
   </BrowserRouter>
    </div>

>>>>>>> f01e3382d4c8bf5c2b4b15b45d9a6011d1498654
  );
}

export default App;
