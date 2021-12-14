import { gql } from '@apollo/client'

const EDITAR_PROYECTO = gql`
<<<<<<< HEAD
        mutation editProyecto($id:ID!,
                    $nombreProyecto:String,
                    $objetivosGenerales:[String],
                    $objectivosEspecificos:[String])
                {
                    ActualizarDatosProyecto(Proyecto: {            
                       
                        nombreProyecto:$nombreProyecto
                        objetivosGenerales:$objetivosGenerles
                        objetivosEspecificos:$objetivosEspecificos
                       
                    })
                }
=======
        mutation editProyecto($nombreProyecto: String!, $fechaI: String!, $fechaT: String!, $objetivosG: [String], $objetivosE: [String], $presupuesto: Int!, $lider: String! ){            
            ActualizarDatosProyecto(id: $ID, input: {
                nombreProyecto: $nombreProyecto,
                fechaInicio: $fechaI,
                fechaTerminacion: $FechaT,
                objetivosGenerales: $objetivosG,
                objetivosEspecificos: $objetivosE,
                presupuesto: $presupuesto
                lider: $lider
            }) {
                id
                nombreProyecto
                fechaInicio
                fechaTerminacion
                objetivosGenerales
                objetivosEspecificos
                presupuesto
                estado
                lider{
                    id
                    nombreCompleto
                    identiicacion
                }
            }               
        }
>>>>>>> c039d44032336e44fe02a5afe1d5752e15f25219
    `;

export default EDITAR_PROYECTO;