import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue'; // Cambia 'vue' por 'react' si usas React
import { createInertiaApp } from '@inertiajs/inertia-react'; // Verifica que este paquete esté instalado
import { resolvePageComponent } from 'laravel-vite-plugin'; // o 'laravel-mix' si usas Laravel Mix
import { App } from '@inertiajs/inertia-react';

createInertiaApp({
  resolve: name => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
  setup({ el, App, props }) {
    createApp({ render: () => h(App, props) }).mount(el); // Para React, usa `ReactDOM.render` en lugar de `createApp`
  },
});
