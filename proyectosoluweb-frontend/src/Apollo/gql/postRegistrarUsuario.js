import {gql} from '@apollo/client';

const POST_REGISTRARUSUARIO=gql`mutation{
    RegistrarUsuario (usuario:{
        email: {email},
        identificacion: {identificacion},
        nombreCompleto: {nombres},
        password: {password},
        rol: {rol}
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
  export default POST_REGISTRARUSUARIO