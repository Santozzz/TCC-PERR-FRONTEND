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
                        <h4>Vagas sugeridas</h4>
                        <div class="rowVagas">
                            <div class="cardVagas">
                                
                            </div>
                            <div class="cardVagas">
    
                            </div>
                            <div class="cardVagas">
    
                            </div>
                            <div class="cardVagas">
    
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
        margin: 80px 20%;
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
        flex-wrap: wrap;
    }
    .cardVagas{
        width: 100%;
        height: 18vh;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 1px 1px 1px #ccc;
        cursor: pointer;
        transition: .2s;
    }
    .cardVagas:active{
        transform: scale(.98);
    }
    @media screen and (min-width: 1260px) {
        .rowVagas{
            flex-wrap: nowrap;
        }
    }
    @media screen and (max-width: 1260px){
        .container{
            margin: 40px auto;
            width: 100%;
        }
    }
</style>