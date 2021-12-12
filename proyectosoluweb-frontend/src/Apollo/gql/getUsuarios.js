<<<<<<< HEAD
import {gql} from '@apollo/client';

const GET_USUARIOS=gql`query{
    Usuarios
    {
      email
      identificacion
      nombreCompleto
      estado
      password
      rol
    }
  }`;
  export default GET_USUARIOS
=======
import { gql } from '@apollo/client'

const GET_USUARIOS = gql`
        query {            
            Usuarios {
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
>>>>>>> Feature_JR
