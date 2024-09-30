<template>
    <div>
        <div class="container">
            <h2 class="ttl-curriculo">Seu Currículo</h2>
            <!-- Informações pessoais -->
            <div class="infosPessoais-editar">
                <h3 class="ttl">Informacões Pessoais</h3>
            </div>
            <form class="form-infoPessoais">
                <div class="col-form">
                    <input type="text" placeholder="[ nome completo ]">
                    <input type="text" placeholder="[ email ]">
                    <input type="text" placeholder="Data de Nascimento">
                    <input type="text" placeholder="Nacionalidade">
                </div>
                <div class="col-form">
                    <input type="text" placeholder="Seu LinkedIn">
                    <input type="text" placeholder="[ numero ]">
                    <input type="text" placeholder="Cidade">
                    <input type="text" placeholder="Idioma">
                </div>
            </form>
            <!-- Fim de Informações pessoais -->
            <!-- Resumo Sobre mim -->
            <div class="container-resumo">
                <h3 class="ttlResumo">Sobre mim</h3>
                <textarea></textarea>
            </div>
            <!-- Fim de Resumo Sobre mim -->
            <!-- Certificados -->
            <div class="container-cursos">
                <div class="ttl-content">
                    <h3 class="ttl">Formação Academica</h3>
                    <button @click="openModalAddCourse">Adicionar Certificado</button>
                </div>
                <div v-if="cardsCertifys.length" class="contentCourse-if">
                    <div class="Arrow" @click="direcao_certificados(1)">
                        <i class="fa-solid fa-angle-left"></i>
                    </div>
                    <div id="container-cardCourse">
                        <div v-for="(cardCertify, index) in cardsCertifys" :key="index" class="cardCourse">
                            <div class="crudCard">
                                <div class="content-crudBtn">
                                    <i class="fa-solid fa-ellipsis-vertical"></i>
                                </div>
                            </div>
                            <div class="nameCertify">
                                <h3>{{ cardCertify.name }}</h3>
                            </div>
                            <div class="companyCertify">
                                <p>{{ cardCertify.company }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="Arrow" @click="direcao_certificados(2)">
                        <i class="fa-solid fa-angle-right"></i>
                    </div>
                </div>
                <div class="naoTem-cursos" v-else>
                    <img src="../../assets/img/SeuCurriculo/naoTem-cursos.jpg" alt="">
                    <p>Você ainda não adicionou certificados ainda !</p>
                </div>
            </div>
            <div :class="{ 'container-addCourse': true, 'addCourseOpen': isClassCourseAdded }">
                <div class="ttl-addCourse">
                    <h4>Adicionando Certificado</h4>
                    <i class="fa-solid fa-x" @click="closeModalAddCourse"></i>
                </div>
                <div class="col-addCourse">
                    <div class="cardAddCourse">
                        <div class="nameCertify">
                            <h3>{{ Certify.name }}</h3>
                        </div>
                        <div class="companyCertify">
                            <p>{{ Certify.company }}</p>
                        </div>
                    </div>
                    <form @submit.prevent="AddCourse" class="formAddCourse">
                        <input v-model="Certify.name" type="text" placeholder="Insira o nome do curso">
                        <input v-model="Certify.company" type="text"
                            placeholder="Insira o nome da instituição de ensino">
                        <input type="submit" value="Adicionar">
                    </form>
                </div>
                <!-- Verificação para ter ceerteza que todos os campos do formulario de adicionar certificados esteja preenchido -->
                <ul class="container-alert">
                    <li :class="{ active: isActive }" class="alert-form" v-for="(error, index) in nothing" :key="index">
                        <div class="alert">
                            <div class="delete">
                                <h3>Ocorreu um erro</h3>
                                <i @click="fecharAlert" class="fa-regular fa-circle-xmark"></i>
                            </div>
                            <div class="line"></div>
                            <div class="error">
                                {{ error }}
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- Fim de Certificados -->
            <!-- Formação Academica -->
            <div class="container-formacao">
                <div class="ttl-content">
                </div>
                <div class="form-formacaoCheck">
                    <div class="col-inputCheck">
                        <h3>Ensino Fundamental</h3>
                        <div class="item" v-for="(optionFund, index) in optionsFund" :key="index">
                            <div class="container-radio">
                                <input type="radio" :name="groupname" :value="optionFund" v-model="selectedOptionFund">
                            </div>
                            <div class="container-option">
                                <p>{{ optionFund }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-inputCheck">
                        <h3>Ensino Médio</h3>
                        <div class="item" v-for="(optionMed, index) in optionsMed" :key="index">
                            <div class="container-radio">
                                <input type="radio" :name="groupname" :value="optionMed" v-model="selectedOptionMed">
                            </div>
                            <div class="container-option">
                                <p>{{ optionMed }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-inputCheckSup">
                        <h3>Ensino Superior</h3>
                        <div class="itemSup" v-for="(optionSup, index) in optionsSup" :key="index">
                            <div class="container-radioSup">
                                <input type="radio" :name="groupname" :value="optionSup" v-model="selectedOptionSup">
                            </div>
                            <div class="container-optionSup">
                                <p>{{ optionSup }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Fim de Formação Academica -->
            <button class="btn-gerar">Gerar Currículo</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            //Formação academica
            optionsFund: ['Realizado', 'Em Andamento', 'Incompleto'], // As opções do seu grupo
            optionsMed: ['Realizado', 'Em Andamento', 'Incompleto'], // As opções do seu grupo
            optionsSup: ['Pós-graduação', 'Doutorado', 'Graduação', 'Mestrado', 'Incompleto'], // As opções do seu grupo
            selectedOptionFund: '', // O valor selecionado
            selectedOptionMed: '', // O valor selecionado
            selectedOptionSup: '', // O valor selecionado
            //Fim Formação Academica
            //Certificados
            isClassCourseAdded: false,
            Certify: {
                name: null,
                company: null,
            },
            cardsCertifys: [],
            //Fim Certificados
            //Experiencias
            isClassExpeAdded: false,
            cardsExperiences: [],
            Experiense: {
                company: null,
                ocupation: null,
                period: null,
                activities: null,
            },
            //Fim Experiencias
            //Alertas
            nothing: [],
            //Fim Alertas
        }
    },
    props: {
        groupname: {
            type: String,
            required: true
        },
    },
    methods: {
        openModalAddCourse() {
            this.isClassCourseAdded = true; // Alterna o estado da classe
        },
        closeModalAddCourse() {
            // Close the modal
            this.isClassCourseAdded = false;
        },
        openModalAddExpe() {
            this.isClassExpeAdded = true; // Alterna o estado da classe
        },
        closeModalAddExpe() {
            // Close the modal
            this.isClassExpeAdded = false;
        },
        AddCourse() {
            this.nothing = []

            if (!this.Certify.name || !this.Certify.company) {
                this.nothing.push('Preencha todos os campos');

                // Adiciona o timeout para remover a mensagem de erro após 5 segundos
                setTimeout(() => {
                    this.nothing = [];
                }, 5000);
            } else {
                // Add the course to the courses array
                this.cardsCertifys.push({ ...this.Certify });

                // Reset the course form
                this.Certify.company = '';
                this.Certify.name = '';
            }
        },
        AddExpe() {
            this.nothing = []

            if (!this.Experiense.activities || !this.Experiense.company || !this.Experiense.ocupation || !this.Experiense.period) {
                this.nothing.push('Preencha todos os campos');

                // Adiciona o timeout para remover a mensagem de erro após 5 segundos
                setTimeout(() => {
                    this.nothing = [];
                }, 5000);
            } else {
                // Add the course to the courses array
                this.cardsExperiences.push({ ...this.Experiense });

                // Reset the course form
                this.Experiense.activities = '';
                this.Experiense.company = '';
                this.Experiense.ocupation = '';
                this.Experiense.period = '';
            }
        },
        fecharAlert(index) {
            this.nothing.splice(index, 1)
        },
        direcao_certificados(e) {
            let direcao = document.getElementById("container-cardCourse")

            if (e == 1) {
                //Right
                direcao.scrollLeft = direcao.scrollLeft - 300;
            } else if (e == 2) {
                //Left
                direcao.scrollLeft = direcao.scrollLeft + 300;
            }
        },
        direcao_expe(e) {
            let direcao = document.getElementById("container-cardExpe")

            if (e == 1) {
                //Right
                direcao.scrollLeft = direcao.scrollLeft - 200;
            } else if (e == 2) {
                //Left
                direcao.scrollLeft = direcao.scrollLeft + 200;
            }
        },
    }
}
</script>

<style scoped>
.btn-gerar {
    cursor: pointer;
    width: 30%;
    height: 5vh;
    background-color: #F78024;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-size: 15px;
}

/* Config. Geral do componente */
.container {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 30px 20%;
    justify-content: space-evenly;
    align-items: center;
}

.ttl-curriculo {
    width: 90%;
    font-weight: 500;
    color: #252F3F;
    margin-bottom: 50px;
}

.Arrow {
    cursor: pointer;
}

.ttl-content {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.ttl {
    font-weight: 500;
    font-size: 20px;
    color: #252F3F;
}

.ttl-content button {
    border: 1px solid #F78024;
    background-color: transparent;
    border-radius: 4px;
    padding: 8px 25px;
    color: #F78024;
    font-size: 15px;
    cursor: pointer;
    transition: .3s ease;
}

.ttl-content button:active {
    transform: scale(.98);
}

/* Informações Pessoais */
.infosPessoais-editar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin-bottom: 10px;
}

.infosPessoais-editar button:active {
    transform: scale(.98);
}

.form-infoPessoais {
    width: 90%;
    height: 35vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.col-form {
    display: flex;
    flex-direction: column;
    width: 49%;
    height: 100%;
    justify-content: space-around;
}

.col-form input {
    height: 12%;
    width: 95%;
    padding: 10px;
    border: 1px solid #b1b1b1;
    border-radius: 5px;
    transition: ease .5s;
    font-size: 15px;
}

.col-form input:focus {
    outline: none;
    border: 1px solid #414141;
}

/* Resumo Sobre mim */
.container-resumo {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-evenly;
    width: 90%;
    height: 35vh;
    margin-bottom: 20px;
}

.ttlResumo {
    width: 100%;
    color: #252F3F;
    font-weight: 500;
    font-size: 20px;
}

.container-resumo textarea {
    width: 97.5%;
    height: 70%;
    border: 1px solid #949494;
    border-radius: 5px;
    padding: 10px;
}

.container-resumo textarea:focus {
    outline: none;
    border: 1px solid #414141;
}

/* Fim Resumo */

/* Certificados */
.container-cursos {
    width: 90%;
}

#container-cardCourse {
    display: flex;
    align-items: center;
    overflow: hidden;
    width: 95%;
    height: 30vh;
    gap: 20px;
    user-select: none;
    overflow-x: scroll;
    scroll-behavior: smooth;
}

#container-cardCourse::-webkit-scrollbar {
    display: none;
}

