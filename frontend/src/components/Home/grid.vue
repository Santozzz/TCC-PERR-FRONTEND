<template>
    <div>  
        <div class="container">
            <div class="header">
                <div class="user-notify">
                    <p>[ usuario ]</p>
                    <i class="fa-solid fa-bell" :class="{ 'notifyOpen': isBellNotify }" @click="toggleNotify"></i>    
                    <div class="notifications" :class="['notify', { 'notifyOpen': isBellNotify }]">
                        <h4>Notificações</h4>
                        <div class="container-notify">
                            <div class="verify" v-if="notifys.length">
                                <div v-for="(notify, index) in notifys" :key="index" class="notify">
                                    <div class="space">                                        
                                        {{ notify.asdasd }}
                                        <button>Abrir</button>
                                    </div>
                                </div>
                            </div>
                            <div class="not-notify" v-else>
                                <div class="img-notNotify"></div>
                                <p>Você não tem nenhuma notificação</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="gridCards"> 
                <div class="container-cursos">
                    <h4>Confira nossos cursos!</h4>
                    <div class="row">
                        <div class="cardPrincipal">
                            <div class="spaceCardPrincipal">
                                <div class="banner-img"></div>
                                <div class="display-video">
                                    <div class="legenda">
                                        <p>[ legenda ]</p>
                                    </div>
                                    <div class="container-btn">
                                        <button>Assistir<i class="fa-solid fa-play"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container-cardSecundarios">
                            <div class="rowCardCourse">
                                <div class="card">
                                    <div class="spaceCardSecundario">
                                        <div class="banner-imgSec"></div>
                                        <div class="display-videoSec">
                                            <div class="legenda-cardSec">
                                                <p>[ legenda ]</p>
                                            </div>
                                            <div class="container-btnSec">
                                                <button>Assistir<i class="fa-solid fa-play"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="spaceCardSecundario">
                                        <div class="banner-imgSec"></div>
                                        <div class="display-videoSec">
                                            <div class="legenda-cardSec">
                                                <p>[ legenda ]</p>
                                            </div>
                                            <div class="container-btnSec">
                                                <button>Assistir<i class="fa-solid fa-play"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="rowCardCourse">
                                <div class="card">
                                    <div class="spaceCardSecundario">
                                        <div class="banner-imgSec"></div>
                                        <div class="display-videoSec">
                                            <div class="legenda-cardSec">
                                                <p>[ legenda ]</p>
                                            </div>
                                            <div class="container-btnSec">
                                                <button>Assistir<i class="fa-solid fa-play"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="spaceCardSecundario">
                                        <div class="banner-imgSec"></div>
                                        <div class="display-videoSec">
                                            <div class="legenda-cardSec">
                                                <p>[ legenda ]</p>
                                            </div>
                                            <div class="container-btnSec">
                                                <button>
                                                        Assistir<i class="fa-solid fa-play"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="vagaSugeridas">
                    <h4>Vagas populares</h4>
                    <div class="rowVagas">
                        <div class="rowCardVagas">
                            <div class="cardVagas">
                                <div class="img-categoria"></div>
                                <div class="nome-categoria">
                                    <p class="nomeVaga">Administração</p>
                                    <p class="quantVagas">[ Quant. de vagas]</p>
                                </div>
                            </div>
                            <div class="cardVagas">
                                <div class="img-categoria"></div>
                                <div class="nome-categoria">
                                    <p class="nomeVaga">Gastronomia</p>
                                    <p class="quantVagas">[ Quant. de vagas]</p>
                                </div>
                            </div>
                        </div>
                        <div class="rowCardVagas">
                            <div class="cardVagas">
                                <div class="img-categoria"></div>
                                <div class="nome-categoria">
                                    <p class="nomeVaga">Construção</p>
                                    <p class="quantVagas">[ Quant. de vagas]</p>
                                </div>
                            </div>
                            <div class="cardVagas">
                                <div class="img-categoria"></div>
                                <div class="nome-categoria">
                                    <p class="nomeVaga">Informatica</p>
                                    <p class="quantVagas">[ Quant. de vagas]</p>
                                </div>
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
        return{
            isBellNotify: false,
            notifys: [],
        }
    },
    methods: {
        toggleNotify(){
            this.isBellNotify = !this.isBellNotify;
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
    .header{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 89%;
        height: 10vh;
        background-color: #ffffff;
        border-radius: 2px;
        box-shadow: 0 1px 1px 1px #ccc;
    }
    .user-notify{
        position: relative;
        display: flex;
        width: 90%;
        justify-content: space-between;
        align-items: center;
    }
    .user-notify p{
        font-size: 20px;
        color: #252F3F;
    }
    .user-notify i{
        font-size: 25px;
        cursor: pointer;
        color: #252F3F;
    }
    .notifications.notifyOpen{
        display: flex;
        flex-direction: column;
        justify-content: start;
        width: 42%;
        height: 300px;
    }
    .notifications h4{
        width: 90%;
        margin-top: 5px;
        margin-bottom: 10px;
        color: #F78024;
        font-weight: 500;
    }
    .notifications{
        display: none;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 100%;
        left: 58%;
        background-color: #ffffff;
        box-shadow: 0 1px 1px 1px #ccc;
        border-radius: 10px 0 10px 10px;
    }
    .container-notify {
        display: flex;
        gap: 10px;
        align-items: center;
        flex-direction: column;
        overflow-y: scroll;
        height: 500px;
        width: 100%;
    }
    .verify{
        width: 90%;
    }
    .space{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        height: 8.5vh;
        margin: auto;
    }
    .space button{
        border: none;
        background-color: #F78024;
        padding: 5px 20px;
        border-radius: 5px;
        color: #fff;
        cursor: pointer;
    }
    .not-notify{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 90%;
    }
    .not-notify p{
        font-size: 10px;
    }
    .img-notNotify{
        height: 180px;
        width: 200px;
        background-image: url(../../assets/img/Home/img-notNotify.jpg);
        background-position: center;
        background-size: cover;
    }
    .notify {
        width: 100%;
        min-height: 60px; /* Definindo uma altura mínima */
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 0 1px 1px 1px #ccc;
        flex-shrink: 0; /* Evitando que os cartões se comprimam */
        margin-bottom: 10px;
    }
    /* Estilizando a barra de rolagem */
    .container-notify {
      overflow-y: scroll;
    }

    /* Estilizando a barra de rolagem */
    .container-notify::-webkit-scrollbar {
      width: 8px;/* Largura da barra de rolagem */
    }

    /* Estilizando o fundo da barra de rolagem */
    .container-notify::-webkit-scrollbar-track {
      background: #f1f1f1; /* Cor do fundo da barra de rolagem */
      border-radius: 10px; /* Borda arredondada */
    }

    /* Estilizando o polegar da barra de rolagem */
    .container-notify::-webkit-scrollbar-thumb {
      background: #b2b2b2; /* Cor do polegar da barra de rolagem */
      border-radius: 10px; /* Borda arredondada */
    }

    /* Estilizando o polegar da barra de rolagem ao passar o mouse */
    .container-notify::-webkit-scrollbar-thumb:hover {
      background: #959595; /* Cor do polegar da barra de rolagem ao passar o mouse */
    }
    .container-cursos{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 90%;
        padding: 5px;
    }
    .container-cursos h4{
        text-align: left;
        width: 97%;
        color: #F78024;
        letter-spacing: 1px;
        padding-bottom: 5px;
    }
    .row{
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
    }
    .gridCards{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 98%;
    }
    .cardPrincipal{
        display: flex;
        flex-direction: column; 
        justify-content: space-between;
        align-items: center;
        width: 49.5%;
        height: 50vh;
        border-radius: 2px;
        background-color: #fff;
        box-shadow: 0 1px 1px 1px #ccc;
        cursor: pointer;
    }
    .spaceCardPrincipal{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 90%;
        width: 100%;
    }
    .banner-img{
        width: 100%;
        height: 75%;
        background-color: #F78024;
    }
    .display-video{
        display: flex;
        width: 85%;
        justify-content: space-around;
        align-items: center;
    }
    .legenda{
        width: 55%;
    }
    .container-btn{
        display: flex;
        width: 45%;
        justify-content: flex-end;
    }
    .container-btn button{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        height: 30px;
        border-radius: 5px;
        border: none;
        background-color: #F78024;
        color: #ffffff;
        cursor: pointer;
        transition: .3
    }

    .container-btn button:active{
        transform: scale(.98);
    }
    .container-btn button i{
        font-size: 10px;
    }
    .container-cardSecundarios{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
        height: 50vh;
        width: 50%;
    }
    .rowCardCourse{
        display: flex;
        justify-content: space-between;
        width: 99%;
        height: 48%;
    }
    .card{
        width: 49%;
        height: 100%;
        background-color: #fff;
        box-shadow: 0 1px 1px 1px #ccc;
        cursor: pointer;
        display: flex;
        border-radius: 2px;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
    .spaceCardSecundario{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 90%;
        width: 100%;
    }
    .display-videoSec{
        justify-content: center;
        display: flex;
        width: 90%;
    }
    .legenda-cardSec{ 
        width: 100%;
    }
    .container-btnSec{
        display: none;
    }
    .card:active{
        transform: scale(.98);
    }
    .banner-imgSec{
        height: 75%;
        width: 100%;
        background-color: #F78024;
    }
    
    .vagaSugeridas{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 90%;
    }
    .vagaSugeridas h4{
        text-align: left;
        width: 97%;
        color: #F78024;
        letter-spacing: 1px;
        padding-bottom: 5px;
    }
    .rowVagas{
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
    .rowCardVagas{
        display: flex;
        width: 49.5%;
        justify-content: space-between;
    }
    .cardVagas{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 49%;
        height: 18vh;
        background-color: #fff;
        box-shadow: 0 1px 1px 1px #ccc;
        cursor: pointer;
        transition: .2s;
        border-radius: 2px;
    }
    .img-categoria{
        width: 45%;
        height: 70%;
        background-color: #F78024;
    }
    .nome-categoria{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 30%;
        width: 53%;
    }
    .quantVagas{
        color: #808080;
        font-weight: 400;
        font-size: 13px;
    }
    .nome-categoria .nomeVaga{
        font-size: 18px;
    }
    .cardVagas:active{
        transform: scale(.98);
    }
    @media screen and (max-width: 1920px){
        .container-cursos h4{
            font-size: 26px;
            margin: 10px 0 10px 0;
        }
        .notifications.notifyOpen{
            height: 500px;
        }
        .cardVagas{
            height: 14vh;
        }
        .cardVagas .nomeVaga{
            font-size: 25px;
        }
        .cardVagas .quantVagas{
            font-size: 20px;
        }
        .cardVagas .img-categoria{
            height: 100%;
        }
        .user-notify p{
            font-size: 25px;
        }
        .display-video p{
            font-size: 20px;
        }
        .container-btn button{
            font-size: 16px;
            align-items: center;
            width: 50%;
        }
    }
    @media screen and (max-width: 1816px){  
        .cardVagas .quantVagas{
            font-size: 16px;
        }
    }
    @media screen and (max-width: 1708px){  
        .cardVagas .nomeVaga{
            font-size: 22px;
        }
        .notifications.notifyOpen{
            height: 450px;
        }
    }
    @media screen and (max-width: 1674px){
        .container-cursos h4{
            font-size: 18px;
            margin: 5px 0 5px 0;
        }   
        .cardVagas{
            height: 16vh;
        }
        .user-notify p{
            font-size: 20px;
        }
        .display-video p{
            font-size: 15px;
        }
        .container-btn button{
            font-size: 15px;
        }
        .notifications.notifyOpen{
            height: 400px;
        }
    }
    @media screen and (max-width: 1500px){
        .cardVagas .nomeVaga{
            font-size: 18px;
        }
        .cardVagas .quantVagas{
            font-size: 14px;
        }
        .notifications.notifyOpen{
            width: 50%;
            left: 50%;
        }
        .cardVagas .quantVagas{
            font-size: 12px;
        }
    }
    @media screen and (max-width: 1260px){
        .container{
            margin: 40px auto;
            width: 100%;
        }
        .display-video p{
            font-size: 16px;
        }
    }
    @media screen and (max-width: 1025px){
        .rowVagas{
            flex-direction: column;
            gap: 10px;
        }
        .rowCardVagas{
            width: 100%;
        }
        .cardVagas .nomeVaga{
            font-size: 25px;
        }
        .cardVagas .quantVagas{
            font-size: 18px;
        }
        .user-notify{
           height: 8vh;
        }
        .row{
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
            gap: 20px;
        }
        .container-cardSecundarios{
            width: 100%;
            height: 70vh;
        }
        .card .legenda-cardSec p{
            font-size: 22px;
        }
        .rowCardCourse{
            width: 100%;
        }
        .cardPrincipal{
            width: 100%;
        }
        .cardPrincipal .legenda p{
            font-size: 23px;
        }
        .cardPrincipal .container-btn button{
            font-size: 20px;
        }
        .cardPrincipal .container-btn button i{
            font-size: 15px;
        }
    }
    @media screen and (max-width: 856px){
        .notifications.notifyOpen{
            height: 350px;
            width: 65%;
            left: 35%;
        }
    }
    @media screen and (max-width: 700px){
        .cardVagas .nomeVaga{
            font-size: 20px;
        }
        .cardVagas .quantVagas{
            font-size: 14px;
        }
        .display-video{
            width: 90%;
            flex-direction: column;
        }
        .legenda{
            width: 100%;
            text-align: left;
        }
        .container-btn{
            width: 100%;
            justify-content: right;
        }
        .container-btn button{
            width: 40%;
        }
        .notifications.notifyOpen .not-notify p{
            font-size: 18px;
        }
    }
    @media screen and (max-width: 592px){
        .notifications.notifyOpen{
            width: 85%;
            left: 15%;
        }
    }
    @media screen and (max-width: 555px){
        .rowCardVagas{
            height: 35vh;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
        }
        .cardVagas{
            width: 100%;
            height: 17vh;
            justify-content: space-around;
        }
        .container-cardSecundarios{
            gap: 20px;
            height: 150vh;
        }
        .rowCardCourse{
            flex-direction: column;
            gap: 20px;
            height: 49%;
        }
        .card{
            width: 100%;
            height: 40vh;
        }
        .vagaSugeridas h4{
            font-size: 23px;
        }
    }
    @media screen and (max-width: 470px){
        .banner-img{
            height: 55%;
        }
        .notifications.notifyOpen{
            width: 100%;
            left: 0%;
        }
        .notifications.notifyOpen .not-notify p{
            font-size: 16px;
        }
    }
</style>