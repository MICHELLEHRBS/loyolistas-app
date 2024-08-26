<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RolesAndPermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Resetear cache de roles y permisos
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        // Crear permisos
        Permission::create(['name' => 'manage users']);
        Permission::create(['name' => 'edit articles']);
        Permission::create(['name' => 'delete articles']);
        Permission::create(['name' => 'publish articles']);

        // Crear roles y asignar permisos
        $role = Role::create(['name' => 'admin']);
        $role->givePermissionTo('manage users');

        $role = Role::create(['name' => 'docente']);
        $role->givePermissionTo(['edit articles', 'publish articles']);
    }
}
