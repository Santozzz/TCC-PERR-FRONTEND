<template>
    <div>
        <NavbarAdm />
        <cadastrarVaga />
    </div>
</template>

<script>
import NavbarAdm from '@/components/ALL/Navbar-adm.vue';
import cadastrarVaga from '@/components/CadastrarVaga/cadastrarVaga.vue';

export default {
    name: 'CadastroVaga',
    components: {
        NavbarAdm,
        cadastrarVaga,
    }
}
</script>

<style scoped>

</style>
