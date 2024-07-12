<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PremioDistincion extends Model
{
    use HasFactory;

    protected $table = "premios_distinciones";

    protected $fillable = [
        'docente_id',
        'tipo',
        'titulo',
        'institucion',
        'lugar',
        'fecha',
    ];

    public function premio(): BelongsTo
    {
        return $this->belongsTo(PremioDistincion::class);
    }
}
