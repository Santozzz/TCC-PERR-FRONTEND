<script>
import headerCadastro from '../components/Cadastro/headerCadastro.vue'
import containerPrincipal from '../components/Cadastro/containerPrincipal-Cadastro.vue'

export default {
    name: 'Cadastro',
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
