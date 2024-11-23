<template>
    <div>
        <div class="container-principal">
            <div class="back">
                <div class="toPag-principal">
                    <i class="fa-solid fa-angle-left"></i>
                    <router-link class="link" to="/">Página inicial</router-link>
                </div>
                <router-link class="logo" to="/">PER<strong>R</strong></router-link>
            </div>
            <div class="row">
                <div class="formCadastro">
                    <h3 class="desc">
                        Cadastre-se já para encontrar a melhor
                        oportunidade de emprego para você !
                    </h3>
                    <form class="form" method="POST">
                        <input type="text" v-model="usuario.nome" placeholder="Nome Completo">
                        <input type="tel" v-model="usuario.telefone" @input="applyMask" placeholder="Telefone">
                        <div class="row-input">
                            <input type="email" v-model="usuario.email" placeholder="Email">
                            <div class="password">
                                <input :type="inputType" v-model="usuario.senha" placeholder="Senha" maxlength="16" />
                                <i class="fa-solid" :class="showPassword ? 'fa-eye' : 'fa-eye-slash'"
                                    @click="togglePasswordVisibility"></i>
                                </div>
                            </div>
                            <div class="termos">
                                <input type="checkbox" class="col-3">
                                <h4>Li e aceito os <a href="/Termos"><strong>Termos de uso</strong></a> e as <a href="/Termos"><strong>Políticas de privacidade</strong></a></h4> 
                            </div>
                            <input type="submit" @click.prevent="submitData" value="CADASTRAR-SE">
                            <div class="tenhoconta">
                                <h4>Já tem uma conta? <a href="../Entrar">Entrar</a></h4>
                            </div>
                            </form>

                            <!-- Botão para redirecionar empresas -->
                            <button @click="redirectToEmpresa" class="botao-empresa">Sou uma Empresa</button>

                            

                        {{ message }}
                    <ul class="container-alert">
                        <li :class="{ active: isActive }" class="alert-form" v-for="(error, index) in nothing"
                            :key="index">
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
                    <div class="line"></div>
                
                </div>
                <div class="img-decorativa">
                    <img src="../../assets/img/Cadastro/img-decorativa.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            //Variaveis do mostrar senha
            password: '',
            showPassword: false,
            inputType: 'password',
            //Variaveis de validação e envio de dados dos inputs
            usuario: {
                nome: null,
                telefone: null,
                email: null,
                senha: null,
            },
            nothing: [],
            isActive: true,
        };
    },
    methods: {
        togglePasswordVisibility() {
            this.showPassword = !this.showPassword;
            this.inputType = this.showPassword ? 'text' : 'password';
        },
        applyMask(event) {
            let telefone = event.target.value.replace(/\D/g, '');
            if (telefone.length > 10) {
                event.target.value = telefone.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
            } else {
                this.quantTel.push('Digite seu número por inteiro')
            }
        },
        async submitData() {
            this.nothing = []

            if (!this.usuario.nome || !this.usuario.telefone || !this.usuario.email || !this.usuario.senha) {
                this.nothing.push('Preencha todos os campos');
            }
            else {
                if (this.usuario.telefone.length < 11) {
                    this.nothing.push('O campo de telefone deve ter pelo menos 11 caracteres');
                } else {
                    try {
                          const response = await axios.post('https://tcc-perr-backend-h5b7.onrender.com/usuarios', this.usuario);
                          this.message = 'Usuário cadastrado com sucesso!';
                          
                          // Limpar o formulário
                          this.usuario = { nome: '', email: '', telefone: '', senha: '' };
                          this.$router.push('/Entrar')
                        } catch (error) {
                          // Ajuste aqui para lidar com a estrutura correta do erro
                          this.message = 'Erro ao cadastrar usuário: ' + (error.response ? error.response.data.message : error.message);
                        }
                    }
            }    

        },
        redirectToEmpresa() {
            // Redireciona para a página de cadastro de empresa
            this.$router.push('/CadastroEmpresa');
        },

        fecharAlert(index) {
            this.nothing.splice(index, 1)
        }
    },
};
</script>

<style scoped>
/* Content of Cadastro */

.botao-empresa {
    
    padding: 10px 20px;
    font-size: 16px;
    background-color: #ffffff;
    color: #252f3f;
    border: none;
    cursor: pointer;
    border-radius: 20px;
    transition: background-color 0.3s;
    border: 2px solid #252f3f; /* Borda de 2px, cor preta */
    margin-left: -50px;
}

.botao-empresa:hover {
    background-color:#1e244b19;
}





.tenhoconta{
    padding-left: 35%;
}

.tenhoconta a {
    color: #F78024; /* Altera a cor de todos os hyperlinks */
  text-decoration: none;
}

.tenhoconta a:hover{
    color: #5b13d8;
}

.termos{
    padding-left: 3%;
}

.termos a{
    color: #F78024;
    text-decoration: none;
}

.termos a:hover{
    color:#5b13d8;
    text-decoration: none;
}

.container-principal {
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 20vh;
    margin: 20px auto;
}

.tenhoconta p{
    color: black;

}

.back {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
}

.toPag-principal {
    display: flex;
    width: 50%;
    justify-content: space-between;
    align-items: center;
}

.toPag-principal i,
.toPag-principal a {
    color: #F78024;
    text-decoration: none;
    letter-spacing: 1px;
}

