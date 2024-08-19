import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";

export default function Index({ auth }) {
    const { docentes } = usePage().props;

    return (
        <AuthenticatedLayout user={auth.user} header="Docentes">
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <table className="w-full">
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Apellido Paterno</th>
                                        <th>Apellido Materno</th>
                                        <th>Género</th>
                                        <th>Estado Civil</th>
                                        <th>Celular</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {docentes.map((docente) => (
                                        <tr key={docente.id}>
                                            <td>{docente.nombre}</td>
                                            <td>{docente.apellido_paterno}</td>
                                            <td>{docente.apellido_materno}</td>
                                            <td>{docente.genero}</td>
                                            <td>{docente.estado_civil}</td>
                                            <td>{docente.celular}</td>
                                            <td>
                                                <a href={route('docentes.edit', docente.id)} className="text-blue-500">Editar</a>
                                                {/* Aquí puedes agregar un enlace para eliminar */}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
