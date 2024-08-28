<?php

namespace App\Http\Controllers;

use App\Models\PersonalAdministrativo;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PersonalAdministrativoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {

       $personalesAdministrativos = PersonalAdministrativo::all();
       return Inertia::render('PersonalAdministrativo/Index', [
        'personalAdministrativos' => $personalesAdministrativos]);

        //$query = PersonalAdministrativo::query();

        // Filtrar por búsqueda, si se proporciona
        if ($request->has('search')) {
            $searchTerm = $request->input('search');
            $query->where(function ($q) use ($searchTerm) {
                $q->where('apellido_paterno', 'like', "%{$searchTerm}%")
                    ->orWhere('apellido_materno', 'like', "%{$searchTerm}%");
            });
        }


       // $personalesAdministrativos = $query->select('id', 'nombre', 'apellido_paterno', 'apellido_materno')->get();

        //return Inertia::render('PersonalAdministrativo/Index', [
        //'personalesAdministrativos' => $personalesAdministrativos,
        // ]);
        //return Inertia::render('PersonalAdministrativo/Index', [
          //  'personalAdministrativos' => $personalesAdministrativos
        //]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('PersonalAdministrativo/Form');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $personalesAdministrativos = new PersonalAdministrativo();
        $personalesAdministrativos->nombre = $request->nombre;
        $personalesAdministrativos->apellido_paterno = $request->apellido_paterno;
        $personalesAdministrativos->apellido_materno = $request->apellido_materno;
        $personalesAdministrativos->genero = $request->genero;
        $personalesAdministrativos->estado_civil = $request->estado_civil;
        $personalesAdministrativos->celular = $request->celular;
        $docente->save();

        return Redirect::route('personal_administrativo.index');

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $personal = PersonalAdministrativo::findOrFail($id);
        return Inertia::render(
            'PersonalAdministrativo/Show',
            ['personal' => $personal]
        );
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $personaladministativo = PersonalAdministrativo::findOrFail($id);
        return Inertia::render('PersonalAdministrativo/Form', ['personaladministrativo' => $personaladministativo]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $personaladministativo = PersonalAdministrativo::findOrFail($id);

        $personalesAdministrativos = new PersonalAdministrativo();
        $personalesAdministrativos->nombre = $request->nombre;
        $personalesAdministrativos->apellido_paterno = $request->apellido_paterno;
        $personalesAdministrativos->apellido_materno = $request->apellido_materno;
        $personalesAdministrativos->genero = $request->genero;
        $personalesAdministrativos->estado_civil = $request->estado_civil;
        $personalesAdministrativos->celular = $request->celular;
        $docente->save();

        return Redirect::route('personal_administrativo.index');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $personaladministativo = PersonalAdministrativo::findOrFail($id);
        $personaladministativo->delete();

        return redirect()->route('personal_administrativo.index');
    }
}
