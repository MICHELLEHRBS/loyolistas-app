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
console.log(data);
    // useEffect(() => {
    //     if (docente) {
    //         setData({
    //             nombre: docente.nombre,
    //             apellido_paterno: docente.apellido_paterno,
    //             apellido_materno: docente.apellido_materno,
    //             genero: docente.genero,
    //             estado_civil: docente.estado_civil,
    //             celular: docente.celular,
    //         });
    //     }
    // }, [docente]);
const [docenteId, setDocenteId] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    // 
    function enviarDocente(e)
    {
        console.log("HOLA");
        e.preventDefault();
        post(route("docentes.store"), {
            onSuccess: (res)=>{console.log("ok", res)}, onError:(error)=>{console.log("error",error)}
        })}
    //     e.preventDefault();

    //     setIsSubmitting(true);

    //     try {
    //         if (docente) {
    //             // Actualizar docente existente
    //             await put(route("docentes.update", docente.id), data);
    //             // Luego actualizar o agregar la dirección
    //             await put(route("direcciones.update", docente.direccion.id), {
    //                 ...data.direccion,
    //                 docente_id: docente.id,
    //             });
    //         } else {
    //             // Guardar nuevo docente
    //             const response = await post(route("docentes.store"), data);
    //             const newDocenteId = response.data.id;
    //             setDocenteId(newDocenteId);

    //             // Guardar la dirección asociada al nuevo docente
    //             await post(route("direcciones.store"), {
    //                 ...data.direccion,
    //                 docente_id: newDocenteId,
    //             });
    //         }
    //     } catch (error) {
    //         console.error(error);
    //     } finally {
    //         setIsSubmitting(false);
    //     }
    // };
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
                            <form onSubmit={enviarDocente}>

                            <section className="mb-6 border-t-2 border-b-2 border-gray-300 pt-4 pb-4">
                                    <legend className="border-b-2 border-gray-300 pt-4 pb-4 text-xl font-semibold mb-4">
                                        DATOS PERSONALES
                                    </legend>
                                    {/* Campos del Docente */}
                                    <div className="grid grid-cols-1 gap-6">
                                        <div  className="grid grid-cols-3 gap-4 ">
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
                                                <option value="Masculino">
                                                    Masculino
                                                </option>
                                                <option value="Femenino">
                                                    Femenino
                                                </option>
                                            </select>
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="nacimiento"
                                                className="block text-sm font-medium "
                                            >
                                                Fecha de Nacimiento
                                            </label>
                                            <input
                                                type="date"
                                                value={data.nacimiento || ""}
                                                onChange={(e) =>
                                                    setData(
                                                        "nacimiento",
                                                        e.target.value
                                                    )
                                                }
                                                className="text-gray-200 dark:text-gray-800"
                                            />
                                            {errors.nacimiento && (
                                                <span className="text-red-500">
                                                    {errors.nacimiento}
                                                </span>
                                            )}
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
                                                <option value="Soltero/a">
                                                    Soltero/a
                                                </option>
                                                <option value="Casado/a">
                                                    Casado/a
                                                </option>
                                                <option value="Viudo/a">
                                                    Viudo/a
                                                </option>
                                                <option value="Divorciado/a">
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
                                                    type="number"
                                                    id="ci"
                                                    name="ci"
                                                    value={data.ci || ""}
                                                    onChange={(e) =>
                                                        setData(
                                                            "ci",
                                                            e.target.value
                                                        )
                                                    }
                                                    //min="0" // No permite valores negativos
                                                    //max="999999999" // Máximo valor posible con 9 dígitos
                                                    //step="1" // No permite decimales
                                                    className="mt-1 block w-full text-gray-200 dark:text-gray-800"
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
                                                    name="expedido_ci"
                                                    id="expedido_ci"
                                                    value={data.expedido_ci}
                                                    onChange={(e) =>
                                                        setData(
                                                            "expedido_ci",
                                                            e.target.value
                                                        )
                                                    }
                                                    className=" text-gray-200 dark:text-gray-800"
                                                >
                                                    <option value="">
                                                        {" "}
                                                        Seleccionar{" "}
                                                    </option>
                                                    <option value="OR">
                                                        {" "}
                                                        OR{" "}
                                                    </option>
                                                    <option value="CB">
                                                        {" "}
                                                        CB{" "}
                                                    </option>
                                                    <option value="SC">
                                                        {" "}
                                                        SC{" "}
                                                    </option>
                                                    <option value="LP">
                                                        {" "}
                                                        LP{" "}
                                                    </option>
                                                    <option value="CH">
                                                        {" "}
                                                        CH{" "}
                                                    </option>
                                                    <option value="PA">
                                                        {" "}
                                                        PA{" "}
                                                    </option>
                                                    <option value="BN">
                                                        {" "}
                                                        BN{" "}
                                                    </option>
                                                    <option value="TJ">
                                                        {" "}
                                                        TJ{" "}
                                                    </option>
                                                    <option value="PT">
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
                                                    htmlFor="ci_extranjero"
                                                    className="block text-sm font-medium "
                                                >
                                                    CI Extranjero
                                                </label>
                                                <input
                                                    type="number"
                                                    id="ci_extranjero"
                                                    name="ci_extranjero"
                                                    value={data.ci_extranjero || ""}
                                                    onChange={(e) =>
                                                        setData(
                                                            "ci_extranjero",
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
                                                    value={data.pasaporte || ""}
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

                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label
                                                    htmlFor="telefono"
                                                    className="block text-sm font-medium "
                                                >
                                                    Teléfono
                                                </label>
                                                <input
                                                    type="number"
                                                    id="telefono"
                                                    name="telefono"
                                                    value={data.telefono || ""}
                                                    onChange={(e) =>
                                                        setData(
                                                            "telefono",
                                                            e.target.value
                                                        )
                                                    }
                                                        min="0" // No permite valores negativos
                                                        max="9999999" // Máximo valor posible con 9 dígitos
                                                        step="1" // No permite decimales
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
                                                    type="number"
                                                    id="celular"
                                                    name="celular"
                                                    value={data.celular || ""}
                                                    onChange={(e) =>
                                                        setData(
                                                            "celular",
                                                            e.target.value
                                                        )
                                                    }
                                                        min="0" // No permite valores negativos
                                                        max="99999999" // Máximo valor posible con 9 dígitos
                                                        step="1" // No permite decimales
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
                                                value={data.correo || ""}
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
                                                    value={data.domicilio || ""}
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
                                                    value={data.zona || ""}
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
                                                value={data.municipio || ""}
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
                                                    data.numero_casa_referencia || ""
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
                                                value={data.tipo_vivienda || ""}
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
                                                <option value="Casa">
                                                    {" "}
                                                    Casa{" "}
                                                </option>
                                                <option value="Departamento">
                                                    {" "}
                                                    Departamento{" "}
                                                </option>
                                                <option value="Condominio">
                                                    {" "}
                                                    Condominio{" "}
                                                </option>
                                                <option value="Urbanizacio cerrada">
                                                    {" "}
                                                    Urbanización Cerrrada{" "}
                                                </option>
                                                <option value="Urbanizacion abierta">
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
                                                type="number"
                                                id="cua"
                                                name="cua"
                                                value={data.cua || ""}
                                                onChange={(e) =>
                                                    setData(
                                                        "cua",
                                                        e.target.value
                                                    )
                                                }
                                                    min="0" // No permite valores negativos
                                                    max="9999" // Máximo valor posible con 9 dígitos
                                                    step="1" // No permite decimales
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
                                                value={data.seguro || ""}
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
                                                <option value="Caja Nacional de Salud (CNS)">
                                                    {" "}
                                                    Caja Nacional de Salud (CNS)
                                                </option>
                                                <option value="Caja de Salud de Caminos y RA">
                                                    {" "}
                                                    Caja de Salud de Caminos y RA
                                                </option>
                                                <option value="Caja Cordes">
                                                    {" "}
                                                    Caja Cordes{" "}
                                                </option>
                                                <option value="Caja Petrolera de Salud">
                                                    {" "}
                                                    Caja Petrolera de Salud{" "}
                                                </option>
                                                <option value="Seguro Integral de Salud SINEC">
                                                    {" "}
                                                    Seguro Integral de Salud SINEC{" "}
                                                </option>
                                                <option value="Corporación de Seguro Social Militar (Cossmil)">
                                                    {" "}
                                                    Corporación de Seguro Social Militar (Cossmil){" "}
                                                </option>
                                                <option value="Otros">
                                                    {" "}
                                                    Otros{" "}
                                                </option>
                                                <option value="Ninguno">
                                                    {" "}
                                                    Ninguno{" "}
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


                            <section className="mb-6 border-t-2 border-b-2 border-gray-300 pt-4 pb-4">
                            <legend className="border-b-2 border-gray-300 pt-4 pb-4 text-xl font-semibold mb-4">
                                        FORMACIÓN ACADÉMICA
                                    </legend>
                                    <div className="grid grid-cols-1 gap-6">
                                        <div className="grid grid-cols-4 gap-4 ">
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
                                        </div>

                                        <div className="grid grid-cols-6 gap-4 ">
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
                                                htmlFor="fecha_egreso"
                                                className="block text-sm font-medium "
                                            >
                                                Fecha de Egreso
                                            </label>
                                            <input
                                                type="date"
                                                value={data.fecha_egreso || ""}
                                                onChange={(e) =>
                                                    setData(
                                                        "fecha_egreso",
                                                        e.target.value
                                                    )
                                                }
                                                className="text-gray-200 dark:text-gray-800"
                                            />
                                            {errors.fecha_egreso && (
                                                <span className="text-red-500">
                                                    {errors.fecha_egreso}
                                                </span>
                                            )}
                                        </div>
                                        </div>

                                
                                        <div>
                                            <label
                                                htmlFor="grado"
                                                className="block text-sm font-medium"
                                            >
                                                GRADO
                                            </label>
                                            <select
                                                name="grado"
                                                id="grado"
                                                value={data.grado || ""}
                                                onChange={(e) =>
                                                    setData(
                                                        "grado",
                                                        e.target.value
                                                    )
                                                }
                                                className=" text-gray-200 dark:text-gray-800"
                                            >
                                                <option value="">
                                                    {" "}
                                                    Seleccione{" "}
                                                </option>
                                                <option value="Normalista">
                                                    {" "}
                                                    Normalista{" "}
                                                </option>
                                                <option value="Licenciado">
                                                    {" "}
                                                    Licenciado{" "}
                                                </option>
                                                <option value="Ingenerio">
                                                    {" "}
                                                    Ingeniero{" "}
                                                </option>
                                                <option value="Arquitecto">
                                                    {" "}
                                                    Arquitecto {" "}
                                                </option>
                                                <option value="Magister">
                                                    {" "}
                                                    Magister{" "}
                                                </option>
                                                <option value="Doctor">
                                                    {" "}
                                                    Doctor{" "}
                                                </option>
                                            </select>
                                            {errors.grado && (
                                                <span className="text-red-500">
                                                    {errors.grado}
                                                </span>
                                            )}
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                        <div>
                                                <label
                                                    htmlFor="especialidad"
                                                    className="block text-sm font-medium"
                                                >
                                                    Especialidad
                                                </label>
                                                <input
                                                    type="text"
                                                    id="especialidad"
                                                    name="especialidad"
                                                    value={data.especialidad}
                                                    onChange={(e) =>
                                                        setData(
                                                            "especialidad",
                                                            e.target.value
                                                        )
                                                    }
                                                    className="mt-1 block w-full text-gray-200 dark:text-gray-800"
                                                />
                                                {errors.especialidad && (
                                                    <span className="text-red-500">
                                                        {errors.especialidad}
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
                                                    : docente
                                                    ? "Actualizar"
                                                    : "Guardar"}
                                            </button>
                                        </div>
                                        </div>
                            </section>

                            <section className="mb-6 border-t-2 border-b-2 border-gray-300 pt-4 pb-4">
                            <legend className="border-b-2 border-gray-300 pt-4 pb-4 text-xl font-semibold mb-4">
                                        CONOCIMIENTO DE IDIOMA
                                    </legend>

                                    <div className="grid grid-cols-1 gap-6">
                                        <div className="grid grid-cols-3 gap-4 ">
                                            <div>
                                                <label
                                                    htmlFor="nombre_idioma"
                                                    className="block text-sm font-medium"
                                                >
                                                    Nombre de Idioma
                                                </label>
                                                <input
                                                    type="text"
                                                    id="nombre_idioma"
                                                    name="nombre_idioma"
                                                    value={data.nombre_idioma}
                                                    onChange={(e) =>
                                                        setData(
                                                            "nombre_idioma",
                                                            e.target.value
                                                        )
                                                    }
                                                    className="mt-1 block w-full text-gray-200 dark:text-gray-800"
                                                />
                                                {errors.nombre_idioma&& (
                                                    <span className="text-red-500">
                                                        {errors.nombre_idioma}
                                                    </span>
                                                )}
                                            </div>
                                        
                                        </div>
                    
                                        <div className="grid grid-cols-2 gap-4">
                                            
                                        </div>
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
                                                <option value="Lee">
                                                    {" "}
                                                    Lee{" "}
                                                </option>
                                                <option value="Habla">
                                                    {" "}
                                                    Habla{" "}
                                                </option>
                                                <option value="Escribe">
                                                    {" "}
                                                    Escribe{" "}
                                                </option>
                                                
                                            </select>
                                            {errors.tipo && (
                                                <span className="text-red-500">
                                                    {errors.tipo}
                                                </span>
                                            )}
                                        </div>
                                        
                                        <div>
                                            <label
                                                htmlFor="nivel"
                                                className="block text-sm font-medium"
                                            >
                                               NIVEL
                                            </label>
                                            <select
                                                name="nivel"
                                                id="nivel"
                                                value={data.nivel || ""}
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
                                                <option value="Básico">
                                                    {" "}
                                                    Básico{" "}
                                                </option>
                                                <option value="Medio">
                                                    {" "}
                                                    Medio{" "}
                                                </option>
                                                <option value="Avanzado">
                                                    {" "}
                                                    Avanzado{" "}
                                                </option>
                                                
                                            </select>
                                            {errors.nivel && (
                                                <span className="text-red-500">
                                                    {errors.nivel}
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

                            <section className="mb-6 border-t-2 border-b-2 border-gray-300 pt-4 pb-4">
                            <legend className="border-b-2 border-gray-300 pt-4 pb-4 text-xl font-semibold mb-4">
                            EXPERIENCIA PROFESIONAL EN EL ÁREA EDUCATIVA DE COLEGIOS EXTERNOS
                                    </legend>
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
                                                    htmlFor="cargo"
                                                    className="block text-sm font-medium"
                                                >
                                                    Cargo
                                                </label>
                                                <input
                                                    type="text"
                                                    id="cargo"
                                                    name="cargo"
                                                    value={
                                                        data.cargo
                                                    }
                                                    onChange={(e) =>
                                                        setData(
                                                            "cargo",
                                                            e.target.value
                                                        )
                                                    }
                                                    className=" mt-1 block w-full text-gray-200 dark:text-gray-800"
                                                />
                                                {errors.cargo && (
                                                    <span className="text-red-500">
                                                        {
                                                            errors.cargo
                                                        }
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
                                                    : docente
                                                    ? "Actualizar"
                                                    : "Guardar"}
                                            </button>
                                        </div>
                                        </div>
                            </section>

                            <section className="mb-6 border-t-2 border-b-2 border-gray-300 pt-4 pb-4">
                            <legend className="border-b-2 border-gray-300 pt-4 pb-4 text-xl font-semibold mb-4">
                            DIPLOMADOS, CURSOS, SEMINARIO Y TALLERES
                                    </legend>

                                    <div className="grid grid-cols-1 gap-6">
                                        <div className="grid grid-cols-3 gap-4 ">
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
                                                    : docente
                                                    ? "Actualizar"
                                                    : "Guardar"}
                                            </button>
                                        </div>
                                        </div>        
                            </section>

                            <section className="mb-6 border-t-2 border-b-2 border-gray-300 pt-4 pb-4">
                            <legend className="border-b-2 border-gray-300 pt-4 pb-4 text-xl font-semibold mb-4">
                            PUBLICACIONES
                                    </legend>
                            
                                    <div className="grid grid-cols-1 gap-6">
                                        <div className="grid grid-cols-3 gap-4 ">

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
                                                    : docente
                                                    ? "Actualizar"
                                                    : "Guardar"}
                                            </button>
                                        </div>
                                        </div>  

                            </section>

                            <section className="mb-6 border-t-2 border-b-2 border-gray-300 pt-4 pb-4">
                            <legend className="border-b-2 border-gray-300 pt-4 pb-4 text-xl font-semibold mb-4">
                            ACTIVIDADES DE CONSULTORIA Y/O INVESTIGACIÓN EN EL ÁREA
                                    </legend>
                            
                                    <div className="grid grid-cols-1 gap-6">
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
                                                    : docente
                                                    ? "Actualizar"
                                                    : "Guardar"}
                                            </button>
                                        </div>
                                        </div>


                            </section>
                            
                            <section className="mb-6 border-t-2 border-b-2 border-gray-300 pt-4 pb-4">
                            <legend className="border-b-2 border-gray-300 pt-4 pb-4 text-xl font-semibold mb-4">
                            PREMIOS Y DISTINCIONES EN EL ÁREA
                                    </legend>

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
                            
                            <section className="mb-6 border-t-2 border-b-2 border-gray-300 pt-4 pb-4">
                            <legend className="border-b-2 border-gray-300 pt-4 pb-4 text-xl font-semibold mb-4">
                            AFILIACIONES EN INSTITUCIONES Y/O ASOCIACIONES EN EL ÁREA EDUCATIVA
                                    </legend>

                                    <div className="grid grid-cols-1 gap-6">
                                        <div className="grid grid-cols-3 gap-4 ">  

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
                                                    : docente
                                                    ? "Actualizar"
                                                    : "Guardar"}
                                            </button>
                                        </div>
                                        </div>  

                            </section>

                            <section className="mb-6 border-t-2 border-b-2 border-gray-300 pt-4 pb-4">
                            <legend className="border-b-2 border-gray-300 pt-4 pb-4 text-xl font-semibold mb-4">
                            INFORMACIÓN LABORAL - COLEGIO LOYOLA

                                    </legend>
                            </section>

                                        </form>
                        </div>
                    </div>
                    </div>
            </div>
        </AuthenticatedLayout>
    );
}
