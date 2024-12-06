import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage, useForm } from "@inertiajs/react";

export default function PremioDistincionForm({ auth, premio }) {
    const { errors } = usePage().props;
    const { data, setData, post } = useForm({
        tipo: premio?.tipo || "",
        titulo: premio?.titulo || "",
        institucion: premio?.isntitucion || "",
        lugar: premio?.lugar || "",
        fecha: premio?.fecha || "",

    });
console.log(data);
    const [isSubmitting, setIsSubmitting] = useState(false);

    function enviarPremio(e) {
        e.preventDefault();
        setIsSubmitting(true);
        post(route("premios.store"), {
            onSuccess: () => {
                setIsSubmitting(false);
                // Redirigir a una página de confirmación o a otra sección si es necesario
                window.location.href = route("premios.index");
            },
            onError: (error) => {
                setIsSubmitting(false);
                console.log("error", error);
            },
        });
    }

    return (
        <AuthenticatedLayout user={auth.user} header="Premio">
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 text-gray-800 dark:text-gray-200">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <h1 className="text-2x1 font-bold mb-6 text-center">
                                FORMULARIO DE PREMIOS Y DISTINCIONES EN EL ÁREA
                            </h1>
                            <form onSubmit={enviarPremio}>
                                <div className="grid grid-cols-1 gap-6">
                                <div>
                                            <label
                                                htmlFor="tipo"
                                                className="block text-sm font-medium"
                                            >
                                                TIPO
                                            </label>
                                            <select
                                                name="tipo"
                                                id="tipo"
                                                value={data.tipo || ""}
                                                onChange={(e) =>
                                                    setData(
                                                        "tipo",
                                                        e.target.value
                                                    )
                                                }
                                                className=" text-gray-200 dark:text-gray-800"
                                            >
                                                <option value="">
                                                    {" "}
                                                    Seleccione{" "}
                                                </option>
                                                <option value="Premio">
                                                    {" "}
                                                    Premio{" "}
                                                </option>
                                                <option value="Distincion">
                                                    {" "}
                                                    Distinción{" "}
                                                </option>
                                            </select>
                                            {errors.tipo && (
                                                <span className="text-red-500">
                                                    {errors.tipo}
                                                </span>
                                            )}
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
                                                    value={
                                                        data.titulo
                                                    }
                                                    onChange={(e) =>
                                                        setData(
                                                            "titulo",
                                                            e.target.value
                                                        )
                                                    }
                                                    className=" mt-1 block w-full text-gray-200 dark:text-gray-800"
                                                />
                                                {errors.titulo && (
                                                    <span className="text-red-500">
                                                        {
                                                            errors.titulo
                                                        }
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
                                                htmlFor="lugar"
                                                className="block text-sm font-medium "
                                            >
                                                Lugar
                                            </label>
                                            <input
                                                type="text"
                                                id="lugar"
                                                name="lugar"
                                                value={data.lugar || ""}
                                                onChange={(e) =>
                                                    setData(
                                                        "lugar",
                                                        e.target.value
                                                    )
                                                }
                                                className=" mt-1 block w-full text-gray-200 dark:text-gray-800"
                                            />
                                            {errors.lugar && (
                                                <span className="text-red-500">
                                                    {errors.lugar}
                                                </span>
                                            )}
                                </div>
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
                                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting
                                            ? "Guardando..."
                                            : premio
                                            ? "Actualizar"
                                            : "Guardar"}
                                    </button>
                                </div>
                                <div className="mt-4">
                                    <a href={route('afiliaciones.create')}>SIGUIENTE</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}