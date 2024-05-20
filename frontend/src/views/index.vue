<script>
import Navbar from '@/components/ALL/Navbar.vue';
import headerUser from './../components/Home/headerUser.vue'

export default {
    name: 'index',
    components: {
        Navbar,
        headerUser,
    }, 
}
</script>

<template>
    <div>
        <Navbar/>
        <headerUser />
    </div>
</template>

<style scoped>

</style>
