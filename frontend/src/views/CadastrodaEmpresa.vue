<script>
import headerCadastro from '../components/Cadastro/headerCadastro.vue'
import containerPrincipal from '../components/CadastroEmpresa/cadastroempresa.vue'

export default {
    name: 'Cadastro',
    components: {
        
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