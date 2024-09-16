<template>
    <div>
        <Navbar />
        <Fav />
    </div>
</template>

<script>
import Navbar from '@/components/ALL/Navbar.vue';
import Fav from '@/components/Favorito/favoritos.vue';

export default {
    name: 'Favoritos',
    components: {
        Navbar,
        Fav,
    }
}
</script>

<style scoped></style>