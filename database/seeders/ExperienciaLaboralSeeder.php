<?php

namespace Database\Seeders;

use App\Models\ExperienciaLaboral;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ExperienciaLaboralSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {


        $experiencia1 = new ExperienciaLaboral();
        $experiencia1->nombre = "Colegio San Agustín";
        $experiencia1->cargo = "Profesor de Matemáticas";
        $experiencia1->fecha_inicio = "2010-03-01";
        $experiencia1->fecha_fin = "2015-06-30";
        $experiencia1->save();

        $experiencia2 = new ExperienciaLaboral();
        $experiencia2->nombre = "Colegio La Salle";
        $experiencia2->cargo = "Docente de Ciencias Sociales";
        $experiencia2->fecha_inicio = "2016-01-15";
        $experiencia2->fecha_fin = "2020-12-31";
        $experiencia2->save();

        $experiencia3 = new ExperienciaLaboral();
        $experiencia3->nombre = "Colegio Alemán Santa Cruz";
        $experiencia3->cargo = "Profesor de Inglés";
        $experiencia3->fecha_inicio = "2013-09-01";
        $experiencia3->fecha_fin = "2017-07-15";
        $experiencia3->save();

        $experiencia4 = new ExperienciaLaboral();
        $experiencia4->nombre = "Colegio Anglo Americano";
        $experiencia4->cargo = "Docente de Ciencias Naturales";
        $experiencia4->fecha_inicio = "2012-08-20";
        $experiencia4->fecha_fin = "2016-05-30";
        $experiencia4->save();

        $experiencia5 = new ExperienciaLaboral();
        $experiencia5->nombre = "Colegio María Auxiliadora";
        $experiencia5->cargo = "Profesor de Lengua y Literatura";
        $experiencia5->fecha_inicio = "2015-02-10";
        $experiencia5->fecha_fin = "2019-04-25";
        $experiencia5->save();
    }
}
