<template>
    <div>
        <div class="container">
            <h2 class="ttl-curriculo">Seu Currículo</h2>
            <div class="infosPessoais-editar">
                <h3 class="ttl">Informacões Pessoais</h3>
                <button>Editar Currículo</button>
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
            <div class="container-formacao">
                <div class="ttl-content">
                    <h3 class="ttl">Formação Acadêmica</h3>
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
            <div class="container-cursos">
                <div class="ttl-content">
                    <h3 class="ttl">Cursos</h3>
                    <button @click="openModalAddCourse">Adicionar Cursos</button>
                </div>
                <div v-if="cardsCourses.length" class="CardCourse-if">
                    <div class="container-cardCourse">
                        <div v-for="(cardCourse, index) in cardsCourses" :key="index" class="cardCourse">
                            <div class="ttlCard">
                                <h3>{{ cardCourse.ttl }}</h3>
                            </div>
                            <div class="periodo-nivel">
                                <h4>Período: {{ cardCourse.time }}</h4>
                                <h4>Nível: {{ cardCourse.level }}</h4>
                            </div>
                            <div class="description">
                                <p>{{ cardCourse.description }}</p>
                            </div>
                            <div class="crudCard">
                                <div class="content-crudBtn">
                                    <button>Editar</button>
                                    <button>Deletar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="naoTem-cursos" v-else>
                    <img src="../../assets/img/SeuCurriculo/naoTem-cursos.jpg" alt="">
                    <p>Você ainda não adicionou cursos ainda !</p>
                </div>
            </div>
            <div :class="{ 'container-addCourse': true, 'addCourseOpen': isClassAdded }">
                <div class="ttl-addCourse">
                    <h4>Adicionando Cursos</h4>
                    <i class="fa-solid fa-x" @click="closeModalAddCourse"></i>
                </div>
                <div class="row-addCourse">
                    <div class="col-addCourse">
                        <div class="cardAddCourse">
                            <div class="ttl-curso">
                                <h3>{{ Course.ttl }}</h3>
                            </div>
                            <div class="time-level">
                                <p>Período: {{ Course.time }}</p>
                                <p>Nível: {{ Course.level }}</p>
                            </div>
                            <div class="description">
                                <h3>Sobre</h3>
                                <p>{{ Course.description }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-addCourse">
                        <form @submit.prevent="AddCourse" class="formAddCourse">
                            <input v-model="Course.ttl" maxlength="30" type="text" placeholder="Insira o nome do curso">
                            <input v-model="Course.time" type="text" maxlength="17"
                                placeholder="Insira o periodo de duração do curso">
                            <select v-model="Course.level" name="" id="">
                                <option value="Profissional">Profissional</option>
                                <option value="Intermediário">Intermediario</option>
                                <option value="Amador">Amador</option>
                            </select>
                            <textarea maxlength="300" placeholder="Faça uma breve descrição do curso"
                                v-model="Course.description" id="" cols="30" rows="10"></textarea>
                            <input type="submit" value="Adicionar">
                        </form>
                    </div>
                </div>
                <!-- Verificação para ter ceerteza que todos os campos do formulario de adicionar cursos esteja preenchido -->
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
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            optionsFund: ['Realizado', 'Incompleto', 'Em Andamento'], // As opções do seu grupo
            optionsMed: ['Realizado', 'Incompleto', 'Em Andamento'], // As opções do seu grupo
            optionsSup: ['Doutorado', 'Mestrado', 'Pós-graduação', 'Graduação', 'Incompleto'], // As opções do seu grupo
            selectedOptionFund: '', // O valor selecionado
            selectedOptionMed: '', // O valor selecionado
            selectedOptionSup: '', // O valor selecionado
            isClassAdded: false,
            Course: {
                ttl: null,
                time: null,
                level: null,
                description: null,
            },
            cardsCourses: [],
            nothing: [],
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
            this.isClassAdded = !this.isClassAdded; // Alterna o estado da classe
        },
        AddCourse() {
            this.nothing = []

            if (!this.Course.ttl || !this.Course.time || !this.Course.level || !this.Course.description) {
                this.nothing.push('Preencha todos os campos');
            } else {
                // Add the course to the courses array
                this.cardsCourses.push({ ...this.Course });

                // Reset the course form
                this.Course.ttl = '';
                this.Course.time = '';
                this.Course.level = 'Intermediario';
                this.Course.description = '';
            }
        },
        fecharAlert(index) {
            this.nothing.splice(index, 1)
        },
        closeModalAddCourse() {
            // Close the modal
            this.isClassAdded = false;

        },
    }
}
</script>

