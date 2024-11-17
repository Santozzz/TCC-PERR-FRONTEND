<template>
    <div>
        <div class="container">
            <div class="header">
                <div class="user-notify">
                    <p>[Usuario]</p>
                    <!-- <i class="fa-solid fa-bell" :class="{ 'notifyOpen': isBellNotify }" @click="toggleNotify"></i>
                    <div class="notifications" :class="['notify', { 'notifyOpen': isBellNotify }]">
                        <h4>Notificações</h4>
                        <div class="container-notify">
                            <div class="verify" v-if="notifys.length">
                                <div v-for="(notify, index) in notifys" :key="index" class="notify">
                                    <div class="space">
                                        {{ notify }}
                                        <button>Abrir</button>
                                    </div>
                                </div>
                            </div>
                            <div class="not-notify" v-else>
                                <img src="../../assets/img/Home/img-notNotify.jpg" alt="">
                                <p>Você não tem nenhuma notificação</p>
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
        <section class="apresentacao">
            <div class="conteudo-apresentacao">
                <div class="texto">
                    <h1>Conectando Refugiados no Mercado de Trabalho</h1>
                    <p>
                        Nossa plataforma facilita a integração de refugiados ao mercado de trabalho, conectando-os com empresas que buscam promover diversidade e inclusão em suas equipes. Oferecemos aos refugiados a oportunidade de mostrar suas habilidades e experiências, enquanto proporcionamos às empresas o acesso a um pool de talentos diversificados e comprometidos.
                    </p>
                </div>
            <div class="imagem">
                <img src="@/assets/img/home/categ-adm.jpg" alt="Imagem representativa" />
            </div>
            
            </div>
        </section>

                <div class="highlighted-section">
                    <h2>Impulsione sua Vida Profissional!</h2>
                    <div class="cards2-container">
                        <div class="card2" v-for="(card, index) in cards" :key="index">
                            <div class="icon">
                                <i :class="card.icon"></i>
                            </div>
                            <h3>{{ card.title }}</h3>
                            <p>{{ card.description }}</p>
                        </div>
                    </div>
                </div>
                <div class="gridCards">
                <div class="container-cursos">
                    <h4>Confira os cursos disponíveis!</h4>
                    <div class="row">
                        <div class="cardPrincipal">
                            <div class="spaceCardPrincipal">
                                <div class="banner-img"></div>
                                <div class="display-video">
                                    <div class="legenda">
                                        <p>Curso de HTML e CSS completo.</p>
                                        <p>Otávio Miranda</p>
                                    </div>
                                    <div class="container-btn">
                                        <button @click="redirectTo('https://www.youtube.com/watch?v=bCFTv8a59PE&list=PLbIBj8vQhvm00J3f3rD33tRuNLem8EgEA')">
                                            Assistir<i class="fa-solid fa-play"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container-cardSecundarios">
                            <div class="rowCardCourse">
                                <div class="card">
                                    <a 
                                        href="https://www.youtube.com/watch?v=yZ1eLvSGtcE&list=PL9Q7wXUcss37yi8sYd10ExPtXC9m_u6D8" 
                                        target="_blank" 
                                        class="spaceCardSecundario">
                                        <div class="banner-imgSec-1"></div>
                                        <div class="display-videoSec">
                                        <div class="legenda-cardSec">
                                            <p>Curso de Automação Industrial</p>
                                            <p>Gesep</p>
                                        </div>
                                        <div class="container-btnSec">
                                        <button>
                                         Assistir<i class="fa-solid fa-play"></i>
                                        </button>
                                        </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="card">
                                    <a 
                                        href="https://www.youtube.com/watch?v=kxEAs2PC-UM&list=PLAP3mwpdry2urruth81GDwMyr71bMOutV" 
                                        target="_blank" 
                                        class="spaceCardSecundario">
                                        <div class="banner-imgSec-2"></div>
                                        <div class="display-videoSec">
                                        <div class="legenda-cardSec">
                                            <p>Curso de Logística</p>
                                            <p>ARB15</p>
                                        </div>
                                        <div class="container-btnSec">
                                        <button>
                                         Assistir<i class="fa-solid fa-play"></i>
                                        </button>
                                        </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="rowCardCourse">
                                <div class="card">
                                    <a 
                                        href="https://www.youtube.com/watch?v=g6eC2MQ1Kv8&list=PLZ65xj2SRHQB0T2GGk-R7bYxorKUkcyoj" 
                                        target="_blank" 
                                        class="spaceCardSecundario">
                                        <div class="banner-imgSec-3"></div>
                                        <div class="display-videoSec">
                                        <div class="legenda-cardSec">
                                            <p>Curso de Inglês Básico</p>
                                            <p>EnglishBay</p>
                                        </div>
                                        <div class="container-btnSec">
                                        <button>
                                         Assistir<i class="fa-solid fa-play"></i>
                                        </button>
                                        </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="card">
                                <a 
                                    href="https://www.youtube.com/watch?v=w8nI8BBZbSw&list=PLF2J-8QoLzYFC87vgMZ_cqIZLE5qShbyB" 
                                    target="_blank" 
                                    class="spaceCardSecundario">
                                    <div class="banner-imgSec-4"></div>
                                    <div class="display-videoSec">
                                    <div class="legenda-cardSec">
                                        <p>Curso de Língua Portuguesa</p>
                                        <p>Canal: Aula De   </p>
                                    </div>
                                    <div class="container-btnSec">
                                    <button>
                                        Assistir<i class="fa-solid fa-play"></i>
                                    </button>
                                    </div>
                                </div>
                                </a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="how-it-works">
                <h2>Como Funciona?</h2>
                <div class="steps-container">
                <!-- Passo 1 -->
                <div class="step">
                <div class="step-icon">
                <i class="fas fa-user-plus"></i>
                </div>
                <div class="step-content">
                <h3>Criação de Perfil</h3>
                <p>Refugiados criam um perfil com currículo validado.</p>
                </div>
            </div>
        
                <div class="line"></div> <!-- Linha de Conexão -->

                <!-- Passo 2 -->
                <div class="step">
                <div class="step-icon">
                <i class="fas fa-briefcase"></i>
                </div>
                <div class="step-content">
                <h3>Vagas de Emprego</h3>
                <p>Empresas postam vagas e encontram talentos.</p>
            </div>
        </div>

        <div class="line"></div> <!-- Linha de Conexão -->

        <!-- Passo 3 -->
        <div class="step">
          <div class="step-icon">
            <i class="fas fa-handshake"></i>
          </div>
          <div class="step-content">
            <h3>Conexão Facilitada</h3>
            <p>A plataforma facilita a conexão entre ambos.</p>
          </div>
        </div>
        
      </div>
      <!-- Seção de Benefícios -->
      <section class="beneficios-timeline">
      <h2>Benefícios</h2>
      <div class="timeline">
        <div class="timeline-item" v-for="(benefit, index) in benefits" :key="index">
          
          <div class="content">
            
          <!-- Adicionando ícones ao lado do título -->
          <div class="icon-title">
            <i :class="benefit.iconClass" class="benefit-icon"></i>

            <h3>{{ benefit.title }} <i class="fas fa-check-circle check-icon"></i></h3>
            </div>
            <p>{{ benefit.description }}</p>
          </div>
          </div>
    </div>
    </section>
    <section class="plano-empresas-card5">
    <div class="card5">
      <h2>Plano para Empresas</h2>
      <p class="preco">Apenas <span>R$ 13,99/mês</span></p>
      <p class="descricao">
        Conecte-se com talentos diversos e promova a inclusão em sua empresa. Com nosso plano acessível, você pode encontrar profissionais qualificados que fazem a diferença.
      </p>
      <button class="btn5-assinar">Assine Agora</button>
      <p>(Somente Empresas)</p>
      
      <div class="beneficios">
        <h3>Benefícios ao Assinar:</h3>
        <ul>
          <li><i class="fas fa-check-circle"></i> Acesso a perfis de profissionais qualificados</li>
          <li><i class="fas fa-check-circle"></i> Suporte exclusivo para empresas</li>
          <li><i class="fas fa-check-circle"></i> Destaque em nossa plataforma</li>
          <li><i class="fas fa-check-circle"></i> Contribua para a diversidade e inclusão</li>
        </ul>
      </div>
    </div>
  </section>
    </div>
    <section class="faq-section">
            <h2>Perguntas Frequentes</h2>
        <div class="faq-container">
        <div class="faq-item">
            <h3>A plataforma é gratuita?</h3>
            <p>A plataforma oferece acesso totalmente gratuito para refugiados e imigrantes em busca de oportunidades de emprego ou cursos de capacitação. As empresas, por sua vez, têm a opção de aderir a um plano mensal, com a contrapartida de benefícios exclusivos.</p>
        </div>
        <div class="faq-item">
            <h3>(EMPRESAS) Como garantir que os candidatos tenham as habilidades descritas no currículo?</h3>
            <p>A plataforma incentiva e oferece a verificação de informações pelos candidatos através de entrevistas ou testes para validação.</p>
        </div>
        <div class="faq-item">
            <h3>Como os refugiados podem criar um perfil?</h3>
            <p>Os refugiados podem se cadastrar gratuitamente e adicionar o currículo na plataforma.</p>
        </div>
        <div class="faq-item">
            <h3>Preciso de documentos para a validação?</h3>
            <p>Sim, é necessário documentos que comprovem seu status.</p>
        </div>
        <div class="faq-item">
        <h3>Posso editar meu perfil e currículo depois de criado?</h3>
        <p>Sim, você pode atualizar suas informações a qualquer momento para refletir novas experiências e habilidades.</p>
    </div>
    <div class="faq-item">
      <h3>Preciso instalar algum software para usar a plataforma?</h3>
      <p>Não, tudo funciona diretamente no navegador, sem necessidade de downloads ou instalações.</p>
    </div>
  </div>
    </section>
