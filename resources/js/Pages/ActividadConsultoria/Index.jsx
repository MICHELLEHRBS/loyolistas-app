import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link } from "@inertiajs/react";

export default function Index({ auth, actividades }) {
    const [search, setSearch] = useState("");
    const [filteredActividades, setFilteredActividades] = useState(actividades);

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearch(query);

        const filtered = actividades.filter((actividad) =>
            actividades.nombre.toLowerCase().includes(query)
        );
        setFilteredActividades(filtered);
    };

    return (
        <AuthenticatedLayout user={auth.user} header={<h2>Actividades de consultoria y investigacion en el área</h2>}>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="mb-4">
                                <input
                                    type="text"
                                    value={search}
                                    onChange={handleSearch}
                                    placeholder="Buscar actividad de consultoria..."
                                    className="border border-gray-300 dark:border-gray-700 p-2 rounded-md w-full text-black"
                                />
                            </div>
                            <table className="w-full table-auto">
                                <thead>
                                    <tr>

                                        <th className="px-4 py-2">titulo</th>
                                        <th className="px-4 py-2">organismo</th>
                                        <th className="px-4 py-2">fecha</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredActividades.map((actividad) => (
                                        <tr key={actividad.id}>
                                            
                                            <td className="border px-4 py-2">{actividad.titulo}</td>
                                            <td className="border px-4 py-2">{actividad.organismo}</td>
                                            <td className="border px-4 py-2">{actividad.fecha}</td>
                                            <td className="border px-4 py-2">
                                                <Link
                                                    href={route("actividad.edit", actividad.id)}
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