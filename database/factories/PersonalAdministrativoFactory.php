<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class PersonalAdministrativoFactory extends Factory
{
    protected $model = \App\Models\PersonalAdministrativo::class;

    public function definition()
    {
        return [
            'nombre' => $this->faker->firstName,
            'apellido_paterno' => $this->faker->lastName,
            'apellido_materno' => $this->faker->lastName,
            'genero' => $this->faker->randomElement(['Masculino', 'Femenino']),
            'estado_civil' => $this->faker->randomElement(['Soltera/o', 'Casada/o', 'Viuda/o', 'Divorciada/o']),
            'apellido_casada' => $this->faker->optional()->lastName,
            'ci' => $this->faker->unique()->numberBetween(100000, 999999),
            'expedido_ci' => $this->faker->word,
            'ci_extranjero' => $this->faker->optional()->numberBetween(100000, 999999),
            'pasaporte' => $this->faker->optional()->word,
            'nacimiento' => $this->faker->date(),
            'celular' => $this->faker->phoneNumber,
            'telefono' => $this->faker->optional()->phoneNumber,
            'correo' => $this->faker->email,
            'cua' => $this->faker->word,
            'seguro' => $this->faker->randomElement(['Caja Nacional de Salud (CNS)', 'Caja de Salud de Caminos y RA', 'Caja Cordes', 'Caja Petrolera de Salud', 'Seguro Integral de Salud SINEC', 'Corporación de Seguro Social Militar (Cossmil)', 'Otros', 'Ninguno']),
        ];
    }
}