</div>
    </div>
  </div>
</template>

<script>
export default {

    name: 'Apresentacao',

    data() {
        return {
            isBellNotify: false,
            notifys: [],

            

            courses: [
        {
          name: "Curso industrial",
          link: "https://youtube.com/curso-industrial",
          bannerClass: "banner-imgSec-1",
        },
        {
          name: "Curso de logística",
          link: "https://youtube.com/curso-logistica",
          bannerClass: "banner-imgSec-2",
        },
        {
          name: "Curso de inglês",
          link: "https://youtube.com/curso-ingles",
          bannerClass: "banner-imgSec-3",
        },
        {
          name: "Curso de Língua Portuguesa",
          link: "https://youtube.com/curso-portugues",
          bannerClass: "banner-imgSec-4",
        },
      ],
            
            


            benefits: [
        {
          title: "Conexões Rápidas",
          description: "Conecte-se rapidamente com empresas que buscam talentos diversificados.",
          iconClass: "fas fa-plug" // Ícone para conexões rápidas
        },
        {
          title: "Perfil Personalizado",
          description: "Crie um perfil único que destaca suas habilidades e experiências.",
          iconClass: "fas fa-user-edit" // Ícone para perfil personalizado
        },
        {
          title: "Suporte Contínuo",
          description: "Receba suporte contínuo durante todo o processo de integração.",
          iconClass: "fas fa-life-ring" // Ícone para suporte contínuo
        }
      ]

            ,cards: [
        {
          icon: "fas fa-briefcase",  // Exemplo de ícone do Font Awesome
          title: "Vagas Disponíveis",
          description: "Explore vagas de empresas inclusivas."
        },
        {
          icon: "fas fa-graduation-cap",  // Exemplo de ícone do Font Awesome
          title: "Cursos Gratuitos",
          description: "Aprimore suas habilidades com cursos online."
        },
        {
          icon: "fas fa-user-check",  // Exemplo de ícone do Font Awesome
          title: "Conexão",
          description: "Conecte-se com empresas que valorizam a diversidade."
        }
      ]
      
        }
    },
    methods: {
        toggleNotify() {
            this.isBellNotify = !this.isBellNotify;
        }

        ,redirectTo(url) {
      window.open(url, "_blank");
    },

        
    }
    
}
</script>

