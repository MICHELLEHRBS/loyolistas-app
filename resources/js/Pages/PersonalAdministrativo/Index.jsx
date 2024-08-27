import React, { useState } from "react";
//import { Link, usePage } from "@inertiajs/inertia-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

// import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, usePage } from "@inertiajs/react";
// import { useState } from "react";

export default function Index({ auth, personalAdministrativos }) {
    const [activeSection, setActiveSection] = useState("lista");
    const [search, setSearch] = useState("");
    const [filteredPersonales, setFilteredPersonales] = useState(
        personalAdministrativos
    );
    const { personales } = usePage().props;
    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearch(query);

        // Filtrar el personal administrativo basado en el apellido paterno y materno
        const filtered = personalAdministrativos.filter(
            (personaladministativo) =>
                personaladministativo.apellido_paterno
                    .toLowerCase()
                    .includes(query)
        );
        setFilteredPersonales(filtered);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="bg-white dark:bg-gray-800 p-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex space-x-4 mb-4">
                            <button
                                className={`text-lg font-semibold px-4 py-2 rounded-md ${
                                    activeSection === "lista"
                                        ? "bg-blue-500 text-white"
                                        : "bg-white text-gray-600"
                                } border border-gray-300 dark:border-gray-700`}
                                onClick={() => setActiveSection("lista")}
                            >
                                Lista de Personal
                            </button>

                            <button
                                className={`text-lg font-semibold px-4 py-2 rounded-md ${
                                    activeSection === "horarios"
                                        ? "bg-blue-500 text-white"
                                        : "bg-white text-gray-600"
                                } border border-gray-300 dark:border-gray-700`}
                                onClick={() => setActiveSection("horarios")}
                            >
                                Horarios
                            </button>
                        </div>
                    </div>
                </div>
            }
        >
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            {/* Barra de búsqueda */}
                            {activeSection === "lista" && (
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        value={search}
                                        onChange={handleSearch}
                                        placeholder="Buscar por apellido paterno..."
                                        className="border border-gray-300 dark:border-gray-700 p-2 rounded-md w-full text-black"
                                    />
                                </div>
                            )}

                            {/* Contenido según la sección activa */}
                            {activeSection === "lista" && (
                                <div>
                                    <table className="w-full table-auto">
                                        <thead>
                                            <tr>
                                                <th className="px-4 py-2">
                                                    Nombre
                                                </th>
                                                <th className="px-4 py-2">
                                                    Apellido Paterno
                                                </th>
                                                <th className="px-4 py-2">
                                                    Apellido Materno
                                                </th>
                                                <th className="px-4 py-2">
                                                    Acción
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {personales.map(
                                                (personaladministativo) => (
                                                    <tr
                                                        key={
                                                            personaladministativo.id
                                                        }
                                                    >
                                                        <td className="border px-4 py-2">
                                                            {
                                                                personaladministativo.nombre
                                                            }
                                                        </td>
                                                        <td className="border px-4 py-2">
                                                            {
                                                                personaladministativo.apellido_paterno
                                                            }
                                                        </td>
                                                        <td className="border px-4 py-2">
                                                            {
                                                                personaladministativo.apellido_materno
                                                            }
                                                        </td>
                                                        <td className="border px-4 py-2">
                                                            <Link
                                                                href={route(
                                                                    "personal_administrativo.edit",
                                                                    personaladministativo.id
                                                                )}
                                                                className="text-blue-500 hover:text-blue-700"
                                                            >
                                                                ACCEDER
                                                            </Link>
                                                        </td>
                                                    </tr>
                                                )
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            )}

                            {activeSection === "horarios" && (
                                <div>
                                    <h2 className="text-xl font-bold mb-4">
                                        Horarios
                                    </h2>
                                    {/* Agrega contenido de horarios aquí */}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

// export default function Index({ auth }) {
//     const { personales } = usePage().props;
//     const [activeSection, setActiveSection] = useState("lista");
//     console.log(personales);
//     return (
//         <AuthenticatedLayout header="PERSONAL ADMINISTRATIVO" user={auth.user}>
//             <div className="bg-white dark:bg-gray-800 p-4">
//                 <div className="max-w-7xl mx-auto">
//                     <div className="flex space-x-4 mb-4">
//                         <button
//                             className={`text-lg font-semibold px-4 py-2 rounded-md ${
//                                 activeSection === "lista"
//                                     ? "bg-blue-500 text-white"
//                                     : "bg-white text-gray-600"
//                             } border border-gray-300 dark:border-gray-700`}
//                             onClick={() => setActiveSection("lista")}
//                         >
//                             Lista de Personal
//                         </button>

//                         <button
//                             className={`text-lg font-semibold px-4 py-2 rounded-md ${
//                                 activeSection === "horarios"
//                                     ? "bg-blue-500 text-white"
//                                     : "bg-white text-gray-600"
//                             } border border-gray-300 dark:border-gray-700`}
//                             onClick={() => setActiveSection("horarios")}
//                         >
//                             Horarios
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </AuthenticatedLayout>
//     );
// }
