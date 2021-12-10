import {gql} from '@apollo/client';

const GET_AUTENTICACIONUSUARIO=gql`query{
  Usuarios
  {
    email
    password
  }
}`;
  export default GET_AUTENTICACIONUSUARIO