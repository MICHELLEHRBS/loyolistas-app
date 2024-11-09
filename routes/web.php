<?php


use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Console\Application;
use App\Http\Controllers\DocenteController;
use App\Http\Controllers\PersonalAdministrativoController;
use App\Http\Controllers\FormacionController;
use App\Http\Controllers\IdiomaController;

// Ruta principal de registro y acceso
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        //'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
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
});


// Rutas de docentes
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/docentes', [DocenteController::class, 'index'])->name('docentes.index');
    Route::get('/docentes/create', [DocenteController::class, 'create'])->name('docentes.create');
    Route::post('/docentes', [DocenteController::class, 'store'])->name('docentes.store');
    Route::get('/docentes/{id}/edit', [DocenteController::class, 'edit'])->name('docentes.edit');
    Route::put('/docentes/{id}', [DocenteController::class, 'update'])->name('docentes.update');
    Route::delete('/docentes/{id}', [DocenteController::class, 'destroy'])->name('docentes.destroy');

    // Rutas de Personal Administrativo
    Route::get('/personal_administrativo', [PersonalAdministrativoController::class, 'index'])->name('personal_administrativo.index');
    Route::get('/personal_administrativo/create', [PersonalAdministrativoController::class, 'create'])->name('personal_administrativo.create');
    Route::post('/personal_administrativo', [PersonalAdministrativoController::class, 'store'])->name('personal_administrativo.store');
    Route::get('/personal_administrativo/{id}/edit', [PersonalAdministrativoController::class, 'edit'])->name('personal_administrativo.edit');
    Route::put('/personal_administrativo/{id}', [PersonalAdministrativoController::class, 'update'])->name('personal_administrativo.update');
    Route::delete('/personal_administrativo/{id}', [PersonalAdministrativoController::class, 'destroy'])->name('personal_administrativo.destroy');

    //Ruta de formulario de formacion academica
    Route::get('/formaciones', [FormacionController::class, 'index'])->name('formaciones.index');
    Route::get('/formaciones/create', [FormacionController::class, 'create'])->name('formaciones.create');
    Route::post('/formaciones', [FormacionController::class, 'store'])->name('formaciones.store');

   //Ruta de formulario de idioma
   Route::get('/idiomas', [IdiomaController::class, 'index'])->name('idiomas.index');
   Route::get('/idiomas/create', [IdiomaController::class, 'create'])->name('idiomas.create');
   Route::post('/idiomas', [IdiomaController::class, 'store'])->name('idiomas.store');

});


// Cargar las rutas de autenticación
require __DIR__ . '/auth.php';
