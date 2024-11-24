<template>
    <div class="curriculo-page">
      <div class="curriculo-header">
        <img src="../../assets/img/Home/curriculo.jpg" alt="Imagem representativa" class="curriculo-img"/>
        <h1 class="curriculo-title">Como Criar um Currículo para o Mercado Brasileiro</h1>
      </div>
  
      <div class="curriculo-content">
        <section v-for="(section, index) in contentSections" :key="index" class="section">
          <h3 class="section-title">{{ section.title }}</h3>
          <p v-if="section.text">{{ section.text }}</p>
          <ul v-if="section.list">
            <li v-for="(item, idx) in section.list" :key="idx" class="list-item">{{ item }}</li>
          </ul>
        </section>
      </div>
       <!-- Botão de voltar -->
    <button @click="goBack" class="back-button">Voltar</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Curriculo',
    data() {
      return {
        contentSections: [
          {
            title: "1. Comece com um Cabeçalho Claro e Completo",
            text: "O cabeçalho do seu currículo deve ser simples, mas completo. Inclua as seguintes informações:",
            list: [
              "Nome completo",
              "E-mail",
              "Telefone de contato",
              "Endereço (opcional)",
              "Link para LinkedIn ou portfólio",
              
            ],
            
          },
          {
            text: "Se você tem um nome difícil de pronunciar, considere adicionar uma transcrição fonética ao lado, especialmente se a pronúncia correta for importante para o recrutador."
          },
          {
            title: "2. Objetivo Profissional: Seja Claro e Objetivo",
            text: "O objetivo profissional é uma breve declaração que resume suas metas de carreira e como você pode contribuir para a empresa. ",
            list:[
                "Exemplo: 'Busco uma oportunidade como analista de marketing, onde posso aplicar minhas habilidades em pesquisa de mercado e estratégias digitais para contribuir com o crescimento da empresa.' ",
            ],
          },

          {
            title: "3. Experiência Profissional: Detalhe Suas Contribuições",
            text: "Aqui, liste suas experiências profissionais de forma cronológica, começando pela mais recente. Para cada emprego, inclua:",

            list: [
              "Nome da empresa",
              "Período de atuação (mês e ano de início e término)",
              "Cargo",
              "Principais responsabilidades e conquistas – Foque em resultados alcançados, use dados quantitativos sempre que possível (ex: 'aumento de vendas em 20%' ou 'redução de custos em 10%' ",

            ]
          },

          {
            title: "4. Formação Acadêmica: Inclua Seu Grau de Escolaridade",
            text: "Se você tem ensino superior, técnico ou alguma formação relevante, inclua aqui. Caso você tenha estudado fora do Brasil, é recomendável incluir o nome da instituição e o país de origem para facilitar a compreensão. Não se esqueça de incluir:",

            list: [
              "Nome da instituição",
              "Grau obtido (ex: bacharel, técnico, etc.)",
              "Ano de conclusão - ou previsão de término",
            ],
            
            
          },

          {
            title: "5. Cursos e Certificados: Valorize Suas Capacitações",
            text: "Liste todos os cursos relevantes que você tenha feito, especialmente os que estão relacionados à vaga que você busca. Lembre-se de priorizar cursos de capacitação que agreguem valor para o cargo almejado, como cursos de idiomas, habilidades técnicas ou workshops de áreas específicas. Inclua:",

            list: [
              "Nome do curso",
              "Instituição responsável",
              "Ano de conclusão",
              
            ]
            
          },

          {
            title: "6. Idiomas: Mostre Suas Habilidades Linguísticas",
            text: "Se você fala mais de um idioma, especialmente o português, coloque isso de forma clara em seu currículo. Caso você tenha um bom nível de português, não deixe de destacar. O domínio de outros idiomas, como inglês ou espanhol, também deve ser ressaltado, pois é um grande diferencial. Inclua:",

            list: [
              "Idioma",
              "Nível de fluência (básico, intermediário, avançado, fluente)",

            ]
            
          },

          {
            title: "7. Habilidades e Competências: Mostre Suas Qualidades",
            text: "Habilidades e Competências: Mostre Suas Qualidades. Aqui você pode listar as habilidades mais importantes para o cargo que você está buscando. As empresas buscam cada vez mais profissionais com habilidades interpessoais (soft skills), por isso, não deixe de destacá-las. Exemplos:",

            list: [
              "Soft skills: Trabalho em equipe, comunicação eficaz, adaptabilidade, proatividade.",
              "Hard skills: Conhecimento em softwares específicos, ferramentas de design, programação, análise de dados.",

            ]
            
          },

          {
            title: "8. Informações Adicionais: Seja Transparente",
            text: "Se você tem experiência de voluntariado, participou de projetos relevantes ou tem alguma outra informação que possa ser importante para a vaga, coloque aqui. Isso pode incluir",

            list: [
              "Projetos sociais",
              "Atividades voluntárias",
              "Premiações ou reconhecimentos",
              "Publicações ou apresentações",

            ]
            
          },

          {
            title: "9. Dicas Finais para um Currículo de Sucesso",
            list: [
              "Seja objetivo e direto: O currículo não deve ser extenso. O ideal é que ele tenha no máximo 2 páginas.",
              "Adapte seu currículo para cada vaga: Ajuste o objetivo profissional e as experiências de acordo com o cargo que você está aplicando",
              "Evite erros de português: Revise cuidadosamente seu currículo, ou peça para alguém revisar por você.",
              "Seja honesto: Não minta sobre sua experiência ou qualificações."
            ]
          },

          {
            text: "Criar um currículo eficaz pode ser o primeiro passo para alcançar novas oportunidades no mercado de trabalho brasileiro. Lembre-se de que seu currículo é sua vitrine profissional, e deve refletir suas qualificações de maneira clara e atrativa. Com dedicação e as informações corretas, você estará mais preparado para se destacar para as empresas que buscam por talentos diversos e qualificados como você.",
          }
        ]
      }
    },
      methods: {
    goBack() {
      this.$router.back(); // Retorna para a página anterior
    }
  }
            }
  </script>
  
  <style scoped>
 /* Botão de voltar */
.back-button {
  position: fixed;
  top: 20px;
  left: 20px;
  background-color: #f78024;
  color: white;
  border: none;
  border-radius: 50px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.back-button:hover {
  background-color: #c7661b;
  transform: scale(1.1); /* Animação ao passar o mouse */
}

.back-button:active {
  transform: scale(1.05); /* Leve efeito ao clicar */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Reduz a sombra ao clicar */
}
  .curriculo-page {
    max-width: 60%;
    margin: 0 auto;
    padding: 20px;
    font-family: 'Arial', sans-serif;
  }
  
  .curriculo-header {
    text-align: center;
    margin-bottom: 30px
  }
  
  .curriculo-img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  .curriculo-title {
    font-size: 2em;
    margin-top: 20px;
    color: #f78024;
    font-weight: bold;
  }
  
  .curriculo-content {
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }
  
  .section {
    margin-bottom: 30px;
  }
  
  .section-title {
    font-size: 1.7em;
    color: #444;
    margin-bottom: 10px;
    font-weight: 600;
  }
  
  .section p, .section ul {
    font-size: 1.2em;
    color: #555;
    line-height: 1.6;
  }
  
  .list-item {
    margin-left: 50px;
  }
  
  @media (max-width: 768px) {
    .curriculo-page {
      padding: 15px;
    }
  
    .curriculo-title {
      font-size: 1.8em;
    }
  
    .section-title {
      font-size: 1.2em;
    }
  }
  </style>