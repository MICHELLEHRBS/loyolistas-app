<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Direccion;

class DireccionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $direccion1 = new Direccion();
        $direccion1->domicilio = "Calle Lanza";
        $direccion1->zona = "Centro";
        $direccion1->municipio = "Cochabamba";
        $direccion1->numero_casa_referencia = "123";
        $direccion1->tipo_vivienda = "Casa";
        $direccion1->save();

        $direccion2 = new Direccion();
        $direccion2->domicilio = "Avenida Blanco Galindo";
        $direccion2->zona = "Villa Moderna";
        $direccion2->municipio = "Quillacollo";
        $direccion2->numero_casa_referencia = "456";
        $direccion2->tipo_vivienda = "Condominio";
        $direccion2->save();

        $direccion3 = new Direccion();
        $direccion3->domicilio = "Calle Sucre";
        $direccion3->zona = "Central";
        $direccion3->municipio = "Sacaba";
        $direccion3->numero_casa_referencia = "789";
        $direccion3->tipo_vivienda = "Departamento";
        $direccion3->save();

        $direccion4 = new Direccion();
        $direccion4->domicilio = "Avenida Uyuni";
        $direccion4->zona = "Zona Norte";
        $direccion4->municipio = "Vinto";
        $direccion4->numero_casa_referencia = "321";
        $direccion4->tipo_vivienda = "Urbanización cerrada";
        $direccion4->save();

        $direccion5 = new Direccion();
        $direccion5->domicilio = "Calle Bolívar";
        $direccion5->zona = "Centro";
        $direccion5->municipio = "Tiquipaya";
        $direccion5->numero_casa_referencia = "654";
        $direccion5->tipo_vivienda = "Urbanización abierta";
        $direccion5->save();
    }
}
