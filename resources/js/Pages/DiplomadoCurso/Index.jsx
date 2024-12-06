import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link } from "@inertiajs/react";

export default function Index({ auth, diplomados }) {
    const [search, setSearch] = useState("");
    const [filteredDiplomados, setFilteredDiplomados] = useState(diplomados);

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearch(query);

        const filtered = diplomados.filter((diplomado) =>
            diplomados.nombre.toLowerCase().includes(query)
        );
        setFilteredDiplomados(filtered);
    };

    return (
        <AuthenticatedLayout user={auth.user} header={<h2>Diplomado de curso</h2>}>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="mb-4">
                                <input
                                    type="text"
                                    value={search}
                                    onChange={handleSearch}
                                    placeholder="Buscar diplomado de curso..."
                                    className="border border-gray-300 dark:border-gray-700 p-2 rounded-md w-full text-black"
                                />
                            </div>
                            <table className="w-full table-auto">
                                <thead>
                                    <tr>
                                        <th className="px-4 py-2">rol</th>
                                        <th className="px-4 py-2">tipo_evento</th>
                                        <th className="px-4 py-2">titulo</th>
                                        <th className="px-4 py-2">institucion</th>
                                        <th className="px-4 py-2">lugar_pais</th>
                                        <th className="px-4 py-2">Fecha de Inicio</th>
                                        <th className="px-4 py-2">Fecha de Fin</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredDiplomados.map((diplomado) => (
                                        <tr key={diplomado.id}>
                                            <td className="border px-4 py-2">{diplomado.rol}</td>
                                            <td className="border px-4 py-2">{diplomado.tipo_evento}</td>
                                            <td className="border px-4 py-2">{diplomado.titulo}</td>
                                            <td className="border px-4 py-2">{diplomado.institucion}</td>
                                            <td className="border px-4 py-2">{diplomado.lugar_pais}</td>
                                            <td className="border px-4 py-2">{diplomado.fecha_inicio}</td>
                                            <td className="border px-4 py-2">{diplomado.fecha_fin}</td>
                                            <td className="border px-4 py-2">
                                                <Link
                                                    href={route("diplomados.edit", diplomado.id)}
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