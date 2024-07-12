<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Idioma extends Model
{
    use HasFactory;

    protected $table = "idiomas";

    protected $fillable = [
        'nombre_idioma',
        'tipo',
        'nivel',
    ];

    public function docentes(): BelongsToMany
    {
        return $this->belongsToMany(Docente::class);
    }
}
