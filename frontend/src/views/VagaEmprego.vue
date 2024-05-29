<template>
    <div>
        <Navbar />
        <gridVagas />
    </div>
</template>

<script>
import Navbar from '@/components/ALL/Navbar.vue';
import gridVagas from '@/components/VagaEmprego/gridVagas.vue';

export default {
    name: 'VagaEmprego',
    components: {
        Navbar,
        gridVagas,
    }
}
</script>

<style scoped>

</style>