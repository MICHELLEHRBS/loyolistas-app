<?php

namespace App\Http\Controllers;

use App\Models\DiplomadoCurso;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
class DiplomadoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $diplomados_cursos_seminarios_talleres = DiplomadoCurso::all();
        return Inertia::render('DiplomadoCurso/Index', ['diplomados'=> $diplomados_cursos_seminarios_talleres]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('DiplomadoCurso/Form');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            "rol"=>"nullable|in:Participante,Expositor",
            "tipo_evento"=> "nullable|in:Diplomado,Curso,Seminario,Taller",
            "titulo"=>"nullable|max:75",
            "institucion"=>"nullable|max:100",
            "lugar_pais"=>"nullable|max:45",
            "fecha_inicio"=>"nullable",
            "fecha_fin"=>"nullable"
            

        ]);

        $diplomados_cursos_seminarios_talleres= new DiplomadoCurso();
        $diplomados_cursos_seminarios_talleres->rol = $request->rol;
        $diplomados_cursos_seminarios_talleres->tipo_evento = $request->tipo_evento;
        $diplomados_cursos_seminarios_talleres->titulo = $request->titulo;
        $diplomados_cursos_seminarios_talleres->institucion = $request-> institucion;
        $diplomados_cursos_seminarios_talleres->lugar_pais = $request-> lugar_pais;
        $diplomados_cursos_seminarios_talleres->fecha_inicio = $request->fecha_inicio;
        $diplomados_cursos_seminarios_talleres->fecha_fin = $request-> fecha_fin;
        $diplomados_cursos_seminarios_talleres->save();

        return Redirect::route('diplomados.index');

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $diplomados_cursos_seminarios_talleres = DiplomadoCurso::find($id);
        return Inertia::render('DiplomadoCurso/Show', ['diplomados'=>$diplomados_cursos_seminarios_talleres]);
    
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $diplomados_cursos_seminarios_talleres = DiplomadoCurso::find($id);
        return Inertia::render('DiplomadoCurso/Form', ['diplomados'=>$diplomados_cursos_seminarios_talleres]);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $diplomados_cursos_seminarios_talleres = DiplomadoCurso::findOrFail($id);
        $diplomados_cursos_seminarios_talleres->update($request->only ([
            "rol",
            "tipo_evento",
            "titulo",
            "institucion",
            "lugar_pais",
            "fecha_inicio",
            "fecha_fin"
        ]));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $diplomados_cursos_seminarios_talleres = DiplomadoCurso::findOrFail($id);
        $diplomados_cursos_seminarios_talleres ->delete();

        return Redirect::route('diplomados.index');
    }
}