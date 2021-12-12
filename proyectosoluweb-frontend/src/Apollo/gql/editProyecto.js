import { gql,useMutation  } from '@apollo/client'

const EDITAR_PROYECTO = gql`
        mutation editProyecto($id:ID!,
                    $nombreProyecto:[String],
                    $objetivosGenerales:[String],
                    $objectivosEspecificos:[String])
                {
                    ActualizarDatosProyecto(Proyecto: {            
                       
                        nombreProyecto:$nombreProyecto
                        objetivosGenerales:$objetivosGenerles
                        objetivosEspecificos:$objetivosEspecificos
                       
                    })
                }
    `;

export default EDITAR_PROYECTO;