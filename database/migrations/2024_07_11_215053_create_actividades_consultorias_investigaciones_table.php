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
        Schema::create('actividades_consultorias_investigaciones', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('docente_id')->nullable();
            $table->string('titulo', 50);
            $table->string('organismo', 45);
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
        Schema::dropIfExists('actividades_consultorias_investigaciones');
    }
};
