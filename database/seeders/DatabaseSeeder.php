<?php

namespace Database\Seeders;

use App\Models\Docente;
use App\Models\Idioma;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\ActividadConsultoria;
use App\Models\AfiliacionInstitucion;
use App\Models\PersonalAdministrativo;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();



        /*Docente::factory(10)->create();
        ActividadConsultoria::factory(10)->create();
        AfiliacionInstitucion::factory(10)->create();
        PersonalAdministrativo::factory(10)->create();*/

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
            PersonalAdministrativoSeeder::class,
        ]);


        /* User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]); */
    }
}
