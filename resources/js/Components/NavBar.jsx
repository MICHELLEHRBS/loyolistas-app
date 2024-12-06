import React from "react";
import { Link, Head } from "@inertiajs/react"; // Corregido el import de Link
import logo from "../Components/images/logo.png"; // Asegúrate de que la ruta es correcta
import "./styles/NavBarstyle.css";

const NavBar = () => {
    return (
        <>
            <Head title="Welcome" />
            <header className="header">
                {/* Logo de la marca */}
                <div className="logo-container">
                    <img src={logo} alt="logo" />
                </div>

                {/* Links de navegación */}
                <nav>
                    <ul className="nav-container">
                        <li>
                            <Link href={route('dashboard')}>LOYOLISTAS</Link>
                        </li>
                        <li>
                            <Link href="/">ASOCIADOS</Link> {/* Corregido Link en lugar de a */}
                        </li>
                        <li>
                            <Link href="/">CONTACTO</Link> {/* Corregido Link en lugar de a */}
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default NavBar;
