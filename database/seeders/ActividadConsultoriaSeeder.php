<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\ActividadConsultoria;

class ActividadConsultoriaSeeder extends Seeder
{

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $actividadConsultoria = new ActividadConsultoria();
        $actividadConsultoria->titulo = "";
        $actividadConsultoria->organismo = "";
        $actividadConsultoria->fecha = null;
        $actividadConsultoria->docente_id =1;
        $actividadConsultoria->save();

        $actividadConsultoria2 = new ActividadConsultoria();
        $actividadConsultoria2->titulo = "Consultoría en Innovación Educativa";
        $actividadConsultoria2->organismo = "Instituto de Tecnología Educativa";
        $actividadConsultoria2->fecha = "2023-03-15";
        $actividadConsultoria2->docente_id =2;
        $actividadConsultoria2->save();

        $actividadConsultoria3 = new ActividadConsultoria();
        $actividadConsultoria3->titulo = "Consultoría en Gestión de Proyectos";
        $actividadConsultoria3->organismo = "Consultora Proyectos S.A.";
        $actividadConsultoria3->fecha = "2021-11-30";
        $actividadConsultoria3->docente_id =3;
        $actividadConsultoria3->save();

        $actividadConsultoria4 = new ActividadConsultoria();
        $actividadConsultoria4->titulo = "Consultoría de Evaluación Curricular";
        $actividadConsultoria4->organismo = "Universidad de Educación";
        $actividadConsultoria4->fecha = "2020-09-25";
        $actividadConsultoria4->docente_id =4;
        $actividadConsultoria4->save();

        $actividadConsultoria5 = new ActividadConsultoria();
        $actividadConsultoria5->titulo = "Consultoría en Desarrollo Profesional";
        $actividadConsultoria5->organismo = "Centro de Formación Continua";
        $actividadConsultoria5->fecha = "2023-05-12";
        $actividadConsultoria5->docente_id =5;
        $actividadConsultoria5->save();


    }

}
