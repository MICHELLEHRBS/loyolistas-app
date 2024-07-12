<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class InformacionLaboral extends Model
{
    use HasFactory;

    protected $table = "informaciones_laborales_loyola";

    protected $fillable = [
        'docente_id',
        'dia',
        'nivel',
        'materia',
        'curso',
        'hora_inicio',
        'hora_final',
        'salario',
        'anios_servicio',
        'tipo_contrato',
        'fecha_inicio',
        'fecha_fin',
        'evaluacion_pedagogica',
        'evaluacion_psicologica',
    ];

    public function informacion(): BelongsTo
    {
        return $this->belongsTo(InformacionLaboral::class);
    }
}
