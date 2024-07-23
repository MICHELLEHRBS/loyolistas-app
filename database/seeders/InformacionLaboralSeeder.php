<?php

namespace Database\Seeders;

use App\Models\InformacionLaboral;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class InformacionLaboralSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $informacion1 = new InformacionLaboral();
        $informacion1->dia = "Lunes";
        $informacion1->nivel = "Primaria";
        $informacion1->materia = "Mat";
        $informacion1->curso = "1° A";
        $informacion1->hora_inicio = "07:30";
        $informacion1->hora_final = "13:00";
        $informacion1->salario = 2500.00;
        $informacion1->anios_servicio = 5;
        $informacion1->tipo_contrato = "Plazo indefinido";
        $informacion1->fecha_inicio = "2015-03-01";
        $informacion1->fecha_fin = "2020-06-30";
        $informacion1->evaluacion_pedagogica = true;
        $informacion1->evaluacion_psicologica = false;
        $informacion1->save();


        $informacion2 = new InformacionLaboral();
        $informacion2->dia = "Miércoles";
        $informacion2->nivel = "Secundaria";
        $informacion2->materia = "Cs. Soc.";
        $informacion2->curso = "3° B";
        $informacion2->hora_inicio = "08:00";
        $informacion2->hora_final = "15:30";
        $informacion2->salario = 3200.00;
        $informacion2->anios_servicio = 8;
        $informacion2->tipo_contrato = "Plazo indefinido";
        $informacion2->fecha_inicio = "2012-02-15";
        $informacion2->fecha_fin = "2020-12-31";
        $informacion2->evaluacion_pedagogica = true;
        $informacion2->evaluacion_psicologica = true;
        $informacion2->save();


        $informacion3 = new InformacionLaboral();
        $informacion3->dia = "Martes";
        $informacion3->nivel = "Primaria";
        $informacion3->materia = "Com y Leng";
        $informacion3->curso = "2° A";
        $informacion3->hora_inicio = "08:00";
        $informacion3->hora_final = "12:30";
        $informacion3->salario = 2800.00;
        $informacion3->anios_servicio = 6;
        $informacion3->tipo_contrato = "Plazo indefinido";
        $informacion3->fecha_inicio = "2014-09-10";
        $informacion3->fecha_fin = "2021-07-15";
        $informacion3->evaluacion_pedagogica = true;
        $informacion3->evaluacion_psicologica = false;
        $informacion3->save();

        $informacion4 = new InformacionLaboral();
        $informacion4->dia = "Jueves";
        $informacion4->nivel = "Secundaria";
        $informacion4->materia = "Inglés";
        $informacion4->curso = "4° B";
        $informacion4->hora_inicio = "07:30";
        $informacion4->hora_final = "14:00";
        $informacion4->salario = 3000.00;
        $informacion4->anios_servicio = 7;
        $informacion4->tipo_contrato = "Plazo indefinido";
        $informacion4->fecha_inicio = "2013-05-20";
        $informacion4->fecha_fin = "2021-12-31";
        $informacion4->evaluacion_pedagogica = true;
        $informacion4->evaluacion_psicologica = true;
        $informacion4->save();


        $informacion5 = new InformacionLaboral();
        $informacion5->dia = "Viernes";
        $informacion5->nivel = "Primaria";
        $informacion5->materia = "Ed. Fís";
        $informacion5->curso = "3° C";
        $informacion5->hora_inicio = "09:00";
        $informacion5->hora_final = "13:30";
        $informacion5->salario = 2600.00;
        $informacion5->anios_servicio = 5;
        $informacion5->tipo_contrato = "Plazo indefinido";
        $informacion5->fecha_inicio = "2016-04-01";
        $informacion5->fecha_fin = "2022-06-30";
        $informacion5->evaluacion_pedagogica = true;
        $informacion5->evaluacion_psicologica = false;
        $informacion5->save();
    }
}