.contentCourse-if {
    width: 100%;
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
}

/* CardCertify */
.cardCourse {
    position: relative;
    display: flex;
    flex: 1 1 300px;
    max-width: 280px;
    min-width: 270px;
    flex-direction: column;
    align-items: center;
    height: 70%;
    border: 2px solid #252F3F;
    border-radius: 5px;
    transition: .3s ease-in-out;
    overflow: hidden;
}

.crudCard {
    width: 100%;
    height: 20%;
    position: absolute;
}

.content-crudBtn {
    width: 100%;
    border-radius: 4px;
    left: 0;
    bottom: 0;
    overflow: hidden;
    display: flex;
    justify-content: end;
    transition: .3s ease-in-out;
}

.content-crudBtn i {
    cursor: pointer;
    margin-bottom: 2%;
    padding: 5px 15px;
}

/* v-else para verificar se a cursos no tópico de cursos */
.naoTem-cursos {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 40vh;
}

.naoTem-cursos img {
    width: 200px;
}

.naoTem-cursos p {
    font-size: 20px;
}

/* Modal AddCourses */
.container-addCourse {
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    z-index: 999;
    position: fixed;
    width: 30vw;
    height: 60vh;
    left: 42%;
    top: 27%;
    background-color: #ffffff;
    box-shadow: 0px 0px 20000px 20000px #0000003f;
    border-radius: 5px;
    display: none;
    animation: openModal .2s ease-in;
}

