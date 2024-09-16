<template>
    <div>
        <Navbar />
        <Colab />
    </div>
</template>

<script>
import Navbar from '@/components/ALL/Navbar.vue';
import Colab from '@/components/Colaboradores/colaboradores.vue';

export default {
    name: 'Cursos',
    components: {
        Navbar,
        Colab,
    }
}
</script>

<style scoped></style>