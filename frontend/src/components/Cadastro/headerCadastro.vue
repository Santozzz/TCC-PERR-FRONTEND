<template>
    <div>
        <div class="header">
            <div class="content">
                <div class="container-btnEntrar">
                    <router-link to="/Entrar">Entrar</router-link>
                </div>
                <div class="container-apresentacao">
                    <div class="logo">
                        <router-link to="/">PER<strong>R</strong></router-link>
                    </div>
                    <div class="frase">
                        <p>Site de apoio profissional para <strong>Refugiados</strong> e <strong>Imigrantes</strong></p>
                    </div>
                </div>
            </div>
            <div class="overlay"></div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
     /* Background */
     .header{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 38vh;
        background-position: center;
        background-size: cover;
        background-image: url(../../assets/img/Cadastro/bg-headerCadastro.jpg);
        z-index: 1;
        box-shadow: 0 0 10px 1px #000;
    }
    .overlay{
        position: absolute;
        width: 100%;
        height: 38vh;
        background-color: #000;
        opacity: .8;
        z-index: 2;
    }
    /* Content of Header */
    .content{
        width: 100%;
        height: 100%;
        z-index: 3;
    }
    .container-btnEntrar{
        display: flex;
        justify-content: end;
        align-items: center;
        gap: 15px;
        width: 99%;
        height: 25%;
    }
    .container-btnEntrar a{
        color: #fff;
        text-decoration: none;
        border: 2px solid #F78024;
        padding: 10px 30px;
        border-radius: 20px;
        font-family: sans-serif;
    }
    .container-btnEntrar .empresa{
        color: #fff;
        background-color: #F78024;
        text-decoration: none;
        padding: 10px 30px;
        border-radius: 20px;
        font-family: sans-serif;
    }
    .container-apresentacao{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .logo a{
        color: #fff;
        text-decoration: none;
        font-style: italic;
        font-family: sans-serif;
        font-weight: 700;
        font-size: 100px;
    }
    .logo a strong{
        color: #F78024;
    }
    .frase p{
        color: #fff;
        font-size: 20px;
        font-family: sans-serif;
        font-weight: 500;
        letter-spacing: 1px;
    }
    .frase p strong{
        border-bottom: 1px solid #F78024;
        font-weight: 500;
    }
    /* Responsivo */
    /* 300 Pixel */
    @media screen and (min-width: 300px) {
        .header{
            display: none;
        }
    }
    /* 500 Pixel */
    @media screen and (min-width: 500px) {
        .header{
            display: flex;
        }
        .frase p{
            text-align: center;
        }
    }
    /* 1000 Pixel */
    @media screen and (min-width: 1000px) {
        .logo a{
            font-size: 110px;
        }
        .frase p{
            font-size: 30px;
        }
    }
    /* 1500 Pixel */
    @media screen and (min-width: 1500px) {
        .logo a{
            font-size: 150px;
        }
        .frase p{
            font-size: 35px;
        }
    }

</style>