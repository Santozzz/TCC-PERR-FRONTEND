<template>
    <div class="container">
        <div ref="curriculoContainer" class="curriculo-folha">
            <!-- Cabeçalho com nome e profissão -->
            <div class="header">
                <input type="text" v-model="curriculo.nome" placeholder="Nome" class="input-transparent nome">
                <input type="text" v-model="curriculo.profissao" placeholder="Sua profissão" class="input-transparent profissao">
            </div>
            <!-- Contatos -->
            <div class="contatos">
                <div>
                    <i class="fa-solid fa-phone"></i>
                    <input type="text" v-model="curriculo.telefone" placeholder="Telefone" class="input-transparent">
                </div>
                <div>
                    <i class="fa-solid fa-envelope"></i>
                    <input type="text" v-model="curriculo.email" placeholder="Email" class="input-transparent">
                </div>
            </div>
            <!-- Objetivos -->
            <div class="secao">
                <h3>OBJETIVOS</h3>
                <textarea v-model="curriculo.objetivo" placeholder="Descreva seu objetivo aqui..." class="input-transparent"></textarea>
            </div>
            <!-- Formação -->
            <div class="secao">
                <h3>FORMAÇÃO</h3>
                <div v-for="(formacao, index) in curriculo.formacoes" :key="index" class="formacao">
                    <input type="text" v-model="formacao.periodo" placeholder="Período" class="input-transparent">
                    <input type="text" v-model="formacao.instituicao" placeholder="Instituição" class="input-transparent">
                    <input type="text" v-model="formacao.curso" placeholder="Curso" class="input-transparent">
                    <button @click="removerFormacao(index)" class="btn-remover">Remover Formação</button>
                </div>
                <button @click="adicionarFormacao" class="btn-add">Adicionar Formação</button>
            </div>
            <!-- Experiências -->
            <div class="secao">
                <h3>EXPERIÊNCIAS</h3>
                <div v-for="(experiencia, index) in curriculo.experiencias" :key="index" class="experiencia">
                    <input type="text" v-model="experiencia.periodo" placeholder="Período" class="input-transparent">
                    <input type="text" v-model="experiencia.empresa" placeholder="Empresa" class="input-transparent">
                    <input type="text" v-model="experiencia.cargo" placeholder="Função" class="input-transparent">
                    <textarea v-model="experiencia.descricao" placeholder="Descreva suas atividades" class="input-transparent"></textarea>
                    <button @click="removerExperiencia(index)" class="btn-remover">Remover Experiência</button>
                </div>
                <button @click="adicionarExperiencia" class="btn-add">Adicionar Experiência</button>
            </div>
        </div>
        <button @click="abrirModal" class="btn-gerar">Gerar Currículo</button>

        <!-- Modal -->
        <div v-if="modalAberto" class="modal">
            <div class="modal-conteudo">
                <h2>Conta não validada</h2>
                <p>
                    Para gerar seu currículo, sua conta precisa ser validada, 
                    para isso clique em validar e espere uma mensagem no seu whatsapp.
                </p>
                <button @click="fecharModal" class="btn-fechar">validar</button>
            </div>
        </div>
    </div>
</template>

