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

        

        if ($request->has('search')) {
            $searchTerm = $request->input('search');
            $query->where(function ($q) use ($searchTerm) {
                $q->where('apellido_paterno', 'like', "%{$searchTerm}%")
                    ->orWhere('apellido_materno', 'like', "%{$searchTerm}%");
            });
        }
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Docentes/Form');
        //return Inertia::render('Docentes/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            "nombre"=>"required|max:75",
            "apellido_paterno"=>"required|max:35",
            "apellido_materno"=>"required|max:35",
            "genero"=>"required|in:Masculino,Femenino",
            "estado_civil"=> "required|in:Soltero/a,Casado/a,Viudo/a,Divorciado/a",
            "apellido_casada"=>"nullable|max:35",
            "ci"=>"required|max:9",
            "expedido_ci"=>"required|in:OR,CB,SC,LP,CH,PA,BN,TJ,PT",
            "ci_extranjero"=> "nullable|unique:docentes,ci_extranjero",
            "pasaporte"=>"nullable|max:45",
            "nacimiento"=>"required",
            "celular"=>"required|max:8",
            "telefono"=>"nullable|max:9",
            "correo"=>"required|max:35",
            "cua"=>"required|max:4",
            "seguro"=>"required|in:Caja Nacional de Salud (CNS),Caja de Salud de Caminos y RA,Caja Cordes,Caja Petrolera de Salud,Seguro Integral de Salud SINEC,Corporación de Seguro Social Militar (Cossmil),Otros,Ninguno"
        ]);

        $docente= new Docente();
        $docente->nombre = $request->nombre;
        $docente->apellido_paterno = $request->apellido_paterno;
        $docente->apellido_materno = $request->apellido_materno;
        $docente->genero = $request-> genero;
        $docente->estado_civil = $request->estado_civil;
        $docente->apellido_casada = $request->apellido_casada;
        $docente->ci = $request->ci;
        $docente->expedido_ci = $request->expedido_ci;
        $docente->pasaporte = $request->pasaporte;
        $docente->nacimiento = $request->nacimiento;
        $docente->celular = $request->celular;
        $docente->telefono = $request->telefono;
        $docente->correo = $request->correo;
        $docente->cua = $request->cua;
        $docente->seguro = $request->seguro;
        $docente->save();

        return Redirect::route('docentes.index');

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
        $docente = Docente::findOrFail($id);
        $docente->update($request->only([
'nombre',
            'apellido_paterno',
            'apellido_materno',
            'genero',
            'estado_civil',
            'ci', 'expedido_ci',
            'ci_extranjero', 'pasaporte',
            'nacimiento',
            'celular', 'telefono',
            'correo', 'cua',
            'seguro'
        ]));

        return response()->json($docente);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $docente = Docente::findOrFail($id);
        $docente->delete();

        return Redirect::route('docentes.index');
    }
}
