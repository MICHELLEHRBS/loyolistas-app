<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PersonalAdministrativo extends Model
{
    use HasFactory;

    protected $table = 'personal_administrativos'; // Nombre de la tabla en la base de datos

    protected $fillable = [
        'nombre',
        'apellido_paterno',
        'apellido_materno',
        'genero',
        'estado_civil',
        'ci', 'expedido_ci',
        'ci_extranjero',
        'pasaporte',
        'nacimiento',
        'celular',
        'telefono',
        'correo', 'cua',
        'seguro',
    ];
}
