import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage, useForm } from "@inertiajs/react";
import { useEffect } from "react";

export default function Form({ auth, docente }) {
    const { errors } = usePage().props;
    const { data, setData, post, put } = useForm({
        nombre: docente?.nombre || '',
        apellido_paterno: docente?.apellido_paterno || '',
        apellido_materno: docente?.apellido_materno || '',
        genero: docente?.genero || '',
        estado_civil: docente?.estado_civil || '',
        celular: docente?.celular || ''
    });

    useEffect(() => {
        if (docente) {
            setData({
                nombre: docente.nombre,
                apellido_paterno: docente.apellido_paterno,
                apellido_materno: docente.apellido_materno,
                genero: docente.genero,
                estado_civil: docente.estado_civil,
                celular: docente.celular
            });
        }
    }, [docente]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (docente) {
            put(route('docentes.update', docente.id), data);
        } else {
            post(route('docentes.store'), data);
        }
    };

    return (
        <AuthenticatedLayout user={auth.user} header={docente ? "Editar Docente" : "Crear Docente"}>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 gap-6">
                                    <div>
                                        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre</label>
                                        <input
                                            type="text"
                                            id="nombre"
                                            name="nombre"
                                            value={data.nombre}
                                            onChange={(e) => setData('nombre', e.target.value)}
                                            className="mt-1 block w-full"
                                        />
                                        {errors.nombre && <span className="text-red-500">{errors.nombre}</span>}
                                    </div>
                                    <div>
                                        <label htmlFor="apellido_paterno" className="block text-sm font-medium text-gray-700">Apellido Paterno</label>
                                        <input
                                            type="text"
                                            id="apellido_paterno"
                                            name="apellido_paterno"
                                            value={data.apellido_paterno}
                                            onChange={(e) => setData('apellido_paterno', e.target.value)}
                                            className="mt-1 block w-full"
                                        />
                                        {errors.apellido_paterno && <span className="text-red-500">{errors.apellido_paterno}</span>}
                                    </div>
                                    <div>
                                        <label htmlFor="apellido_materno" className="block text-sm font-medium text-gray-700">Apellido Materno</label>
                                        <input
                                            type="text"
                                            id="apellido_materno"
                                            name="apellido_materno"
                                            value={data.apellido_materno}
                                            onChange={(e) => setData('apellido_materno', e.target.value)}
                                            className="mt-1 block w-full"
                                        />
                                        {errors.apellido_materno && <span className="text-red-500">{errors.apellido_materno}</span>}
                                    </div>
                                    <div>
                                        <label htmlFor="genero" className="block text-sm font-medium text-gray-700">Género</label>
                                        <input
                                            type="text"
                                            id="genero"
                                            name="genero"
                                            value={data.genero}
                                            onChange={(e) => setData('genero', e.target.value)}
                                            className="mt-1 block w-full"
                                        />
                                        {errors.genero && <span className="text-red-500">{errors.genero}</span>}
                                    </div>
                                    <div>
                                        <label htmlFor="estado_civil" className="block text-sm font-medium text-gray-700">Estado Civil</label>
                                        <input
                                            type="text"
                                            id="estado_civil"
                                            name="estado_civil"
                                            value={data.estado_civil}
                                            onChange={(e) => setData('estado_civil', e.target.value)}
                                            className="mt-1 block w-full"
                                        />
                                        {errors.estado_civil && <span className="text-red-500">{errors.estado_civil}</span>}
                                    </div>
                                    <div>
                                        <label htmlFor="celular" className="block text-sm font-medium text-gray-700">Celular</label>
                                        <input
                                            type="text"
                                            id="celular"
                                            name="celular"
                                            value={data.celular}
                                            onChange={(e) => setData('celular', e.target.value)}
                                            className="mt-1 block w-full"
                                        />
                                        {errors.celular && <span className="text-red-500">{errors.celular}</span>}
                                    </div>
                                    <div className="mt-4">
                                        <button
                                            type="submit"
                                            className="inline-flex items-center px-4 py-2 bg-blue-500 border border-transparent rounded-md font-semibold text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                        >
                                            {docente ? 'Actualizar' : 'Guardar'}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
