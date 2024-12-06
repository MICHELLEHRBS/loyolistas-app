import React from "react";
import logo from "../Components/images/logo.png";
import face from "../Components/images/facebook.png";
import wold from "../Components/images/globe.png";
import insta from "../Components/images/instagram.png";
import yotu from "../Components/images/youtube.png";

import "./styles/Footers.css"

const Footer = () => {
    return (
        <footer className="bg-green-800 text-white py-6">
            <div className="container mx-auto flex flex-col items-center md:flex-row justify-between">
                {/* Logo */}
                <div className="flex items-center mb-4 md:mb-0">
                    <img
                        src={logo} // Reemplaza con la URL del logo
                        alt="Loyola"
                        className="h-12 w-12 mr-3"
                    />
                </div>

              
                {/* Redes Sociales */}
                <div className="flex space-x-6">
                    <img
                        src={face} 
                        alt="face"
                        className="face"
                    />

                    <img
                        src={wold} 
                        alt="wold"
                        className="wold"
                    />
                    <img
                        src={insta} 
                        alt="insta"
                        className="insta"
                    />
                    <img
                        src={yotu} 
                        alt="yotu"
                        className="yotu"
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
