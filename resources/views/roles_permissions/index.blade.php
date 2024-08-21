<template>
    <div>
      <h1>Roles and Permissions</h1>

      <!-- Mensajes de éxito -->
      <div v-if="successMessage" class="alert alert-success">{{ successMessage }}</div>

      <!-- Formulario para crear un rol -->
      <form @submit.prevent="createRole">
        <div>
          <label for="role">Create Role:</label>
          <input type="text" v-model="newRole" id="role" required>
        </div>
        <button type="submit">Create Role</button>
      </form>

      <!-- Formulario para crear un permiso -->
      <form @submit.prevent="createPermission" class="mt-4">
        <div>
          <label for="permission">Create Permission:</label>
          <input type="text" v-model="newPermission" id="permission" required>
        </div>
        <button type="submit">Create Permission</button>
      </form>

      <!-- Formulario para asignar rol a usuario -->
      <form @submit.prevent="assignRole" class="mt-4">
        <div>
          <label for="user">Assign Role to User:</label>
          <select v-model="selectedUser">
            <option v-for="user in users" :key="user.id" :value="user.id">{{ user.name }}</option>
          </select>
        </div>
        <div>
          <label for="role">Select Role:</label>
          <select v-model="selectedRole">
            <option v-for="role in roles" :key="role.id" :value="role.id">{{ role.name }}</option>
          </select>
        </div>
        <button type="submit">Assign Role</button>
      </form>

      <!-- Formulario para asignar permiso a rol -->
      <form @submit.prevent="assignPermission" class="mt-4">
        <div>
          <label for="role">Assign Permission to Role:</label>
          <select v-model="selectedRoleForPermission">
            <option v-for="role in roles" :key="role.id" :value="role.id">{{ role.name }}</option>
          </select>
        </div>
        <div>
          <label for="permission">Select Permission:</label>
          <select v-model="selectedPermission">
            <option v-for="permission in permissions" :key="permission.id" :value="permission.id">{{ permission.name }}</option>
          </select>
        </div>
        <button type="submit">Assign Permission</button>
      </form>
    </div>
  </template>

  <script>
  import { ref } from 'vue';
  import { usePage } from '@inertiajs/inertia-vue3';

  export default {
    setup() {
      const { props } = usePage();
      const roles = ref(props.roles);
      const permissions = ref(props.permissions);
      const users = ref(props.users || []);
      const newRole = ref('');
      const newPermission = ref('');
      const selectedUser = ref(null);
      const selectedRole = ref(null);
      const selectedRoleForPermission = ref(null);
      const selectedPermission = ref(null);
      const successMessage = ref('');

      const createRole = () => {
        // Implement API call to create role
      };

      const createPermission = () => {
        // Implement API call to create permission
      };

      const assignRole = () => {
        // Implement API call to assign role
      };

      const assignPermission = () => {
        // Implement API call to assign permission
      };

      return {
        roles,
        permissions,
        users,
        newRole,
        newPermission,
        selectedUser,
        selectedRole,
        selectedRoleForPermission,
        selectedPermission,
        successMessage,
        createRole,
        createPermission,
        assignRole,
        assignPermission
      };
    }
  };
  </script>

  <style scoped>
  /* Añade estilos aquí si es necesario */
  </style>