<script>
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default {
    data() {
        return {
            curriculo: {
                nome: '',
                profissao: '',
                telefone: '',
                email: '',
                objetivo: '',
                formacoes: [
                    { periodo: '', instituicao: '', curso: '' }
                ],
                experiencias: [
                    { periodo: '', empresa: '', cargo: '', descricao: '' }
                ]
            },
            modalAberto: false
        };
    },
    methods: {
        abrirModal() {
            this.modalAberto = true;
        },
        fecharModal() {
            this.modalAberto = false;
        },
        adicionarFormacao() {
            this.curriculo.formacoes.push({ periodo: '', instituicao: '', curso: '' });
        },
        removerFormacao(index) {
            this.curriculo.formacoes.splice(index, 1);
        },
        adicionarExperiencia() {
            this.curriculo.experiencias.push({ periodo: '', empresa: '', cargo: '', descricao: '' });
        },
        removerExperiencia(index) {
            this.curriculo.experiencias.splice(index, 1);
        },
        async gerarCurriculo() {
            const container = this.$refs.curriculoContainer;

            if (!container) {
                console.error('Erro: Elemento curriculoContainer não encontrado.');
                return;
            }

            // Adiciona a classe de ocultação antes de gerar o PDF
            container.classList.add('ocultar-botoes');

            try {
                const canvas = await html2canvas(container, { scale: 2 });
                const imgData = canvas.toDataURL('image/png');

                const pdf = new jsPDF({
                    orientation: 'portrait',
                    unit: 'mm',
                    format: 'a4'
                });

                const imgWidth = 190;
                const imgHeight = (canvas.height * imgWidth) / canvas.width;

                pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
                pdf.save('curriculo.pdf');
            } catch (error) {
                console.error('Erro ao gerar PDF:', error);
            } finally {
                // Remove a classe de ocultação após a geração do PDF
                container.classList.remove('ocultar-botoes');
            }
        }
    }
};
</script>

<style scoped>

.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}
.modal-conteudo {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    width: 40%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.modal-conteudo p {
    width: 70%;
    margin: 10px 0 10px 0;
}
.btn-fechar {
    padding: 10px;
    background-color: #e9830e;
    color: #fff;
    text-transform: uppercase;
    border: none;
    border-radius: 5px;
    letter-spacing: 1px;
    cursor: pointer;
}
/* Classe para ocultar botões durante a geração do PDF */
.ocultar-botoes .btn-remover, .ocultar-botoes .btn-add {
    display: none;
}

.btn-remover {
    background-color: #ff4d4d;
    color: white;
    border: none;
    padding: 5px 10px;
    margin-top: 5px;
    cursor: pointer;
    border-radius: 5px;
}
.btn-add {
    background-color: #e9830e;
    color: white;
    border: none;
    padding: 5px 10px;
    margin-top: 5px;
    cursor: pointer;
    border-radius: 5px;
}

/* Definição base para o layout */
.container {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 10px 0 0 20%;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
}

.btn-gerar {
    margin-top: 20px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #e78a20;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
}

.curriculo-folha {
    width: 90%;
    max-width: 800px;
    padding: 20px;
    background: white;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.61);
    font-family: Arial, sans-serif;
}

.header {
    text-align: center;
}

.nome {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    border: none;
}

.profissao {
    font-size: 16px;
    color: gray;
    text-align: center;
    border: none;
}

.contatos {
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
    margin-top: 10px;
}

.secao {
    margin-top: 20px;
}

.input-transparent {
    width: 100%;
    border: none;
    border-bottom: 1px solid gray;
    margin-top: 5px;
}

textarea.input-transparent {
    width: 100%;
    height: 60px;
    resize: none;
}

textarea:focus, input:focus{
    outline: none;
}

/* Media queries para responsividade */
@media screen and (max-width: 1260px) {
    .container {
        margin: 40px auto;
        width: 100%;
    }
}
@media (max-width: 768px) {
    .nome {
        font-size: 20px;
    }

    .profissao {
        font-size: 14px;
    }

    .btn-gerar {
        padding: 8px 16px;
        font-size: 14px;
    }

    .input-transparent {
        font-size: 14px;
    }
}

@media (max-width: 480px) {
    .curriculo-folha {
        padding: 10px;
    }

    .nome {
        font-size: 18px;
    }

    .profissao {
        font-size: 12px;
    }

    .btn-gerar {
        padding: 6px 12px;
        font-size: 12px;
    }

    .input-transparent {
        font-size: 12px;
    }

    .contatos {
        flex-direction: column;
        align-items: center;
        gap: 5px;
    }
}

</style>
