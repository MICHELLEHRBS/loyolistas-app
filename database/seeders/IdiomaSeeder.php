<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class IdiomaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $Idioma1 = new Idioma();
        $Idioma1 ->nombre_idioma = "Ingles";
        $Idioma1 ->tipo = "Habla";
        $Idioma1 ->nivel = "Básico";
        $Idioma1->save();

        $Idioma2 = new Idioma();
        $Idioma2 ->nombre_idioma = "Ingles";
        $Idioma2 ->tipo = ["Lee", "Escribe"];
        $Idioma2 ->nivel = "Medio";
        $Idioma2 ->save();

        $Idioma3 = new Idioma();
        $Idioma2 ->nombre_idioma = "Ingles";
        $Idioma2 ->tipo = ["Lee", "Escribe"];
        $Idioma2 ->nivel = "Medio";
        $Idioma3->save();

        $Idioma4 = new Idioma();
        $Idioma4 ->nombre_idioma = "";
        $Idioma4 ->tipo = "";
        $Idioma4 ->nivel = "";
        $Idioma4->save();

        $Idioma5 = new Idioma();
        $Idioma5 ->nombre_idioma = "";
        $Idioma5 ->tipo = "";
        $Idioma5 ->nivel = "";
        $Idioma5->save();
    }
}
