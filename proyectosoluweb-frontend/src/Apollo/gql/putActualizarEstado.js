import {gql} from '@apollo/client';

const PUT_ACTUALIZARESTADO=gql`mutation{
    ActualizarEstado (usuario:{
        estado: {estado},
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
  export default PUT_ACTUALIZARESTADO