<template>
    <div>
        <div class="container">
            <h4 class="ttl">Cursos</h4>
            <div class="container-cursos">
                <div class="gridCardCursos">
                    <div class="row">
                        <!-- Verifica se há cursos diretamente com cards_cursos -->
                        <div class="container-item" v-if="cards_cursos.length">
                            <span class="card" v-for="(card, index) in cards_cursos" :key="index">
                                <div class="ttl-card">
                                    <h2>{{ card.ttl }}</h2>
                                </div>
                                <div class="descricao">
                                    <p>{{ card.descricao }}</p>
                                </div>
                                <div class="content-btn">
                                    <button @click="openModal(card)">Ver curso</button>
                                    <button>Favoritar</button>
                                </div>
                            </span>

                            <!-- Modal para detalhes do curso -->
                            <div :class="{ 'container-modal': true, 'modalOpen': showModal }">
                                <div class="ttl">
                                    <p>Informações</p>
                                    <div @click="closeModal" class="xis">
                                        <i class="fa-solid fa-x"></i>
                                    </div>
                                </div>
                                <div class="row-modal" v-if="selectedCard">
                                    <div class="col">
                                        <img src="../../assets/img/VagaEmprego/img-vaga.jpg" alt="Imagem do curso">
                                    </div>
                                    <div class="col">
                                        <div class="infos">
                                            <div class="ttl-modal">
                                                <h2>{{ selectedCard.ttl }}</h2>
                                            </div>
                                            <div class="basic-infos">
                                                <div class="info">
                                                    <p>{{ selectedCard.duracao }}</p>
                                                </div>
                                                <div class="info">
                                                    <p>{{ selectedCard.local }}</p>
                                                </div>
                                            </div>
                                            <div class="descricao-modal">
                                                <p>{{ selectedCard.descricao }}</p>
                                            </div>
                                            <div class="content-btn">
                                                <a :href="selectedCard.link" target="_blank" rel="noopener noreferrer">Ver curso</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Mostra mensagem quando não houver cursos -->
                        <div class="nao-cursos" v-else>
                            <img src="../../assets/img/VagaEmprego/nao-vagas.jpg" alt="Imagem sem cursos">
                            <p>No momento não há cursos disponíveis</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            cards_cursos: [],
            showModal: false,
            selectedCard: null,
        };
    },
    methods: {
        async getCursos() {
            try {
                // Faz a requisição GET para obter os cursos
                const response = await axios.get('http://localhost:3000/cursos');
                this.cards_cursos = response.data;
            } catch (error) {
                console.error('Erro ao buscar cursos:', error);
            }
        },
        openModal(card) {
            this.selectedCard = card;
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
            this.selectedCard = null;
        },
    },
    mounted() {
        this.getCursos();
    }
};
</script>

<style scoped>
.ttl{
    width: 100%;
    text-align: left;
    font-size: 25px;
    font-weight: 500;
    color: #252F3F;
}

