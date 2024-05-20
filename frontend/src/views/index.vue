<script>
import Navbar from '@/components/ALL/Navbar.vue';
import grid from './../components/Home/grid.vue'

export default {
    name: 'index',
    components: {
        Navbar,
        grid,
    }, 
}
</script>

<template>
    <div>
        <Navbar/>
        <grid />
    </div>
</template>

<style scoped>

</style>
