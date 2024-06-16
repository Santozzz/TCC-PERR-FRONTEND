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
                    <button @click="addCourse">Adicionar Cursos</button>
                </div>
                <div class="container-cardCourse">
                    <div v-for="(course, index) in courses" :key="index" class="cardCourse">
                        <div class="ttlCard">
                            <h3>{{ course.title }}</h3>
                        </div>
                        <div class="periodo-nivel">
                            <h4>Período: {{ course.period }}</h4>
                            <h4>Nível: {{ course.level }}</h4>
                        </div>
                        <div class="description">
                            <p>{{ course.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div :class="{ 'container-addCourse': true, 'addCourseOpen': isClassAdded }">
                <div class="ttl-addCourse">
                    <h4>Adicionando Cursos</h4>
                    <i class="fa-solid fa-x"></i>
                </div>
                <div class="row-addCourse">
                    <div class="col-addCourse">
                        <div class="cardAddCourse">
                            <div class="ttl-curso">
                                <h3>{{ ttlCurso }}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-addCourse">
                        <form action="" class="formAddCourse">
                            <input v-model="ttlCurso" maxlength="50" type="text" placeholder="Insira o nome do curso">
                            <input type="text" placeholder="Insira o periodo de duração do curso">
                            <select name="" id="">
                                <option value="profissional">Profissional</option>
                                <option value="amador">Intermediario</option>
                                <option value="amador">Amador</option>
                            </select>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                            <input type="submit" value="Adicionar">
                        </form>
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
            optionsFund: ['Realizado', 'Incompleto', 'Em Andamento'], // As opções do seu grupo
            optionsMed: ['Realizado', 'Incompleto', 'Em Andamento'], // As opções do seu grupo
            optionsSup: ['Doutorado', 'Mestrado', 'Pós-graduação', 'Graduação', 'Incompleto'], // As opções do seu grupo
            selectedOptionFund: '', // O valor selecionado
            selectedOptionMed: '', // O valor selecionado
            selectedOptionSup: '', // O valor selecionado
            isClassAdded: false,
        }
    },
    props: {
        groupname: {
            type: String,
            required: true
        },
    },
    methods: {
        addCourse() {
            this.isClassAdded = !this.isClassAdded; // Alterna o estado da classe
        }
    },
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
}

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
    box-shadow: 0px 0px 1000px 100px #41414133;
    border-radius: 5px;
    display: none;
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

.ttl-addCourse {
    font-size: 20%;
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

.ttlCard h3 {
    font-weight: 600;
    font-size: 20px;
    color: #252F3F;
    user-select: none;
}

.periodo-nivel {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    width: 90%;
    height: 15%;
}

.periodo-nivel h4 {
    font-weight: 600;
    font-size: 15px;
    color: #252F3F;
    user-select: none;
}

.description {
    width: 90%;
    height: 65%;
}

.description p {
    text-align: justify;
    text-overflow: ellipsis;
    overflow: hidden;
    height: 100%;
    user-select: none;
}

@media screen and (max-width: 1260px) {
    .container {
        margin: 40px auto;
        width: 100%;
    }
}
</style>