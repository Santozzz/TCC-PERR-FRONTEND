<template>
    <div>
        <div class="container">
            <h1>Colaboradores</h1>
            <div class="container-biografia">
                <div class="row">
                    <div class="img">
                        <img src="../../assets/img/Colaboradores/aleteia.jpeg" alt="">
                    </div>
                    <div class="texto">
                        <p>
                        Entrevista com Alethea Rodrigues, ex-funcionária da Missão de Verificação de Paz da ONU na Colômbia

                        A entrevista foi realizada no dia 12 de abril de 2024, a qual Alethea compartilhou suas experiências como jornalista, internacionalista e seu trabalho como voluntária que iniciou quando tinha apenas quatorze anos de idade.

                        Após atuar como repórter em diversas emissoras de TV, como a TV Record e a Bandeirantes, cursou Relações Internacionais, e transformou a paixão pela área humanitária em profissão, se tornando especialista em imigração e refúgio.

                        Além da experiência como trabalhadora humanitária na Colômbia, como Oficial de Proteção a Criança, atuou em Roraima, São Paulo e Rio Grande do Sul, bem como fora do Brasil em projetos com refugiados no Líbano, Haiti, Irlanda, Grécia, Moldávia, Ucrânia, Áustria e Palestina.

                        Alethea compartilhou sua trajetória profissional e respondeu a algumas perguntas da nossa equipe, as quais foram essenciais para a criação desse site e do desenvolvimento do projeto como um todo.
                        </p>
                    </div>
                </div>
            </div>
            <div class="row-lugares">
                <div class="lugares">
                    <img src="../../assets/img/Colaboradores/Haiti.jpeg" alt="">
                    <p>Haiti</p>
                </div>
                <div class="lugares">
                    <img src="../../assets/img/Colaboradores/Libano.jpeg" alt="">
                    <p>Brasil</p>
                </div>
                <div class="lugares">
                    <img src="../../assets/img/Colaboradores/Palestina.jpeg" alt="">
                    <p>Libano</p>
                </div>
                <div class="lugares">
                    <img src="../../assets/img/Colaboradores/Roraima.jpeg" alt="">
                    <p>Palestina</p>
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
    width: 80%;
    margin: 30px 20%;
    justify-content: space-evenly;
    align-items: center;
}

h1 {
    font-size: 30px;
    color: #252F3F;
    width: 95%;
    font-weight: 500;
    margin-bottom: 50px;
}

.container-biografia{
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.row{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 20px;
}

.img{
    width: 40%;
    height: 80%;
    display: flex;
    justify-content: start;
    align-items: center;
}

.img img{
    width: 70%;
    height: 70%;
    border-radius: 5px;
    box-shadow: 2px 2px 10px #252F3F;
}

.texto{
    width: 70%;
    display: flex;
    justify-content: start;
}

.texto p{
    text-align: justify;
    font-size: 20px;
}

.row-lugares{
    width: 90%;
    height: 45vh;
    display: flex;
    gap: 30px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.lugares{
    width: 200px;
    height: 100%;
}

.lugares img{
    width: 100%;
    height: 80%;
    object-fit: cover;
    box-shadow: 2px 2px 10px #252F3F;
    border-radius: 5px;
}

.lugares p{
    font-size: 15px;
    text-transform: uppercase;
    width: 100%;
    text-align: center;
}

@media screen and (max-width: 1920px){
    .texto p{
        font-size: 22px;
    }

    .lugares p{
        font-size: 22px;
    }
}
@media screen and (max-width: 1800px){
    .texto p{
        font-size: 19px;
    }

    .lugares p{
        font-size: 22px;
    }
}
@media screen and (max-width: 1600px){
    .texto p{
        font-size: 17px;
    }

    .lugares img {
        height: 60%;
    }

    .lugares p{
        font-size: 19px;
    }
}
@media screen and (max-width: 1500px){
    .texto p{
        font-size: 17px;
    }

    .lugares img {
        height: 50%;
    }

    .lugares p{
        font-size: 19px;
    }
}
@media screen and (max-width: 1300px){
    .texto p{
        font-size: 14px;
    }

    .lugares img {
        height: 50%;
    }

    .lugares p{
        font-size: 19px;
    }
}
@media screen and (max-width: 1260px){
    .container {
        margin: 40px auto;
        width: 100%;
    }
    
}
@media screen and (max-width: 989px){

}
@media screen and (max-width: 900px){
    .texto p{
        font-size: 10px;
    }

    .lugares img {
        height: 55%;
    }

    .lugares p{
        font-size: 15px;
    }
}
@media screen and (max-width: 680px){
    .texto p{
        font-size: 9px;
    }

    .lugares img {
        height: 45%;
    }

    .lugares p{
        font-size: 15px;
    }
}
</style>
