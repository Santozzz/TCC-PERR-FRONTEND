<template>
    <div>
        <Navbar />
        <Conta />
    </div>
</template>

<script>
import Navbar from '@/components/ALL/Navbar.vue';
import Conta from '@/components/MinhaConta/Conta.vue';

export default {
    name: 'Cursos',
    components: {
        Navbar,
        Conta,
    }
}
</script>

<style scoped></style>