<style scoped>

.card5 {
    transition: transform 0.3s ease, box-shadow 0.3s ease; /* Transição suave */
}

.card5:hover{
    transform: translateY(-10px); /* Move o card para cima */
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2); /* Aumenta a sombra */
}

.card {
    transition: transform 0.3s ease, box-shadow 0.3s ease; /* Transição suave */
}

.card:hover {
  transform: translateY(-10px); /* Move o card para cima */
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2); /* Aumenta a sombra */
}

.plano-empresas-card5 {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  background-color: #f4f4f9;
}

.card5 {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 30px;
  max-width: 400px;
  text-align: center;
  border: 2px solid #f78024; /* Contorno do card */
  display: flex;
  flex-direction: column; /* Organiza os itens em coluna */
  align-items: center; /* Centraliza os itens dentro do card */
}

.card5 h2 {
  font-size: 24px;
  color: #252f3f;
  margin-bottom: 15px;
}

.preco span {
  font-size: 20px;
  font-weight: bold;
  color: #f78024;
}

.descricao {
  font-size: 14px;
  color: #555;
  margin: 10px 0 20px;
}

.btn5-assinar {
  background-color: #f78024;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;
  transition: background-color 0.3s;
}

.btn5-assinar:hover {
  background-color: #e06c20;
}