.nao-cursos{
    width: 100%;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.nao-cursos img{
    width: 400px;
}
/* Adicione seu estilo aqui */
.container-modal {
    display: none; /* Inicialmente oculto */
}
.modalOpen {
    display: block; /* Exibe o modal quando está aberto */
}

.container-modal{
    flex-direction: column;
    justify-content: start;
    align-items: center;
    z-index: 999;
    position: fixed;
    width: 50vw;
    height: 60vh;
    left: 35%;
    top: 24%;
    background-color: #FFF;
    box-shadow: 0px 0px 20000px 20000px #0000003f;
    border-radius: 5px;
    display: none;
}

.container-modal.modalOpen{
    display: flex;
}

.ttl{
    width: 90%;
    height: 15%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.xis{
    cursor: pointer;
}

/* Para navegadores webkit como Chrome y Safari */
::-webkit-scrollbar {
    width: 2px; /* Ancho de la barra de scroll */
    background-color: #f1f1f1; /* Color de fondo de la barra */
}

::-webkit-scrollbar-thumb {
    background-color: #888; /* Color de la parte desplazable */
    border-radius: 10px; /* Bordes redondeados */
}

::-webkit-scrollbar-thumb:hover {
    background-color: #555; /* Color al pasar el ratón */
}

.ttl-card{
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.ttl-card h2{
    font-size: 15px;
    font-weight: 600;
    text-transform: uppercase;

}

.descricao{
    width: 100%;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.descricao p {
    text-align: justify;
    width: 80%;
    height: 80%;
    text-indent: 10px;
    overflow-y: scroll;
    text-overflow: ellipsis;
    padding: 5px;
}

.content-btn{
    height: 20%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.content-btn a{
    padding: 5px 15px;
    background-color: #F78024;
    font-size: 15px;
    color: #f1f1f1;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none
}

.content-btn button{
    padding: 5px 15px;
    background-color: #536acc;
    font-size: 15px;
    color: #f1f1f1;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none
}

.container {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 30px 20%;
    justify-content: space-evenly;
    align-items: center;
}

.headerVagas {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    height: 10vh;
    background-color: #ffffff;
    box-shadow: 0 1px 1px 1px #ccc;
    border-radius: 2px;
}

.container-pesquisa {
    width: 100%;
    display: flex;
    justify-content: center;
}

.input-search {
    display: flex;
    justify-content: left;
    align-items: center;
    width: 95%;
    background-color: #252F3F;
    border-radius: 2px;
}

.input-search input {
    width: 90%;
    padding: 5px;
    border-radius: 2px 0 0 2px;
    border: 1px solid #ccc;
}

.input-search input:focus {
    outline: none;
}

.input-search .container-icon {
    width: 10%;
    display: flex;
    justify-content: center;
}

.input-search i {
    color: #ffffff;
    cursor: pointer;
}

.filter {
    display: flex;
    justify-content: left;
    width: 10%;
    height: 43%;
}

.filter button {
    width: 80%;
    border: 1px solid #ccc;
    background-color: #f9f9f9;
    border-radius: 2px;
    font-size: 15px;
    cursor: pointer;
    height: 100%;
}

.container-vagas {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    height: 80vh;
}

.container-vagas h4 {
    width: 100%;
    font-size: 25px;
    font-weight: 500;
    margin-bottom: 30px;
    color: #252F3F;
}

.buscaRapida {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 22vh;
    width: 100%;
}

.rowCardArea {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 49.5%;
    height: 100%;
}

.cardAreas {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 49%;
    background-color: #ffffff;
    box-shadow: 0 1px 1px 1px #ccc;
    border-radius: 2px;
    cursor: pointer;
    transition: .3s;
}

.cardAreas:active {
    transform: scale(.98);
}

.img-areas {
    background-color: #F78024;
    height: 100%;
    width: 45%;
}


.quantVagas p {
    color: #7e7e7e;
}

.gridCardVagas {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: left;
    width: 100%;
    height: 80vh;
}

.container-row h4 {
    font-size: 20px;
    margin-bottom: 5px;
}

.row {
    display: flex;
    width: 100%;
    height: 100%;
    margin-bottom: 5px;
}

.container-item {
    display: flex;
    justify-content: center;
    align-items: start;
    gap: 30px;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
}


.card {
    max-width: 350px;
    min-width: 350px;
    max-height: 250px;
    min-height: 250px;
    flex: 1 0 280px;
    height: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f7f7f7;
    box-shadow: 1px 2px 5px #ccc;
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

@media screen and (max-width: 1920px) {
    .input-search input {
        padding: 13px;
    }

    .input-search i {
        font-size: 25px;
    }

    .input-search input::placeholder {
        font-size: 20px;
    }

    .filter {
        height: 45%;
    }

    .filter button {
        font-size: 23px;
    }

    .cardDescription .nomeArea p {
        font-size: 25px;
    }

    .cardDescription .quantVagas p {
        font-size: 20px;
    }

    .container-vagas h4 {
        font-size: 35px;
    }

    .img {
        width: 300px;
        height: 420px;
    }

    .cardAreas {
        height: 65%;
    }

    .nao-vagas p {
        font-size: 25px;
    }
}

@media screen and (max-width: 1600px) {
    .input-search input {
        padding: 8px 5px;
    }

    .input-search input::placeholder {
        font-size: 17px;
    }

    .container-icon i {
        font-size: 16px;
    }
}

@media screen and (max-width: 1550px) {
    .cardAreas {
        height: 60%;
    }

    .cardDescription .nomeArea p {
        font-size: 20px;
    }

    .cardDescription .quantVagas p {
        font-size: 17px;
    }

    .container-vagas h4 {
        font-size: 25px;
    }

    .img {
        width: 150px;
        height: 250px;
    }

    .nao-vagas p {
        font-size: 20px;
    }
}

@media screen and (max-width: 1350px) {
    .input-search input {
        padding: 5px;
    }

    .input-search input::placeholder {
        font-size: 15px;
    }

    .input-search i {
        font-size: 15px;
    }

    .filter button {
        font-size: 15px;
    }

    .cardAreas {
        height: 15vh;
    }
}

@media screen and (max-width: 1260px) {
    .container {
        margin: 40px auto;
        width: 100%;
    }

    .input-search input {
        padding: 10px;
    }

    .container-pesquisa {
        width: 85%;
    }

    .filter {
        width: 15%;
    }

    .filter button {
        font-size: 22px;
    }
}

@media screen and (max-width: 1240px) {
    .input-search input {
        padding: 6px;
    }

    .container-pesquisa {
        width: 85%;
    }

    .filter {
        width: 15%;
        height: 55%;
    }

    .filter button {
        font-size: 18px;
    }
}

@media screen and (max-width: 950px) {
    .input-search {
        width: 95%;
    }

    .filter {
        width: 15%;
    }

    .filter button {
        font-size: 22px;
    }

    .input-search input {
        padding: 10px;
    }

    .buscaRapida {
        flex-direction: column;
        height: 30vh;
        margin: 30px 0 30px 0;
    }

    .rowCardArea {
        width: 100%;
        height: 48%;
    }

    .cardDescription .nomeArea p {
        font-size: 25px;
    }

    .cardDescription .quantVagas p {
        font-size: 20px;
    }

    .cardAreas {
        height: 100%;
    }

    .img-areas {
        width: 30%;
    }
}

@media screen and (max-width: 800px) {
    .img-areas {
        width: 35%;
    }

    .container-pesquisa {
        width: 80%;
    }

    .filter {
        width: 20%;
    }

    .nao-vagas img {
        width: 35%;
    }
}

@media screen and (max-width: 640px) {
    .cardAreas {
        height: 100%;
    }

    .buscaRapida {
        height: 25vh;
    }

    .input-search input {
        width: 90%;
    }

    .input-search input::placeholder {
        font-size: 20px;
    }

    .input-search {
        width: 90%;
    }

    .container-pesquisa {
        width: 100%;
    }

    .container-icon i {
        font-size: 20px;
    }

    .filter {
        width: 25%;
    }
}

@media screen and (max-width: 550px) {
    .rowCardArea {
        height: 49%;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    .buscaRapida {
        height: 70vh;
    }

    .cardAreas {
        width: 100%;
        height: 48%;
    }

    .filter {
        justify-content: center;
        height: 30%;
        width: 120%;
    }

    .container-pesquisa {
        width: 105%;
    }

    .container-icon i {
        font-size: 15px;
    }

    .headerVagas {
        height: 15vh;
        flex-direction: column;
        align-items: center;
    }
}

@media screen and (max-width: 465px) {
    .container-vagas h4 {
        font-size: 20px;
    }

    .row .nao-vagas p {
        font-size: 19px;
    }

    .nao-vagas img {
        width: 50%;
    }
}

@media screen and (max-width: 367px) {
    .container-vagas h4 {
        font-size: 19px;
    }
}
</style>