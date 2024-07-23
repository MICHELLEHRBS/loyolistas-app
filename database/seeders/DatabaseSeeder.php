<?php

namespace Database\Seeders;

use App\Models\Docente;
use App\Models\Idioma;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        //$this->call(DocenteSeeder::class);

        $this->call([
            DocenteSeeder::class,
            FormacionAcademicaSeeder::class,
            IdiomaSeeder::class,
            ExperienciaLaboralSeeder::class,
            DiplomadoCursoSeeder::class,
            PublicacionSeeder::class,
            ActividadConsultoriaSeeder::class,
            PremioDistincionSeeder::class,
            AfiliacionInstitucionSeeder::class,
            InformacionLaboralSeeder::class,
            DireccionSeeder::class,
            DocenteIdiomaSeeder::class,
        ]);

        /* User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]); */
    }
}