/* Benefícios */
.beneficios {
  text-align: center;
  margin-top: 20px;
}

.beneficios h3 {
  font-size: 18px;
  color: #252f3f;
  margin-bottom: 10px;
}

.beneficios ul {
  list-style: none;
  padding: 0;
  justify-content: center;
  flex-wrap: wrap; 
   
}

.beneficios li {
  font-size: 14px;
  color: #555;
  margin: 8px 0;
  display: flex;
  align-items: center;
  padding-left: 20px;
  width: 100%;
}

.beneficios li i {
  color: #28a745;
  margin-right: 8px;
  font-size: 16px;
}

.faq-section {
  padding: 40px 20px;
  background-color: #f9f9f9; /* Cor de fundo da seção */
  width:102%;
  margin-right: 0px;
}

.faq-section h2 {
  text-align: center;
  font-size: 32px;
  margin-bottom: 20px;
  color: #333;
}

.faq-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Define duas colunas de tamanho igual */
  gap: 20px; /* Espaçamento entre os itens */
}

.faq-item {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: left;
}

.faq-item h3 {
  font-size: 18px;
  margin-bottom: 10px;
  color: #252F3F;
}

.faq-item p {
  font-size: 16px;
  color: #555;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .faq-container {
    grid-template-columns: 1fr; /* Uma única coluna em telas menores */
  }

  /* Ajustar o título para telas menores */
  .faq-section h2 {
    font-size: 24px;
  }

  /* Ajustar o tamanho do texto dentro da FAQ */
  .faq-item h3 {
    font-size: 16px;
  }

  .faq-item p {
    font-size: 14px;
  }
}

.card a{
    text-decoration: none;
  color: #333;
}



.home {
  padding: 20px;
  text-align: center;
}

h1 {
  font-size: 36px;
  color: #333;
  margin-bottom: 20px;
}

.beneficios-timeline {
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
}


.beneficios-timeline h2 {
  font-size: 33px;
  color: #333;
  margin-bottom: 30px;
}

.timeline {
    display: flex;
  margin-bottom: 15px;
  width: 90%; /* Garante que os itens ocuparam toda a largura */
  flex-wrap: nowrap; /* Permite que os itens se ajustem conforme o tamanho da tela */
  justify-content: space-around;
  margin-right: 30px;
}

.timeline-item {
  display: flex;
  align-items: center;
  margin-bottom: 0px;
  position: relative;
  flex: 1; /* Faz com que cada item ocupe o mesmo espaço */
    text-align: center; /* Centraliza o conteúdo */
    margin: 0 20px;
}
.content {
    padding-left: 5px;
  text-align: center;
 width: 100%;

}

