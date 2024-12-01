<template>
    <div>
        <Navbar />
        <curValidado />
    </div>
</template>

<script>
import Navbar from '@/components/ALL/Navbar.vue';
import curValidado from '../components/CurriculoValidado/curriculoValidado.vue';

export default {
    name: 'CurriculoValidado',
    components: {
        Navbar,
        curValidado,
    }
}
</script>

<style scoped>

</style>