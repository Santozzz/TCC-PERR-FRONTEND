<script>
import headerCadastro from '../components/headerCadastro.vue'
import containerPrincipal from '../components/containerPrincipal-Cadastro.vue'

export default {
    name: 'Cadastro',
    components: {
        headerCadastro,
        containerPrincipal
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
