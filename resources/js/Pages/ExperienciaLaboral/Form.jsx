import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage, useForm } from "@inertiajs/react";

export default function ExperienciaForm({ auth, experiencia }) {
    const { errors } = usePage().props;
    const { data, setData, post } = useForm({
        nombre: experiencia?.nombre || "",
        cargo: experiencia?.cargo || "",
        fecha_inicio: experiencia?.fecha_inicio || "",
        fecha_fin: experiencia?.fecha_fin || "",
    });
    console.log(data);
    const [isSubmitting, setIsSubmitting] = useState(false);

    function enviarExperiencia(e) {
        e.preventDefault();
        setIsSubmitting(true);
        post(route("experiencias.store"), {
            onSuccess: () => {
                setIsSubmitting(false);
                // Redirigir a una página de confirmación o a otra sección si es necesario
                window.location.href = route("experiencias.index");
            },
            onError: (error) => {
                setIsSubmitting(false);
                console.log("error", error);
            },
        });
    }

    return (
        <AuthenticatedLayout user={auth.user} header="Experiencia Laboral">
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 text-gray-800 dark:text-gray-200">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <h1 className="text-2x1 font-bold mb-6 text-center">
                                FORMULARIO DE EXPERIENCIA LABORAL
                            </h1>
                            <form onSubmit={enviarExperiencia}>
                                <div className="grid grid-cols-1 gap-6">
                                    <div className="grid grid-cols-2 gap-4 ">
                                        <div>
                                            <label
                                                htmlFor="nombre"
                                                className="block text-sm font-medium"
                                            >
                                                Nombre
                                            </label>
                                            <input
                                                type="text"
                                                value={data.nombre}
                                                onChange={(e) =>
                                                    setData(
                                                        "nombre",
                                                        e.target.value
                                                    )
                                                }
                                                className="mt-1 block w-full border border-gray-300 dark:border-gray-700 p-2 rounded-md text-black"
                                            />
                                            {errors.nombre && (
                                                <span className="text-red-500">
                                                    {errors.nombre}
                                                </span>
                                            )}
                                        </div>

                                        <div className="mb-4">
                                            <label
                                                htmlFor="cargo"
                                                className="block text-sm font-medium"
                                            >
                                                Cargo
                                            </label>
                                            <input
                                                type="text"
                                                value={data.cargo}
                                                onChange={(e) =>
                                                    setData(
                                                        "cargo",
                                                        e.target.value
                                                    )
                                                }
                                                className="mt-1 block w-full border border-gray-300 dark:border-gray-700 p-2 rounded-md text-black"
                                            />
                                            {errors.cargo && (
                                                <span className="text-red-500">
                                                    {errors.cargo}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="mb-4">
                                            <label
                                                htmlFor="fecha_inicio"
                                                className="block text-sm font-medium"
                                            >
                                                Fecha de Inicio
                                            </label>
                                            <input
                                                type="date"
                                                value={data.fecha_inicio}
                                                onChange={(e) =>
                                                    setData(
                                                        "fecha_inicio",
                                                        e.target.value
                                                    )
                                                }
                                                className="mt-1 block w-full border border-gray-300 dark:border-gray-700 p-2 rounded-md text-black"
                                            />
                                            {errors.fecha_inicio && (
                                                <span className="text-red-500">
                                                    {errors.fecha_inicio}
                                                </span>
                                            )}
                                        </div>
                                        <div className="mb-4">
                                            <label
                                                htmlFor="fecha_fin"
                                                className="block text-sm font-medium"
                                            >
                                                Fecha de Fin
                                            </label>
                                            <input
                                                type="date"
                                                value={data.fecha_fin}
                                                onChange={(e) =>
                                                    setData(
                                                        "fecha_fin",
                                                        e.target.value
                                                    )
                                                }
                                                className="mt-1 block w-full border border-gray-300 dark:border-gray-700 p-2 rounded-md text-black"
                                            />
                                            {errors.fecha_fin && (
                                                <span className="text-red-500">
                                                    {errors.fecha_fin}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting
                                            ? "Guardando..."
                                            : experiencia
                                            ? "Actualizar"
                                            : "Guardar"}
                                    </button>
                                </div>
                                <div className="mt-4">
                                    <a href={route('diplomados.create')}>SIGUIENTE</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
