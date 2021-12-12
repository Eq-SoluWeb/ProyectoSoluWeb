import { gql } from '@apollo/client'

const EDITAR_PROYECTO = gql`
        mutation ActualizarDatosProyecto(id:$id) {            
            Proyectos {
                id
                nombreProyecto
                objetivosGenerales
                objetivosEspecificos
                presupuesto
                fechaInicio
                fechaterminacion
                lider
                estadoProyecto
                faseProyecto

            }               
        }
    `;

export default EDITAR_PROYECTO;