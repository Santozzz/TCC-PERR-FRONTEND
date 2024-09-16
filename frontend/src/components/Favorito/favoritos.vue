<template>
    <div>
        <div class="container">
            <div class="container-vagasFav">
                <h3>Vagas favoritas</h3>
                <div class="container-cardVagasFav">
                    <div class="card-vagas">

                    </div>
                </div>
            </div>
            <div class="container-vagasFav">
                <h3>Cursos favoritas bosta</h3>
                <div class="container-cardVagasFav">
                    <div class="card-vagas">

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 30px 20%;
    justify-content: space-evenly;
    align-items: center;
}

.container-vagasFav {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.container-cardVagasFav {
    display: flex;
    align-items: center;
    overflow: hidden;
    width: 95%;
    height: 40vh;
    gap: 20px;
    user-select: none;
    overflow-x: scroll;
    scroll-behavior: smooth;
    padding: 0px 10px;
}

.card-vagas {
    position: relative;
    display: flex;
    flex: 1 1 300px;
    max-width: 280px;
    min-width: 270px;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 70%;
    border-radius: 2px;
    background-color: #fff;
    box-shadow: 0 1px 1px 1px #ccc;
    transition: .3s ease-in-out;
    overflow: hidden;
}

h3 {
    font-size: 20px;
    color: #252F3F;
    width: 95%;
}
</style>