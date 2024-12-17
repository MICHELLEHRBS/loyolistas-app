<?php

namespace App\Http\Controllers;

use App\Models\InformacionLaboral;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;


class InformacionLaboralController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $informaciones_laborales_loyola = InformacionLaboral::all();
        return Inertia::render('InformacionLaboral/Index', ['informaciones'=> $informaciones_laborales_loyola]);
    
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('InformacionLaboral/Form');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            "dia"=> "required|in:Lunes,Martes,Miercoles,Jueves,Viernes,Sabado,Domingo",
            "nivel"=> "required|in:Pre-Kinder,Kinder,Primaria,Secundaria",
            "materia"=> "required|in:Com y Leng,Mat,Cs. Soc.,Cs. Nat.,Art. Plás.,Tec. Tecn.,Valores,Mus.,Ed. Fís,Inglés,Tec. Tecn 1°,Fís.,Quím.,Innov. Tec.,Psi,Fil,Inglés,1os Aux.",
            "curso"=> "required|in:PK Lobito Marrón A,PK Lobito Dorado B,K Lobito Rojo A,K Lobito Blanco B,1° A,1° B,1° C,2° A,2° B,2° C,3° A,3° B,3° C,4° A,4° B,4° C,5° A,5° B,5° C,6° A,6° B,6° C",
            "hora_inicio"=>"required",
            "hora_final"=>"required",
            "salario"=>"required|max:100",
            "anios_servivio"=>"required|max:15",
            "tipo_contrato"=> "required|in:Plazo indefinido.Plazo definido",
            "fecha_inicio"=>"required",
            "fecha_fin"=>"required",
            "evaluacion_pedagogica"=>"nullable|max:50",
            "evaluacion_psicologica"=>"nullable|max:50"

        ]);

        $informaciones_laborales_loyola= new InformacionLaboral();
        $informaciones_laborales_loyola->dia = $request->dia;
        $informaciones_laborales_loyola->nivel = $request->nivel;
        $informaciones_laborales_loyola->materia = $request->materia;
        $informaciones_laborales_loyola->curso = $request-> curso;
        $informaciones_laborales_loyola->hora_inicio = $request->hora_inicio;
        $informaciones_laborales_loyola->hora_final = $request-> hora_final;
        $informaciones_laborales_loyola->salario = $request->salario;
        $informaciones_laborales_loyola->anios_servicio = $request->anio_servicio;
        $informaciones_laborales_loyola->tipo_contrato =$request->tipo_contrato;
        $informaciones_laborales_loyola->fecha_inicio = $request-> fecha_inicio;
        $informaciones_laborales_loyola->fecha_fin = $request->fecha_fin;
        $informaciones_laborales_loyola->evaluacion_pedagogica = $request-> evaluacion_pedagogica;
        $informaciones_laborales_loyola->evaluacion_psicologica = $request->evaluacion_psicologica;
        $informaciones_laborales_loyola->save();


return Redirect::route('formaciones.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $informaciones_laborales_loyola = InformacionLaboral::find($id);
        return Inertia::render('InformacionLaboral/Show', ['informaciones' => $informaciones_laborales_loyola]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $informaciones_laborales_loyola = InformacionLaboral::find($id);
        return Inertia::render('InformacionLaboral/Form', ['informaciones' => $informaciones_laborales_loyola]);
    
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $informaciones_laborales_loyola = InformacionLaboral::findOrFail($id);
        $informaciones_laborales_loyola->update($request->only([
            
            "dia",
            "nivel",
            "materia",
            "curso",
            "hora_inicio",
            "hora_final",
            "salario",
            "anios_servicio",
            "tipo_contrato",
            "fecha_inicio",
            "fecha_fin",
            "evaluacion_pedagogica",
            "evaluacion_psicologica"
        ]));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $informaciones_laborales_loyola = InformacionLaboral::findOrFail($id);
        $informaciones_laborales_loyola->delete();

        return Redirect::route('informaciones.index');
    }
}
