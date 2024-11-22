<script>
import headerCadastro from '../components/HomeEmpresas/.vue'
import containerPrincipal from '../components/HomeEmpresas/homeempresas.vue'

export default {
    name: 'Cadastrodaempresa',
    components: {
        headerCadastro,
        containerPrincipal,
    }, 
}
</script>

<template>
    <div>
        <headerCadastro />
        <containerPrincipal />
    </div>
</template>

<style scoped>

</style>