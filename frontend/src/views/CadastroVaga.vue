<template>
    <div>
        <div class="container">
            {{ message }}
            <form method="POST" @submit.prevent="submitData">
                <label>Titulo:</label>
                <input class="data-ttl" type="text" v-model="vaga.titulo">
                <label>Descrição:</label>
                <textarea v-model="vaga.descricao" class="data-desc"></textarea>
                <label>Link:</label>
                <input class="data-ttl" type="text" v-model="vaga.link">
                <input class="submit" type="submit" value="Inserir Vaga">
            </form>
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
            <div class="dashboard">
                <div class="th">
                    <div class="id-col">
                        <p>ID</p>
                    </div>
                    <div class="col">
                        <p>Titulo</p>
                    </div>
                    <div class="col">
                        <p>Ferramentas</p>
                    </div>
                </div>
                <div v-for="(vaga, index) in vagas" :key="index" class="tr">
                    <div class="id-col"><p>{{ vaga.idvagas }}</p></div> <!-- ID da vaga -->
                    <div class="col"><p>{{ vaga.titulo }}</p></div> <!-- Título da vaga -->
                    <div class="col">
                        <div class="btn">
                            <button @click="editarVaga(vaga.idvagas)">Editar</button>
                        </div>
                        <div class="btn">
                            <button @click="excluirVaga(vaga.idvagas)">Excluir</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'CadastroVaga',
    data(){
        return{
            // Variaveis
            vaga: {
                titulo: '',
                descricao: '',
                link: '',
            },
            vagas: [],
            nothing: []
        }
    },
    methods: {
        async submitData() {

            if (!this.vaga.titulo || !this.vaga.descricao || !this.vaga.link) {
                this.nothing.push('Preencha todos os campos');
            }
            else {
                try {
                      const response = await axios.post('http://localhost:3000/vagas', this.vaga);
                      this.message = 'Usuário cadastrado com sucesso!';
                      // Limpar o formulário
                      this.vaga = { titulo: '', descricao: '',};
                    } catch (error) {
                      // Ajuste aqui para lidar com a estrutura correta do erro
                      this.message = 'Erro ao cadastrar usuário: ' + (error.response ? error.response.data.message : error.message);
                    }
            }    

        },
         // Método para buscar as vagas
         async getVagas() {
            try {
                const response = await axios.get('http://localhost:3000/vagas')
                this.vagas = response.data; 
            } catch (error) {
                console.error('Erro ao buscar vagas:', error);
            }
        },
        async excluirVaga(idvagas) {
            if (confirm('Tem certeza que deseja excluir esta vaga?')) { // Confirmação antes de excluir
                try {
                    const response = await axios.delete(`http://localhost:3000/vagas/${idvagas}`);
                    this.message = response.data.message;
                    this.getVagas(); // Atualiza a lista de vagas após excluir
                } catch (error) {
                    this.message = 'Erro ao excluir vaga: ' + (error.response ? error.response.data.message : error.message);
                }
            }
        },
        fecharAlert(index) {
            this.nothing.splice(index, 1)
        }
    },
    mounted() {
        this.getVagas();
    },

}
</script>

<style scoped>

.container{
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 100px 10%;
    justify-content: space-evenly;
    align-items: center;
}

form{
    width: 50%;
    height: 350px;
    background-color: rgb(252, 252, 252);
    border-radius: 5px;
    box-shadow: 1px 2px 2px #ccc;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}

label{
    width: 90%;
    text-align: left;
}

.data-ttl{
    width: 90%;
    height: 10%;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px;
}

.data-desc{
    width: 90%;
    height: 30%;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px;
}

input:focus{
    outline: none;
}
textarea:focus{
    outline: none;
}

.submit{
    width: 91%;
    height: 10%;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #e77517;
    color: #fff;
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
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

.dashboard{
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.th{
    margin-top: 50px;
    width: 100%;
    height: 60px;
    display: flex;

    border: 1px solid #ccc;
}
.tr{
    width: 100%;
    height: 60px;
    display: flex;
    border: 1px solid #ccc;
}

.id-col{
    width: 20%;
    height: 100%;
    border: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
}

.col{
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: #ccc solid 1px;
}

.btn{
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.btn button{
    width: 80%;
    height: 60%;
    background-color: #e77517;
    color: #fff;
    text-transform: uppercase;
    font-size: 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

@media  screen and (max-width: 1550px) {
    form{
        width: 70%;
    }
}
@media  screen and (max-width: 1250px) {
    form{
        width: 90%;
    }
}

</style>