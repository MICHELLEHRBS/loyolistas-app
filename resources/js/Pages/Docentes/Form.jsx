//import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
//import { usePage, useForm } from "@inertiajs/react";
//import { useEffect } from "react";

import React, { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage, useForm } from "@inertiajs/react";

export default function Form({ auth, docente }) {
    const { errors } = usePage().props;
    const { data, setData, post, put } = useForm({
        nombre: docente?.nombre || "",
        apellido_paterno: docente?.apellido_paterno || "",
        apellido_materno: docente?.apellido_materno || "",
        genero: docente?.genero || "",
        estado_civil: docente?.estado_civil || "",
        celular: docente?.celular || "",
        direccion: docente?.direccion || {
            domicilio: "",
            zona: "",
            Municipio: "",
            numero_casa_referencia: "",
            tipo_vivienda: "",
        },
    });

    const [docenteId, setDocenteId] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            if (docente) {
                // Actualizar docente existente
                await put(route("docentes.update", docente.id), data);
                // Luego actualizar o agregar la dirección
                await put(route("direcciones.update", docente.direccion.id), {
                    ...data.direccion,
                    docente_id: docente.id,
                });
            } else {
                // Guardar nuevo docente
                const response = await post(route("docentes.store"), data);
                const newDocenteId = response.data.id;
                setDocenteId(newDocenteId);

                // Guardar la dirección asociada al nuevo docente
                await post(route("direcciones.store"), {
                    ...data.direccion,
                    docente_id: newDocenteId,
                });
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={docente ? "Editar Docente" : "Crear Docente"}
        >
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8  text-gray-800 dark:text-gray-200">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <h1 className="text-2x1 font-bold mb-6 text-center">
                                FORMULARIO DE HOJA DE VIDA DE DOCENTES
                            </h1>
                            <form onSubmit={handleSubmit}>
                                <section className="mb-6 border-t-2 border-b-2 border-gray-300 pt-4 pb-4">
                                    <legend className="border-b-2 border-gray-300 pt-4 pb-4 text-xl font-semibold mb-4">
                                        DATOS PERSONALES
                                    </legend>
                                    {/* Campos del Docente */}
                                    <div className="grid grid-cols-1 gap-6">
                                        <div className="grid grid-cols-3 gap-4 ">
                                            <div>
                                                <label
                                                    htmlFor="nombre"
                                                    className="block text-sm font-medium"
                                                >
                                                    Nombre
                                                </label>
                                                <input
                                                    type="text"
                                                    id="nombre"
                                                    name="nombre"
                                                    value={data.nombre}
                                                    onChange={(e) =>
                                                        setData(
                                                            "nombre",
                                                            e.target.value
                                                        )
                                                    }
                                                    className="mt-1 block w-full text-gray-200 dark:text-gray-800"
                                                />
                                                {errors.nombre && (
                                                    <span className="text-red-500">
                                                        {errors.nombre}
                                                    </span>
                                                )}
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor="apellido_paterno"
                                                    className="block text-sm font-medium"
                                                >
                                                    Apellido Paterno
                                                </label>
                                                <input
                                                    type="text"
                                                    id="apellido_paterno"
                                                    name="apellido_paterno"
                                                    value={
                                                        data.apellido_paterno
                                                    }
                                                    onChange={(e) =>
                                                        setData(
                                                            "apellido_paterno",
                                                            e.target.value
                                                        )
                                                    }
                                                    className=" mt-1 block w-full text-gray-200 dark:text-gray-800"
                                                />
                                                {errors.apellido_paterno && (
                                                    <span className="text-red-500">
                                                        {
                                                            errors.apellido_paterno
                                                        }
                                                    </span>
                                                )}
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor="apellido_materno"
                                                    className="block text-sm font-medium"
                                                >
                                                    Apellido Materno
                                                </label>
                                                <input
                                                    type="text"
                                                    id="apellido_materno"
                                                    name="apellido_materno"
                                                    value={
                                                        data.apellido_materno
                                                    }
                                                    onChange={(e) =>
                                                        setData(
                                                            "apellido_materno",
                                                            e.target.value
                                                        )
                                                    }
                                                    className=" mt-1 block w-full text-gray-200 dark:text-gray-800"
                                                />
                                                {errors.apellido_materno && (
                                                    <span className="text-red-500">
                                                        {
                                                            errors.apellido_materno
                                                        }
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="genero"
                                                className="block text-sm font-medium"
                                            >
                                                Género
                                            </label>
                                            <select
                                                name="genero"
                                                id="genero"
                                                value={data.genero}
                                                onChange={(e) =>
                                                    setData(
                                                        "genero",
                                                        e.target.value
                                                    )
                                                }
                                                className=" text-gray-200 dark:text-gray-800"
                                            >
                                                <option value="">
                                                    Selecciona una opcion
                                                </option>
                                                <option value="masculino">
                                                    Masculino
                                                </option>
                                                <option value="femenino">
                                                    Femenino
                                                </option>
                                            </select>
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="estado_civil"
                                                className="block text-sm font-medium"
                                            >
                                                Estado Civil
                                            </label>
                                            <select
                                                name="estado_civil"
                                                id="estado_civil"
                                                value={data.estado_civil}
                                                onChange={(e) =>
                                                    setData(
                                                        "estado_civil",
                                                        e.target.value
                                                    )
                                                }
                                                className=" text-gray-200 dark:text-gray-800"
                                            >
                                                <option value="">
                                                    Seleccione
                                                </option>
                                                <option value="soltero/a">
                                                    Soltero/a
                                                </option>
                                                <option value="casado/a">
                                                    Casado/a
                                                </option>
                                                <option value="viudo/a">
                                                    Viudo/a
                                                </option>
                                                <option value="divorciado/a">
                                                    Divorciado/a
                                                </option>
                                            </select>
                                            {errors.estado_civil && (
                                                <span className="text-red-500">
                                                    {errors.estado_civil}
                                                </span>
                                            )}
                                        </div>
                                        <div className="grid grid-cols-2 gap-4 ">
                                            <div>
                                                <label
                                                    htmlFor="ci"
                                                    className="block text-sm font-medium "
                                                >
                                                    Carnet de Identidad
                                                </label>
                                                <input
                                                    type="text"
                                                    id="ci"
                                                    name="ci"
                                                    value={data.ci}
                                                    onChange={(e) =>
                                                        setData(
                                                            "ci",
                                                            e.target.value
                                                        )
                                                    }
                                                    className=" mt-1 block w-full text-gray-200 dark:text-gray-800"
                                                />
                                                {errors.ci && (
                                                    <span className="text-red-500">
                                                        {errors.ci}
                                                    </span>
                                                )}
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor="expedido_ci"
                                                    className="block text-sm font-medium"
                                                >
                                                    Expedido en:
                                                </label>
                                                <select
                                                    name="expedido ci"
                                                    id="expedido ci"
                                                    value={data.expedido_ci}
                                                    onChange={(e) =>
                                                        setData(
                                                            "expedido ci",
                                                            e.target.value
                                                        )
                                                    }
                                                    className=" text-gray-200 dark:text-gray-800"
                                                >
                                                    <option value="">
                                                        {" "}
                                                        Seleccionar{" "}
                                                    </option>
                                                    <option value="or">
                                                        {" "}
                                                        OR{" "}
                                                    </option>
                                                    <option value="cb">
                                                        {" "}
                                                        CB{" "}
                                                    </option>
                                                    <option value="sc">
                                                        {" "}
                                                        SC{" "}
                                                    </option>
                                                    <option value="lp">
                                                        {" "}
                                                        LP{" "}
                                                    </option>
                                                    <option value="ch">
                                                        {" "}
                                                        CH{" "}
                                                    </option>
                                                    <option value="pa">
                                                        {" "}
                                                        PA{" "}
                                                    </option>
                                                    <option value="bn">
                                                        {" "}
                                                        BN{" "}
                                                    </option>
                                                    <option value="tj">
                                                        {" "}
                                                        TJ{" "}
                                                    </option>
                                                    <option value="pt">
                                                        {" "}
                                                        PT{" "}
                                                    </option>
                                                </select>
                                                {errors.expedido_ci && (
                                                    <span className="text-red-500">
                                                        {errors.expedido_ci}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label
                                                    htmlFor="ci extranjero"
                                                    className="block text-sm font-medium "
                                                >
                                                    CI Extranjero
                                                </label>
                                                <input
                                                    type="text"
                                                    id="ci extranjero"
                                                    name="ci extranjero"
                                                    value={data.ci_extranjero}
                                                    onChange={(e) =>
                                                        setData(
                                                            "ci extranjero",
                                                            e.target.value
                                                        )
                                                    }
                                                    className=" mt-1 block w-full text-gray-200 dark:text-gray-800"
                                                />
                                                {errors.ci_extranjero && (
                                                    <span className="text-red-500">
                                                        {errors.ci_extranjero}
                                                    </span>
                                                )}
                                            </div>

                                            <div>
                                                <label
                                                    htmlFor="pasaporte"
                                                    className="block text-sm font-medium "
                                                >
                                                    Pasaporte
                                                </label>
                                                <input
                                                    type="text"
                                                    id="pasaporte"
                                                    name="pasaporte"
                                                    value={data.pasaporte}
                                                    onChange={(e) =>
                                                        setData(
                                                            "pasaporte",
                                                            e.target.value
                                                        )
                                                    }
                                                    className=" mt-1 block w-full text-gray-200 dark:text-gray-800"
                                                />
                                                {errors.pasaporte && (
                                                    <span className="text-red-500">
                                                        {errors.pasaporte}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="fecha_nac"
                                                className="block text-sm font-medium "
                                            >
                                                Fecha de Nacimiento
                                            </label>
                                            <input
                                                type="date"
                                                value={data.fecha_nac}
                                                onChange={(e) =>
                                                    setData(
                                                        "Fecha_Nac",
                                                        e.target.value
                                                    )
                                                }
                                                className="text-gray-200 dark:text-gray-800"
                                            />
                                            {errors.fecha_nac && (
                                                <span className="text-red-500">
                                                    {errors.fecha_nac}
                                                </span>
                                            )}
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label
                                                    htmlFor="telefono"
                                                    className="block text-sm font-medium "
                                                >
                                                    Teléfono
                                                </label>
                                                <input
                                                    type="text"
                                                    id="telefono"
                                                    name="telefono"
                                                    value={data.telefono}
                                                    onChange={(e) =>
                                                        setData(
                                                            "telefono",
                                                            e.target.value
                                                        )
                                                    }
                                                    className=" mt-1 block w-full text-gray-200 dark:text-gray-800"
                                                />
                                                {errors.telefono && (
                                                    <span className="text-red-500">
                                                        {errors.telefono}
                                                    </span>
                                                )}
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor="celular"
                                                    className="block text-sm font-medium "
                                                >
                                                    Celular
                                                </label>
                                                <input
                                                    type="text"
                                                    id="celular"
                                                    name="celular"
                                                    value={data.celular}
                                                    onChange={(e) =>
                                                        setData(
                                                            "celular",
                                                            e.target.value
                                                        )
                                                    }
                                                    className=" mt-1 block w-full text-gray-200 dark:text-gray-800"
                                                />
                                                {errors.celular && (
                                                    <span className="text-red-500">
                                                        {errors.celular}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="correo"
                                                className="block text-sm font-medium "
                                            >
                                                Correo Personal:
                                            </label>
                                            <input
                                                type="email"
                                                id="correo"
                                                name="correo"
                                                value={data.correo}
                                                onChange={(e) =>
                                                    setData(
                                                        "correo",
                                                        e.target.value
                                                    )
                                                }
                                                className=" mt-1 block w-full text-gray-200 dark:text-gray-800"
                                            />
                                            {errors.correo && (
                                                <span className="text-red-500">
                                                    {errors.correo}
                                                </span>
                                            )}
                                        </div>
                                        DIRECCIÓN
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label
                                                    htmlFor="domicilio"
                                                    className="block text-sm font-medium "
                                                >
                                                    Domicilio
                                                </label>
                                                <input
                                                    type="text"
                                                    id="domicilio"
                                                    name="domicilio"
                                                    value={data.domicilio}
                                                    onChange={(e) =>
                                                        setData(
                                                            "domicilio",
                                                            e.target.value
                                                        )
                                                    }
                                                    className=" mt-1 block w-full text-gray-200 dark:text-gray-800"
                                                />
                                                {errors.domicilio && (
                                                    <span className="text-red-500">
                                                        {errors.domicilio}
                                                    </span>
                                                )}
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor="zona"
                                                    className="block text-sm font-medium "
                                                >
                                                    Zona
                                                </label>
                                                <input
                                                    type="text"
                                                    id="zona"
                                                    name="zona"
                                                    value={data.zona}
                                                    onChange={(e) =>
                                                        setData(
                                                            "zona",
                                                            e.target.value
                                                        )
                                                    }
                                                    className=" mt-1 block w-full text-gray-200 dark:text-gray-800"
                                                />
                                                {errors.zona && (
                                                    <span className="text-red-500">
                                                        {errors.zona}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="municipio"
                                                className="block text-sm font-medium "
                                            >
                                                Municipio
                                            </label>
                                            <input
                                                type="text"
                                                id="municipio"
                                                name="municipio"
                                                value={data.municipio}
                                                onChange={(e) =>
                                                    setData(
                                                        "municipio",
                                                        e.target.value
                                                    )
                                                }
                                                className=" mt-1 block w-full text-gray-200 dark:text-gray-800"
                                            />
                                            {errors.municipio && (
                                                <span className="text-red-500">
                                                    {errors.municipio}
                                                </span>
                                            )}
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="numero_casa_referencia"
                                                className="block text-sm font-medium "
                                            >
                                                N° de casa o referencia
                                            </label>
                                            <input
                                                type="text"
                                                id="numero_casa_referencia"
                                                name="numero_casa_referencia"
                                                value={
                                                    data.numero_casa_referencia
                                                }
                                                onChange={(e) =>
                                                    setData(
                                                        "numero_casa_referencia",
                                                        e.target.value
                                                    )
                                                }
                                                className=" mt-1 block w-full text-gray-200 dark:text-gray-800"
                                            />
                                            {errors.numero_casa_referencia && (
                                                <span className="text-red-500">
                                                    {
                                                        errors.numero_casa_referencia
                                                    }
                                                </span>
                                            )}
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="tipo_vivienda"
                                                className="block text-sm font-medium"
                                            >
                                                Tipo de vivienda
                                            </label>
                                            <select
                                                name="tipo_vivienda"
                                                id="tipo_vivienda"
                                                value={data.tipo_vivienda}
                                                onChange={(e) =>
                                                    setData(
                                                        "tipo_vivienda",
                                                        e.target.value
                                                    )
                                                }
                                                className=" text-gray-200 dark:text-gray-800"
                                            >
                                                <option value="">
                                                    {" "}
                                                    Seleccione{" "}
                                                </option>
                                                <option value="casa">
                                                    {" "}
                                                    Casa{" "}
                                                </option>
                                                <option value="departamento">
                                                    {" "}
                                                    Departamento{" "}
                                                </option>
                                                <option value="condominio">
                                                    {" "}
                                                    Condominio{" "}
                                                </option>
                                                <option value="urbanizacio cerrada">
                                                    {" "}
                                                    Urbanización Cerrrada{" "}
                                                </option>
                                                <option value="urbanizacion abierta">
                                                    {" "}
                                                    Urbanización Abierta{" "}
                                                </option>
                                            </select>
                                            {errors.tipo_vivienda && (
                                                <span className="text-red-500">
                                                    {errors.tipo_vivienda}
                                                </span>
                                            )}
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="cua"
                                                className="block text-sm font-medium "
                                            >
                                                CUA
                                            </label>
                                            <input
                                                type="text"
                                                id="cua"
                                                name="cua"
                                                value={data.cua}
                                                onChange={(e) =>
                                                    setData(
                                                        "cua",
                                                        e.target.value
                                                    )
                                                }
                                                className=" mt-1 block w-full text-gray-200 dark:text-gray-800"
                                            />
                                            {errors.cua && (
                                                <span className="text-red-500">
                                                    {errors.cua}
                                                </span>
                                            )}
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="seguro"
                                                className="block text-sm font-medium"
                                            >
                                                ¿A qué seguro esta afiliado?
                                            </label>
                                            <select
                                                name="seguro"
                                                id="seguro"
                                                value={data.seguro}
                                                onChange={(e) =>
                                                    setData(
                                                        "seguro",
                                                        e.target.value
                                                    )
                                                }
                                                className=" text-gray-200 dark:text-gray-800"
                                            >
                                                <option value="">
                                                    {" "}
                                                    Seleccione{" "}
                                                </option>
                                                <option value="or">
                                                    {" "}
                                                    Caja Nacional de Salud (CNS)
                                                </option>
                                                <option value="cb">
                                                    {" "}
                                                    Caja de Salud de Caminos y
                                                    RA
                                                </option>
                                                <option value="sc">
                                                    {" "}
                                                    Caja Cordes{" "}
                                                </option>
                                                <option value="lp">
                                                    {" "}
                                                    Caja Petrolera de Salud{" "}
                                                </option>
                                                <option value="ch">
                                                    {" "}
                                                    Seguro Integral de Salud
                                                    SINEC{" "}
                                                </option>
                                                <option value="pa">
                                                    {" "}
                                                    Corporación del Seguro
                                                    Social Militar (COSMIL){" "}
                                                </option>
                                                <option value="bn">
                                                    {" "}
                                                    Otros...{" "}
                                                </option>
                                            </select>
                                            {errors.seguro && (
                                                <span className="text-red-500">
                                                    {errors.seguro}
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
                                                    : docente
                                                    ? "Actualizar"
                                                    : "Guardar"}
                                            </button>
                                        </div>
                                    </div>
                                </section>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
