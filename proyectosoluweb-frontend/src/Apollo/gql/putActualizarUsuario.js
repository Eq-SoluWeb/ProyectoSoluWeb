import {gql} from '@apollo/client';

const PUT_ACTUALIZARUSUARIO=gql`mutation{
    ActualizarUsuario (usuario:{
        email: {email},
        identificacion: {identificacion},
        nombreCompleto: {nombres},
        password: {password},
    })
    {
      email
      identificacion
      nombreCompleto
      estado
      password
      rol
    }
  }`;
  export default PUT_ACTUALIZARUSUARIO