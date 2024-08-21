<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Role;
use App\Models\Permission;
use App\Models\User;

class RolePermissionController extends Controller
{
    public function index()
    {
        // Obtener todos los roles y permisos para pasar a la vista
        $roles = Role::all();
        $permissions = Permission::all();

        return Inertia::render('RolesPermissions/Index', [
            'roles' => $roles,
            'permissions' => $permissions,
        ]);
    }

    public function createRole(Request $request)
    {
        // Validar y crear rol
        $request->validate(['name' => 'required|string|max:255']);
        Role::create(['name' => $request->name]);

        return redirect()->route('roles_permissions.index')->with('success', 'Role created successfully.');
    }

    public function createPermission(Request $request)
    {
        // Validar y crear permiso
        $request->validate(['name' => 'required|string|max:255']);
        Permission::create(['name' => $request->name]);

        return redirect()->route('roles_permissions.index')->with('success', 'Permission created successfully.');
    }

    public function assignRole(Request $request)
    {
        // Validar y asignar rol a usuario
        $request->validate(['user_id' => 'required|exists:users,id', 'role_id' => 'required|exists:roles,id']);
        $user = User::find($request->user_id);
        $user->assignRole($request->role_id);

        return redirect()->route('roles_permissions.index')->with('success', 'Role assigned to user successfully.');
    }

    public function assignPermission(Request $request)
    {
        // Validar y asignar permiso a rol
        $request->validate(['role_id' => 'required|exists:roles,id', 'permission_id' => 'required|exists:permissions,id']);
        $role = Role::find($request->role_id);
        $role->givePermissionTo($request->permission_id);

        return redirect()->route('roles_permissions.index')->with('success', 'Permission assigned to role successfully.');
    }
}

