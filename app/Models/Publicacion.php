<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Publicacion extends Model
{
    use HasFactory;

    protected $table = "publicaciones";

    protected $fillable = [
        'docente_id',
        'tipo_publicacion',
        'titulo',
        'lugar_publicacion',
        'fecha',
    ];

    public function publicacion(): BelongsTo
    {
        return $this->belongsTo(Publicacion::class);
    }
}
