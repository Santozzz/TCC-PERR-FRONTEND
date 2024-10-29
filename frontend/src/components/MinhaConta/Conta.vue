<template>
    <div>
        <div class="container">
            <div class="fundo"></div>
            <div class="space">
                <div class="container-data">
                    <div class="ttl">
                        <h3>Detalhes da conta</h3>
                    </div>
                    <form class="form">
                        <div class="input">
                            <label for="">Nome:</label>
                            <input type="text">
                        </div>
                        <div class="input">
                            <label for="">Email:</label>
                            <input type="text">
                        </div>
                    </form>
                    <form class="form">
                        <div class="input">
                            <label for="">Telefone:</label>
                            <input type="text">
                        </div>
                        <div class="input">
                            <label for="">Senha:</label>
                            <input type="text">
                        </div>
                    </form>
                    <div class="line"></div>
                    <div class="content-btn">
                        <button>Salvar ALterações</button>
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

        }
    }
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: auto 10%;
    justify-content: center;
    align-items: end;
}
.fundo{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 50%;
    background-color: #d66e2d;
    z-index: 0;
}
.space{
    width: 90%;
    height: 80vh;
    margin-top: 50px;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}
.container-profile{
    height: 90%;
    width: 25%;
    background-color: rgb(252, 252, 252);
    box-shadow: 0 1px 1px 1px #ccc;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.content-img{
    height: 45%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
}
.img{
    height: 200px;
    width: 200px;
    background-color: #9b9b9b;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    
}
.img img{
    width: 80%;
    height: 80%;
    object-fit: cover;
}
.content-contact{
    height: 55%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.insta{
    height: 20%;
    width: 100%;
    border: 1px #ccc solid ;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
i{
    font-size:25px;
}
.linkedin{
    height: 20%;
    width: 100%;
    border: 1px #ccc solid ;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
.container-data{
    height: 90%;
    width: 65%;
    background-color: rgb(252, 252, 252);
    box-shadow: 0 1px 1px 1px #ccc;
}
.ttl{
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.ttl h3{
    width: 90%;
    text-align: left;
}
.form{
    display: flex;
    height: 35%;
    justify-content: space-around;
    align-items: center;
}
form input{
    padding: 15px 10px;
    width: 100%;
    border: 1px solid #ccc;
    box-shadow: 0px 2px 5px #9b9b9b;
}
form input:focus{
    outline: none;
}
.input{
    width: 40%;
}
.line{
    width: 100%;
    height: 1px;
    background-color: #ccc;
}
.content-btn{
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.content-btn button{
    height: 60px;
    width: 180px;
    font-size: 16   px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #fff;
    background-color: #F78024;
    border: none;
    border-radius: 5px;
}
</style>