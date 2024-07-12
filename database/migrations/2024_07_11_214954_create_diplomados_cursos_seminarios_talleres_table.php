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
        Schema::create('diplomados_cursos_seminarios_talleres', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('docente_id');
            $table->enum('rol', ['Participante', 'Expositor']);
            $table->enum('tipo_evento', ['Curso', 'Seminario', 'Taller']);
            $table->string('titulo', 75);
            $table->string('institucion', 100);
            $table->string('lugar_pais', 45);
            $table->date('fecha_inicio');
            $table->date('fecha_fin');
            $table->timestamps();

            $table->foreign('docente_id')->references('id')->on('docentes')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('diplomados_cursos_seminarios_talleres');
    }
};
