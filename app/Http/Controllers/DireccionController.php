<?php

namespace App\Http\Controllers;

use App\Models\Direccion;
use Illuminate\Http\Request;

class DireccionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $direccion = Direccion::create($request->only([
            'domicilio',
            'zona',
            'Municipio',
            'numero_casa_referencia',
            'tipo_vivienda',
            'docente_id'
        ]));

        return response()->json($direccion);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $direccion = Direccion::findOrFail($id);
        $direccion->update($request->only([
            'domicilio',
            'zona',
            'Municipio',
            'numero_casa_referencia',
            'tipo_vivienda'
        ]));

        return response()->json($direccion);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
