<template>
    <div>
        <Navbar />
        <formCurriculo />
    </div>
</template>

<script>
import Navbar from '@/components/ALL/Navbar.vue';
import formCurriculo from '../components/SeuCurriculo/formularioCurriculo.vue';

export default {
    name: 'SeuCurriculo',
    components: {
        Navbar,
        formCurriculo,
    }
}
</script>

<style scoped>

</style>