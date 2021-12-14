import { useMutation } from '@apollo/client';
import { useForm } from 'react-hook-form';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './registro.css';

const RegistroPage = () => {

    const { register, handleSubmit } = useForm();

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
                                name="nombre"
                                {...register("nombreCompleto", { required: true })}
                            />                            
                        </div>
                        <div className="form-group mt-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Número de identificación"
                                name="identificacion"
                                {...register("identificacion", { required: true })}
                            />
                        </div>
                        <div className="form-group mt-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Email"
                                name="email"
                                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                            />
                        </div>
                        <div className="form-group mt-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="password"
                                {...register("password", { required: true })}
                            />
                        </div>
                        <select className='form-control mb-3 mt-2' {...register("rol", { required: true })}>
                            <option disabled-selected>Elija su rol</option>
                            <option value="Administrador">Administrador</option>
                            <option value="Lider">Lider</option>
                            <option value="Estudiante">Estudiante</option>
                        </select>
                        <div className="form-group mt-4">
                            <center>
                                <input
                                    type="submit"
                                    className="btnSubmit"
                                    value="Enviar"
                                />             
                            </center>               
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegistroPage
