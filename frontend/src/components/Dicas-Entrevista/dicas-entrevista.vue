<template>
    <div class="entrevista-page">
      <div class="entrevista-header">
        <img src="../../assets/img/Home/entrevista.jpg" alt="Imagem representativa" class="entrevista-img"/>
        <h1 class="entrevista-title">Dicas Essenciais para Brilhar em Entrevistas de Emprego: Como se Preparar, Superar Desafios e Se Destacar</h1>
      </div>
  
      <div class="entrevista-content">
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
    name: 'Entrevista',
    data() {
      return {
        contentSections: [
          {
            title: "1. Pesquise Sobre a Empresa",
            text: "Antes da entrevista, procure informações sobre a empresa. Entenda seus valores, missão e atividades principais. Mostre ao entrevistador que você conhece o local onde deseja trabalhar. Dicas para essa etapa:",
            list: [
              "Visite o site oficial da empresa.",
              "Pesquise notícias relacionadas à empresa.",
              "Descubra informações sobre os produtos ou serviços oferecidos.",
              
            ],
            
          },
          {
            text: "💡 Demonstre interesse dizendo algo como: “Gostei muito de saber que a empresa se preocupa com diversidade e inclusão, algo que valorizo bastante.”"
          },
          {
            title: "2. Revise Seu Currículo",
            text: "Os entrevistadores normalmente baseiam as perguntas nas informações do seu currículo. Certifique-se de lembrar os detalhes sobre:",
            list:[
                "Suas experiências profissionais anteriores.",
                "Habilidades e cursos que você listou.",
                "Conquistas relevantes para a vaga.",
            ],
          },
          {
            text: "💡 Esteja pronto para explicar como suas experiências no exterior ou em situações desafiadoras podem agregar valor à empresa."
          },
          {
            title: "3. Pratique Sua Comunicação",
            text: "Se você não se sente completamente à vontade com o português, treine respostas para perguntas comuns, como:",

            list: [
              "Fale um pouco sobre você.",
              "Por que você quer trabalhar aqui?",
              "Quais são suas principais qualidades e pontos a melhorar?",

            ]
          },
          {
            text: "💡 Peça para um amigo ou familiar simular uma entrevista com você, ou grave suas respostas e analise como pode melhorá-las."
          },

          {
            title: "4. Vista-se de Forma Adequada",
            text: "A roupa que você usa na entrevista é importante para causar uma boa primeira impressão. Prefira um estilo profissional e discreto:",

            list: [
              "Camisas ou blusas neutras.",
              "Calças sociais ou jeans escuros.",
              "Sapatos limpos e adequados ao ambiente da empresa.",
            ],
          },
          {
            text: "💡 Se não souber o estilo de vestimenta esperado, pergunte ao recrutador ou opte por algo mais formal."
          },
          {
            title: "5. Seja Pontual",
            text: "Chegar atrasado pode causar uma má impressão. Planeje-se para chegar ao local da entrevista com pelo menos 10 minutos de antecedência. Caso a entrevista seja online:",

            list: [
              "Verifique sua conexão de internet.",
              "Teste câmera e microfone antes da reunião.",
              "Escolha um ambiente tranquilo e bem iluminado.",
              
            ]
            
          },

          {
            title: "6. Mostre Confiança e Interesse",
            text: "Durante a entrevista, mantenha contato visual e mostre entusiasmo ao falar sobre suas experiências e habilidades. Algumas dicas de comportamento incluem:",

            list: [
              "Cumprimente o entrevistador com um sorriso e um aperto de mão firme (se for presencial).",
              "Nível de fluência (básico, intermediário, avançado, fluente)",
                "Responda de forma clara e objetiva, sem se alongar demais.",
                "Demonstre interesse na vaga, perguntando sobre a rotina do trabalho ou o ambiente da empresa.",
            ]
            
          },

          {
            title: "7. Destaque Suas Qualidades",
            text: "Mesmo que você tenha pouca experiência no mercado de trabalho brasileiro, mostre suas qualidades, como:",

            list: [
              "Adaptabilidade.",
              "Trabalho em equipe.",
              "Capacidade de aprender rapidamente.",


            ]
            
          },
          {
            text: "💡 Fale sobre situações em que você superou desafios ou mostrou dedicação, como: “Quando cheguei ao Brasil, tive que aprender uma nova língua e me adaptar rapidamente. Isso me ajudou a desenvolver minha capacidade de resolver problemas.”"
          },
          {
            title: "8. Prepare-se para Perguntas Desafiadoras",
            text: "Algumas perguntas podem ser mais complexas. Esteja preparado para responder a questões como:",

            list: [
              "Por que você deixou seu último emprego?",
              "Como você lida com situações difíceis?",
              "Por que deveríamos contratá-lo?",

            ]
            
          },
          {
            text: "💡 Responda sempre com honestidade e mostre sua disposição para contribuir com a empresa."
          },
          {
            title: "9. Pergunte Também",
            text: "Ao final da entrevista, a maioria dos entrevistadores pergunta se você tem dúvidas. Aproveite para demonstrar interesse, perguntando, por exemplo:",
            list: [
              "Quais são os próximos passos do processo seletivo?",
              "Qual o perfil de um profissional de sucesso nesta empresa?",
              "Evite erros de português: Revise cuidadosamente seu currículo, ou peça para alguém revisar por você.",
              "Seja honesto: Não minta sobre sua experiência ou qualificações."
            ]
          },
          {
            title: "10. Agradeça e Siga em Frente",
            text: "Independentemente do resultado, agradeça ao entrevistador pela oportunidade. Após a entrevista, reflita sobre o que pode ser melhorado para futuras oportunidades.",
          },
          {
            text: "💡 Se possível, envie uma mensagem de agradecimento, reforçando seu interesse pela vaga."
          },
          {
            title: "Considerações Finais",
            text: "A entrevista de emprego é uma chance de mostrar quem você é e como pode contribuir para a empresa. Ao se preparar com antecedência, você estará mais confiante e pronto para destacar suas qualidades. Lembre-se: sua história, habilidades e experiências são únicas, e muitas empresas valorizam a diversidade que você pode trazer ao ambiente de trabalho. Boa sorte!",
          },
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
  .entrevista-page {
    max-width: 60%;
    margin: 0 auto;
    padding: 20px;
    font-family: 'Arial', sans-serif;
  }
  
  .entrevista-header {
    text-align: center;
    margin-bottom: 30px
  }
  
  .entrevista-img {
    max-width: 50%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  .entrevista-title {
    font-size: 2em;
    margin-top: 20px;
    color: #f78024;
    font-weight: bold;
  }
  
  .entrevista-content {
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
    .entrevista-page {
      padding: 15px;
    }
  
    .entrevista-title {
      font-size: 1.8em;
    }
  
    .section-title {
      font-size: 1.2em;
    }
  }
  </style>