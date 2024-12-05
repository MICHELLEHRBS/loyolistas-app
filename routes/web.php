<?php


use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Console\Application;
use App\Http\Controllers\DocenteController;
use App\Http\Controllers\ExperienciaController;
use App\Http\Controllers\PersonalAdministrativoController;
use App\Http\Controllers\FormacionController;
use App\Http\Controllers\IdiomaController;
use App\Http\Controllers\PremioController;
use App\Http\Controllers\PublicacionController;
use App\Http\Controllers\ActividadController;
use App\Http\Controllers\AfiliacionController;
use App\Http\Controllers\DiplomadoController;
use App\Http\Controllers\ProfileController;

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

   //Ruta de formulario de experiencia laboral
   Route::get('/experiencias', [ExperienciaController::class, 'index'])->name('experiencias.index');
   Route::get('/experiencias/create', [ExperienciaController::class, 'create'])->name('experiencias.create');
   Route::post('/experiencias', [ExperienciaController::class, 'store'])->name('experiencias.store');

   //Ruta de formulario de Diplomados, cursos, seminarios y talleres
   Route::get('/diplomados/create', [DiplomadoController::class, 'create'])->name('diplomados.create');
   Route::get('/diplomados', [DiplomadoController::class, 'index'])->name('diplomados.index');
   Route::post('/diplomados', [DiplomadoController::class, 'store'])->name('diplomados.store');

   //Ruta de formulario de publicaciones
   Route::get('/publicaciones', [PublicacionController::class, 'index'])->name('publicaciones.index');
   Route::get('/publicaciones/create', [PublicacionController::class, 'create'])->name('publicaciones.create');
   Route::post('/publicaciones', [PublicacionController::class, 'store'])->name('publicaciones.store');
   
   //Ruta de formulario de Actividades y consultaria
   Route::get('/actividades', [ActividadController::class, 'index'])->name('actividades.index');
   Route::get('/actividades/create', [ActividadController::class, 'create'])->name('actividades.create');
   Route::post('/actividades', [ActividadController::class, 'store'])->name('actividades.store');
   
   //Ruta de formulario de premios
   Route::get('/premios', [PremioController::class, 'index'])->name('premios.index');
   Route::get('/premios/create', [PremioController::class, 'create'])->name('premios.create');
   Route::post('/premios', [PremioController::class, 'store'])->name('premios.store');

//Ruta de formulario de afiliaciones
Route::get('/afiliaciones', [AfiliacionController::class, 'index'])->name('afiliaciones.index');
Route::get('/afiliaciones/create', [AfiliacionController::class, 'create'])->name('afiliaciones.create');
Route::post('/afiliaciones', [AfiliacionController::class, 'store'])->name('afiliaciones.store');


});


// Cargar las rutas de autenticación
require __DIR__ . '/auth.php';
