<?php

namespace Database\Seeders;

use App\Models\Docente;
use App\Models\Idioma;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DocenteIdiomaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $docentes = Docente::all();
        $idiomas = Idioma::all();

        foreach ($docentes as $docente) {
            $docente->idiomas()->attach($idiomas->random(2)->pluck('id')->toArray());
        }
    }
}
