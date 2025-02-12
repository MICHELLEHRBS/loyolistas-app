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
        Schema::create('formaciones_academicas', function (Blueprint $table) {
            $table->id();
            $table->string('institucion', 100);
            $table->string('titulo', 50);
            $table->date('fecha_inicio');
            $table->date('fecha_egreso');
            $table->enum('grado',['Normalista', 'Licenciado', 'Ingeniero', 'Arquitecto', 'Magister', 'Doctor'] );
            $table->string('especialidad', 50);

            $table->unsignedBingInteger('docente_id');
            $table->foreing('docente_id')->references('id')->on('docentes')->onDelete('cascade');


            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('formaciones_academicas');
    }
};
