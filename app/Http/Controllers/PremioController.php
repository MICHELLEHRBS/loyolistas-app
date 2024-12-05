<?php

namespace App\Http\Controllers;

use App\Models\PremioDistincion;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class PremioController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $premios_distinciones = PremioDistincion::all();
        return Inertia::render('Premios/Index', ['premios'=> $premios_distinciones]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Premios/Form');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            "tipo"=> "nullable|in:Premio,Distincion",
            "titulo"=>"nullable|max50",
            "institucion"=>"nullable|max:100",
            "lugar"=>"nullable|max:45",
            "fecha"=>"nullable"
            
        ]);

        $premios_distinciones= new PremioDistincion();
        $premios_distinciones->tipo = $request->tipo;
        $premios_distinciones->titulo = $request->titulo;
        $premios_distinciones->institucion = $request-> institucion;
        $premios_distinciones->lugar = $request-> lugar;
        $premios_distinciones->fecha = $request->fecha;
        $premios_distinciones->save();

        return Redirect::route('premios.index');
        
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $premios_distinciones = PremioDistincion::find($id);
        return Inertia::render('Premios/Show', ['premios'=>$premios_distinciones]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $premios_distinciones = PremioDistincion::find($id);
        return Inertia::render('Premios/Form', ['premios'=>$premios_distinciones]);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $premios_distinciones = PremioDistincion::findOrFail($id);
        $premios_distinciones->update($request->only ([
            "tipo",
            "titulo",
            "institucion",
            "lugar",
            "fecha"
            
        ]));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $premios_distinciones = PremioDistincion::findOrFail($id);
        $premios_distinciones ->delete();

        return Redirect::route('premios.index');
    }
}
