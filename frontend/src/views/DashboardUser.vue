<template>
  <div>
      <NavbarAdm />
      <dashboardUsuario />
  </div>
</template>

<script>
import NavbarAdm from '@/components/ALL/Navbar-adm.vue';
import dashboardUsuario from '@/components/DashboardUsuario/dashboardUsuario.vue';

export default {
  name: 'DashboardUser',
  components: {
      NavbarAdm,
      dashboardUsuario,
  }
}
</script>

<style scoped>

</style>
