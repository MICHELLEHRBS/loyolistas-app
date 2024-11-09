import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage, useForm } from "@inertiajs/react";

export default function IdiomaForm({ auth, idioma }) {
    const { errors } = usePage().props;
    const { data, setData, post } = useForm({
        nombre_idioma: idioma?.nombre_idioma || "",
        tipo: idioma?.tipo || "",
        nivel: idioma?.nivel|| "",


    });
    console.log(data);
    const [isSubmitting, setIsSubmitting] = useState(false);

    function enviarIdioma(e) {
        e.preventDefault();
        setIsSubmitting(true);
        post(route("idiomas.store"), {
            onSuccess: () => {
                setIsSubmitting(false);
                // Redirigir a una página de confirmación o a otra sección si es necesario
                window.location.href = route("idiomas.index");
            },
            onError: (error) => {
                setIsSubmitting(false);
                console.log("error", error);
            },
        });
    }

    return (
        <AuthenticatedLayout user={auth.user} header="Idioma">
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 text-gray-800 dark:text-gray-200">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <h1 className="text-2x1 font-bold mb-6 text-center">
                                FORMULARIO DE CONOCIMIENTO DE IDIOMA
                            </h1>
                            <form onSubmit={enviarIdioma}>
                                <div className="grid grid-cols-1 gap-6">
                                    <div className="grid grid-cols-3 gap-4 ">
                                        <div>
                                            <label
                                                htmlFor="nombre_idioma"
                                                className="block text-sm font-medium"
                                            >
                                                Idioma
                                            </label>
                                            <input
                                                type="text"
                                                value={data.nombre_idioma}
                                                onChange={(e) =>
                                                    setData(
                                                        "nombre_idioma",
                                                        e.target.value
                                                    )
                                                }
                                                className="mt-1 block w-full border border-gray-300 dark:border-gray-700 p-2 rounded-md text-black"
                                            />
                                            {errors.nombre_idioma && (
                                                <span className="text-red-500">
                                                    {errors.nombre_idioma}
                                                </span>
                                            )}
                                        </div>

                                        <div className="mb-4">
                                            <label
                                                htmlFor="tipo"
                                                className="block text-sm font-medium"
                                            >
                                                Tipo
                                            </label>
                                            <select
                                                value={data.tipo}
                                                onChange={(e) =>
                                                    setData(
                                                        "tipo",
                                                        e.target.value
                                                    )
                                                }
                                                className="mt-1 block w-full border border-gray-300 dark:border-gray-700 p-2 rounded-md text-black"
                                            >
                                                <option value="">
                                                    Seleccione
                                                </option>
                                                <option value="Lee">
                                                    Lee
                                                </option>
                                                <option value="Habla">
                                                    Habla
                                                </option>
                                                <option value="Escribe">
                                                    Escribe
                                                </option>
                                            </select>
                                            {errors.tipo && (
                                                <span className="text-red-500">
                                                    {errors.tipo}
                                                </span>
                                            )}
                                        </div>


                                    <div className="grid grid-cols-2 gap-4 ">
                                        <div className="mb-4">
                                            <label
                                                htmlFor="nivel"
                                                className="block text-sm font-medium"
                                            >
                                                Nivel
                                            </label>
                                            <select
                                                value={data.nivel}
                                                onChange={(e) =>
                                                    setData(
                                                        "nivel",
                                                        e.target.value
                                                    )
                                                }
                                                className="mt-1 block w-full border border-gray-300 dark:border-gray-700 p-2 rounded-md text-black"
                                            >
                                                <option value="">
                                                    Seleccione
                                                </option>
                                                <option value="Basico">
                                                    Básico
                                                </option>
                                                <option value="Medio">
                                                    Medio
                                                </option>
                                                <option value="Avanzado">
                                                    Avanzado
                                                </option>
                                            </select>
                                            {errors.nivel && (
                                                <span className="text-red-500">
                                                    {errors.nivel}
                                                </span>
                                            )}
                                        </div>
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
                                    : idioma
                                    ? "Actualizar"
                                    : "Guardar"}
                                </button>
                                </div>
                                <div className="mt-4" >
                                <a href={route('formaciones.create')}>SIGUIENTE</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
