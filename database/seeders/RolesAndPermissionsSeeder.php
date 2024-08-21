<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RolesAndPermissionsSeeder extends Seeder
{
    public function run()
    {
        // Crear roles
        $adminRole = Role::create(['name' => 'admin']);
        $docenteRole = Role::create(['name' => 'docente']);

        // Crear permisos
        $manageUsersPermission = Permission::create(['name' => 'manage users']);
        $viewDashboardPermission = Permission::create(['name' => 'view dashboard']);
        $editDocumentsPermission = Permission::create(['name' => 'edit documents']);

        // Asignar permisos a roles
        $adminRole->givePermissionTo([$manageUsersPermission, $viewDashboardPermission, $editDocumentsPermission]);
        $docenteRole->givePermissionTo([$viewDashboardPermission, $editDocumentsPermission]);

        // Asignar roles a usuarios si existen
        $admin = \App\Models\User::find(1); // Asegúrate de que el usuario con ID 1 existe
        if ($admin) {
            $admin->assignRole($adminRole);
        } else {
            $this->command->error('User with ID 1 not found.');
        }

        $docente = \App\Models\User::find(2); // Asegúrate de que el usuario con ID 2 existe
        if ($docente) {
            $docente->assignRole($docenteRole);
        } else {
            $this->command->error('User with ID 2 not found.');
        }
    }
}
