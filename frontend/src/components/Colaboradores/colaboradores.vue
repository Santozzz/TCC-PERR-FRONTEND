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
    width: 90%;
    margin: 30px auto;
    margin-left: 20%;
    justify-content: space-evenly;
    align-items: center;
}

.container h1, 
.container h2, 
.container h3 {
    font-size: 24px;
    color: #252F3F;
    width: 95%;
    font-weight: 500;
    margin-bottom: 20px;
    text-align: center;
}

.container h3 {
    font-size: 18px;
}

.container-biografia,
.colab-2 {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;

}

.row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    gap: 20px;
}

.img,
.img-vf {
    width: 100%;
    max-width: 300px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

.img img,
.img-vf img {
    width: 100%;
    height: auto;
    border-radius: 5px;
    box-shadow: 2px 2px 10px #252F3F;
}

.texto,
.texto-vf {
    width: 100%;
    max-width: 600px;
    text-align: justify;
    font-size: 16px;
    text-indent: 5%;
}

.row-lugares {
    width: 100%;
    display: flex;
    gap: 90px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-right: 50px;
}

.lugares {
    width: 45%;
    max-width: 150px;
    text-align: center;
    margin-bottom: 5%;
}

.lugares img {
    width: 220px;
    height: 200px;
    box-shadow: 2px 2px 10px #252F3F;
    border-radius: 5px;

}

.lugares p {
    font-size: 14px;
    text-transform: uppercase;
    margin-top: 5px;
}

@media (min-width: 768px) {
    .container {
        width: 80%;
    }

    .row {
        gap: 30px;
    }

    .lugares {
        width: 20%;
    }
}

@media (min-width: 1024px) {
    .container h1 {
        font-size: 30px;
    }

    .container h2 {
        font-size: 28px;
    }

    .container h3 {
        font-size: 22px;
    }

    .texto,
    .texto-vf {
        font-size: 18px;
    }

    .row {
        justify-content: space-between;
    }

    .lugares {
        width: 18%;
    }
}

@media (max-width: 1260px){
    .container{
        margin: 0 auto;
    }
}
</style>
