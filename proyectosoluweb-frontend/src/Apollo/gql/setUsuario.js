import { gql } from '@apollo/client'

const SET_USUARIO = gql`
        mutation setUsuario($nombre: String!, $identificacion: String!, $email: String!, $password: String!, $rol: String!) {            
            crearUsuario(usuario : {
                nombreCompleto: $nombreCompleto,
                identificacion: $apellido,
                email: $email,
                password: $password,
                rol: $rol
            }) {
                id
                nombreCompleto
                identificacion
                email
                password
                rol
            }               
        }
    `;

export default SET_USUARIO;