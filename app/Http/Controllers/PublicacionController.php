<?php

namespace App\Http\Controllers;

use App\Models\Publicacion;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class PublicacionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $publicaciones = Publicacion::all();
        return Inertia::render('Publicaciones/Index', ['publicaciones' => $publicaciones]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Publicaiones/Form');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([

            "tipo_publicacion"=> "nullable|max:255",
            "titulo"=>"nullable|max:75",
            "lugar_publicacion"=>"nullable|max:75",
            "fecha" =>"nullable"

        ]);
 
        $publicaciones= new Publicacion();
        $publicaciones-> tipo_publicacion =$request->tipo_publicacion;
        $publicaciones-> titulo =$request->titulo;
        $publicaciones-> lugar_publicacion =$request->lugar_publicacion;
        $publicaciones-> fecha =$request->fecha;
        $publicaciones->save();

        return Redirect::route('publicaciones.index');

    }
    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $publicaciones = Publicacion::find($id);
        return Inertia::render('Publicaciones/Show', ['publicaciones'=> $publicaciones]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $publicaciones = Publicacion::find($id);
        return Inertia::render('Publicaciones/Form', ['publicaciones'=> $publicaciones]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $publicaciones = Publicacion::findOrFail($id);
        $publicaciones->update($request->only([
            "tipo_publicacion",
            "titulo",
            "lugar_publicacion",
            "fecha"
            
        ]));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $publicaciones= Publicacion::findOrFail($id);
        $publicaciones->delete();

        return Redirect::route('publicaciones.index');
    }
}
