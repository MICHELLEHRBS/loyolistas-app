<?php

use App\Http\Controllers\DocenteController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Foundation\Application;

// Ruta raíz redirige a la lista de docentes
Route::get('/', function () {
    return redirect()->route('docentes.index');
});

// Ruta para la vista del dashboard
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Agrupación de rutas protegidas por autenticación
Route::middleware(['auth', 'verified'])->group(function () {

    // Rutas de perfil del usuario
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Rutas de docentes
    Route::get('/docentes', [DocenteController::class, 'index'])->name('docentes.index');
    Route::get('/docentes/create', [DocenteController::class, 'create'])->name('docentes.create');
    Route::post('/docentes', [DocenteController::class, 'store'])->name('docentes.store');
    Route::get('/docentes/{id}/edit', [DocenteController::class, 'edit'])->name('docentes.edit');
    Route::put('/docentes/{id}', [DocenteController::class, 'update'])->name('docentes.update');
    Route::delete('/docentes/{id}', [DocenteController::class, 'destroy'])->name('docentes.destroy');
});

// Cargar las rutas de autenticación
require __DIR__.'/auth.php';
