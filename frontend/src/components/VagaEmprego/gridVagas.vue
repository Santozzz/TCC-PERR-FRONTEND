<template>
    <div>
        <div class="container">
            <div class="headerVagas">

            </div>
            <div class="container-vagas">
                <div class="buscaRapida">
                    <div class="cardAreas">
                        
                    </div>
                    <div class="cardAreas">

                    </div>
                    <div class="cardAreas">

                    </div>
                    <div class="cardAreas">

                    </div>
                </div>
                <h4>Procure por vagas de emprego aqui !</h4>
                <div class="gridCardVagas">
                    <div class="container-row">
                        <h4>[ titulo da linha ]</h4>
                        <div class="row">
                            <div v-if="items.length">
                                <span class="items" v-for="(item, index) in items" :key="index">
                                    {{ item }}
                                </span>
                            </div>
                            <div class="nao-vagas" v-else>
                                <img src="../../assets/img/nao-vagas.jpg" alt="">
                                <p>No momento não há vagas disponíveis</p>
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
            items: [],
        }
    },
    methods: {

    }
}
</script>

<style scoped>
    .container{
        display: flex;
        flex-direction: column;
        width: 80%;
        margin: 30px 20%;
        justify-content: space-evenly;
        align-items: center;
    }
    .headerVagas{
        width: 90%;
        height: 10vh;
        background-color: #ffffff;
        box-shadow: 0 1px 1px 1px #ccc;
        border-radius: 10px;
    }
    .container-vagas{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 90%;

    }
    .container-vagas h4{
        width: 99%;
        font-size: 25px;
        font-weight: 500;
        margin-bottom: 50px;
        color: #F78024;
    }
    .buscaRapida{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 20vh;
        width: 100%;
    }
    .cardAreas{
        width: 24%;
        height: 75%;
        background-color: #ffffff;
        box-shadow: 0 1px 1px 1px #ccc;
        border-radius: 5px;
    }
    .gridCardVagas{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: left;
        width: 100%;
    }
    .container-row h4{
        font-size: 19px;
        margin-bottom: 5px;
    }
    .row{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        height: 23vh;
        margin-bottom: 5px;
    }
    .nao-vagas img{
        width: 100px;
    }
</style>