.container-addCourse.addCourseOpen {
    display: flex;
}

/* Animação do modal abrindo */
@keyframes openModal {
    to {
        transform: scale(1);
    }

    from {
        transform: scale(.9);
    }
}

.ttl-addCourse {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    height: 10%;
}

.ttl-addCourse h4 {
    color: #252F3F;
    font-size: 20px;
    font-weight: 500;
}

.ttl-addCourse i {
    cursor: pointer;
    font-size: 20px;
}

.col-addCourse {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;
}

.cardAddCourse {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 49%;
    border: 2px solid #252F3F;
    border-radius: 5px;
}

.nameCertify {
    display: flex;
    justify-content: center;
    align-items: end;
    width: 90%;
    text-align: center;
    height: 50%;
}

.nameCertify h3 {
    font-weight: 500;
    letter-spacing: 1px;
    overflow: hidden;
    text-overflow: ellipsis;
    text-wrap: nowrap;
}

.companyCertify {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50%;
    width: 90%;
}

.companyCertify p {
    font-weight: 400;
    letter-spacing: 1px;
    font-size: 18px;
    color: #818181;
    overflow: hidden;
    text-overflow: ellipsis;
    text-wrap: nowrap;
}

.formAddCourse {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 90%;
    height: 40%;
}

.formAddCourse input {
    padding: 10px;
    border: 1px solid #b1b1b1;
    border-radius: 5px;
    transition: .3s ease;
}

