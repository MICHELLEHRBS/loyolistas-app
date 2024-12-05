import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link } from "@inertiajs/react";

export default function Index({ auth, experiencias }) {
    const [search, setSearch] = useState("");
    const [filteredExperiencias, setFilteredExperiencias] = useState(experiencias);

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearch(query);

        const filtered = experiencias.filter((experiencia) =>
            experiencias.nombre.toLowerCase().includes(query)
        );
        setFilteredExperiencias(filtered);
    };

    return (
        <AuthenticatedLayout user={auth.user} header={<h2>Experiencia Laboral</h2>}>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="mb-4">
                                <input
                                    type="text"
                                    value={search}
                                    onChange={handleSearch}
                                    placeholder="Buscar experiencia laboral..."
                                    className="border border-gray-300 dark:border-gray-700 p-2 rounded-md w-full text-black"
                                />
                            </div>
                            <table className="w-full table-auto">
                                <thead>
                                    <tr>
                                        <th className="px-4 py-2">Nombre</th>
                                        <th className="px-4 py-2">Cargo</th>
                                        <th className="px-4 py-2">Fecha de Inicio</th>
                                        <th className="px-4 py-2">Fecha de Fin</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredExperiencias.map((experiencia) => (
                                        <tr key={experiencia.id}>
                                            <td className="border px-4 py-2">{experiencia.nombre}</td>
                                            <td className="border px-4 py-2">{experiencia.cargo}</td>
                                            <td className="border px-4 py-2">{experiencia.fecha_inicio}</td>
                                            <td className="border px-4 py-2">{experiencia.fecha_fin}</td>
                                            <td className="border px-4 py-2">
                                                <Link
                                                    href={route("experiencias.edit", experiencia.id)}
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
