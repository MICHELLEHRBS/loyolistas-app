<?php

namespace App\Http\Controllers;

use App\Models\ExperienciaLaboral;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ExperienciaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $experiencias_laborales = ExperienciaLaboral::all();
        return Inertia::render('ExperienciaLaboral/Index', ['experiencias'=> $experiencias_laborales]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('ExperienciaLaboral/Form');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            "nombre"=>"required|max:70",
            "cargo"=>"required|max:70",
            "fecha_inicio"=>"required",
            "fecha_fin"=>"required",

        ]);

        $experiencias_laborales= new ExperienciaLaboral();
        $experiencias_laborales->nombre = $request->nombre;
        $experiencias_laborales->cargo = $request->cargo;
        $experiencias_laborales->fecha_inicio = $request->fecha_inicio;
        $experiencias_laborales->fecha_fin = $request-> fecha_fin;
        $experiencias_laborales->save();

        return Redirect::route('experiencias.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $experiencias_laborales = ExperienciaLaboral::find($id);
        return Inertia::render('ExperienciaLaboral/Show', ['experiencias'=> $experiencias_laborales]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $experiencias_laborales = ExperienciaLaboral::find($id);
        return Inertia::render('ExperienciaLaboral/Form', ['experiencias'=> $experiencias_laborales]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $experiencias_laborales = ExperienciaLaboral::findOrFail($id);
        $experiencias_laborales->update($request->only([
            "nombre",
            "cargo",
            "fecha_inicio",
            "fecha_fin"
        ]));

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $experiencias_laborales = ExperienciaLaboral::findOrFail($id);
        $experiencias_laborales->delete();

        return Redirect::route('experiencias.index');
    }
}
