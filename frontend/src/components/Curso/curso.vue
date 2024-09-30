<template>
    <div>
        <div class="container">
            <!-- <div class="header-cursos">
                <div class="pesquisa-cursos">
                    <div class="input-cursos">
                        <input type="text" placeholder="Procurar curso">
                    </div>
                </div>
            </div> -->
            <h1>Cursos</h1>
            <div class="container-cursos">
                <div class="gridCardVagas">
                    <div class="container-row">
                        <div class="row">
                            <div class="container-item" v-if="items.length">
                                <span v-for="(titulo, index) in titulos" :key="index" class="ttl-row">
                                    <h4>{{ titulo }}</h4>
                                </span>
                                <div class="container-card">
                                    <span class="card" v-for="(item, index) in items" :key="index">
                                        {{ item }}
                                    </span>
                                </div>
                            </div>
                            <div class="nao-vagas" v-else>
                                <img src="../../assets/img/VagaEmprego/nao-vagas.jpg" alt="">
                                <p>No momento não há cursos disponíveis</p>
                            </div>
                        </div>
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
            titulos: [],
            items: [],
        }
    },
    methods: {

    }
}
</script>

<style scoped>
.container-cursos {
    width: 90%;
    height: 50vh;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin: 30px 20%;
    justify-content: space-evenly;
    align-items: center;
}

.header-cursos {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    height: 10vh;
    background-color: #ffffff;
    box-shadow: 0 1px 1px 1px #ccc;
    border-radius: 2px;
}

.pesquisa-cursos {
    display: flex;
    justify-content: center;
    width: 100%;
}

.input-cursos input {
    width: 90%;
    padding: 5px;
    border-radius: 2px 0 0 2px;
    border: 1px solid #ccc;
}

.input-cursos {
    display: flex;
    justify-content: left;
    align-items: center;
    width: 95%;
    background-color: #252F3F;
    border-radius: 2px;
}



h1 {
    font-size: 30px;
    color: #252F3F;
    width: 95%;
    font-weight: 500;
    margin-bottom: 5%;
}

.gridCardVagas {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: left;
    width: 100%;
}

.container-row h4 {
    font-size: 20px;
    margin-bottom: 5px;
}

.row {
    display: flex;
    width: 100%;
    height: 26vh;
    margin-bottom: 5px;
}

.container-item {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
}

.ttl-row {
    width: 100%;
}

.container-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
}

.card {
    width: 33%;
    height: 100%;
    background-color: #F78024;
}

.nao-vagas {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
}

.nao-vagas img {
    width: 20%;
}
</style>