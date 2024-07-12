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
        Schema::create('informaciones_laborales_loyola', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('docente_id');
            $table->enum('dia', ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']);
            $table->enum('nivel', ['Pre-Kinder', 'Kinder', 'Primaria', 'Secundaria']);
            $table->enum('materia', ['Com y Leng', 'Mat', 'Cs. Soc.', 'Cs. Nat.', 'Art. Plás.', 'Tec. Tecn.', 'Valores', 'Mus.', 'Ed. Fís', 'Inglés', 'Tec. Tecn 1°', 'Fís.', 'Quím.', 'Innov. Tec.', 'Psi', 'Fil', ' Inglés', '1os Aux.']);
            $table->enum('curso', ['PK Lobito Marrón A', 'PK Lobito Dorado B', 'K Lobito Rojo A', 'K Lobito Blanco B', '1° A', '1° B', '1° C', '2° A', '2° B', '2° C', '3° A', '3° B', '3° C', '4° A', '4° B', '4° C', '5° A', '5° B', '5° C', '6° A', '6° B', '6° C',]);
            $table->time('hora_inicio');
            $table->time('hora_final');
            $table->decimal('salario', 10, 2);
            $table->integer('anios_servicio');
            $table->enum('tipo_contrato', ['Plazo indefinido', 'Plazo definido']);
            $table->date('fecha_inicio');
            $table->date('fecha_finalizacion');
            $table->boolean('evaluacion_pedagogica')->default(false);
            $table->boolean('evaluacion_psicologica')->default(false);
            $table->timestamps();

            $table->foreign('docente_id')->references('id')->on('docentes')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('informaciones_laborales_loyola');
    }
};
