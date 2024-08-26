import React from 'react';
import { useForm } from '@inertiajs/inertia-react';
//import { Link } from '@inertiajs/inertia-react';

const RegisterForm = () => {
    const { data, setData, post, processing, errors } = useForm({
        nombre: '',
        apellido_paterno: '',
        apellido_materno: '',
        genero: '',
        estado_civil: '',
        celular: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('docentes.store'));
    };

    return (
        <div>
            <h1>Registro de Docente</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre</label>
                    <input
                        type="text"
                        name="nombre"
                        value={data.nombre}
                        onChange={e => setData('nombre', e.target.value)}
                    />
                    {errors.nombre && <div>{errors.nombre}</div>}
                </div>
                <div>
                    <label>Apellido Paterno</label>
                    <input
                        type="text"
                        name="apellido_paterno"
                        value={data.apellido_paterno}
                        onChange={e => setData('apellido_paterno', e.target.value)}
                    />
                    {errors.apellido_paterno && <div>{errors.apellido_paterno}</div>}
                </div>
                {/* Agrega los demás campos aquí */}
                <button type="submit" disabled={processing}>Registrar</button>
            </form>
        </div>
    );
};

export default RegisterForm;
