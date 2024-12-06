import { Link, Head } from "@inertiajs/react";
import NavBar from "../components/NavBar.jsx";
import Footer from "@/Components/FootersLoyo.jsx";

import "../Components/styles/NavBarstyle.css";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="h-svh flex flex-col">
                <NavBar />

                {/* Contenido Principal */}
                <div className="flex-grow flex flex-col text-left mt-10  pl-48 text-white">
                    <h1 className="text-4xl font-bold mb-4">
                        PLANTEL LOYOLISTA
                    </h1>
                    <p className="text-lg">
                        APARTADO PARA DOCENTES Y ADMINISTRATIVOS, <br />
                        INGRESA, COMPLETA Y ACTUALIZA <br />
                        TU HOJA DE VIDA.
                    </p>
                </div>

                <div className="mt-20">
                    <Footer />
                </div>
            </div>
        </>
    );
}
