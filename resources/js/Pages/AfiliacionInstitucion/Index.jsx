import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link } from "@inertiajs/react";

export default function Index({ auth, afiliaciones }) {
    const [search, setSearch] = useState("");
    const [filteredAfiliacion, setFilteredAfiliacion] = useState(afiliaciones);

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearch(query);

        const filtered = afiliaciones.filter((afiliacion) =>
            afiliaciones.nombre.toLowerCase().includes(query)
        );
        setFilteredExperiencias(filtered);
    };

    return (
        <AuthenticatedLayout user={auth.user} header={<h2>AFILIACIONES</h2>}>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="mb-4">
                                <input
                                    type="text"
                                    value={search}
                                    onChange={handleSearch}
                                    placeholder="Buscar Afiliacion..."
                                    className="border border-gray-300 dark:border-gray-700 p-2 rounded-md w-full text-black"
                                />
                            </div>
                            <table className="w-full table-auto">
                                <thead>
                                    <tr>
                                        <th className="px-4 py-2">Institución</th>
                                        <th className="px-4 py-2">Condición </th>
                                        <th className="px-4 py-2">Fecha</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredAfiliaciones.map((afiliacion) => (
                                        <tr key={afiliacion.id}>
                                            <td className="border px-4 py-2">{afiliacion.institucion}</td>
                                            <td className="border px-4 py-2">{afiliacion.condicion}</td>
                                            <td className="border px-4 py-2">{afiliacion.fecha}</td>
                                            <td className="border px-4 py-2">
                                                <Link
                                                    href={route("afiliaciones.edit", afiliacion.id)}
                                                    className="text-blue-500 hover:text-blue-700"
                                                >
                                                    Editar
                                                </Link>
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
