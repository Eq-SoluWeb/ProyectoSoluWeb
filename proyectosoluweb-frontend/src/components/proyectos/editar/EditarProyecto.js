import { useLazyQuery, useMutation,useQuery} from '@apollo/client';
import React from 'react'
import { useForm } from 'react-hook-form';
import EDITAR_PROYECTO from '../../../Apollo/gql/editProyecto';
import GET_USUARIOS from '../../../Apollo/gql/getUsuarios';

const EditarProyecto = () => {

    const { register, handleSubmit } = useForm();
    const[leeProyecto]=useLazyQuery()
    const [editProyecto] = useMutation(EDITAR_PROYECTO);
    const { loading, data, error } = useQuery(GET_USUARIOS);
    const handleUpdate = (data) => {
        console.log('Crear Proyecto');
        console.log(data);

        const { nombreProyecto, fechaInicio, fechaTerminacion, lider, objetivosGenerales, objetivosEspecificos  } = data;

        EditarProyecto({ variables: { nombreProyecto, fechaInicio, fechaTerminacion, lider, objetivosGenerales, objetivosEspecificos } })

    }

    return (
        <form onSubmit={handleSubmit(handleUpdate)}>
            <div className="form-group">
                <input type="text" className='form-control mb-3' placeholder="Nombre del Proyecto" {...register("nombreProyecto", { required: true })} />
                <input type="text" className='form-control mb-3' placeholder="Fecha de Inicio" {...register("fechaInicio", { required: true })} />
                <input type="text" className='form-control mb-3' placeholder="Fecha de Terminación" {...register("fechaTerminacion", { required: true })} />
                <input type="text" className='form-control mb-3' placeholder="Objetivos Generales" {...register("objetivosGenerales", { required: true })} />
                <input type="text" className='form-control mb-3' placeholder="Objetivos Específicos" {...register("objetivosEspecificos", { required: true })} />
                
                <input type="text" className='form-control mb-3' placeholder="Lider" {...register("lider", { required: true })} />
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

export default EditarProyecto


