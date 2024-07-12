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
        Schema::create('premios_distinciones', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('docente_id');
            $table->enum('tipo', ['Premio', 'Distinción']);
            $table->string('titulo', 50);
            $table->string('institucion', 100);
            $table->string('lugar', 45);
            $table->date('fecha');
            $table->timestamps();

            $table->foreign('docente_id')->references('id')->on('docentes')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('premios_distinciones');
    }
};
