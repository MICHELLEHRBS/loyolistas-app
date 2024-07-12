<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('direcciones', function (Blueprint $table) {
            $table->id();
            $table->string('domicilio', 45);
            $table->string('zona', 45);
            $table->string('municipio', 45);
            $table->string('numero_casa_referencia', 45);
            $table->enum('tipo_vivienda', ['Casa', 'Condominio', 'Departamento', 'Urbanización cerrada', 'Urbanización abierta']);
            $table->unsignedBigInteger('docente_id')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('direcciones');
    }
};
