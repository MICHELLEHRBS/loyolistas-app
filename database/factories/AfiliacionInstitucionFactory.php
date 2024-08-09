<?php

namespace Database\Factories;

use App\Models\Docente;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\AfiliacionInstitucion>
 */
class AfiliacionInstitucionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [

            'institucion' => $this->faker->company,
            'condicion' => $this->faker->word,
            'fecha' => $this->faker->date(),
            'docente_id' => Docente::factory(),
        ];
    }
}
