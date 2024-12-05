<?php

namespace App\Http\Controllers;

use App\Models\ActividadConsultoria;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ActividadController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $actividades_consultorias_investigaciones = ActividadConsultoria::all();
        return Inertia::render('Actividades/Index', ['actividades'=> $actividades_consultorias_investigaciones]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Actividades/Form');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            "titulo"=>"nullable|max:45",
            "organismo"=> "nullable|max:50",
            "fecha"=>"nullable"
        ]);

        $actividades_consultorias_investigaciones= new ActividadConsultoria();
        $actividades_consultorias_investigaciones->tituli=$request->titulo;
        $actividades_consultorias_investigaciones->organismo->$request->organismo;
        $actividades_consultorias_investigaciones->fecha->$request->fecha;

        return Redirect::route('actividades.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $actividades_consultorias_investigaciones=ActividadConsultoria::find($id);
        return inertia::render('Actividades/Show',['activividades'=>$actividades_consultorias_investigaciones]);

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $actividades_consultorias_investigaciones=ActividadConsultoria::find($id);
        return inertia::render('Actividades/Form',['$activividades'=>$actividades_consultorias_investigaciones]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $actividades_consultorias_investigaciones=ActividadConsultoria::findOrFail($id);
        $actividades_consultorias_investigaciones-> update($request->only([
            "titulo",
            "organismo",
            "fecha"

        ]));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        
        $actividades_consultorias_investigaciones = ActividadConsultoria::findOrFail($id);
        $actividades_consultorias_investigaciones ->delete();

        return Redirect::route('actividades.index');
    }
}
