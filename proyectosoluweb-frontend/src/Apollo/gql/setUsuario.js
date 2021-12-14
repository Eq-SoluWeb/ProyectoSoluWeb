import { gql } from '@apollo/client'

const SET_USUARIO = gql`
<<<<<<< HEAD
        mutation AgregarUsuario($nombreCompleto: String!, $identificacion: String!, $email: String!, $password: String!, $rol: String!) {            
=======
        mutation setUsuario($nombreCompleto: String, $identificacion: String, $email: String, $password: String, $rol: String) {            
>>>>>>> Feature_CS
            AgregarUsuario(usuario : {
                nombreCompleto: $nombreCompleto,
                identificacion: $identificacion,
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