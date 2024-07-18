<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FormacionAcademicaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $formacion1 = new FormacionAcademica();
        $formacion1->institucion = "Universidad Mayor de San Simón";
        $formacion1->titulo = "Licenciado en Educación";
        $formacion1->fecha_inicio = "2005-03-01";
        $formacion1->fecha_egreso = "2009-06-30";
        $formacion1->grado = "Licenciado";
        $formacion1->especialidad = "Educación Primaria";
        $formacion1->save();

        $formacion2 = new FormacionAcademica();
        $formacion2->institucion = "Universidad Privada Domingo Savio";
        $formacion2->titulo = "Licenciado en Ciencias Sociales";
        $formacion2->fecha_inicio = "2010-01-15";
        $formacion2->fecha_egreso = "2014-12-31";
        $formacion2->grado = "Licenciado";
        $formacion2->especialidad = "Ciencias Sociales - Historia";
        $formacion2->save();

        $formacion3 = new FormacionAcademica();
        $formacion3->institucion = "Universidad Mayor de San Andrés";
        $formacion3->titulo = "Magister en Matemáticas";
        $formacion3->fecha_inicio = "2007-09-01";
        $formacion3->fecha_egreso = "2011-07-15";
        $formacion3->grado = "Magister";
        $formacion3->especialidad = "Matemáticas Avanzadas";
        $formacion3->save();

        $formacion4 = new FormacionAcademica();
        $formacion4->institucion = "Universidad Católica Boliviana";
        $formacion4->titulo = "Licenciado en Lengua y Literatura";
        $formacion4->fecha_inicio = "2012-08-20";
        $formacion4->fecha_egreso = "2016-05-30";
        $formacion4->grado = "Licenciado";
        $formacion4->especialidad = "Literatura Boliviana";
        $formacion4->save();

        $formacion5 = new FormacionAcademica();
        $formacion5->institucion = "Universidad Autónoma Gabriel René Moreno";
        $formacion5->titulo = "Licenciado en Ciencias Naturales";
        $formacion5->fecha_inicio = "2013-02-10";
        $formacion5->fecha_egreso = "2017-04-25";
        $formacion5->grado = "Licenciado";
        $formacion5->especialidad = "Biología";
        $formacion5->save();
    }
}
