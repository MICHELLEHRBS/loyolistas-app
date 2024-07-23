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
            $table->unsignedBigInteger('docente_id')->nullable();
            $table->enum('rol', ['Participante', 'Expositor'])->nullable();
            $table->enum('tipo_evento', ['Diplomado','Curso', 'Seminario', 'Taller'])->nullable();
            $table->string('titulo', 75)->nullable();
            $table->string('institucion', 100)->nullable();
            $table->string('lugar_pais', 45)->nullable();
            $table->date('fecha_inicio')->nullable();
            $table->date('fecha_fin')->nullable();
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
