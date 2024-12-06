import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage, useForm } from "@inertiajs/react";

export default function ActividadForm({ auth, actividad }) {
    const { errors } = usePage().props;
    const { data, setData, post } = useForm({
        titulo: actividad?.titulo || "",
        organismo: actividad?.organismo || "",
        fecha: actividad?.fecha || "",

    });
    console.log(data);
    const [isSubmitting, setIsSubmitting] = useState(false);

    function enviarActividad(e) {
        e.preventDefault();
        setIsSubmitting(true);
        post(route("actividades.store"), {
            onSuccess: () => {
                setIsSubmitting(false);
                // Redirigir a una página de confirmación o a otra sección si es necesario
                window.location.href = route("actividades.index");
            },
            onError: (error) => {
                setIsSubmitting(false);
                console.log("error", error);
            },
        });
    }

    return (
        <AuthenticatedLayout user={auth.user} header="Actividad de consultoria">
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 text-gray-800 dark:text-gray-200">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <h1 className="text-2x1 font-bold mb-6 text-center">
                            ACTIVIDADES DE CONSULTORIA Y/O INVESTIGACIÓN EN EL ÁREA
                            </h1>
                            <form onSubmit={enviarActividad}>
                                <div className="grid grid-cols-1 gap-6">
                                    <div className="grid grid-cols-2 gap-4 ">
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
                                                    htmlFor="organismo"
                                                    className="block text-sm font-medium"
                                                >
                                                    Organismo
                                                </label>
                                                <input
                                                    type="text"
                                                    id="organismo"
                                                    name="organismo"
                                                    value={data.organismo}
                                                    onChange={(e) =>
                                                        setData(
                                                            "organismo",
                                                            e.target.value
                                                        )
                                                    }
                                                    className="mt-1 block w-full text-gray-200 dark:text-gray-800"
                                                />
                                                {errors.organismo&& (
                                                    <span className="text-red-500">
                                                        {errors.organismo}
                                                    </span>
                                                )}
                                            </div>

                                            <div>
                                            <label
                                                htmlFor="fecha"
                                                className="block text-sm font-medium "
                                            >
                                                Fecha
                                            </label>
                                            <input
                                                type="date"
                                                value={data.fecha|| ""}
                                                onChange={(e) =>
                                                    setData(
                                                        "fecha",
                                                        e.target.value
                                                    )
                                                }
                                                className="text-gray-200 dark:text-gray-800"
                                            />
                                            {errors.fecha && (
                                                <span className="text-red-500">
                                                    {errors.fecha}
                                                </span>
                                            )}
                                        </div>

                                        </div>
                    
                                        {/* <div className="grid grid-cols-2 gap-4">
                                            
                                        </div> */}
                                 
                                        <div className="mt-4">
                                            <button
                                                type="submit"
                                                className="inline-flex items-center px-4 py-2 bg-blue-500 border border-transparent rounded-md font-semibold text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                                disabled={isSubmitting}
                                            >
                                                {isSubmitting
                                                    ? "Guardando..."
                                                    : actividad
                                                    ? "Actualizar"
                                                    : "Guardar"}
                                            </button>
                                        </div>
                                        </div>
                                <div className="mt-4">
                                    <a href={route('premios.create')}>SIGUIENTE</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}