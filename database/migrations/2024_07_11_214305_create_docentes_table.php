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
        Schema::create('docentes', function (Blueprint $table) {
            $table->id();
            $table->string('nombre', 75);
            $table->string('apellido_paterno', 35)->nullable();
            $table->string('apellido_materno', 35)->nullable();
            $table->enum('genero', ['Masculino', 'Femenino']);
            $table->enum('estado_civil', ['Soltera/o', 'Casada/o', 'Viuda/o', 'Divorciada/o']);
            $table->string('apellido_casada', 35)->nullable();
            $table->string('ci', 15)->unique();
            $table->string('expedido_ci', 35);
            $table->string('ci_extranjero', 15)->unique()->nullable();
            $table->string('pasaporte', 45)->nullable();
            $table->date('nacimiento');
            $table->string('celular', 15);
            $table->string('telefono', 15)->nullable();
            $table->string('correo', 75);
            $table->string('cua', 45);
            $table->enum('seguro', ['Caja Nacional de Salud (CNS)', 'Caja de Salud de Caminos y RA', 'Caja Cordes', 'Caja Petrolera de Salud', 'Seguro Integral de Salud SINEC', 'Corporación de Seguro Social Militar (Cossmil)', 'Otros', 'Ninguno']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('docentes');
    }
};
