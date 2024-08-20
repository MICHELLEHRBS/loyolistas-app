// import './bootstrap';
// import '../css/app.css';

// import { createApp, h } from 'vue'; // Cambia 'vue' por 'react' si usas React
// import { createInertiaApp } from '@inertiajs/inertia-react'; // Verifica que este paquete esté instalado
// import { resolvePageComponent } from 'laravel-vite-plugin'; // o 'laravel-mix' si usas Laravel Mix
// import { App } from '@inertiajs/inertia-react';

// createInertiaApp({
//   resolve: name => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
//   setup({ el, App, props }) {
//     createApp({ render: () => h(App, props) }).mount(el); // Para React, usa `ReactDOM.render` en lugar de `createApp`
//   },
// });

import "./bootstrap";
import "../css/app.css";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: "#4B5563",
    },
});
