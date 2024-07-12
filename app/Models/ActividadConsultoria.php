<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ActividadConsultoria extends Model
{
    use HasFactory;

    protected $table = "actividades_consultorias_investigaciones";

    protected $fillable = [
        'docente_id',
        'titulo',
        'organismo',
        'fecha',
    ];

    public function docente(): BelongsTo
    {
        return $this->belongsTo(Docente::class);
    }
}
