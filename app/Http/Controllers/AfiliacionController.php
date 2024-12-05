<?php

namespace App\Http\Controllers;

use App\Models\AfiliacionInstitucion;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class AfiliacionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $afiliaciones_instituciones_asociados = AfiliacionInstitucion::all();
        return Inertia::render('Afiliciaciones/Index', ['afiliaciones'=> $afiliaciones_instituciones_asociados]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Afiliaciones/Form');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            "institucion"=>"nullable|max:50",
            "condicion"=>"nullable|max:45",
            "fecha"=>"nullable"
            

        ]);

        $afiliaciones_instituciones_asociados= new AfiliacionInstitucion();
        $afiliaciones_instituciones_asociados->institucion = $request-> institucion;
        $afiliaciones_instituciones_asociados->condicion = $request-> condicion;
        $afiliaciones_instituciones_asociados->fecha_= $request->fecha;
        $afiliaciones_instituciones_asociados->save();

        return Redirect::route('afiliaciones.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $afiliaciones_instituciones_asociados = AfiliacionInstitucion::find($id);
        return Inertia::render('Afiliaciones/Show', ['afiliaiciones'=>$afiliaciones_instituciones_asociados]);
    
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $afiliaciones_instituciones_asociados = AfiliacionInstitucion::find($id);
        return Inertia::render('Afiliaciones/Form', ['afiliaciones'=>$afiliaciones_instituciones_asociados]);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $afiliaciones_instituciones_asociados = AfiliacionInstitucion::findOrFail($id);
        $afiliaciones_instituciones_asociados->update($request->only ([
            "institucion",
            "condicion",
            "fecha"
        ]));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $afiliaciones_instituciones_asociados = AfiliacionInstitucion::findOrFail($id);
        $afiliaciones_instituciones_asociados ->delete();

        return Redirect::route('afiliaciones.index');
    }
}
