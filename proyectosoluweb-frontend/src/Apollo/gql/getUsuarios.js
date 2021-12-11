import { gql } from '@apollo/client'

const GET_USUARIOS = gql`
        query {            
            usuarios {
                id
                nombreCompleto
                identificacion
                email
                estado
                rol
            }               
        }
    `;

export default GET_USUARIOS;