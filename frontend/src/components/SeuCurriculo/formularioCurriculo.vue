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
                    <input type="text" placeholder="[ algo a adicionar!!! ]">
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
                        <h3>Ensino Fundamental</h3>
                        <div class="item" v-for="(optionMed, index) in optionsMed" :key="index">
                            <div class="container-radio">
                                <input type="radio" :name="groupname" :value="optionMed" v-model="selectedOptionMed">
                            </div>
                            <div class="container-option">
                                <p>{{ optionMed }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-inputCheck">
                        <h3>Ensino Fundamental</h3>
                        <div class="item" v-for="(optionSup, index) in optionsSup" :key="index">
                            <div class="container-radio">
                                <input type="radio" :name="groupname" :value="optionSup" v-model="selectedOptionSup">
                            </div>
                            <div class="container-option">
                                <p>{{ optionSup }}</p>
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
  data() {
    return {
      optionsFund: ['Realizado', 'Não Realizado', 'Em Andamento'], // As opções do seu grupo
      optionsMed: ['Realizado', 'Não Realizado', 'Em Andamento'], // As opções do seu grupo
      optionsSup: ['Realizado', 'Não Realizado', 'Em Andamento'], // As opções do seu grupo
      selectedOptionFund: '', // O valor selecionado
      selectedOptionMed: '', // O valor selecionado
      selectedOptionSup: '', // O valor selecionado
    }
  },
  props: {
    groupname: {
      type: String,
      required: true
    },
  }
}
</script>

<style scoped>
    .container{
        display: flex;
        flex-direction: column;
        width: 80%;
        margin: 30px 20%;
        justify-content: space-evenly;
        align-items: center;
    }
    .ttl-curriculo{
        width: 90%;
        font-weight: 500;
        color: #252F3F;
        margin-bottom: 50px;
    }
    .infosPessoais-editar{
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
    .infosPessoais-editar button:active{
        transform: scale(.98);
    }
    .ttl-content{
        width: 100%;
        display: flex;
        justify-content: start;
    }
    .ttl{
        font-weight: 500;
        font-size: 20px;
        color: #252F3F;
    }
    .form-infoPessoais{
        width: 90%;
        height: 35vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
    .col-form{
        display: flex;
        flex-direction: column;
        width: 49%;
        height: 100%;
        justify-content: space-around;
    }
    .col-form input{
        height: 12%;
        width: 95%;
        padding: 10px;
        border: 1px solid #b1b1b1;
        border-radius: 5px;
        transition: ease .5s;
        font-size: 15px;
    }
    .col-form input:focus{
        outline: none;
        border: 1px solid #949494;
    }
    .container-formacao{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 90%;
        height: 25vh;
        margin-bottom: 50px;
    }
    .form-formacaoCheck{
        display: flex;
        width: 100%;
        justify-content: start;
        gap: 40px;
    }
    .col-inputCheck{
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: space-between;
        width: 25%;
        height: 18vh;
    }
    .col-inputCheck h3{
        width: 100%;
        font-weight: 500;
        color: #252F3F;
    }
    .item{
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
    }
    .container-radio{
        display: flex;
        justify-content: start;
        width: 10%;
    }
    .container-radio input{
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
    .container-radio input:checked:before{
        opacity: 1;
    }
    .container-radio input:hover{
        border: 1px solid #949494;
    }
    .container-radio input::before{
        content: '';
        position: absolute;
        height: 7px;
        width: 7px;
        background-color: #000000;
        border-radius: 50%;
        opacity: 0;
    }
    .container-option{
        display: flex;
        justify-content: start;
        width: 90%;
    }
</style>