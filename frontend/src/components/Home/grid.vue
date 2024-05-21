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
        font-size: 25px;
    }
    .user-notify i{
        font-size: 25px;
        cursor: pointer;
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
        width: 50%;
        height: 40vh;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 1px 1px 1px #ccc;
        cursor: pointer;
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
        width: 95%;
        height: 48%;
    }
    .card{
        width: 48%;
        height: 100%;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 1px 1px 1px #ccc;
        cursor: pointer;
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
        justify-content: space-between;
    }
    .cardVagas{
        width: 24%;
        height: 15vh;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 1px 1px 1px #ccc;
        cursor: pointer;
    }
</style>