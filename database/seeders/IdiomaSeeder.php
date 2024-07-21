<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Idioma;

class IdiomaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $idioma1 = new Idioma();
        $idioma1 ->nombre_idioma = "Ingles";
        $idioma1 ->modo = "Habla";
        $idioma1 ->nivel = "Básico";
        $idioma1->save();

        $idioma2 = new Idioma();
        $idioma2 ->nombre_idioma = "Ingles";
        $idioma2 ->modo = "Lee, Escribe";
        $idioma2 ->nivel = "Medio";
        $idioma2 ->save();

        $idioma3 = new Idioma();
        $idioma3 ->nombre_idioma = "Quechua";
        $idioma3 ->modo = "Lee, Escribe";
        $idioma3 ->nivel = "Medio";
        $idioma3->save();

        $idioma4 = new Idioma();
        $idioma4 ->nombre_idioma = "";
        $idioma4 ->modo = null;
        $idioma4 ->nivel = null;
        $idioma4->save();

        $idioma5 = new Idioma();
        $idioma5 ->nombre_idioma = "";
        $idioma5 ->modo = null;
        $idioma5 ->nivel = null;
        $idioma5->save();
    }
}
