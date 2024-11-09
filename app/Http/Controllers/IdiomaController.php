<?php

namespace App\Http\Controllers;

use App\Models\Idioma;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class IdiomaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $idiomas = Idioma::all();
        return Inertia::render('Idiomas/Index', ['idiomas' => $idiomas]);


    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Idioma/Form');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            "nombre_idioma"=>"required|max:10",
            "tipo"=> "required|in:Lee,Habla,Escribe",
            "nivel"=> "required|in:Basico,Medio,Avanzado"

        ]);


        $idiomas= new Idioma();
        $idiomas->nombre_idioma = $request->nombre_idioma;
        $idiomas->tipo = $request->tipo;
        $idiomas->nivel = $request->nivel;
        $idiomas->save();

        return Redirect::route('idiomas.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $idiomas = Idioma::find($id);
        return Inertia::render('Idioma/Show', ['idiomas' => $idiomas]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $idiomas = Idioma::find($id);
        return Inertia::render('Idioma/Form', ['idiomas' => $idiomas]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $idiomas = Idioma::findOrFail($id);
        $idiomas->update($request->only([
            "nombre_idioma",
            "tipo",
            "nivel"
        ]));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $idiomas = Idioma::findOrFail($id);
        $idiomas ->delete();

        return Redirect::route('idiomas.index');
    }
}
