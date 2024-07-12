<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class DiplomadoCurso extends Model
{
    use HasFactory;

    protected $table = "diplomados_cursos_seminarios_talleres";

    protected $fillable = [
        'docente_id',
        'rol',
        'tipo_evento',
        'titulo',
        'institucion',
        'lugar_pais',
        'fecha_inicio',
        'fecha_fin',
    ];

    public function diplomado(): BelongsTo
    {
        return $this->belongsTo(DiplomadoCurso::class);
    }
}
