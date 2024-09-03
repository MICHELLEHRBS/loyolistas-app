<?php

namespace App\Http\Controllers;

use App\Models\Docente;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class DocenteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {

        $docentes = Docente::all();
        return Inertia::render('Docentes/Index', ['docentes' => $docentes]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Docentes/Form');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $docente = new Docente();
        $docente->nombre = $request->nombre;
        $docente->apellido_paterno = $request->apellido_paterno;
        $docente->apellido_materno = $request->apellido_materno;
        $docente->genero = $request->genero;
        $docente->estado_civil = $request->estado_civil;
        $docente->ci = $request->ci;
        $docente->expedido_ci = $request->expedido_ci;
        $docente->ci_extranjero = $request->ci_extranjero;
        $docente->pasaporte = $request->pasaporte;
        $docente->nacimiento = $request->nacimiento;
        $docente->celular = $request->celular;
        $docente->telefono = $request->telefono;
        $docente->correo = $request->correo;
        $docente->cua = $request->cua;
        $docente->seguro = $request->seguro;
        $docente->save();


        return Redirect::route('docente.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $docente = Docente::find($id);
        return Inertia::render('Docentes/Show', ['docente' => $docente]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $docente = Docente::findOrFail($id);
        return Inertia::render('Docentes/Form', ['docente' => $docente]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $docente = Docente::find($id);
        $docente->nombre = $request->nombre;
        $docente->apellido_paterno = $request->apellido_paterno;
        $docente->apellido_materno = $request->apellido_materno;
        $docente->genero = $request->genero;
        $docente->estado_civil = $request->estado_civil;
        $docente->ci = $request->ci;
        $docente->expedido_ci = $request->expedido_ci;
        $docente->ci_extranjero = $request->ci_extranjero;
        $docente->pasaporte = $request->pasaporte;
        $docente->nacimiento = $request->nacimiento;
        $docente->celular = $request->celular;
        $docente->telefono = $request->telefono;
        $docente->correo = $request->correo;
        $docente->cua = $request->cua;
        $docente->seguro = $request->seguro;
        $docente->save();


        return Redirect::route('docente.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $docente = Docente::find($id);
        $docente->delete();

        return Redirect::route('docentes.index');
    }
}
