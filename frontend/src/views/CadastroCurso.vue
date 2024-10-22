<template>
    <div>
        <NavbarAdm />
        <div class="container">
            <h3>Cadastro de Cursos</h3>
            {{ message }}
            <!-- Formulário de Cadastro -->
            <form class="form" method="POST" @submit.prevent="submitData">
                <label>Titulo:</label>
                <input class="data-ttl" type="text" v-model="cursoCadastro.titulo">
                <label>Fonte( nome do canal ):</label>
                <input class="data-ttl" type="text" v-model="cursoCadastro.fonte">
                <label>Descrição:</label>
                <textarea v-model="cursoCadastro.descricao" class="data-desc"></textarea>
                <label>Link:</label>
                <input class="data-ttl" type="text" v-model="cursoCadastro.link">
                <input class="submit" type="submit" value="Inserir Curso">
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

                <div v-for="(curso, index) in cursos" :key="index" class="tr">
                    <div class="id-col"><p>{{ curso.idcursos }}</p></div> <!-- ID da curso -->
                    <div class="col"><p>{{ curso.titulo }}</p></div> <!-- Título da curso -->
                    <div class="col">
                        <div class="btn">
                            <button @click="openModal(curso)">Editar</button>
                        </div>
                        <div class="btn">
                            <button @click="excluirCurso(curso.idcursos)">Excluir</button>
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
                    <input class="data-ttl" type="text" v-model="cursoUpdate.titulo">
                    <label>Fonte( nome do canal ):</label>
                    <input class="data-ttl" type="text" v-model="cursoUpdate.fonte">
                    <label>Descrição:</label>
                    <textarea v-model="cursoUpdate.descricao" class="data-desc"></textarea>
                    <label>Link:</label>
                    <input class="data-ttl" type="text" v-model="cursoUpdate.link">
                    <input class="submit" type="submit" value="Atualizar Curso">
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import NavbarAdm from '@/components/ALL/Navbar-adm.vue';
import axios from 'axios'

export default {
    name: 'CadastroCurso',
    components: {
        NavbarAdm,
    },
    data() {
        return {
            showModal: false,
            // Objeto para o formulário de cadastro
            cursoCadastro: {
                titulo: '',
                descricao: '',
                fonte: '',
                link: '',
            },
            // Objeto para o formulário de atualização
            cursoUpdate: {
                idcursos: '',
                titulo: '',
                descricao: '',
                fonte: '',
                link: '',
            },
            cursos: [],  // Lista de cursos
            nothing: [],  // Para mensagens de erro
            message: ''  // Mensagens de sucesso ou erro
        }
    },
    methods: {
        openModal(curso) {
            // Abre o modal e carrega a curso a ser editada
            this.cursoUpdate = { ...curso }; // Inclui o ID da curso na edição
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        },
        async submitData() {
            if (!this.cursoCadastro.titulo || !this.cursoCadastro.descricao || !this.cursoCadastro.link || !this.cursoCadastro.fonte) {
                this.nothing.push('Preencha todos os campos');
                return; // Impede o envio se os campos não estiverem preenchidos
            } 
            try {
                const response = await axios.post('http://localhost:3000/cursos', this.cursoCadastro);
                this.message = 'Curso cadastrado com sucesso!';
                this.cursoCadastro = { titulo: '', descricao: '', link: '', fonte: '' }; // Limpa os campos após o cadastro
                this.getCursos();  // Atualiza a lista de cursos
            } catch (error) {
                console.error('Erro ao cadastrar curso:', error); // Log detalhado do erro no console
                this.message = 'Erro ao cadastrar curso: ' + (error.response ? error.response.data.message : error.message);
            }
        },
        async updateData() {
            if (!this.cursoUpdate.titulo || !this.cursoUpdate.descricao || !this.cursoUpdate.link) {
                this.nothing.push('Preencha todos os campos');
                return; // Impede o envio se os campos não estiverem preenchidos
            }
            if (!this.cursoUpdate.idcursos) {
                this.nothing.push('Erro: ID do curso não encontrado!');
                return;
            }
            try {
                const response = await axios.put(`http://localhost:3000/cursos/${this.cursoUpdate.idcursos}`, this.cursoUpdate);
                this.message = 'Curso atualizado com sucesso!';
                this.closeModal();
                this.getCursos();  // Atualiza a lista de cursos após a edição
            } catch (error) {
                console.error('Erro ao atualizar curso:', error);
                this.message = 'Erro ao atualizar curso: ' + (error.response ? error.response.data.message : error.message);
            }
        },
        async getCursos() {
            try {
                const response = await axios.get('http://localhost:3000/cursos');
                this.cursos = response.data; // Certifica-se de que a resposta é um array de cursos
            } catch (error) {
                console.error('Erro ao buscar cursos:', error);
                this.message = 'Erro ao carregar cursos';
            }
        },
        async excluirCurso(idcursos) {
            if (confirm('Tem certeza que deseja excluir este curso?')) {
                try {
                    const response = await axios.delete(`http://localhost:3000/cursos/${idcursos}`);
                    this.message = response.data.message || 'Curso excluído com sucesso!';
                    this.getCursos();  // Atualiza a lista de cursos após a exclusão
                } catch (error) {
                    console.error('Erro ao excluir curso:', error);
                    this.message = 'Erro ao excluir curso: ' + (error.response ? error.response.data.message : error.message);
                }
            }
        },

        fecharAlert(index) {
            this.nothing.splice(index, 1);
        }
    },
    mounted() {
        this.getCursos();
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
    background-color: #e71760;
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