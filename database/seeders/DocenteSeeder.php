<?php

namespace Database\Seeders;

use App\Models\Docente;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DocenteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(): void
    {

        // Insertar datos de ejemplo
        $docente = new Docente();
        $docente->nombre = "Sara";
        $docente->apellido_paterno = "Zurita";
        $docente->apellido_materno = "Herbas";
        $docente->genero = "Femenino";
        $docente->estado_civil = "Soltera/o";
        $docente->ci = "1234567";
        $docente->expedido_ci = "CB";
        $docente->nacimiento = "2002-01-01";
        $docente->celular = "76758475";
        $docente->telefono = "454738";
        $docente->correo = "sara@gmail.com";
        $docente->cua = "1111sara";
        $docente->seguro = "Caja Nacional de Salud (CNS)";
        $docente->save();

        $docente2 = new Docente();
        $docente2->nombre = "Rafael";
        $docente2->apellido_paterno = "Medina";
        $docente2->apellido_materno = "Fabiani";
        $docente2->genero = "Masculino";
        $docente2->estado_civil = "Soltera/o";
        $docente2->ci = "7894561";
        $docente2->expedido_ci = "CB";
        $docente2->nacimiento = "2000-01-01";
        $docente2->celular = "78546215";
        $docente2->telefono = "124578";
        $docente2->correo = "rafa@gmail.com";
        $docente2->cua = "1111rafa";
        $docente2->seguro = "Caja Nacional de Salud (CNS)";
        $docente2->save();

        $docente3 = new Docente();
        $docente3->nombre = "Cristian Reynaldo";
        $docente3->apellido_paterno = "Barrios";
        $docente3->apellido_materno = "Flores";
        $docente3->genero = "Masculino";
        $docente3->estado_civil = "Soltera/o";
        $docente3->ci = "1384720";
        $docente3->expedido_ci = "CB";
        $docente3->nacimiento = "2000-07-04";
        $docente3->celular = "67023448";
        $docente3->telefono = "4294895";
        $docente3->correo = "reynaldo@gmail.com";
        $docente3->cua = "2345";
        $docente3->seguro = "Caja Nacional de Salud (CNS)";
        $docente3->save();

        $docente4 = new Docente();
        $docente4->nombre = "Luz Salima";
        $docente4->apellido_paterno = "Zurita";
        $docente4->apellido_materno = "Justiniano";
        $docente4->genero = "Femenino";
        $docente4->estado_civil = "Soltera/o";
        $docente4->ci = "13003445";
        $docente4->expedido_ci = "CB";
        $docente4->nacimiento = "2002-07-23";
        $docente4->celular = "69354744";
        $docente4->telefono = "4202834";
        $docente4->correo = "sarmi2@gmail.com";
        $docente4->cua = "5312";
        $docente4->seguro = "Caja Nacional de Salud (CNS)";
        $docente4->save();

        $docente5 = new Docente();
        $docente5->nombre = "Jhovanni";
        $docente5->apellido_paterno = "Vasquez";
        $docente5->apellido_materno = "Padilla";
        $docente5->genero = "Masculino";
        $docente5->estado_civil = "Soltera/o";
        $docente5->ci = "3452345";
        $docente5->expedido_ci = "CB";
        $docente5->nacimiento = "2005-07-09";
        $docente5->celular = "67435756";
        $docente5->telefono = "4224566";
        $docente5->correo = "jhovi20@gmail.com";
        $docente5->cua = "6544";
        $docente5->seguro = "Caja Nacional de Salud (CNS)";
        $docente5->save();
    }
}
