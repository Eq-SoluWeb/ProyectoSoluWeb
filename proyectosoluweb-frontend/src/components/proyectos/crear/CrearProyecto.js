import { useMutation ,useQuery} from '@apollo/client';
import React from 'react'
import { useForm } from 'react-hook-form';
import SET_PROYECTO from '../../../Apollo/gql/setProyecto';
import GET_USUARIOS from '../../../Apollo/gql/getUsuarios';

const CrearProyecto = () => {

    const { register, handleSubmit } = useForm();
    const { loading, data, error } = useQuery(GET_USUARIOS);
    const [crearProyecto] = useMutation(SET_PROYECTO); // Esto funciona sobre demanda como LazyQuery , solo cuando lo llamo

    const handleCreate = (data) => {
        console.log(data);
        const { nombreProyecto, fechaInicio, fechaTerminacion, lider, objetivosGenerales, objetivosEspecificos  } = data;
      
        crearProyecto({ variables: { nombreProyecto, fechaInicio, fechaTerminacion, lider, objetivosGenerales, objetivosEspecificos  } })

    }

    return (
        <form onSubmit={handleSubmit(handleCreate)}>   
            <div className="form-group">
                <input type="text" className='form-control mb-3' placeholder="Nombre del Proyecto" {...register("nombreProyecto", { required: true })} />
                <input type="text" className='form-control mb-3' placeholder="Fecha de Inicio" {...register("fechaInicio", { required: true })} />
                <input type="text" className='form-control mb-3' placeholder="Fecha de Terminación" {...register("fechaTerminacion", { required: true })} />
                <input type="text" className='form-control mb-3' placeholder="Objetivos Generales" {...register("objetivosGenerales", { required: true })} />
                <input type="text" className='form-control mb-3' placeholder="Objetivos Específicos" {...register("objetivosEspecificos", { required: true })} />
                <input type="number" className='form-control mb-3'  {...register("presupuesto", { required: true })} />
               
                <select className='form-control mb-3' {...register("lider", { required: true })}>
                { data && data.Usuarios.map((usuario, index) => (
                   
                    <option  value={usuario.id}>{usuario.nombreCompleto}</option>
                ))}
                </select>
            </div>
            <input type="submit" />

        </form>
    )
}

export default CrearProyecto
