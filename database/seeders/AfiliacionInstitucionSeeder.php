<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\AfiliacionInstitucion;

class AfiliacionInstitucionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $afiliacionInstitucion1 = new AfiliacionInstitucion();
        $afiliacionInstitucion1->docente_id = 1;
        $afiliacionInstitucion1->institucion = "Universidad Nacional";
        $afiliacionInstitucion1->condicion = "Profesor Titular";
        $afiliacionInstitucion1->fecha = "2019-02-10";
        $afiliacionInstitucion1->docente_id =1;
        $afiliacionInstitucion1->save();

        $afiliacionInstitucion2 = new AfiliacionInstitucion();
        $afiliacionInstitucion2->docente_id = 2;
        $afiliacionInstitucion2->institucion = "Instituto de Investigación Avanzada";
        $afiliacionInstitucion2->condicion = "Investigador Asociado";
        $afiliacionInstitucion2->fecha = "2020-05-15";
        $afiliacionInstitucion2->docente_id =2;
        $afiliacionInstitucion2->save();

        $afiliacionInstitucion3 = new AfiliacionInstitucion();
        $afiliacionInstitucion3->docente_id = 3;
        $afiliacionInstitucion3->institucion = "Academia de Ciencias";
        $afiliacionInstitucion3->condicion = "Miembro Activo";
        $afiliacionInstitucion3->fecha = "2021-09-23";
        $afiliacionInstitucion3->docente_id =3;
        $afiliacionInstitucion3->save();

        $afiliacionInstitucion4 = new AfiliacionInstitucion();
        $afiliacionInstitucion4->docente_id = 4;
        $afiliacionInstitucion4->institucion = "Colegio de Ingenieros";
        $afiliacionInstitucion4->condicion = "Colegiado";
        $afiliacionInstitucion4->fecha = "2018-07-12";
        $afiliacionInstitucion4->docente_id =4;
        $afiliacionInstitucion4->save();

        $afiliacionInstitucion5 = new AfiliacionInstitucion();
        $afiliacionInstitucion5->docente_id = 5;
        $afiliacionInstitucion5->institucion = "Asociación de Docentes";
        $afiliacionInstitucion5->condicion = "Miembro Honorario";
        $afiliacionInstitucion5->fecha = "2022-11-05";
        $afiliacionInstitucion5->docente_id =5;
        $afiliacionInstitucion5->save();
    }
}
