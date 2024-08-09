<?php

namespace Database\Seeders;

use App\Models\Publicacion;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;


class PublicacionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {


        $publicacion1 = new Publicacion();
        $publicacion1->docente_id = 1;
        $publicacion1->tipo_publicacion = "Artículo científico";
        $publicacion1->titulo = "Impacto de las nuevas tecnologías en la educación";
        $publicacion1->lugar_publicacion = "Revista Educativa Boliviana";
        $publicacion1->fecha = "2021-08-10";
        $publicacion1->docente_id = 1;
        $publicacion1->save();

        $publicacion2 = new Publicacion();
        $publicacion2->docente_id = 2;
        $publicacion2->tipo_publicacion = "Libro";
        $publicacion2->titulo = "Metodologías Innovadoras para la Enseñanza de Matemáticas";
        $publicacion2->lugar_publicacion = "Editorial Académica Boliviana";
        $publicacion2->fecha = "2020-05-15";
        $publicacion2->docente_id = 2;
        $publicacion2->save();

        $publicacion3 = new Publicacion();
        $publicacion3->docente_id = 3;
        $publicacion3->tipo_publicacion = "Artículo de divulgación";
        $publicacion3->titulo = "Importancia de la educación artística en la formación integral";
        $publicacion3->lugar_publicacion = "Periódico Educativo Nacional";
        $publicacion3->fecha = "2019-11-30";
        $publicacion3->docente_id =3;
        $publicacion3->save();

        $publicacion4 = new Publicacion();
        $publicacion4->docente_id = 4;
        $publicacion4->tipo_publicacion = "Informe técnico";
        $publicacion4->titulo = "Evaluación del impacto del currículo nacional en la educación primaria";
        $publicacion4->lugar_publicacion = "Ministerio de Educación de Bolivia";
        $publicacion4->fecha = "2018-07-20";
        $publicacion4->docente_id = 4;
        $publicacion4->save();

        $publicacion5 = new Publicacion();
        $publicacion5->docente_id = 5;
        $publicacion5->tipo_publicacion = "Artículo académico";
        $publicacion5->titulo = "Innovación educativa en el contexto boliviano";
        $publicacion5->lugar_publicacion = "Revista de Investigación Educativa";
        $publicacion5->fecha = "2022-02-28";
        $publicacion5->docente_id = 5;
        $publicacion5->save();
    }
}