.back .logo {
    display: flex;
    justify-content: center;
    width: 50%;
    color: #000000;
    text-decoration: none;
    font-style: italic;
    font-family: sans-serif;
    font-weight: 700;
    font-size: 25px;
}

.back .logo strong {
    color: #F78024;
}

.row {
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 20px;
}

.formCadastro {
    width: 55%;
    gap: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.desc {
    text-align: left;
    font-family: sans-serif;
    font-weight: 500;
    width: 60%;
}

.form {
    display: flex;
    flex-direction: column;
    width: 60%;
    gap: 10px;
}

.form p {
    display: none;
}

.form p a {
    color: #F78024;
}

.form input {
    border-radius: 5px;
    padding: 10px;
    border: #ccc solid 1px;
    transition: .5s ease;
}

.form input[type="email"],
.form input[type="password"] {
    display: none;
}

.form input:focus {
    outline: none;
    border: #F78024 solid 1px;
}

.form input[type="submit"] {
    background-color: #F78024;
    color: #fff;
    letter-spacing: 1px;
    border: none;
    cursor: pointer;
}

.row-input {
    display: flex;
    width: 100%;
    justify-content: space-between;
}

.password {
    position: relative;
    display: flex;
}

.password i {
    position: absolute;
    color: #a1a1a1;
    left: 85%;
    top: 25%;
    cursor: pointer;
}

.row-input input[type="email"],
.row-input input[type="password"] {
    display: flex;
    padding: 10px 5px;
}

.line {
    width: 60%;
    height: 1px;
    background-color: #ccc;
    margin-bottom: 5px;
}

.politicPolicy {
    width: 60%;
}

.politicPolicy p {
    color: #a1a1a1;
    font-family: sans-serif;
    font-weight: 500;
    font-size: 11px;
    letter-spacing: 1px;
    line-height: 15px;
    text-align: justify;
}

.politicPolicy p strong {
    color: #F78024;
    border-bottom: 1px solid #F78024;
    font-weight: 500;
}

.termos {
    width: 70%;
    display: flex;
    gap: 10px;
}

.termos h4 {
    color: #a1a1a1;
    font-family: sans-serif;
    font-weight: 500;
    font-size: 11px;
    letter-spacing: 1px;
    line-height: 15px;
    text-align: justify;
    
}

.termos h4 strong {
    color: #F78024;
    border-bottom: 1px solid #F78024;
    font-weight: 500;
}

.termos h4 strong:hover{
    color: #5b13d8;
    border-bottom: 1px solid #5b13d8;
    font-weight: 500;
}

.tenhoconta {
    width: 70%;
}

.tenhoconta h4 {
    color: #a1a1a1;
    font-family: sans-serif;
    font-weight: 500;
    font-size: 11px;
    letter-spacing: 1px;
    line-height: 15px;
    text-align: justify;
}

.tenhconta h4 a{
    color: #F78024;
    border-bottom: 1px solid #F78024;
    font-weight: 500;
}


.img-decorativa {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
}

.img-decorativa img {
    width: 400px;
}

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
    position: fixed;
    width: 25%;
    
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

/* Responsivo */
/* 300 Pixel */
@media screen and (min-width: 300px) {
    .container-principal {
        height: 80vh;
        justify-content: space-around;
    }

    .toPag-principal {
        width: 60%;
        gap: 20px;
        justify-content: flex-start;
    }

    .formCadastro {
        width: 100%;
        align-items: center;
    }

    .desc {
        width: 90%;
        font-size: 18px;
    }

    .form {
        width: 90%;
    }

    .row-input {
        flex-direction: column;
        gap: 10px;
    }

    .row-input input[type="password"] {
        width: 100%;
    }

    .line {
        width: 90%;
    }

    .politicPolicy {
        width: 90%;
    }

    .politicPolicy p {
        text-align: center;
    }

    .img-decorativa {
        display: none;
    }

    .alert-form {
        width: 90%;
    }

    .password input {
        width: 100%;
    }
}

/* 500 Pixel */
@media screen and (max-width: 500px) {
    .form p {
        display: flex;
    }
}

@media screen and (min-width: 500px) {
    .container-principal {
        height: 50vh;
    }

    .back .logo {
        display: none;
    }

    .toPag-principal {
        gap: 20px;
        justify-content: flex-start;
    }

    .password input {
        width: 100%;
    }
}

/* 850 Pixel */
@media screen and (max-width: 850px) {
    .container-alert {
        width: 80%;
    }
}

@media screen and (min-width: 850px) {
    .formCadastro {
        width: 55%;
    }

    .row-input {
        display: flex;
    }

    .password input {
        width: 100%;
    }
}

/* 900 Pixel */
@media screen and (min-width: 900px) {
    .password {
        width: 50%;
    }

    .password input {
        width: 100%;
    }

    .row-input input[type="email"] {
        width: 45%;
    }

    .row-input {
        display: flex;
        flex-direction: row;
    }
}

/* 1200 Pixel */
@media screen and (min-width: 1200px) {
    .container-principal {
        height: 55vh;
    }

    .formCadastro {
        width: 50%;
    }

    .img-decorativa {
        display: flex;
    }
}

/* 1500 Pixel */
@media screen and (min-width: 1500px) {
    .desc {
        font-size: 30px;
    }

    .img-decorativa img {
        width: 550px;
    }

    .form input {
        padding: 15px;
    }

    .row-input input[type="email"] {
        padding: 15px;
        width: 42%;
    }

    .password i {
        top: 38%;
    }
}
</style>