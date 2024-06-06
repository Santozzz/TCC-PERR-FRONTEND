<template>
    <div>
        <div class="container">
            <h4 class="ttlNotificacao">Notificações</h4>
            <div class="container-notificacoes">
                <div v-if="notifys.length" class="tem-notificacao">
                    <span class="notify" v-for="(notify, index) in notifys" :key="index">
                        <span class="space">
                            {{ notify }}
                            <button>Abrir</button>
                        </span>
                    </span>
                </div>
                <div v-else class="naoTem-notificacoes">
                    <img src="../../assets/img/Notificacoes/img-notNotify.jpg" alt="">
                    <p>Você não tem notificações no momento</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            notifys: [],
        }
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
    .ttlNotificacao{
        width: 90%;
        font-size: 25px;
        letter-spacing: 1px;
        color: #F78024;
        font-weight: 500;
        margin-bottom: 20px;
    }
    .container-notificacoes{
        display: flex;
        justify-content: center;
        overflow-y: scroll;
        height: 70vh;
        width: 90%;
    }
    /* Estilizando a barra de rolagem */
    .container-notify {
      overflow-y: scroll;
    }

    /* Estilizando a barra de rolagem */
    .container-notificacoes::-webkit-scrollbar {
      width: 8px;/* Largura da barra de rolagem */
    }

    /* Estilizando o fundo da barra de rolagem */
    .container-notificacoes::-webkit-scrollbar-track {
      background: #f1f1f1; /* Cor do fundo da barra de rolagem */
      border-radius: 10px; /* Borda arredondada */
    }

    /* Estilizando o polegar da barra de rolagem */
    .container-notificacoes::-webkit-scrollbar-thumb {
      background: #b2b2b2; /* Cor do polegar da barra de rolagem */
      border-radius: 10px; /* Borda arredondada */
    }

    /* Estilizando o polegar da barra de rolagem ao passar o mouse */
    .container-notificacoes::-webkit-scrollbar-thumb:hover {
      background: #959595; /* Cor do polegar da barra de rolagem ao passar o mouse */
    }
    .tem-notificacao{
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        width: 100%;
        height: 100%;
        gap: 10px;
    }
    .notify{
        width: 95%;
        display: flex;
        justify-content: center;
        background-color: #fff;
        box-shadow: 0 1px 1px #959595;
        border-radius: 3px;
        border: 1px solid #ccc;
    }
    .space{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 9vh;
        width: 90%;
    }
    .space button{
        color: #fff;
        background-color: #F78024;
        padding: 3px 20px;
        border: none;
        border-radius: 3px;
        cursor: pointer;
    }
    .naoTem-notificacoes{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .naoTem-notificacoes img{
        width: 200px;
    }
    @media screen and (max-width: 1920px){
        .naoTem-notificacoes img{
            width: 400px;
        }
        .naoTem-notificacoes p{
            font-size: 30px;
        }
        .ttlNotificacao{
            font-size: 35px;
        }
    }
    @media screen and (max-width: 1260px){
        .container{
            margin: 40px auto;
            width: 100%;
        }
    }
</style>