.content h3 {
  font-size: 21px;
  margin-bottom: 10px;
  flex-grow: 1; /* Faz o título crescer para ocupar o espaço restante */
  word-wrap: break-word;
  margin: 0;
}

.content p {
  font-size: 17px;
  color: #555;
}

/* Estilos para os ícones ao lado do título */
.icon-title {
  display: flex;
  align-items: center;
  justify-content: flex-start; /* Alinha horizontalmente */
   gap: 8px;
  
}

.benefit-icon {
  font-size: 24px;
  color: #F78024; /* Cor do ícone */
  margin-right: 20px;
  margin-left: 10px; 
}

.check-icon {
  color: green; /* Ícone de verificação verde */
}

/* Estilos Responsivos */
@media (max-width: 768px) {
  .timeline-item {
    flex-basis: 100%; /* Cada item ocupará 100% da largura em telas pequenas */
    margin-bottom: 20px; /* Reduz o espaçamento entre os itens */
  }

  .content h3 {
    font-size: 22px; /* Ajusta o tamanho do título */
  }

  .content p {
    font-size: 18px; /* Ajusta o tamanho da descrição */
  }
}


/* Container da seção */
.apresentacao {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 70px;
  margin-left: 5px;
  
}

/* Div que contém o texto e a imagem */
.conteudo-apresentacao {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1400px; /* Limita a largura */
  width: 100%;
}

/* Estilo do texto */
.texto {
  flex:1;
  margin-right: 40px; /* Espaçamento entre o texto e a imagem */
}

/* Estilo da imagem */
.imagem {
  flex: 1; /* A imagem ocupa 50% do espaço */
}

/* Estilo da imagem */
.imagem img {
  max-width: 100%; /* Faz a imagem ocupar toda a largura disponível */
  height: auto; /* Mantém a proporção da imagem */
  border-radius: 10px; /* Canto arredondado */
}

/* Responsividade: Ajusta a disposição em telas menores */
@media (max-width: 768px) {
  .conteudo-apresentacao {
    flex-direction: column;
    text-align: center;
  }
  .texto {
    margin-right: 17px;
    margin-bottom: 20px; /* Adiciona um espaçamento entre o texto e a imagem em dispositivos menores */
  }
}   

.texto h1{
    font-size: 35px;
    color: #252F3F;
}

.texto p{
    font-size: 18px
}


/* Estilo para a seção 'Como Funciona?' */
.how-it-works {
  background-color: #fafafb;
  padding: 50px 0;
  text-align: center;
  width: 110%;
  
}

.how-it-works h2 {
  font-size: 2.5em;
  margin-bottom: 40px;
   color: #252F3F;
}

.steps-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  position: relative;
}

.step {
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 600px;
  justify-content: center;
  text-align: left;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.step:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}

.step-icon {
  font-size: 50px;
  color: #F78024;
}

.step-content h3 {
  font-size: 1.4em;
  color: #333;
  margin: 10px 0;
}

.step-content p {
  font-size: 1em;
  color: #555;
}

/* Linha de Conexão */
.line {
  width: 2px;
  height: 50px;
  background-color: #F78024;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .steps-container {
    gap: 20px;
  }

  .step {
    width: 90%;
  }

  .line {
    width: 2px;
    height: 30px;
  }

}


.highlighted-section {
    background-color: #f4f3f3;
  padding: 40px 20px;
  margin: 20px 0;
  margin-top: 20px;
  text-align: center;
  width: 110%;
}

.highlighted-section h2{
    padding: 30px;
    font-size: 30px;
    color: #252F3F;
}

/* Estilização dos cards */
.cards2-container {
  display: flex;
  justify-content: space-around;
  gap: 2px;
  flex-wrap: wrap;
  padding:  20px; 
  margin-right: 20px;
}

.card2 {
  background-color: #fff;  /* Mantém os cards com fundo branco */
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  flex: 1;
  max-width: 250px;
  transition: transform 0.2s, box-shadow 0.2s;
}

.card2:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}

