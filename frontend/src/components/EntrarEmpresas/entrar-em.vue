<template>
    <div>
      <div class="logo">
        <router-link to="/">PER<strong>R</strong></router-link>
      </div>
      <div class="container-form">
        <form class="form" method="GET">
          <div class="topForm">
            <h2>Entrar como Empresa</h2>
            <p>Conecte-se para gerenciar seus anúncios e oportunidades de emprego</p>
          </div>
          <input type="email" v-model="form.email" placeholder="Email Empresarial">
          <div class="password">
            <input
              class="input-pass"
              :type="inputType"
              v-model="form.senha"
              placeholder="Senha"
              maxlength="16"
            />
            <i
              class="fa-solid"
              :class="showPassword ? 'fa-eye' : 'fa-eye-slash'"
              @click="togglePasswordVisibility"
            ></i>
          </div>
          <input type="submit" @click.prevent="getData" value="Entrar">
          <div class="line"></div>
          <p>
            Ao clicar em Entrar, você aceita o
            <strong>Contrato do Usuário</strong>, a
            <strong>Política de Privacidade</strong> e a
            <strong>Política de Cookies</strong> do PERR.
          </p>
        </form>
        <p>Não possui conta como empresa? <router-link to="/CadastroEmpresa">Cadastre-se</router-link></p>
        <ul class="container-alert">
          <li
            :class="{ active: isActive }"
            class="alert-form"
            v-for="(error, index) in errors"
            :key="index"
          >
            <div class="alert">
              <div class="delete">
                <h3>Ocorreu um erro</h3>
                <i
                  @click="fecharAlert(index)"
                  class="fa-regular fa-circle-xmark"
                ></i>
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
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        // Variáveis para mostrar senha
        showPassword: false,
        inputType: "password",
        isActive: true,
        // Validação dos inputs
        form: {
          email: null,
          senha: null,
        },
        errors: [],
      };
    },
    methods: {
      togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
        this.inputType = this.showPassword ? "text" : "password";
      },
      async getData() {
        this.errors = [];
  
        if (!this.form.email || !this.form.senha) {
          this.errors.push("Preencha todos os campos");
        } else {
          try {
            const resp = await axios.post(
              "https://tcc-perr-backend-h5b7.onrender.com/login",
              this.form
            );
            console.log(resp.data);
            this.$router.push("/empresa/dashboard");
          } catch (error) {
            this.errors.push(
              "Erro ao entrar: " +
                (error.response ? error.response.data.message : error.message)
            );
          }
        }
      },
      fecharAlert(index) {
        this.errors.splice(index, 1);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilo permanece o mesmo, com textos ajustados para empresas */
  .container-form p {
    font-size: 12px;
    text-align: center;
  }
  .form input::placeholder {
    font-size: 14px;
    font-weight: 400;
  }

  .logo{
        display: flex;
        justify-content: start;
        align-items: center;
        margin: 0 auto;
        width: 90%;
        height: 13vh;
    }
    .logo a{
        font-size: 45px;
        font-style: italic;
        text-decoration: none;
        color: #000;
        font-weight: 600;
    }
    .logo strong{
        color: #252f3f;
        font-style: italic;
    }
    .container-form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 75vh;
    }
    .container-form a{
        color: #F78024;
    }
    .topForm{
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: space-between;
        width: 100%;
        height: 60px;
        text-align: center;
        margin-bottom: 10px;
    }
    .form .topForm h2{
        font-size: 30px;
    }
    .form .topForm p{
        font-size: 11px;
        color: #6e6e6e;
        margin: 0 auto;
    }
    .form{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        width: 30%;
        height: 55vh;
        background-color: #ffffff;
        padding: 20px;
        border-radius: 15px;
        border: 1px solid #ccc;
        box-shadow: 0 2px 2px #808080;
        margin-bottom: 10px;
    }
    .form input{
        width: 80%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        transition: .5s
    }
    .form input:focus{
        outline: none;
        border: #F78024 solid 1px;
    }
    .form a{
        color: #F78024;
        width: 82%;
        font-size: 13px;
    }
    .form input[type="submit"]{
        border: none;
        background-color: #F78024;
        color: #fff;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 1px;
        width: 85%;
        cursor: pointer;
    }
    .password{
        position: relative;
        display: flex;
        justify-content: center;
        width: 100%;
    }
    .password i{
        position: absolute;
        color: #a1a1a1;
        left: 85%;
        top: 25%;
        cursor: pointer;
    }
    .line{
        width: 90%;
        height: 1px;
        background-color: #ccc;
    }
    .form p{
        font-size: 12px;
        width: 90%;
        text-align: center;
        color: #6e6e6e;
    } 
    .form strong{
        color: #F78024;
        cursor: pointer;
    }
    .container-alert{
        position: absolute;
        width: 30%;
        left: 2%;
        top: 2%;
        z-index: 9;
        list-style: none;
    }
    .alert{
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
    .alert i{
        cursor: pointer;
    }
    .delete{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 90%;
        margin-bottom: 5px;
    }
    .error{
        display: flex;
        width: 90%;
    }
    @keyframes move {
        0%{
            transform: translate(-50%);
        }
        100%{
            transform: translate(.1%);
        }
    }
    /* Responsivo */
    /* 300 Pixels */
    @media screen and (min-width: 300px){
        .form{
            width: 82%;
        }
        .form input{
            width: 90%;
        }
        .form a{
            width: 95%;
        }
        .form input[type="submit"]{
            width: 95%;
        }
    }
    /* 600 Pixels */
    @media screen and (min-width: 600px){
        .form{
            width: 55%;
        }
        .form input{
            width: 90%;
        }
        .form a{
            width: 95%;
        }
        .form input[type="submit"]{
            width: 95%;
        }
    }
    /* 1000 Pixels */
    @media screen and (min-width: 1000px){
        .form{
            width: 40%;
        }
        .form input{
            width: 80%;
        }
        .form a{
            width: 85%;
        }
        .form input[type="submit"]{
            width: 85%;
        }
    }
    /* 1200 Pixels */
    @media screen and (min-width: 1200px){
        .form{
            width: 30%;
        }
        .form input{
            width: 80%;
        }
        .form a{
            width: 85%;
        }
        .form input[type="submit"]{
            width: 85%;
        }
    }
    /* 1700 Pixels */
    @media screen and (min-width: 1700px){
        .form{
            width: 25%;
        }
        .form input{
            width: 80%;
        }
        .form a{
            width: 85%;
        }
        .form input[type="submit"]{
            width: 85%;
        }
    }
  </style>