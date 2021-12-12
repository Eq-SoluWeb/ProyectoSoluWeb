import React, { Component } from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from '../components/container/Navbar'
import LoginPage from '../components/login/LoginPage';
import ProyectosPage from '../components/proyectos/ProyectosPage';
import RegistroPage from '../components/registro/RegistroPage';
import UsuariosPage from '../components/usuarios/UsuariosPage';

const ContentRoutes = () => {
    return (
       <>      
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <Routes>
                        <Route path="usuarios/:action" element={<UsuariosPage />} />
                        <Route path="usuarios" element={<UsuariosPage />} />
                        <Route path="proyectos/:action" element={<ProyectosPage />} />
                        <Route path="proyectos" element={<ProyectosPage />} />
                        <Route path="login/:action" element={<LoginPage />} />
                        <Route path="login" element={<LoginPage />} />
                        <Route path="registro/:action" element={<RegistroPage />} />
                        <Route path="/" element={< RegistroPage />} />
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default ContentRoutes
