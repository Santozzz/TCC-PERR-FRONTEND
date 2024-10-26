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
                    <input type="text" v-model="curriculo.telefone" placeholder="(12) 3456-7890" class="input-transparent">
                </div>
                <div>
                    <i class="fa-solid fa-envelope"></i>
                    <input type="text" v-model="curriculo.email" placeholder="ola@grandesite.com.br" class="input-transparent">
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
                    <input type="text" v-model="formacao.periodo" placeholder="2010 - 2014" class="input-transparent">
                    <input type="text" v-model="formacao.instituicao" placeholder="FACULDADE BORCELLE DE COMUNICAÇÃO" class="input-transparent">
                    <input type="text" v-model="formacao.curso" placeholder="Publicidade e Propaganda" class="input-transparent">
                </div>
                <button @click="adicionarFormacao">Adicionar Formação</button>
            </div>
            <!-- Experiências -->
            <div class="secao">
                <h3>EXPERIÊNCIAS</h3>
                <div v-for="(experiencia, index) in curriculo.experiencias" :key="index" class="experiencia">
                    <input type="text" v-model="experiencia.periodo" placeholder="2010 - 2014" class="input-transparent">
                    <input type="text" v-model="experiencia.empresa" placeholder="AGÊNCIA DE PUBLICIDADE LIA E CIA" class="input-transparent">
                    <input type="text" v-model="experiencia.cargo" placeholder="Redatora de Conteúdo" class="input-transparent">
                    <textarea v-model="experiencia.descricao" placeholder="Descreva suas atividades" class="input-transparent"></textarea>
                </div>
                <button @click="adicionarExperiencia">Adicionar Experiência</button>
            </div>
        </div>
        <button @click="gerarCurriculo" class="btn-gerar">Gerar Currículo</button>
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
            }
        };
    },
    methods: {
        adicionarFormacao() {
            this.curriculo.formacoes.push({ periodo: '', instituicao: '', curso: '' });
        },
        adicionarExperiencia() {
            this.curriculo.experiencias.push({ periodo: '', empresa: '', cargo: '', descricao: '' });
        },
        async gerarCurriculo() {
            const container = this.$refs.curriculoContainer;

            if (!container) {
                console.error('Erro: Elemento curriculoContainer não encontrado.');
                return;
            }

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
            }
        }
    }
};
</script>

<style scoped>
.container {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 30px 20%;
    justify-content: space-evenly;
    align-items: center;
}

.btn-gerar{
    margin-top: 50px;
    padding: 10px 30px;
    border: none;
    border-radius: 5px;
    background-color: #e78a20;
    color: #fff;
}

.curriculo-folha {
    width: 210mm;
    min-height: 297mm;
    padding: 20px;
    background: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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
    gap: 20px;
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
</style>
