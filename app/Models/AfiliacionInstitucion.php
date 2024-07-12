<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class AfiliacionInstitucion extends Model
{
    use HasFactory;

    protected $table = "afiliaciones_instituciones_asociados";

    protected $fillable = [
        'docente_id',
        'institucion',
        'condicion',
        'fecha',
    ];

    public function afiliacion(): BelongsTo
    {
        return $this->belongsTo(AfiliacionInstitucion::class);
    }
}