.icon {
  font-size: 50px;
  color:  #F78024;  /* Cor do ícone */
  margin-bottom: 10px;
}

h3 {
  font-size: 1.4em;
  margin: 2px 0;
}



p {
  font-size: 1em;
  color: #555;
}


.container {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 30px 20%;
    justify-content: space-evenly;
    align-items: center;
}

.header {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 88.5%;
    height: 10vh;
    background-color: #ffffff;
    border-radius: 2px;
    box-shadow: 0 1px 1px 1px #ccc;
}

.user-notify {
    position: relative;
    display: flex;
    width: 90%;
    justify-content: space-between;
    align-items: center;
}

.user-notify p {
    font-size: 20px;
    color: #252F3F;
}

.user-notify i {
    font-size: 25px;
    cursor: pointer;
    color: #252F3F;
    transition: .2s ease;
}

.user-notify i:active {
    transform: scale(.9);
}

.notifications.notifyOpen {
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 42%;
    height: 300px;
}

.notifications h4 {
    width: 90%;
    margin-top: 5px;
    margin-bottom: 10px;
    color: #F78024;
    font-weight: 500;
}

.notifications {
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 100%;
    left: 58%;
    background-color: #ffffff;
    box-shadow: 0 1px 1px 1px #ccc;
    border-radius: 10px 0 10px 10px;
}

.container-notify {
    display: flex;
    gap: 10px;
    align-items: center;
    flex-direction: column;
    overflow-y: scroll;
    height: 500px;
    width: 100%;
}

.verify {
    width: 90%;
}

.space {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    height: 8.5vh;
    margin: auto;
}

.space button {
    border: none;
    background-color: #F78024;
    padding: 5px 20px;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
}

.not-notify {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 90%;
}

.not-notify p {
    font-size: 10px;
}

.not-notify img {
    width: 200px;
}

.notify {
    width: 100%;
    min-height: 60px;
    /* Definindo uma altura mínima */
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 1px 1px 1px #ccc;
    flex-shrink: 0;
    /* Evitando que os cartões se comprimam */
    margin-bottom: 10px;
}

/* Estilizando a barra de rolagem */
.container-notify {
    overflow-y: scroll;
}

/* Estilizando a barra de rolagem */
.container-notify::-webkit-scrollbar {
    width: 8px;
    /* Largura da barra de rolagem */
}

/* Estilizando o fundo da barra de rolagem */
.container-notify::-webkit-scrollbar-track {
    background: #f1f1f1;
    /* Cor do fundo da barra de rolagem */
    border-radius: 10px;
    /* Borda arredondada */
}

/* Estilizando o polegar da barra de rolagem */
.container-notify::-webkit-scrollbar-thumb {
    background: #b2b2b2;
    /* Cor do polegar da barra de rolagem */
    border-radius: 10px;
    /* Borda arredondada */
}

/* Estilizando o polegar da barra de rolagem ao passar o mouse */
.container-notify::-webkit-scrollbar-thumb:hover {
    background: #959595;
    /* Cor do polegar da barra de rolagem ao passar o mouse */
}

.container-cursos {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    padding: 5px;
}

.container-cursos h4 {
    text-align: left;
    width: 97%;
    color: #F78024;
    letter-spacing: 1px;
    padding-bottom: 5px;
}

.row {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
}

.gridCards {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 98%;
}

.cardPrincipal {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 49.5%;
    height: 45vh;
    border-radius: 2px;
    background-color: #fff;
    box-shadow: 0 1px 1px 1px #ccc;
    cursor: pointer;
}

.spaceCardPrincipal {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 90%;
    width: 100%;
}

.banner-img {
    width: 100%;
    height: 75%;
    background-image: url(../../assets/img/Home/html-css.webp);
    background-position: center;
    background-size: cover;
}

.display-video {
    display: flex;
    width: 85%;
    justify-content: space-around;
    align-items: center;
}

.legenda {
    width: 55%;
}

.legenda p {
    overflow: hidden;
    text-overflow: ellipsis;
    text-wrap: nowrap;
}

