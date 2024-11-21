<script>
import headerCadastro from '../components/CadastroEmpresa/cadastroempresa.vue'
import containerPrincipal from '../components/CadastroEmpresa/cadastroempresa.vue'

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