<style scoped>
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
    border: none;
    border-radius: 4px;
    padding: 8px 25px;
    background-color: #F78024;
    color: #fff;
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

.infosPessoais-editar button {
    border: none;
    border-radius: 4px;
    padding: 8px 25px;
    background-color: #F78024;
    color: #fff;
    font-size: 15px;
    cursor: pointer;
    transition: .3s ease;
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
    background-color: #000000;
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
    background-color: #000000;
    border-radius: 50%;
    opacity: 0;
}

.container-optionSup {
    display: flex;
    justify-content: start;
    width: 90%;
}

/* Cursos */
.container-cursos {
    width: 90%;
}

.container-cardCourse {
    display: flex;
    align-items: center;
    overflow: hidden;
    width: 100%;
    height: 55vh;
    gap: 50px;
    user-select: none;
    overflow-x: scroll;
}

/* CardCourses */
.cardCourse {
    position: relative;
    display: flex;
    flex: 1 1 300px;
    max-width: 280px;
    min-width: 270px;
    flex-direction: column;
    align-items: center;
    height: 90%;
    border: 2px solid #252F3F;
    border-radius: 5px;
    transition: .3s ease-in-out;
}

.cardCourse:hover {
    transform: translateY(-5px);
}

.ttlCard {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 10%;
}

.ttlCard h3 {
    color: #252F3F;
    font-weight: 500;
    letter-spacing: 1px;
    border-bottom: 1px solid #252F3F;
}

.periodo-nivel {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 90%;
    height: 20%;
}

.crudCard {
    width: 100%;
    height: 30%;
}

.content-crudBtn {
    height: 0;
    width: 100%;
    background: linear-gradient(transparent, #f0f0f0 99%);
    border-radius: 4px;
    position: absolute;
    left: 0;
    bottom: 0;
    overflow: hidden;
    display: flex;
    justify-content: space-evenly;
    align-items: end;
    transition: .5s ease-in-out;
}

.content-crudBtn button {
    cursor: pointer;
    border: none;
    border-radius: 3px;
    background-color: #F78024;
    color: #fff;
    margin-bottom: 5%;
    padding: 5px 15px;
}

.cardCourse:hover .content-crudBtn {
    height: 50%;
}

/* v-else para verificar se a cursos no tópico de cursos */
.naoTem-cursos {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50vh;
}

.naoTem-cursos img {
    width: 250px;
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
    width: 75vw;
    height: 80vh;
    left: 22%;
    top: 15%;
    background-color: #ffffff;
    box-shadow: 0px 1px 2px 2px #41414133;
    border-radius: 5px;
    display: none;
    animation: openModal .2s ease-in;
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

.row-addCourse {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 90%;
    width: 100%;
}

.col-addCourse {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 50%;
    height: 100%;
}

.cardAddCourse {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 75%;
    height: 90%;
    border: 2px solid #252F3F;
    border-radius: 5px;
}

.ttl-curso {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 10%;
}

.ttl-curso h3 {
    color: #252F3F;
    font-weight: 500;
    letter-spacing: 1px;
    border-bottom: 1px solid #252F3F;
}

.time-level {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 90%;
    height: 20%;
}

.description {
    width: 90%;
    height: 60%;
}

.description h3 {
    color: #252F3F;
    font-weight: 500;
    letter-spacing: 1px;
    width: 100%;
    text-align: center;
}

.description p {
    text-indent: 20px;
    text-align: justify;
    width: 100%;
    height: 100%;
}

.formAddCourse {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 80%;
    height: 90%;
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

.formAddCourse input:focus {
    outline: none;
    border: 1px solid #414141;
}

.formAddCourse select {
    padding: 10px;
    border: 1px solid #b1b1b1;
    border-radius: 5px;
    transition: .3s ease;
}

.formAddCourse select:focus {
    outline: none;
    border: 1px solid #414141;
}

.formAddCourse textarea {
    padding: 10px;
    box-sizing: content-box;
    border: 1px solid #b1b1b1;
    border-radius: 5px;
    transition: .3s ease;
}

.formAddCourse textarea:focus {
    outline: none;
    border: 1px solid #414141;
}

.container-addCourse.addCourseOpen {
    display: flex;
}

/* estilo da verificação ded preenchimento de formulario */
.container-alert {
    position: absolute;
    width: 30%;
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

@keyframes move {
    0% {
        transform: translate(-50%);
    }

    100% {
        transform: translate(.1%);
    }
}

@media screen and (max-width: 1260px) {
    .container {
        margin: 40px auto;
        width: 100%;
    }
}
</style>