.legenda-cardSec p {
    overflow: hidden;
    text-overflow: ellipsis;
    text-wrap: nowrap;
}

.container-btn {
    display: flex;
    width: 35%;
    justify-content: flex-end;
    margin-bottom: 10px;
}

.container-btn button {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 30px;
    border-radius: 5px;
    border: none;
    background-color: #F78024;
    color: #ffffff;
    cursor: pointer;
    transition: .3
}

.container-btn button:active {
    transform: scale(.98);
}

.container-btn button i {
    font-size: 10px;
}

.container-cardSecundarios {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    height: 45vh;
    width: 50%;
}

.rowCardCourse {
    display: flex;
    justify-content: space-between;
    width: 99%;
    height: 48%;
}

.card {
    width: 49%;
    height: 100%;
    background-color: #fff;
    box-shadow: 0 1px 1px 1px #ccc;
    cursor: pointer;
    display: flex;
    border-radius: 2px;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    transition: .3s ease;
}

.spaceCardSecundario {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 90%;
    width: 100%;
}

.display-videoSec {
    justify-content: center;
    display: flex;
    width: 90%;
}

.legenda-cardSec {
    width: 100%;
}

.container-btnSec {
    display: none;
}

.card:active {
    transform: scale(.98);
}

.banner-imgSec-1 {
    height: 75%;
    width: 100%;
    background-image: url(../../assets/img/Home/curso-fabr.jpg);
    background-position: center;
    background-size: cover;
}

.banner-imgSec-2 {
    height: 75%;
    width: 100%;
    background-image: url(../../assets/img/Home/curso-logi.jpg);
    background-position: center;
    background-size: cover;
}

.banner-imgSec-3 {
    height: 75%;
    width: 100%;
    background-image: url(../../assets/img/Home/curso-ing.jpg);
    background-position: center;
    background-size: cover;
}

.banner-imgSec-4 {
    height: 75%;
    width: 100%;
    background-image: url(../../assets/img/Home/curso-port.jfif);
    background-position: center;
    background-size: cover;
}

.vagaSugeridas {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 90%;
}

.vagaSugeridas h4 {
    text-align: left;
    width: 97%;
    color: #F78024;
    letter-spacing: 1px;
    padding-bottom: 5px;
}

.rowVagas {
    display: flex;
    width: 100%;
    justify-content: space-between;
}

.rowCardVagas {
    display: flex;
    width: 49.5%;
    justify-content: space-between;
}

.cardVagas {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 49%;
    height: 18vh;
    background-color: #fff;
    box-shadow: 0 1px 1px 1px #ccc;
    cursor: pointer;
    transition: .2s;
    border-radius: 2px;
}

.img-categoria-1 {
    width: 45%;
    height: 100%;
    background-image: url(../../assets/img/Home/categ-adm.jpg);
    background-position: center;
    background-size: cover;
}

.img-categoria-2 {
    width: 45%;
    height: 100%;
    background-image: url(../../assets/img/Home/categ-cont.webp);
    background-position: center;
    background-size: cover;
}

.img-categoria-3 {
    width: 45%;
    height: 100%;
    background-image: url(../../assets/img/Home/categ-const.jpg);
    background-position: center;
    background-size: cover;
}

.img-categoria-4 {
    width: 45%;
    height: 100%;
    background-image: url(../../assets/img/Home/categ-info.jpg);
    background-position: center;
    background-size: cover;
}

.nome-categoria {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 30%;
    width: 53%;
}

.quantVagas {
    color: #808080;
    font-weight: 400;
    font-size: 13px;
}

.nome-categoria .nomeVaga {
    font-size: 18px;
}

.cardVagas:active {
    transform: scale(.98);
}

@media screen and (max-width: 1920px) {
    .container-cursos h4 {
        font-size: 26px;
        margin: 10px 0 10px 0;
    }

    .notifications.notifyOpen {
        height: 500px;
    }

    .cardVagas {
        height: 14vh;
    }

    .cardVagas .nomeVaga {
        font-size: 25px;
    }

    .cardVagas .quantVagas {
        font-size: 20px;
    }

    .cardVagas .img-categoria {
        height: 100%;
    }

    .user-notify p {
        font-size: 25px;
    }

    .display-video p {
        font-size: 20px;
    }

    .container-btn button {
        font-size: 16px;
        align-items: center;
        width: 50%;
    }
}

