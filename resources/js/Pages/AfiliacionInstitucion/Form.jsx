import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage, useForm } from "@inertiajs/react";

export default function AfiliacionInstitucionForm({ auth, afiliacion }) {
    const { errors } = usePage().props;
    const { data, setData, post } = useForm({
        institucion: afiliacion?.institucion || "",
        condicion: afiliacion?.condicion || "",
        fecha: afiliacion?.fecha || "",

    });
    console.log(data);
    const [isSubmitting, setIsSubmitting] = useState(false);

    function enviarAfiliacion(e) {
        e.preventDefault();
        setIsSubmitting(true);
        post(route("afiliaciones.store"), {
            onSuccess: () => {
                setIsSubmitting(false);
                // Redirigir a una página de confirmación o a otra sección si es necesario
                window.location.href = route("afiliaciones.index");
            },
            onError: (error) => {
                setIsSubmitting(false);
                console.log("error", error);
            },
        });
    }

    return (
        <AuthenticatedLayout user={auth.user} header="Afiliaciones ">
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 text-gray-800 dark:text-gray-200">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <h1 className="text-2x1 font-bold mb-6 text-center">
                            AFILIACIONES EN INSTITUCIONES Y/O ASOCIACIONES EN EL ÁREA EDUCATIVA
                            </h1>
                            <form onSubmit={enviarAfiliacion}>
                                <div className="grid grid-cols-1 gap-6">
                                    <div className="grid grid-cols-2 gap-4 ">
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
                                                            "instittucion",
                                                            e.target.value
                                                        )
                                                    }
                                                    className="mt-1 block w-full text-gray-200 dark:text-gray-800"
                                                />
                                                {errors.institucion && (
                                                    <span className="text-red-500">
                                                        {errors.institucion}
                                                    </span>
                                                )}
                                            </div>

                                            <div>
                                            <label
                                                htmlFor="contidicion"
                                                className="block text-sm font-medium "
                                            >
                                                Condición
                                            </label>
                                            <input
                                                type="text"
                                                id="condicion"
                                                name="condicion"
                                                value={data.condicion || ""}
                                                onChange={(e) =>
                                                    setData(
                                                        "condicion",
                                                        e.target.value
                                                    )
                                                }
                                                className=" mt-1 block w-full text-gray-200 dark:text-gray-800"
                                            />
                                            {errors.condicion && (
                                                <span className="text-red-500">
                                                    {errors.condicion}
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
                                                value={data.fecha || ""}
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
                                        <div className="mt-4">
                                            <button
                                                type="submit"
                                                className="inline-flex items-center px-4 py-2 bg-blue-500 border border-transparent rounded-md font-semibold text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                                disabled={isSubmitting}
                                            >
                                                {isSubmitting
                                                    ? "Guardando..."
                                                    : afiliacion
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