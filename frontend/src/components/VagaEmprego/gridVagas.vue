<template>
    <div>
        <div class="container">
            <div class="headerVagas">
                <div class="container-pesquisa">
                    <div class="input-search">
                        <input type="text" placeholder="Procurar vaga de emprego">
                        <div class="container-icon">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>
                </div>
                <div class="filter">
                    <button>Filtrar</button>
                </div>
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
                                <div class="img"></div>
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
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 90%;
        height: 10vh;
        background-color: #ffffff;
        box-shadow: 0 1px 1px 1px #ccc;
        border-radius: 10px;
    }
    .container-pesquisa{
        display: flex;
        justify-content: center;
        width: 90%;
    }
    .input-search{
        display: flex;
        justify-content: left;
        align-items: center;
        width: 95%;
        background-color: #252F3F;
        border-radius: 5px;
        
    }
    .input-search input{
        width: 90%;
        padding: 5px;
        border-radius: 5px 0 0 5px;
        border: 1px solid #ccc;
    }
    .input-search input:focus{
        outline: none;
    }
    .input-search .container-icon{
        width: 10%;
        display: flex;
        justify-content: center;
    }
    .input-search i{
        color: #ffffff;
    }
    .filter{
        display: flex;
        justify-content: left;
        width: 10%;
        height: 43%;
    }
    .filter button{
        width: 80%;
        border: 1px solid #ccc;
        background-color: #f9f9f9;
        border-radius: 5px;
        font-size: 15px;
        cursor: pointer;
        height: 100%;
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
        height: 22vh;
        width: 100%;
    }
    .cardAreas{
        width: 24%;
        height: 75%;
        background-color: #ffffff;
        box-shadow: 0 1px 1px 1px #ccc;
        border-radius: 5px;
        cursor: pointer;
        transition: .3s;
    }
    .cardAreas:active{
        transform: scale(.98);
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
    .img{
        background-image: url(../../assets/img/VagaEmprego/nao-vagas.jpg);
        background-position: center;
        background-size: cover;
        width: 200px;
        height: 200px;
    }
    .nao-vagas{
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        justify-content: center;
    }
</style>