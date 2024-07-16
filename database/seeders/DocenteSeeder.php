<?php

namespace Database\Seeders;

use App\Models\Docente;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DocenteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $docente1 = new Docente();
        $docente1->nombre = "Sara";
        $docente1->apellido_paterno = "Zurita";
        $docente1->apellido_materno = "Herbas";
        $docente1->genero = "Femenino";
        $docente1->estado_civil = "Soltera/o";
        $docente1->ci = "1234567";
        $docente1->expedido_ci = "CO";
        $docente1->nacimiento = "2002-01-01";
        $docente1->celular = "76758475";
        $docente1->telefono = "454738";
        $docente1->correo = "sara@gmail.com";
        $docente1->cua = "1111sara";
        $docente1->seguro = "Caja Nacional de Salud (CNS)";
        $docente1->save();

        $docente1 = new Docente();
        $docente1->nombre = "RafAel";
        $docente1->apellido_paterno = "Medina";
        $docente1->apellido_materno = "Fabiani";
        $docente1->genero = "Masculino";
        $docente1->estado_civil = "Soltera/o";
        $docente1->ci = "7894561";
        $docente1->expedido_ci = "CO";
        $docente1->nacimiento = "2000-01-01";
        $docente1->celular = "78546215";
        $docente1->telefono = "124578";
        $docente1->correo = "rafa@gmail.com";
        $docente1->cua = "1111rafa";
        $docente1->seguro = "Caja Nacional de Salud (CNS)";
        $docente1->save();
    }
}
