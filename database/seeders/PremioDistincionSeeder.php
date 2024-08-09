<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\PremioDistincion;

class PremioDistincionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $premio1 = new PremioDistincion();
        $premio1->tipo = "Distinción";
        $premio1->titulo = "Mejor Docente del Año";
        $premio1->institucion = "Ministerio de Educación";
        $premio1->lugar = "Cochabamba";
        $premio1->fecha = "2021-11-15";
        $premio1->docente_id = 1;
        $premio1->save();

        $premio2 = new PremioDistincion();
        $premio2->tipo = "Premio";
        $premio2->titulo = "Excelencia Académica";
        $premio2->institucion = "Colegio Nacional Simón Bolívar";
        $premio2->lugar = "La Paz";
        $premio2->fecha = "2020-09-20";
        $premio2->docente_id = 2;
        $premio2->save();

        $premio3 = new PremioDistincion();
        $premio3->tipo = "Distinción";
        $premio3->titulo = "Contribución a la Educación";
        $premio3->institucion = "Universidad Mayor de San Andrés";
        $premio3->lugar = "La Paz";
        $premio3->fecha = "2019-06-12";
        $premio3->docente_id = 3;
        $premio3->save();

        $premio4 = new PremioDistincion();
        $premio4->tipo = null;
        $premio4->titulo = null;
        $premio4->institucion = null;
        $premio4->lugar = null;
        $premio4->fecha = null;
        $premio4->docente_id = 4;
        $premio4->save();

        $premio5 = new PremioDistincion();
        $premio5->tipo = "Distinción";
        $premio5->titulo = "Labor Educativa Destacada";
        $premio5->institucion = "Colegio Nacional Bolivar";
        $premio5->lugar = "Cochabamba";
        $premio5->fecha = "2022-04-30";
        $premio5->docente_id = 5;
        $premio5->save();

    }
}
