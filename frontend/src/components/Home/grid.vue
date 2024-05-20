<template>
    <div>  
        <div class="container">
            <div class="header">
                <div class="user-notify">
                    <p>[ Usuario ]</p>
                    <i class="fa-solid fa-bell"></i>    
                </div>
            </div>
            <div class="container-cursos">
                <h3>Confira nossos cursos!</h3>
                <div class="gridCards"> 
                    <div class="row">
                        <div class="cardPrincipal">
    
                        </div>
                        <div class="container-cardSecundarios">
                            <div class="card">
                                
                            </div>
                            <div class="card">
    
                            </div>
                        </div>
                    </div>
                    <div class="vagaSugeridas">
                        <h3>Vagas sugeridas</h3>
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
        border: .5px solid #ccc;
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
    .container-cursos h3{
        text-align: left;
        width: 100%;
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
        border: .5px solid #ccc;
        box-shadow: 0 1px 1px 1px #ccc;
    }
    .container-cardSecundarios{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 40vh;
        width: 48%;
    }
    .card{
        width: 100%;
        height: 48%;
        background-color: #fff;
        border-radius: 10px;
        border: .5px solid #ccc;
        box-shadow: 0 1px 1px 1px #ccc;
    }
    .vagaSugeridas{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }
    .vagaSugeridas h3{
        width: 102%;
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
        border: px solid #ccc;
        box-shadow: 0 1px 1px 1px #ccc;
    }
</style>