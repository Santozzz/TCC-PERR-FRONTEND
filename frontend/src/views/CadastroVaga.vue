<template>
    <div>
        <NavbarAdm />
        <div class="container">
            <h3>Cadastro de Vagas</h3>
            {{ message }}
            <!-- Formulário de Cadastro -->
            <form class="form" method="POST" @submit.prevent="submitData">
                <label>Titulo:</label>
                <input class="data-ttl" type="text" v-model="vagaCadastro.titulo">
                <label>Salario:</label>
                <input class="data-ttl" type="text" v-model="vagaCadastro.salario">
                <label>Local:</label>
                <input class="data-ttl" type="text" v-model="vagaCadastro.local">
                <label>Descrição:</label>
                <textarea v-model="vagaCadastro.descricao" class="data-desc"></textarea>
                <label>Link:</label>
                <input class="data-ttl" type="text" v-model="vagaCadastro.link">
                <input class="submit" type="submit" value="Inserir Vaga">
            </form>

            <ul class="container-alert">
                <li :class="{ active: isActive }" class="alert-form" v-for="(error, index) in nothing"
                    :key="index">
                    <div class="alert">
                        <div class="delete">
                            <h3>Ocorreu um erro</h3>
                            <i @click="fecharAlert(index)" class="fa-regular fa-circle-xmark"></i>
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
                            <button @click="openModal(vaga)">Editar</button>
                        </div>
                        <div class="btn">
                            <button @click="excluirVaga(vaga.idvagas)">Excluir</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Modal para Edição -->
            <div :class="{ 'container-modal': true, 'modalOpen': showModal }">
                <div class="ttl">
                    <p>Informações</p>
                    <div @click="closeModal" class="xis">
                        <i class="fa-solid fa-x"></i>
                    </div>
                </div>

                <form class="form-modal" method="POST" @submit.prevent="updateData">
                    <label>Titulo:</label>
                    <input class="data-ttl" type="text" v-model="vagaUpdate.titulo">
                    <label>Salario:</label>
                    <input class="data-ttl" type="text" v-model="vagaUpdate.salario">
                    <label>Local:</label>
                    <input class="data-ttl" type="text" v-model="vagaUpdate.local">
                    <label>Descrição:</label>
                    <textarea v-model="vagaUpdate.descricao" class="data-desc"></textarea>
                    <label>Link:</label>
                    <input class="data-ttl" type="text" v-model="vagaUpdate.link">
                    <input class="submit" type="submit" value="Atualizar Vaga">
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import NavbarAdm from '@/components/ALL/Navbar-adm.vue';
import axios from 'axios'

export default {
    name: 'CadastroVaga',
    components: {
        NavbarAdm,
    },
    data() {
        return {
            showModal: false,
            // Objeto para o formulário de cadastro
            vagaCadastro: {
                titulo: '',
                descricao: '',
                link: '',
                salario: '',
                local: '',
            },
            // Objeto para o formulário de atualização
            vagaUpdate: {
                idvagas: '',
                titulo: '',
                descricao: '',
                link: '',
                salario: '',
                local: '',
            },
            vagas: [],  // Lista de vagas
            nothing: [],  // Para mensagens de erro
            message: ''  // Mensagens de sucesso ou erro
        }
    },
    methods: {
        openModal(vaga) {
            // Abre o modal e carrega a vaga a ser editada
            this.vagaUpdate = { ...vaga }; // Inclui o ID da vaga na edição
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        },
        async submitData() {
            if (!this.vagaCadastro.titulo || !this.vagaCadastro.descricao || !this.vagaCadastro.link || !this.vagaCadastro.salario || !this.vagaCadastro.local) {
                this.nothing.push('Preencha todos os campos');
            } else {
                try {
                    const response = await axios.post('https://tcc-perr-backend-h5b7.onrender.com/vagas', this.vagaCadastro);
                    this.message = 'Vaga cadastrada com sucesso!';
                    // Limpar o formulário de cadastro
                    this.vagaCadastro = { titulo: '', descricao: '', link: '', local: '', salario: '' };
                    this.getVagas();  // Atualizar a lista de vagas
                } catch (error) {
                    this.message = 'Erro ao cadastrar vaga: ' + (error.response ? error.response.data.message : error.message);
                }
            }
        },
        async updateData() {
            // Verifique se o ID da vaga existe antes de tentar atualizar
            console.log("ID da vaga a ser atualizado: ", this.vagaUpdate.idvagas);
            if (!this.vagaUpdate.titulo || !this.vagaUpdate.descricao || !this.vagaUpdate.link || !this.vagaUpdate.salario || !this.vagaUpdate.local) {
                this.nothing.push('Preencha todos os campos');
            } else if (!this.vagaUpdate.idvagas) {
                this.nothing.push('Erro: ID da vaga não encontrado!');
            } else {
                try {
                    // Usar o ID da vaga diretamente na URL
                    const response = await axios.put(`https://tcc-perr-backend-h5b7.onrender.com/vagas/${this.vagaUpdate.idvagas}`, this.vagaUpdate);
                    this.message = 'Vaga atualizada com sucesso!';
                    this.closeModal();  // Fecha o modal após a atualização
                    this.getVagas();  // Atualiza a lista de vagas
                } catch (error) {
                    this.message = 'Erro ao atualizar vaga: ' + (error.response ? error.response.data.message : error.message);
                }
            }
        },
        async getVagas() {
            try {
                const response = await axios.get('https://tcc-perr-backend-h5b7.onrender.com/vagas');
                this.vagas = response.data;
            } catch (error) {
                console.error('Erro ao buscar vagas:', error);
            }
        },
        async excluirVaga(idvagas) {
            if (confirm('Tem certeza que deseja excluir esta vaga?')) {
                try {
                    const response = await axios.delete(`https://tcc-perr-backend-h5b7.onrender.com/vagas/${idvagas}`);
                    this.message = response.data.message;
                    this.getVagas();  // Atualiza a lista de vagas após excluir
                } catch (error) {
                    this.message = 'Erro ao excluir vaga: ' + (error.response ? error.response.data.message : error.message);
                }
            }
        },
        fecharAlert(index) {
            this.nothing.splice(index, 1);
        }
    },
    mounted() {
        this.getVagas();
    }
}
</script>



<style scoped>

.container-modal{
    flex-direction: column;
    justify-content: start;
    align-items: center;
    z-index: 999;
    position: fixed;
    width: 50vw;
    height: 60vh;
    left: 25%;
    top: 22%;
    background-color: #FFF;
    box-shadow: 0px 0px 20000px 20000px #0000003f;
    border-radius: 5px;
    display: none;
}

.container-modal.modalOpen{
    display: flex;
}

.ttl{
    width: 90%;
    height: 15%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.xis{
    cursor: pointer;
}

.container{
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 30px 10%;
    justify-content: space-evenly;
    align-items: center;
}

h3{
    margin-bottom: 30px;
    font-size: 20px;
    font-weight: 500;
}

.form{
    width: 50%;
    height: 400px;
    background-color: rgb(252, 252, 252);
    border-radius: 5px;
    box-shadow: 1px 2px 2px #ccc;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}

.form-modal{
    width: 80%;
    height: 80%;
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
    margin: 10px 0;
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