<template>
    <div>
        <Navbar />
        <gridNotify />
    </div>
</template>

<script>
import Navbar from '@/components/ALL/Navbar.vue';
import gridNotify from '@/components/Notificacoes/gridNotify.vue';

export default {
    name: 'Notificacoes',
    components: {
        Navbar,
        gridNotify,
    }
}
</script>

<style scoped>

</style>