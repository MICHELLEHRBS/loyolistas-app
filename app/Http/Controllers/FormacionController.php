<?php

namespace App\Http\Controllers;

use App\Models\FormacionAcademica;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;


class FormacionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $formaciones_academicas = FormacionAcademica::all();
        return Inertia::render('FormacionAcademica/Index', ['formaciones'=> $formaciones_academicas]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('FormacionAcademica/Form');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            "institucion"=>"required|max:100",
            "titulo"=>"required|max:15",
            "fecha_inicio"=>"required",
            "fecha_egreso"=>"required",
            "grado"=> "required|in:Normalista,Licenciado,Ingeniero,Arquitecto,Magister,Doctor",
            "especialidad"=>"nullable|max:50"

        ]);

        $formaciones_academicas= new FormacionAcademica();
        $formaciones_academicas->institucion = $request->institucion;
        $formaciones_academicas->titulo = $request->titulo;
        $formaciones_academicas->fecha_inicio = $request->fecha_inicio;
        $formaciones_academicas->fecha_egreso = $request-> fecha_egreso;
        $formaciones_academicas->grado = $request->grado;
        $formaciones_academicas->especialidad = $request->especialidad;
        $formaciones_academicas->save();

        return Redirect::route('formaciones.index');

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $formaciones_academicas = FormacionAcademica::find($id);
        return Inertia::render('FormacionAcademica/Show', ['formaciones' => $formaciones_academicas]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $formaciones_academicas = FormacionAcademica::find($id);
        return Inertia::render('FormacionAcademica/Form', ['formaciones' => $formaciones_academicas]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $formaciones_academicas = FormacionAcademica::findOrFail($id);
        $formaciones_academicas->update($request->only([
            "institucion",
            "titulo",
            "fecha_inicio",
            "fecha_egreso",
            "grado",
            "especialidad"
        ]));

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $formaciones_academicas = FormacionAcademica::findOrFail($id);
        $formaciones_academicas->delete();

        return Redirect::route('formaciones.index');
    }
}
