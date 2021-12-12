import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from '../components/container/Navbar'
import ProyectosPage from '../components/proyectos/ProyectosPage';
import UsuariosPage from '../components/usuarios/UsuariosPage';

const ContentRoutes = () => {
    return (
       <>
        const auth = useAuth();
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <Routes>
                        <Route path="usuarios/:action" element={<UsuariosPage />} />
                        <Route path="usuarios" element={<UsuariosPage />} />
                        <Route path="proyectos/:action" element={<ProyectosPage />} />
                        <Route path="proyectos" element={<ProyectosPage />} />
                        <Route path="/" element={< UsuariosPage />} />
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default ContentRoutes
