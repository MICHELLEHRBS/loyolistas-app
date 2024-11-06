import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage, useForm } from "@inertiajs/react";

export default function FormacionForm({ auth, formacion }) {
    const { errors } = usePage().props;
    const { data, setData, post } = useForm({
        institucion: formacion?.institucion || "",
        titulo: formacion?.titulo || "",
        fecha_inicio: formacion?.fecha_inicio || "",
        fecha_egreso: formacion?.fecha_egreso || "",
        grado: formacion?.grado || "",
        especialidad: formacion?.especialidad || "",

    });
console.log(data);
    const [isSubmitting, setIsSubmitting] = useState(false);

    function enviarFormacion(e) {
        e.preventDefault();
        setIsSubmitting(true);
        post(route("formaciones.store"), {
            onSuccess: () => {
                setIsSubmitting(false);
                // Redirigir a una página de confirmación o a otra sección si es necesario
                window.location.href = route("formaciones.index");
            },
            onError: (error) => {
                setIsSubmitting(false);
                console.log("error", error);
            },
        });
    }

    return (
        <AuthenticatedLayout user={auth.user} header="Formación Académica">
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 text-gray-800 dark:text-gray-200">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <h1 className="text-2x1 font-bold mb-6 text-center">
                                FORMULARIO DE FORMACIÓN ACADÉMICA
                            </h1>
                            <form onSubmit={enviarFormacion}>
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
                                                value={data.institucion}
                                                onChange={(e) =>
                                                    setData(
                                                        "institucion",
                                                        e.target.value
                                                    )
                                                }
                                                className="mt-1 block w-full border border-gray-300 dark:border-gray-700 p-2 rounded-md text-black"
                                            />
                                            {errors.institucion && (
                                                <span className="text-red-500">
                                                    {errors.institucion}
                                                </span>
                                            )}
                                        </div>

                                        <div className="mb-4">
                                            <label
                                                htmlFor="titulo"
                                                className="block text-sm font-medium"
                                            >
                                                Título
                                            </label>
                                            <input
                                                type="text"
                                                value={data.titulo}
                                                onChange={(e) =>
                                                    setData(
                                                        "titulo",
                                                        e.target.value
                                                    )
                                                }
                                                className="mt-1 block w-full border border-gray-300 dark:border-gray-700 p-2 rounded-md text-black"
                                            />
                                            {errors.titulo && (
                                                <span className="text-red-500">
                                                    {errors.titulo}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 ">
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
                                                htmlFor="fecha_egreso"
                                                className="block text-sm font-medium"
                                            >
                                                Fecha de Egreso
                                            </label>
                                            <input
                                                type="date"
                                                value={data.fecha_egreso}
                                                onChange={(e) =>
                                                    setData(
                                                        "fecha_egreso",
                                                        e.target.value
                                                    )
                                                }
                                                className="mt-1 block w-full border border-gray-300 dark:border-gray-700 p-2 rounded-md text-black"
                                            />
                                            {errors.fecha_egreso && (
                                                <span className="text-red-500">
                                                    {errors.fecha_egreso}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 ">
                                        <div className="mb-4">
                                            <label
                                                htmlFor="grado"
                                                className="block text-sm font-medium"
                                            >
                                                Grado
                                            </label>
                                            <select
                                                value={data.grado}
                                                onChange={(e) =>
                                                    setData(
                                                        "grado",
                                                        e.target.value
                                                    )
                                                }
                                                className="mt-1 block w-full border border-gray-300 dark:border-gray-700 p-2 rounded-md text-black"
                                            >
                                                <option value="">
                                                    Seleccione
                                                </option>
                                                <option value="Normalista">
                                                    Normalista
                                                </option>
                                                <option value="Licenciado">
                                                    Licenciado
                                                </option>
                                                <option value="Ingeniero">
                                                    Ingeniero
                                                </option>
                                                <option value="Arquitecto">
                                                    Arquitecto
                                                </option>
                                                <option value="Magister">
                                                    Magister
                                                </option>
                                                <option value="Doctor">
                                                    Doctor
                                                </option>
                                            </select>
                                            {errors.grado && (
                                                <span className="text-red-500">
                                                    {errors.grado}
                                                </span>
                                            )}
                                        </div>
                                        <div className="mb-4">
                                            <label
                                                htmlFor="especialidad"
                                                className="block text-sm font-medium"
                                            >
                                                Especialidad
                                            </label>
                                            <input
                                                type="text"
                                                value={data.especialidad}
                                                onChange={(e) =>
                                                    setData(
                                                        "especialidad",
                                                        e.target.value
                                                    )
                                                }
                                                className="mt-1 block w-full border border-gray-300 dark:border-gray-700 p-2 rounded-md text-black"
                                            />
                                            {errors.especialidad && (
                                                <span className="text-red-500">
                                                    {errors.especialidad}
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
                                    : formacion
                                    ? "Actualizar"
                                    : "Guardar"}
                                </button>
                                </div>
                                <div className="mt-4" >
                                <a href={route('idiomas.create')}>SIGUIENTE</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
