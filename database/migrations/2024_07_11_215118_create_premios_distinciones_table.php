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
            $table->unsignedBigInteger('docente_id')->nullable();
            $table->enum('tipo', ['Premio', 'Distinción'])->nullable();
            $table->string('titulo', 50)->nullable();
            $table->string('institucion', 100)->nullable();
            $table->string('lugar', 45)->nullable();
            $table->date('fecha')->nullable();
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
