import {gql} from '@apollo/client';
const GET_PROYECTOS=gql`query{
    Proyectos{
      id
      lider{nombreCompleto}
      nombreProyecto
      estadoProyecto
    }
  }`;
  export default GET_PROYECTOS