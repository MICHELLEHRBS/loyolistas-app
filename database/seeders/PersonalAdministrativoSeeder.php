<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\PersonalAdministrativo;

class PersonalAdministrativoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Insertar datos de ejemplo para Personal Administrativo
        $personalAdministrativo1 = new PersonalAdministrativo();
        $personalAdministrativo1->nombre = "Ana";
        $personalAdministrativo1->apellido_paterno = "Mendez";
        $personalAdministrativo1->apellido_materno = "Gonzalez";
        $personalAdministrativo1->genero = "Femenino";
        $personalAdministrativo1->estado_civil = "Casada/o"; // Corregido
        $personalAdministrativo1->ci = "9876543";
        $personalAdministrativo1->expedido_ci = "LP";
        $personalAdministrativo1->nacimiento = "1985-03-15";
        $personalAdministrativo1->celular = "76123456";
        $personalAdministrativo1->telefono = "258963";
        $personalAdministrativo1->correo = "ana.mendez@gmail.com";
        $personalAdministrativo1->cua = "2222ana";
        $personalAdministrativo1->seguro = "Caja Nacional de Salud (CNS)";
        $personalAdministrativo1->save();

        $personalAdministrativo2 = new PersonalAdministrativo();
        $personalAdministrativo2->nombre = "Luis";
        $personalAdministrativo2->apellido_paterno = "Paredes";
        $personalAdministrativo2->apellido_materno = "Zapata";
        $personalAdministrativo2->genero = "Masculino";
        $personalAdministrativo2->estado_civil = "Soltera/o"; // Corregido
        $personalAdministrativo2->ci = "6543210";
        $personalAdministrativo2->expedido_ci = "LP";
        $personalAdministrativo2->nacimiento = "1992-11-25";
        $personalAdministrativo2->celular = "76543210";
        $personalAdministrativo2->telefono = "987654";
        $personalAdministrativo2->correo = "luis.paredes@gmail.com";
        $personalAdministrativo2->cua = "3333luis";
        $personalAdministrativo2->seguro = "Caja Nacional de Salud (CNS)";
        $personalAdministrativo2->save();

        $personalAdministrativo3 = new PersonalAdministrativo();
        $personalAdministrativo3->nombre = "Laura";
        $personalAdministrativo3->apellido_paterno = "Martinez";
        $personalAdministrativo3->apellido_materno = "Ortega";
        $personalAdministrativo3->genero = "Femenino";
        $personalAdministrativo3->estado_civil = "Divorciada/o"; // Corregido
        $personalAdministrativo3->ci = "3214567";
        $personalAdministrativo3->expedido_ci = "SC";
        $personalAdministrativo3->nacimiento = "1978-06-20";
        $personalAdministrativo3->celular = "76234567";
        $personalAdministrativo3->telefono = "456789";
        $personalAdministrativo3->correo = "laura.martinez@gmail.com";
        $personalAdministrativo3->cua = "4444laura";
        $personalAdministrativo3->seguro = "Caja Nacional de Salud (CNS)";
        $personalAdministrativo3->save();

        $personalAdministrativo4 = new PersonalAdministrativo();
        $personalAdministrativo4->nombre = "Carlos";
        $personalAdministrativo4->apellido_paterno = "Gonzales";
        $personalAdministrativo4->apellido_materno = "Reyes";
        $personalAdministrativo4->genero = "Masculino";
        $personalAdministrativo4->estado_civil = "Casada/o"; // Corregido
        $personalAdministrativo4->ci = "4567890";
        $personalAdministrativo4->expedido_ci = "CB";
        $personalAdministrativo4->nacimiento = "1990-09-12";
        $personalAdministrativo4->celular = "76345678";
        $personalAdministrativo4->telefono = "678901";
        $personalAdministrativo4->correo = "carlos.gonzales@gmail.com";
        $personalAdministrativo4->cua = "5555carlos";
        $personalAdministrativo4->seguro = "Caja Nacional de Salud (CNS)";
        $personalAdministrativo4->save();

        $personalAdministrativo5 = new PersonalAdministrativo();
        $personalAdministrativo5->nombre = "Mariana";
        $personalAdministrativo5->apellido_paterno = "Jimenez";
        $personalAdministrativo5->apellido_materno = "Salazar";
        $personalAdministrativo5->genero = "Femenino";
        $personalAdministrativo5->estado_civil = "Soltera/o"; // Corregido
        $personalAdministrativo5->ci = "6541230";
        $personalAdministrativo5->expedido_ci = "LP";
        $personalAdministrativo5->nacimiento = "1989-12-05";
        $personalAdministrativo5->celular = "76456789";
        $personalAdministrativo5->telefono = "123456";
        $personalAdministrativo5->correo = "mariana.jimenez@gmail.com";
        $personalAdministrativo5->cua = "6666mariana";
        $personalAdministrativo5->seguro = "Caja Nacional de Salud (CNS)";
        $personalAdministrativo5->save();
    }
}
