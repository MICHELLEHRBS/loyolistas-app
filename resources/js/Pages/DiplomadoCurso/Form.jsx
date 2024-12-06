import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage, useForm } from "@inertiajs/react";

export default function DiplomadoForm({ auth, diplomado }) {
    const { errors } = usePage().props;
    const { data, setData, post } = useForm({
        rol: diplomado?.rol || "",
        tipo_evento: diplomado?.tipo_evento || "",
        titulo: diplomado?.titulo || "",
        institucion: diplomado?.institucion || "",
        lugar_pais: diplomado?.lugar_pais || "",
        fecha_inicio: diplomado?.fecha_inicio || "",
        fecha_fin: diplomado?.fecha_fin || "",
    });
    console.log(data);
    const [isSubmitting, setIsSubmitting] = useState(false);

    function enviarDiplomado(e) {
        e.preventDefault();
        setIsSubmitting(true);
        post(route("diplomados.store"), {
            onSuccess: () => {
                setIsSubmitting(false);
                // Redirigir a una página de confirmación o a otra sección si es necesario
                window.location.href = route("diplomados.index");
            },
            onError: (error) => {
                setIsSubmitting(false);
                console.log("error", error);
            },
        });
    }

    return (
        <AuthenticatedLayout user={auth.user} header="Diplomados de curso">
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 text-gray-800 dark:text-gray-200">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <h1 className="text-2x1 font-bold mb-6 text-center">
                            DIPLOMADOS, CURSOS, SEMINARIO Y TALLERES
                            </h1>
                            <form onSubmit={enviarDiplomado}>
                                <div className="grid grid-cols-1 gap-6">
                                    <div className="grid grid-cols-2 gap-4 ">
                                        <div>
                                        <label
                                                htmlFor="rol"
                                                className="block text-sm font-medium"
                                            >
                                                ROL
                                            </label>
                                            <select
                                                name="rol"
                                                id="rol"
                                                value={data.rol || ""}
                                                onChange={(e) =>
                                                    setData(
                                                        "rol",
                                                        e.target.value
                                                    )
                                                }
                                                className=" text-gray-200 dark:text-gray-800"
                                            >
                                                <option value="">
                                                    {" "}
                                                    Seleccione{" "}
                                                </option>
                                                <option value="Participante">
                                                    {" "}
                                                    Participante{" "}
                                                </option>
                                                <option value="Expositor">
                                                    {" "}
                                                    Expositor{" "}
                                                </option>
                                                
                                                
                                            </select>
                                            {errors.rol && (
                                                <span className="text-red-500">
                                                    {errors.rol}
                                                </span>
                                            )}
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="tipo_evento"
                                                className="block text-sm font-medium"
                                            >
                                                Tipo de Evento
                                            </label>
                                            <select
                                                name="tipo_evento"
                                                id="tipo_evento"
                                                value={data.tipo_evento || ""}
                                                onChange={(e) =>
                                                    setData(
                                                        "tipo_evento",
                                                        e.target.value
                                                    )
                                                }
                                                className=" text-gray-200 dark:text-gray-800"
                                            >
                                                <option value="">
                                                    {" "}
                                                    Seleccione{" "}
                                                </option>
                                                <option value="Diplomado">
                                                    {" "}
                                                    Diplomado{" "}
                                                </option>
                                                <option value="Curso">
                                                    {" "}
                                                    Curso{" "}
                                                </option>
                                                <option value="Seminario">
                                                    {" "}
                                                    Seminario{" "}
                                                </option>
                                                <option value="Taller">
                                                    {" "}
                                                    Taller{" "}
                                                </option>
                                                
                                            </select>
                                            {errors.tipo_evento && (
                                                <span className="text-red-500">
                                                    {errors.tipo_evento}
                                                </span>
                                            )}
                                        </div>
                                        </div>
                                        <div className="grid grid-cols-3 gap-4 ">
                                            <div>
                                                <label
                                                    htmlFor="titulo"
                                                    className="block text-sm font-medium"
                                                >
                                                    Título
                                                </label>
                                                <input
                                                    type="text"
                                                    id="titulo"
                                                    name="titulo"
                                                    value={data.titulo}
                                                    onChange={(e) =>
                                                        setData(
                                                            "titulo",
                                                            e.target.value
                                                        )
                                                    }
                                                    className="mt-1 block w-full text-gray-200 dark:text-gray-800"
                                                />
                                                {errors.titulo&& (
                                                    <span className="text-red-500">
                                                        {errors.titulo}
                                                    </span>
                                                )}
                                            </div>

                                            <div>
                                                <label
                                                    htmlFor="institucion"
                                                    className="block text-sm font-medium"
                                                >
                                                    Institución
                                                </label>
                                                <input
                                                    type="text"
                                                    id="institucion"
                                                    name="institucion"
                                                    value={data.institucion}
                                                    onChange={(e) =>
                                                        setData(
                                                            "institucion",
                                                            e.target.value
                                                        )
                                                    }
                                                    className="mt-1 block w-full text-gray-200 dark:text-gray-800"
                                                />
                                                {errors.institucion&& (
                                                    <span className="text-red-500">
                                                        {errors.institucion}
                                                    </span>
                                                )}
                                            </div>
                                        
                                            <div>
                                                <label
                                                    htmlFor="lugar_pais"
                                                    className="block text-sm font-medium"
                                                >
                                                    Lugar o País
                                                </label>
                                                <input
                                                    type="text"
                                                    id="lugar_pais"
                                                    name="lugar_pais"
                                                    value={data.lugar_pais}
                                                    onChange={(e) =>
                                                        setData(
                                                            "lugar_pais",
                                                            e.target.value
                                                        )
                                                    }
                                                    className="mt-1 block w-full text-gray-200 dark:text-gray-800"
                                                />
                                                {errors.lugar_pais&& (
                                                    <span className="text-red-500">
                                                        {errors.lugar_pais}
                                                    </span>
                                                )}
                                            </div>
                                            </div>
                                 
                                            <div>
                                            <label
                                                htmlFor="fecha_inicio"
                                                className="block text-sm font-medium "
                                            >
                                                Fecha de Inicio
                                            </label>
                                            <input
                                                type="date"
                                                value={data.fecha_inicio || ""}
                                                onChange={(e) =>
                                                    setData(
                                                        "fecha_inicio",
                                                        e.target.value
                                                    )
                                                }
                                                className="text-gray-200 dark:text-gray-800"
                                            />
                                            {errors.fecha_inicio && (
                                                <span className="text-red-500">
                                                    {errors.fecha_inicio}
                                                </span>
                                            )}
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="fecha_fin"
                                                className="block text-sm font-medium "
                                            >
                                                Fecha Fin
                                            </label>
                                            <input
                                                type="date"
                                                value={data.fecha_fin || ""}
                                                onChange={(e) =>
                                                    setData(
                                                        "fecha_fin",
                                                        e.target.value
                                                    )
                                                }
                                                className="text-gray-200 dark:text-gray-800"
                                            />
                                            {errors.fecha_fin && (
                                                <span className="text-red-500">
                                                    {errors.fecha_fin}
                                                </span>
                                            )}
                                        </div>

                                        <div className="mt-4">
                                            <button
                                                type="submit"
                                                className="inline-flex items-center px-4 py-2 bg-blue-500 border border-transparent rounded-md font-semibold text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                                disabled={isSubmitting}
                                            >
                                                {isSubmitting
                                                    ? "Guardando..."
                                                    : diplomado
                                                    ? "Actualizar"
                                                    : "Guardar"}
                                            </button>
                                        </div>
                                        </div> 
                                <div className="mt-4">
                                    <a href={route('publicaciones.create')}>SIGUIENTE</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}