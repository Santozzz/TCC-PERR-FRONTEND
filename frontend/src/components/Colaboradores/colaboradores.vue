<template>
    <div>
        <div class="container">
               <h1>Colaboradores</h1>
            <h2 >Alethea Rodrigues</h2>
            <h3> Entrevista com Alethea Rodrigues, ex-funcionária da Missão de Verificação de Paz da ONU na Colômbia   </h3>
            <div class="container-biografia">
                <div class="row">
                    <div class="img">
                        <img src="../../assets/img/Colaboradores/aleteia.jpeg" alt="">
                    </div>
                    <div class="texto">

                       <p> A entrevista foi realizada no dia 12 de abril de 2024, a qual Alethea compartilhou suas experiências como jornalista, internacionalista e seu trabalho como voluntária que iniciou quando tinha apenas quatorze anos de idade.</p>

                        <p> Após atuar como repórter em diversas emissoras de TV, como a TV Record e a Bandeirantes, cursou Relações Internacionais, e transformou a paixão pela área humanitária em profissão, se tornando especialista em imigração e refúgio.</p>

                        <p> Além da experiência como trabalhadora humanitária na Colômbia, como Oficial de Proteção a Criança, atuou em Roraima, São Paulo e Rio Grande do Sul, bem como fora do Brasil em projetos com refugiados no Líbano, Haiti, Irlanda, Grécia, Moldávia, Ucrânia, Áustria e Palestina.</p>

                        <p> Alethea compartilhou sua trajetória profissional e respondeu a algumas perguntas da nossa equipe, as quais foram essenciais para a criação desse site e do desenvolvimento do projeto como um todo.</p>
                     
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
            <div class="colab-2">
                <h2>Visibilidade Feminina nas Empresa</h2>
                <h3>Projeto Tcc realizado por alunos do Curso de Rh da escola ETEC Maria Cristina Medeiros </h3>
            </div>
            <div class="row">
                    <div class="img-vf">
                            <img src="../../assets/img/Colaboradores/VisibilidaddeFem.jpeg" alt="">
                        </div>
                        <div class="texto-vf">

                            <p> O TCC Visibilidade Feminina nas Empresas visa incentivar as mulheres a buscarem seus direitos dentro das organizações, contribuindo para um ambiente de trabalho justo e equitativo</p>

                            <p>  Propomos uma parceira com o grupo PERR que adentre nosso projeto no site desenvolvido para ajudar os refugiados a serem inseridos no mercado de trabalho, temos o intuito de fazer publicações voltadas para os direitos femininos para que as mulher tanto as refugiadas e as nativas do país fiquem cientes sobre os direitos básicos dentro das organizações para que elas não sofram nenhum tipo de descriminação.</p>
                        
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

.container h1 {
    font-size: 30px;
    color: #252F3F;
    width: 95%;
    font-weight: 500;
    margin-bottom: 40px;
    
}
.container h2 {
    font-size: 30px;
    color: #252F3F;
    width: 95%;
    font-weight: 500;
    margin-bottom: 50px;
    margin: 2%;
    text-align: center;
    display: inline-block;
}
.container h3 {
    font-size: 20px;
    color: #252F3F;
    width: 85%;
    font-weight: 500;
    margin-bottom: 50px;
    text-align: center;
}

.container-biografia{
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.colab-2{
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5%;
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
.img-vf{
    width: 40%;
    height: 80%;
    display: flex;
    justify-content: start;
    align-items: center;
    margin-left: 60px;
}
.img-vf img{
    width: 90%;
    height: 300px;
    border-radius: 5px;
    box-shadow: 2px 2px 10px #252F3F;
}

.texto{
    width: 70%;
    justify-content: start;
    font-size: 20px;
    text-indent: 5%;
}

.texto-vf{
    width: 65%;
    justify-content: start;
    margin-right: 50px;
    font-size: 20px;
}


.row-lugares{
    width: 90%;
    height: 45vh;
    display: flex;
    gap: 30px;
    justify-content: left;
    align-items: center;
    flex-wrap: wrap;
}

.lugares{
    width: 268px;
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

      .texto-vf p{
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

    .texto-vf p{
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

    .texto-vf p{
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

    .texto-vf p{
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

    .texto-vf p{
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

    .texto-vf p{
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

    .texto-vf p{
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
