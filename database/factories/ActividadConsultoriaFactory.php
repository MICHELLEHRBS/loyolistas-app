<?php

namespace Database\Factories;

use App\Models\Docente;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ActividadConsultoria>
 */
class ActividadConsultoriaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [

             'titulo' => $this->faker-> word,
             'organismo'=> $this->faker->word,
             'fecha'=> $this->faker->date(),
             'docente_id' => Docente::all()->random()->id,
        ];
    }
}
