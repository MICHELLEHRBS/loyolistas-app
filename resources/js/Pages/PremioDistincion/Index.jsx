import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link } from "@inertiajs/react";

export default function Index({ auth, premios }) {
    const [search, setSearch] = useState("");
    const [filteredPremios, setFilteredPremios] = useState(premios);

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearch(query);

        const filtered = premios.filter((premio) =>
            premios.nombre.toLowerCase().includes(query)
        );
        setFilteredExperiencias(filtered);
    };

    return (
        <AuthenticatedLayout user={auth.user} header={<h2>PREMIOS Y DISTINCIONES </h2>}>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="mb-4">
                                <input
                                    type="text"
                                    value={search}
                                    onChange={handleSearch}
                                    placeholder="Buscar premio..."
                                    className="border border-gray-300 dark:border-gray-700 p-2 rounded-md w-full text-black"
                                />
                            </div>
                            <table className="w-full table-auto">
                                <thead>
                                    <tr>
                                        <th className="px-4 py-2">Tipo</th>
                                        <th className="px-4 py-2">Título</th>
                                        <th className="px-4 py-2">Institución</th>
                                        <th className="px-4 py-2">Lugar</th>
                                        <th className="px-4 py-2">Fecha</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredPremios.map((premio) => (
                                        <tr key={premio.id}>
                                            <td className="border px-4 py-2">{premio.tipo}</td>
                                            <td className="border px-4 py-2">{premio.titulo}</td>
                                            <td className="border px-4 py-2">{premio.institucion}</td>
                                            <td className="border px-4 py-2">{premio.lugar}</td>
                                            <td className="border px-4 py-2">{premio.fecha}</td>
                                            <td className="border px-4 py-2">
                                                <Link
                                                    href={route("premios.edit", premio.id)}
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
