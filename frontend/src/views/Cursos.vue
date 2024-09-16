<template>
    <div>
        <Navbar />
        <Curso />
    </div>
</template>

<script>
import Navbar from '@/components/ALL/Navbar.vue';
import Curso from '@/components/Curso/curso.vue';

export default {
    name: 'Cursos',
    components: {
        Navbar,
        Curso,
    }
}
</script>

<style scoped></style>