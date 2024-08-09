<?php

namespace Database\Seeders;

use App\Models\Idioma;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;


class IdiomaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $idioma1 = new Idioma();
        $idioma1->nombre_idioma = "Ingles";
        $idioma1->tipo = "Habla";
        $idioma1->nivel = "Básico";
        $idioma1->save();

        $idioma2 = new Idioma();
        $idioma2->nombre_idioma = "Ingles";
        $idioma2->tipo = "Lee";
        $idioma2->nivel = "Medio";
        $idioma2->save();

        $idioma3 = new Idioma();
        $idioma2->nombre_idioma = "Ingles";
        $idioma2->tipo = "Escribe";
        $idioma2->nivel = "Medio";
        $idioma3->save();

        // $idioma4 = new Idioma();
        // $idioma4->nombre_idioma = "";
        // $idioma4->tipo = "";
        // $idioma4->nivel = "";
        // $idioma4->save();

        // $idioma5 = new Idioma();
        // $idioma5->nombre_idioma = "";
        // $idioma5->tipo = "";
        // $idioma5->nivel = "";
        // $idioma5->save();
    }
}