.formAddCourse input[type="submit"] {
    border: none;
    background-color: #F78024;
    color: #fff;
    cursor: pointer;
    font-size: 15px;
}

.formAddCourse input[type="text"]:focus {
    outline: none;
    border: 1px solid #414141;
}

/* estilo da verificação de preenchimento de formulario */
.container-alert {
    position: absolute;
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    left: 2%;
    top: 2%;
    z-index: 9;
    list-style: none;
}

.container-alertExpe {
    position: absolute;
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    left: 2%;
    top: 2%;
    z-index: 9;
    list-style: none;
}

.alert {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ee6060;
    padding: 10px 1px;
    border-radius: 5px;
    color: #fff;
    animation-name: move;
    animation-duration: .5s;
}

.alert i {
    cursor: pointer;
}

.delete {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    margin-bottom: 5px;
}

.error {
    display: flex;
    width: 90%;
}

/* Fim Certificados */

/* Começo Experiencias Profissionais */
.container-expoProfissionais {
    width: 90%;
}

.naoTem-expe {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 40vh;
}

.naoTem-expe img {
    width: 180px;
}

.naoTem-expe p {
    font-size: 20px;
}

.container-expoProfissionais {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 65vh;
}

.contentExpe-if {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80%;
    width: 100%;
    gap: 5px;
}


#container-cardExpe {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 20px;
    width: 100%;
    height: 95%;
    padding: 10px;
    overflow: hidden;
    scroll-behavior: smooth;
}

.cardExpe {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    min-width: 270px;
    max-width: 280px;
    border: 2px solid #000;
    border-radius: 5px;
}

.ttl-cardExpe {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 10%;
}

.ttl-cardExpe h3 {
    font-size: 20px;
    font-weight: 500;
    color: #252F3F;
    border-bottom: 1px solid #252F3F;
}

.period-companyCardExpe {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-evenly;
    height: 20%;
    width: 80%;
}

.activitiesCardExpe {
    height: 55%;
    text-align: justify;
    text-indent: 15px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 8;
    /* Número de linhas antes de truncar */
    overflow: hidden;
    text-overflow: ellipsis;
    width: 85%;
}

.container-addExpe {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 70%;
    height: 80%;
    top: 15%;
    background-color: #ffffff;
    box-shadow: 0px 0px 20000px 20000px #0000003f;
    border-radius: 10px;
    position: fixed;
    display: none;
    z-index: 999;
}

.container-addExpe.addExpeOpen {
    display: flex;
}

.rowExpe {
    display: flex;
    justify-content: space-evenly;
    height: 85%;
    width: 95%;
}

.colExpe {
    display: flex;
    justify-content: center;
    height: 100%;
    width: 48%;
}

