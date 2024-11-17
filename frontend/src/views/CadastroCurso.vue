<template>
    <div>
        <NavbarAdm />
        <cadastrarCurso />
    </div>
</template>

<script>
import NavbarAdm from '@/components/ALL/Navbar-adm.vue';
import cadastrarCurso from '@/components/CadastrarCurso/cadastrarCurso.vue';

export default {
    name: 'CadastroCurso',
    components: {
        NavbarAdm,
        cadastrarCurso,
    }
}
</script>

<style scoped>

</style>
