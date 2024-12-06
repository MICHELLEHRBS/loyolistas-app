import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage, useForm } from "@inertiajs/react";

export default function PublicacionForm({ auth, publicacion }) {
    const { errors } = usePage().props;
    const { data, setData, post } = useForm({
        tipo_publicacion: publicacion?.tipo_publicacion || "",
        titulo: publicacion?.titulo || "",
        lugar_publicacion: publicacion?.lugar_publicacion || "",
        fecha: publicacion?.fecha || "",

    });
console.log(data);
    const [isSubmitting, setIsSubmitting] = useState(false);

    function enviarPublicacion(e) {
        e.preventDefault();
        setIsSubmitting(true);
        post(route("publicaciones.store"), {
            onSuccess: () => {
                setIsSubmitting(false);
                // Redirigir a una página de confirmación o a otra sección si es necesario
                window.location.href = route("publicaciones.index");
            },
            onError: (error) => {
                setIsSubmitting(false);
                console.log("error", error);
            },
        });
    }

    return (
        <AuthenticatedLayout user={auth.user} header="Publicacion">
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 text-gray-800 dark:text-gray-200">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <h1 className="text-2x1 font-bold mb-6 text-center">
                                FORMULARIO DE PUBLICACIÓN
                            </h1>
                            <form onSubmit={enviarPublicacion}>
                                <div className="grid grid-cols-1 gap-6">
                                    <div className="grid grid-cols-2 gap-4 ">
                                    <div>
                                                <label
                                                    htmlFor="tipo_publicacion"
                                                    className="block text-sm font-medium"
                                                >
                                                    Tipo de Publicación
                                                </label>
                                                <input
                                                    type="text"
                                                    id="tipo_publicacion"
                                                    name="tipo_publicacion"
                                                    value={data.tipo_publicacion}
                                                    onChange={(e) =>
                                                        setData(
                                                            "tipo_publicacion",
                                                            e.target.value
                                                        )
                                                    }
                                                    className="mt-1 block w-full text-gray-200 dark:text-gray-800"
                                                />
                                                {errors.tipo_publicacion&& (
                                                    <span className="text-red-500">
                                                        {errors.tipo_publicacion}
                                                    </span>
                                                )}
                                            </div>
                                    </div>
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
                                                    htmlFor="lugar_publicacion"
                                                    className="block text-sm font-medium"
                                                >
                                                    Lugar o País
                                                </label>
                                                <input
                                                    type="text"
                                                    id="lugar_publicacion"
                                                    name="lugar_publicacion"
                                                    value={data.lugar_publicacion}
                                                    onChange={(e) =>
                                                        setData(
                                                            "lugar_publicacion",
                                                            e.target.value
                                                        )
                                                    }
                                                    className="mt-1 block w-full text-gray-200 dark:text-gray-800"
                                                />
                                                {errors.lugar_publicacion&& (
                                                    <span className="text-red-500">
                                                        {errors.lugar_publicacion}
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

                                <div className="mt-4">
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting
                                    ? "Guardando..."
                                    : publicacion
                                    ? "Actualizar"
                                    : "Guardar"}
                                </button>
                                </div>
                                <div className="mt-4" >
                                <a href={route('actividades.create')}>SIGUIENTE</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
