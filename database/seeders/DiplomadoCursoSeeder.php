<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\DiplomadoCurso;

class DiplomadoCursoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $diplomadoCurso1 = new DiplomadoCurso();
        $diplomadoCurso1->rol = "Participante";
        $diplomadoCurso1->tipo_evento = "Diplomado";
        $diplomadoCurso1->titulo = "Diplomado en Gestión Educativa";
        $diplomadoCurso1->institucion = "Universidad Mayor de San Andrés";
        $diplomadoCurso1->lugar_pais = "La Paz, Bolivia";
        $diplomadoCurso1->fecha_inicio = "2021-03-01";
        $diplomadoCurso1->fecha_fin = "2021-06-30";
        $diplomadoCurso1->save();

        $diplomadoCurso2 = new DiplomadoCurso();
        $diplomadoCurso2->rol = "Expositor";
        $diplomadoCurso2->tipo_evento = "Curso";
        $diplomadoCurso2->titulo = "Curso Avanzado de Programación";
        $diplomadoCurso2->institucion = "Universidad Católica Boliviana";
        $diplomadoCurso2->lugar_pais = "Santa Cruz, Bolivia";
        $diplomadoCurso2->fecha_inicio = "2022-01-15";
        $diplomadoCurso2->fecha_fin = "2022-04-15";
        $diplomadoCurso2->save();

        $diplomadoCurso3 = new DiplomadoCurso();
        $diplomadoCurso3->rol = "Participante";
        $diplomadoCurso3->tipo_evento = "Seminario";
        $diplomadoCurso3->titulo = "Seminario Internacional de Ciencias";
        $diplomadoCurso3->institucion = "Academia Boliviana de Ciencias";
        $diplomadoCurso3->lugar_pais = "Cochabamba, Bolivia";
        $diplomadoCurso3->fecha_inicio = "2020-08-10";
        $diplomadoCurso3->fecha_fin = "2020-08-15";
        $diplomadoCurso3->save();

        $diplomadoCurso4 = new DiplomadoCurso();
        $diplomadoCurso4->rol = "Expositor";
        $diplomadoCurso4->tipo_evento = "Taller";
        $diplomadoCurso4->titulo = "Congreso Nacional de Ingeniería";
        $diplomadoCurso4->institucion = "Colegio de Ingenieros de Bolivia";
        $diplomadoCurso4->lugar_pais = "Sucre, Bolivia";
        $diplomadoCurso4->fecha_inicio = "2019-09-20";
        $diplomadoCurso4->fecha_fin = "2019-09-25";
        $diplomadoCurso4->save();

        $diplomadoCurso5 = new DiplomadoCurso();
        $diplomadoCurso5->rol = "Participante";
        $diplomadoCurso5->tipo_evento = "Taller";
        $diplomadoCurso5->titulo = "Taller de Innovación Tecnológica";
        $diplomadoCurso5->institucion = "Centro de Innovación y Desarrollo de Bolivia";
        $diplomadoCurso5->lugar_pais = "Tarija, Bolivia";
        $diplomadoCurso5->fecha_inicio = "2023-05-10";
        $diplomadoCurso5->fecha_fin = "2023-05-12";
        $diplomadoCurso5->save();
    }
}
