<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Direccion extends Model
{
    use HasFactory;

    protected $table = "direcciones";

    protected $fillable = [
        'docente_id',
        'domicilio',
        'zona',
        'municipio',
        'numero_casa_referencia',
        'tipo_vivienda',
    ];

    public function direccion(): BelongsTo
    {
        return $this->belongsTo(Direccion::class);
    }
}