.cardAddExpe {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 85%;
    height: 90%;
    border: 2px solid #000;
    border-radius: 10px;
}

.cardAddExpe h4 {
    color: #252F3F;
    font-weight: 600;
    letter-spacing: 1px;
}

.ttlExpe {
    display: flex;
    width: 100%;
    justify-content: center;
}

.company-period {
    display: flex;
    flex-direction: column;
    width: 80%;
}

.company-period strong {
    color: #252F3F;
    font-weight: 600;
}

.activitiesExpe {
    text-align: justify;
    text-indent: 15px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 9;
    /* Número de linhas antes de truncar */
    overflow: hidden;
    text-overflow: ellipsis;
    width: 85%;
    width: 80%;
    height: 50%;
}

.ttlExpe h3 {
    color: #252F3F;
    font-weight: 500;
    letter-spacing: 1px;
    border-bottom: 1px solid #252F3F;
}

.addExpe {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 90%;
    height: 90%;
}

.addExpe input {
    padding: 10px;
    border: 1px solid #b1b1b1;
    border-radius: 5px;
    transition: .3s ease;
}

.addExpe textarea {
    padding: 10px;
    height: 30%;
    border: 1px solid #b1b1b1;
    border-radius: 5px;
    transition: .3s ease;
}

.addExpe textarea:focus {
    outline: none;
    border: 1px solid #414141;
}

.addExpe input[type="submit"] {
    border: none;
    background-color: #F78024;
    color: #fff;
    cursor: pointer;
    font-size: 15px;
}


.addExpe input[type="text"]:focus {
    outline: none;
    border: 1px solid #414141;
}

/* Fim Experiencias Profissionais */

/* Formação Acadêmica */
.container-formacao {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 90%;
    height: 25vh;
    margin-bottom: 50px;
}

.form-formacaoCheck {
    display: flex;
    width: 100%;
    justify-content: start;
    gap: 40px;
}

.col-inputCheck {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-evenly;
    width: 25%;
    height: 18vh;
    flex-wrap: wrap;
}

.col-inputCheck h3 {
    width: 100%;
    font-weight: 500;
    color: #252F3F;
}

.item {
    display: flex;
    width: 100%;
    height: 20%;
    align-items: center;
}

.container-radio {
    display: flex;
    justify-content: start;
    width: 10%;
}

.container-radio input {
    appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 1px solid #252F3F;
    cursor: pointer;
    outline: none;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container-radio input:checked:before {
    opacity: 1;
}

.container-radio input:hover {
    border: 1px solid #949494;
}

.container-radio input::before {
    content: '';
    position: absolute;
    height: 7px;
    width: 7px;
    background-color: #F78024;
    border-radius: 50%;
    opacity: 0;
}

.container-option {
    display: flex;
    justify-content: start;
    width: 90%;
}

.col-inputCheckSup {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* Define duas colunas iguais */
    gap: 10px;
    /* Espaçamento entre os itens */
    width: 50%;
    /* Ajuste conforme necessário */
    align-items: center;
    /* Alinha verticalmente os itens ao centro */
}

.col-inputCheckSup h3 {
    grid-column: span 2;
    /* Faz o título ocupar as duas colunas */
    font-weight: 500;
    color: #252F3F;
}

.itemSup {
    display: flex;
    align-items: center;
}

.container-radioSup {
    display: flex;
    justify-content: start;
    width: 10%;
}

.container-radioSup input {
    appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 1px solid #252F3F;
    cursor: pointer;
    outline: none;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container-radioSup input:checked:before {
    opacity: 1;
}

.container-radioSup input:hover {
    border: 1px solid #949494;
}

.container-radioSup input::before {
    content: '';
    position: absolute;
    height: 7px;
    width: 7px;
    background-color: #F78024;
    border-radius: 50%;
    opacity: 0;
}

.container-optionSup {
    display: flex;
    justify-content: start;
    width: 90%;
}

/* Fim Formação Academica */
/* Animações */
@keyframes move {
    0% {
        transform: translate(-50%);
    }

    100% {
        transform: translate(.1%);
    }
}

/* Fim Animações */
/* Responsivo */
@media screen and (max-width: 1260px) {
    .container {
        margin: 40px auto;
        width: 100%;
    }
}
</style>