@media screen and (max-width: 1816px) {
    .cardVagas .quantVagas {
        font-size: 16px;
    }
}

@media screen and (max-width: 1708px) {
    .cardVagas .nomeVaga {
        font-size: 22px;
    }

    .notifications.notifyOpen {
        height: 450px;
    }
}

@media screen and (max-width: 1674px) {
    .container-cursos h4 {
        font-size: 18px;
        margin: 5px 0 5px 0;
    }

    .cardVagas {
        height: 16vh;
    }

    .user-notify p {
        font-size: 20px;
    }

    .display-video p {
        font-size: 15px;
    }

    .container-btn button {
        font-size: 15px;
    }

    .notifications.notifyOpen {
        height: 400px;
    }
}

@media screen and (max-width: 1500px) {
    .cardVagas .nomeVaga {
        font-size: 18px;
    }

    .cardVagas .quantVagas {
        font-size: 14px;
    }

    .notifications.notifyOpen {
        width: 50%;
        left: 50%;
    }

    .cardVagas .quantVagas {
        font-size: 12px;
    }

    .cardVagas {
        height: 15vh;
    }
}

@media screen and (max-width: 1260px) {
    .container {
        margin: 40px auto;
        width: 100%;
    }

    .display-video p {
        font-size: 16px;
    }
}

@media screen and (max-width: 1025px) {
    .rowVagas {
        flex-direction: column;
        gap: 10px;
    }

    .rowCardVagas {
        width: 100%;
    }

    .cardVagas .nomeVaga {
        font-size: 25px;
    }

    .cardVagas .quantVagas {
        font-size: 18px;
    }

    .user-notify {
        height: 8vh;
    }

    .row {
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        gap: 20px;
    }

    .container-cardSecundarios {
        width: 100%;
        height: 70vh;
    }

    .card .legenda-cardSec p {
        font-size: 22px;
    }

    .rowCardCourse {
        width: 100%;
    }

    .cardPrincipal {
        width: 100%;
    }

    .cardPrincipal .legenda p {
        font-size: 23px;
    }

    .cardPrincipal .container-btn button {
        font-size: 20px;
    }

    .cardPrincipal .container-btn button i {
        font-size: 15px;
    }
}

@media screen and (max-width: 856px) {
    .notifications.notifyOpen {
        height: 350px;
        width: 65%;
        left: 35%;
    }
}

@media screen and (max-width: 700px) {
    .cardVagas .nomeVaga {
        font-size: 20px;
    }

    .cardVagas .quantVagas {
        font-size: 14px;
    }

    .display-video {
        width: 90%;
        flex-direction: column;
    }

    .legenda {
        width: 100%;
        text-align: left;
    }

    .container-btn {
        width: 100%;
        justify-content: right;
    }

    .container-btn button {
        width: 40%;
    }

    .notifications.notifyOpen .not-notify p {
        font-size: 18px;
    }
}

@media screen and (max-width: 592px) {
    .notifications.notifyOpen {
        width: 85%;
        left: 15%;
    }
}

@media screen and (max-width: 555px) {
    .rowCardVagas {
        height: 35vh;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    .cardVagas {
        width: 100%;
        height: 17vh;
        justify-content: space-around;
    }

    .container-cardSecundarios {
        gap: 20px;
        height: 150vh;
    }

    .rowCardCourse {
        flex-direction: column;
        gap: 20px;
        height: 49%;
    }

    .card {
        width: 100%;
        height: 40vh;
    }

    .vagaSugeridas h4 {
        font-size: 23px;
    }
}

@media screen and (max-width: 470px) {
    .banner-img {
        height: 55%;
    }

    .notifications.notifyOpen {
        width: 100%;
        left: 0%;
    }

    .notifications.notifyOpen .not-notify p {
        font-size: 16px;
    }
}
</style>