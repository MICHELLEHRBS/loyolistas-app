<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ExperienciaLaboral extends Model
{
    use HasFactory;

    protected $table = "experiencias_laborales";

    protected $fillable = [
        'docente_id',
        'nombre',
        'cargo',
        'fecha_inicio',
        'fecha_fin',
    ];

    public function experiencia(): BelongsTo
    {
        return $this->belongsTo(ExperienciaLaboral::class);
    }
}
