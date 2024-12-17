import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage, useForm } from "@inertiajs/react";

export default function InformacionForm({ auth, informacion }) {
    const { errors } = usePage().props;
    const { data, setData, post } = useForm({
        dia: informacion?.dia || "",
        nivel: informacion?.nivel || "",
        materia: informacion?.materia || "",
        curso: informacion?.curso || "",
        hora_inicio: informacion?.hora_inicio || "",
        hora_final: informacion?.hora_final || "",
        salario: informacion?.salario || "",
        anios_servicio: informacion?.anios_servicio || "",
        tipo_contrato:informacion?.tipo_contrato||"",
        fecha_inicio: informacion?.fecha_inicio || "",
        fecha_fin : informacion?.fecha_fin || "",
        evaluacion_pedagogica: informacion?.evaluacion_pedagogica || "",
        evaluacion_psicologica: informacion?.evaluacion_psicologica || "",

        

    });
    console.log(data);
    const [isSubmitting, setIsSubmitting] = useState(false);

    function enviarInformacion(e) {
        e.preventDefault();
        setIsSubmitting(true);
        post(route("informaciones.store"), {
            onSuccess: () => {
                setIsSubmitting(false);
                // Redirigir a una página de confirmación o a otra sección si es necesario
                window.location.href = route("informaciones.index");
            },
            onError: (error) => {
                setIsSubmitting(false);
                console.log("error", error);
            },
        });
    }

    return (
        <AuthenticatedLayout user={auth.user} header="InformacionLaboral ">
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 text-gray-800 dark:text-gray-200">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <h1 className="text-2x1 font-bold mb-6 text-center">
                           FORMULARIO DE INFORMACIÓN LABORAL LOYOLA
                            </h1>
                            <form onSubmit={enviarInformacion}>
                                <div className="grid grid-cols-1 gap-6">
                                    <div className="grid grid-cols-2 gap-4 ">
                                        <div>
                                        <label
                                                    htmlFor="dia"
                                                    className="block text-sm font-medium"
                                                >
                                                    Día
                                                </label>
                                                <input
                                                    type="text"
                                                    id="dia"
                                                    name="dia"
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

                                            

                                    </div>
                                        <div className="mt-4">
                                            <button
                                                type="submit"
                                                className="inline-flex items-center px-4 py-2 bg-blue-500 border border-transparent rounded-md font-semibold text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                                disabled={isSubmitting}
                                            >
                                                {isSubmitting
                                                    ? "Guardando..."
                                                    : informacion
                                                    ? "Actualizar"
                                                    : "Guardar"}
                                            </button>
                                        </div>
                                        </div>  
                                <div className="mt-4">
                                    <a href={route('informaciones.create')}>SIGUIENTE</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}