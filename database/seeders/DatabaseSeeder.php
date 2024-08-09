<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Docente;
use App\Models\ActividadConsultoria;
use App\Models\AfiliacionInstitucion;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        $this->call(DocenteSeeder::class);
        $this->call(ActividadConsultoriaSeeder::class);
        $this->call(AfiliacionInstitucionSeeder::class);
        $this->call(DiplomadoCursoSeeder::class);
        $this->call(DireccionSeeder::class);
        $this->call(ExperienciaLaboralSeeder::class);
        $this->call(FormacionAcademicaSeeder::class);
        $this->call(IdiomaSeeder ::class);
        $this->call(InformacionLaboralSeeder ::class);
        $this->call(PremioDistincionSeeder ::class);
        $this->call(PublicacionSeeder ::class);


        ActividadConsultoria::factory(10)->create();
        AfiliacionInstitucion::factory(10)->create();
        Docente::factory(10)->create();

        /* User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]); */
    }
}
