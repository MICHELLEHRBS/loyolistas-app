<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class FormacionAcademica extends Model
{
    use HasFactory;

    protected $table = "formaciones_academicas";

    protected $fillable = [
        'docente_id',
        'institucion',
        'titulo',
        'fecha_inicio',
        'fecha_egreso',
        'grado',
        'especialidad',
    ];

    public function formacion(): BelongsTo
    {
        return $this->belongsTo(FormacionAcademica::class);
    }
}
