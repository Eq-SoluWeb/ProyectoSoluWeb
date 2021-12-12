import React from 'react'
import { useNavigate } from 'react-router-dom';
import './registro.css';

const RegistroPage = () => {

    const navigate = useNavigate();

    const handleRegistro = (e) => {

        e.preventDefault();
        // agregar una nueva ruta al stack de navegacion
        // navigate('/usuarios')

        // reemplazar el historial para no poder regresar a la ruta previa
        navigate('/login', {
            replace: true
        })
        console.log('login');
    }

    return (
        <div className="registro">
            <div className="row justify-content-center align-items-center minh-100">
                <div className="col-md-6 registro-form-1 registro-container">
                    <h3>Registro</h3>
                    <form onSubmit={handleRegistro}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre Completo"
                                name="Nombre"
                            />
                        </div>
                        <div className="form-group mt-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Número de identificación"
                                name="Identificacion"
                            />
                        </div>
                        <div className="form-group mt-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Email"
                                name="Email"
                            />
                        </div>
                        <div className="form-group mt-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="Password"
                            />
                        </div>
                        <div className="form-group mt-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Rol"
                                name="Rol"
                            />
                        </div>
                        <div className="form-group mt-5">
                            <input
                                type="submit"
                                className="btnSubmit md-2"
                                value="Enviar"
                            />
                            <input
                                type="submit"
                                className="btnSubmit md-2"
                                value="Ir al Login"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegistroPage
