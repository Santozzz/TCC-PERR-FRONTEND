<script>
import topHeader from '@/components/ALL/top-header.vue';
import Navbar from '../components/ALL/Navbar.vue'
import headerUser from './../components/Home/headerUser.vue'

export default {
    name: 'index',
    components: {
        topHeader,
        Navbar,
        headerUser,
    }, 
}
</script>

<template>
    <div>
        <topHeader />
        <Navbar/>
        <headerUser/>
    </div>
</template>

<style scoped>

</style>
