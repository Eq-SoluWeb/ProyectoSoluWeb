import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import RegistroPage from '../components/registro/RegistroPage';
import ContentRoutes from './ContentRoutes';

const AppRouter = () => {
    return (
        
        <BrowserRouter>
            <Routes>
                <Route path="/registro" element={<RegistroPage />} />

                <Route path="/*" element={<ContentRoutes />} />

            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
