<template>
  <table border="1">
    <tr>
      <td>ID</td>
      <td>Name</td>
      <td>Email</td>
    </tr>
    <tr v-for="user in users" :key="user.id">
      <td>{{ user.id }}</td>
      <td>{{ user.name }}</td>
      <td>{{ user.email }}</td>
    </tr>
  </table>
</template>
<script>
export default {
  name: 'DemoTable',
  props: ['users']
}
</script>