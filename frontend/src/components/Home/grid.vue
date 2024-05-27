<template>
    <div>  
        <div class="container">
            <div class="header">
                <div class="user-notify">
                    <p>[ usuario ]</p>
                    <i class="fa-solid fa-bell"></i>    
                </div>
            </div>
            <div class="container-cursos">
                <h4>Confira nossos cursos!</h4>
                <div class="gridCards"> 
                    <div class="row">
                        <div class="cardPrincipal">
                            
                        </div>
                        <div class="container-cardSecundarios">
                            <div class="rowCardCourse">
                                <div class="card">
                                    
                                </div>
                                <div class="card">
                                    
                                </div>
                            </div>
                            <div class="rowCardCourse">
                                <div class="card">
                                    
                                </div>
                                <div class="card">
        
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="vagaSugeridas">
                        <h4>Encontre seu trabalho</h4>
                        <div class="rowVagas">
                            <div class="rowCardVagas">
                                <div class="cardVagas">
                                    <div class="img-categoria">
                                        <img src="" alt="">
                                    </div>
                                    <div class="nome-categoria">
                                        <p class="nomeVaga">Administração</p>
                                        <p class="quantVagas">[ Quant. de vagas]</p>
                                    </div>
                                </div>
                                <div class="cardVagas">
                                    <div class="img-categoria">
                                        <img src="" alt="">
                                    </div>
                                    <div class="nome-categoria">
                                        <p class="nomeVaga">Gastronomia</p>
                                        <p class="quantVagas">[ Quant. de vagas]</p>
                                    </div>
                                </div>
                            </div>
                            <div class="rowCardVagas">
                                <div class="cardVagas">
                                    <div class="img-categoria">
                                        <img src="" alt="">
                                    </div>
                                    <div class="nome-categoria">
                                        <p class="nomeVaga">Construção</p>
                                        <p class="quantVagas">[ Quant. de vagas]</p>
                                    </div>
                                </div>
                                <div class="cardVagas">
                                    <div class="img-categoria">
                                        <img src="" alt="">
                                    </div>
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
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .container{
        display: flex;
        flex-direction: column;
        width: 80%;
        height: 80vh;
        margin: 20px 20%;
        justify-content: space-evenly;
        align-items: center;
    }
    .header{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 88%;
        height: 10vh;
        background-color: #ffffff;
        border-radius: 10px;
        box-shadow: 0 1px 1px 1px #ccc;
    }
    .user-notify{
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
        height: 50vh;
        width: 100%;
        justify-content: space-between;
    }
    .gridCards{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 98%;
        height: 60vh;
    }
    .cardPrincipal{
        width: 49.5%;
        height: 40vh;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 1px 1px 1px #ccc;
        cursor: pointer;
        transition: .3s;
    }
    .cardPrincipal:active{
        transform: scale(.98);
    }
    .container-cardSecundarios{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
        height: 40vh;
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
        border-radius: 10px;
        box-shadow: 0 1px 1px 1px #ccc;
        cursor: pointer;

    }
    .card:active{
        transform: scale(.98);
    }
    .vagaSugeridas{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }
    .vagaSugeridas h4{
        width: 99%;
    }
    .rowVagas{
        display: flex;
        width: 100%;
        justify-content: space-around;
        gap: 10px;
    }
    .rowCardVagas{
        display: flex;
        width: 50%;
        justify-content: space-between;
    }
    .cardVagas{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 49%;
        height: 18vh;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 1px 1px 1px #ccc;
        cursor: pointer;
        transition: .2s;
    }
    .img-categoria{
        width: 40%;
        height: 70%;
        background-color: #F78024
    }
    .nome-categoria{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 30%;
        width: 50%;
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
        .cardVagas .nomeVaga{
            font-size: 25px;
        }
        .cardVagas .quantVagas{
            font-size: 20px;
        }
        .cardVagas .img-categoria{
            height: 65%;
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
    }
    @media screen and (max-width: 1674px){
        .container-cursos h4{
            font-size: 18px;
            margin: 5px 0 5px 0;
        }   
        .cardVagas{
            height: 16vh;
        }
    }
    @media screen and (max-width: 1500px){
        .cardVagas .nomeVaga{
            font-size: 18px;
        }
        .cardVagas .quantVagas{
            font-size: 14px;
        }
    }
    @media screen and (max-width: 1260px){
        .container{
            margin: 40px auto;
            width: 100%;
        }
    }
    @media screen and (max-width: 1025px){
        .rowVagas{
            flex-direction: column;
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
    }
    @media screen and (max-width: 700px){
        .cardVagas .nomeVaga{
            font-size: 20px;
        }
        .cardVagas .quantVagas{
            font-size: 14px;
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
            width: 90%;
            height: 17vh;
            justify-content: space-around;
        }
    }
</style>