<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Docente extends Model
{
    use HasFactory;

    protected $table = "docentes";

    protected $fillable = [
        'nombre',
        'apellido_paterno',
        'apellido_materno',
        'genero',
        'estado_civil',
        'apellido_casada',
        'ci',
        'expedido_ci',
        'pasaporte',
        'nacimiento',
        'celular',
        'telefono',
        'correo',
        'cua',
        'seguro',
    ];

    public function formaciones(): HasMany
    {
        return $this->hasMany(FormacionAcademica::class);
    }

    public function experiencias(): HasMany
    {
        return $this->hasMany(ExperienciaLaboral::class);
    }

    public function diplomados(): HasMany
    {
        return $this->hasMany(DiplomadoCurso::class);
    }

    public function publicaciones(): HasMany
    {
        return $this->hasMany(Publicacion::class);
    }

    public function consultorias(): HasMany
    {
        return $this->hasMany(ActividadConsultoria::class);
    }

    public function premios(): HasMany
    {
        return $this->hasMany(PremioDistincion::class);
    }

    public function afiliaciones(): HasMany
    {
        return $this->hasMany(AfiliacionInstitucion::class);
    }

    public function informaciones(): HasMany
    {
        return $this->hasMany(InformacionLaboral::class);
    }

    public function direcciones(): HasMany
    {
        return $this->hasMany(Direccion::class);
    }

    public function archivos(): HasMany
    {
        return $this->hasMany(Archivo::class);
    }

    public function imagenes(): HasMany
    {
        return $this->hasMany(Imagen::class);
    }

    public function idiomas(): BelongsToMany
    {
        return $this->belongsToMany(Idioma::class);
    }
}
