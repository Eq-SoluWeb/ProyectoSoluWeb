import { gql } from '@apollo/client';
 

const SET_PROYECTO = gql`
        mutation setProyecto($nombreProyecto: String, 
                             $fechaInicio: String, 
                             $fechaTerminacion: String, 
                             $objetivosGenerales: [String], 
                             $objetivosEspecificos: [String], 
                             $presupuesto: Int, 
                             $lider: String )
                  {    
            AgregarProyecto(proyecto : {
                nombreProyecto: $nombreProyecto,
                objetivosGenerales: $objetivosGenerales,
                objetivosEspecificos:$objetivosEspecificos,
                presupuesto: $presupuesto,
                fechaInicio: $fechaInicio,
                fechaTerminacion: $fechaTerminacion,
                lider: $lider
            }) {
                nombreProyecto
               
               
            }               
        }
    `;

export default SET_PROYECTO;