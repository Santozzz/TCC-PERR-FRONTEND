<template>
    <div>
      <!-- Navbar -->
    <nav class="navbar">
      <ul>
        <li>
          <button @click="goToPlano">
            <i class="fas fa-credit-card"></i> Plano Mensal
          </button>
        </li>
        <li>
          <button @click="goToPerfis">
            <i class="fas fa-users"></i> Perfis Validados
          </button>
        </li>
      </ul>
    </nav>  
      <div class="container">
        <div class="header">
          <div class="user-notify">
            <p>Somos a ponte entre empresas e refugiados/imigrantes qualificados, criando oportunidades para todos.</p>
          </div>
        </div>
        <section class="apresentacao">
          <div class="conteudo-apresentacao">
            <div class="texto">
              <h1>Unindo Empresas e Refugiados/Imigrantes: Facilitando a Diversidade, Inclusão e Novas Oportunidades.</h1>
              <p>
                Nossa plataforma facilita a integração de talentos diversos, oferecendo acesso a profissionais comprometidos e capacitados, que podem agregar valor ao seu time com habilidades únicas e experiências diversas. Ao promover a diversidade e a inclusão, ajudamos as empresas a construir equipes mais inovadoras e resilientes, ao mesmo tempo em que oferecem uma chance justa para aqueles que buscam recomeçar suas vidas no Brasil. <br>Ao contratar refugiados e imigrantes, sua empresa não só contribui para a inclusão social, mas também fortalece sua responsabilidade social corporativa e se alinha às metas globais de sustentabilidade. 
              </p>
            </div>
            <div class="imagem">
              <img src="../../assets/img/HomeEmpresas/empresa.jpg" alt="Imagem representativa" />
            </div>
          </div>
        </section>
  
        <!-- Seção Plano para Empresas -->
        <section class="plano-empresas">
          <div class="card">
    <h2>Plano para Empresas</h2>
    <p class="preco">Apenas <span>R$ 13,99/mês</span></p>
    <p class="descricao">
      Conecte-se com talentos diversos e promova a inclusão em sua empresa. Com nosso plano acessível, você pode encontrar profissionais qualificados e engajados que farão a diferença.
    </p>
    
    

    <div class="beneficios">
      <h3>Benefícios ao Assinar:</h3>
      <ul>
        <li><i class="fas fa-check-circle"></i> Acesso a perfis de profissionais qualificados</li>
        <li><i class="fas fa-check-circle"></i> Suporte exclusivo para empresas</li>
        <li><i class="fas fa-check-circle"></i> Destaque em nossa plataforma</li>
        <li><i class="fas fa-check-circle"></i> Contribua para a diversidade e inclusão</li>
      </ul>
    </div>
    
    <!-- Botão de Saiba Mais -->
    <div class="saiba-mais">
      <button @click="goToPlano">Saiba Mais</button>
    </div>
    <!-- Mensagem de plano adquirido -->
    <div class="plano-adquirido">
      <p>
        <i class="fas fa-check-circle"></i> Plano já adquirido!
      </p>
    </div>
  </div>

  <section class="importancia-diversidade">
    <div class="conteudo">
      <h2>A Importância da Diversidade no Mercado de Trabalho</h2>
      <p>
        A diversidade no ambiente corporativo traz múltiplos benefícios, como uma maior criatividade, inovação e engajamento das equipes. Ao contratar refugiados e imigrantes, as empresas não apenas ampliam suas perspectivas, mas também contribuem para uma sociedade mais inclusiva. Refugiados e imigrantes trazem habilidades valiosas, experiências únicas e uma forte ética de trabalho, que podem agregar imensurável valor ao seu time.
      </p>
      <!-- Imagem abaixo do texto -->
      <div class="imagem-container">
        <img src="../../assets/img/HomeEmpresas/diversidade.jpg" alt="Diversidade no Mercado de Trabalho" />
      </div>
    </div>
  </section>

  <section class="como-funciona">
    <h2>Como Funciona</h2>
    <p class="descricao">Siga esses passos simples para começar a conectar sua empresa com talentos qualificados!</p>
    
    <div class="passos">
      <div class="passo" v-for="(passo, index) in passos" :key="index">
        <div class="icone">
          <i :class="passo.icone"></i>
        </div>
        <h3>{{ passo.titulo }}</h3>
        <p>{{ passo.descricao }}</p>
      </div>
    </div>
  </section>
  <section class="processo-integracao">
    <div class="conteudo">
      <h2>Entenda o Processo de Integração</h2>
      <p>
        Nossa plataforma foi desenhada para tornar o processo de integração de refugiados e imigrantes simples e eficiente. Desde a criação do perfil até o preenchimento das vagas, garantimos que o processo seja transparente e sem complicação. Oferecemos suporte contínuo tanto para os candidatos quanto para as empresas, garantindo uma adaptação suave e a maximização do potencial de todos os envolvidos.
      </p>
      
      <!-- Imagem abaixo do texto -->
      <div class="imagem-container">
        <img src="../../assets/img/HomeEmpresas/integracao.png" alt="Processo de Integração" />
      </div>
    </div>
  </section>
        </section>
  
        <!-- Seção de Perfis Validados -->
        <section class="perfils-validos">
          <h2>Perfis Validados</h2>
          <div class="perfil-container">
            <div class="perfil" v-for="(perfil, index) in perfisValidos" :key="index">
              <h3>{{ perfil.nome }}</h3>
              <p><strong>Email:</strong> {{ perfil.email }}</p>
              <p><strong>Telefone:</strong> {{ perfil.telefone }}</p>
            </div>
          </div>
          <div class="veja-todos">
      <button @click="goToPerfis">Veja Todos</button>
    </div>
        </section>
  
        <!-- Seção FAQ -->
        <section class="faq-section">
          <h2>Perguntas Frequentes</h2>
          <div class="faq-container">
            <div class="faq-item">
              <h3>Como funciona a assinatura do plano mensal?</h3>
              <p>As empresas pagam uma taxa mensal de R$ 13,99 para acessar a plataforma, o que permite conectar-se a refugiados e imigrantes qualificados, além de promover diversidade e inclusão no ambiente corporativo.</p>
            </div>
            <div class="faq-item">
              <h3>Como garantir que os candidatos tenham as habilidades descritas no currículo?</h3>
              <p>Os candidatos validam suas informações através de entrevistas ou testes práticos que garantem a precisão do seu perfil.</p>
            </div>
            <div class="faq-item">
              <h3>Como posso visualizar os perfis dos refugiados?</h3>
              <p>A plataforma exibe perfis validados que incluem informações como habilidades, experiência e dados de contato.</p>
            </div>
            <div class="faq-item">
              <h3>É possível cancelar a assinatura do plano?</h3>
              <p>Sim, a assinatura pode ser cancelada a qualquer momento, sem multas ou taxas adicionais.</p>
            </div>
            <div class="faq-item">
              <h3>A plataforma oferece suporte em casos de dúvidas ou dificuldades?</h3>
              <p>Sim, nossa equipe está disponível para auxiliar as empresas em todos os aspectos, desde a seleção de candidatos até questões relacionadas à integração.</p>
            </div>
            <div class="faq-item">
              <h3>Minha empresa precisa pagar alguma taxa adicional além da assinatura?</h3>
              <p>Não, a assinatura mensal de R$ 13,99 cobre todos os serviços oferecidos pela plataforma, sem custos extras.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'EmpresaHome',
    data() {
      return {
        passos: [
        {
          titulo: "1. Cadastre-se na plataforma",
          descricao: "Crie sua conta de forma simples e rápida. Comece a navegar pelas funcionalidades exclusivas da nossa plataforma.",
          icone: "fas fa-user-plus" // Ícone FontAwesome para o passo 1
        },
        {
          titulo: "2. Assine o plano",
          descricao: "Escolha o plano mensal para empresas e desbloqueie acesso completo a candidatos qualificados.",
          icone: "fas fa-credit-card" // Ícone FontAwesome para o passo 2
        },
        {
          titulo: "3. Poste suas vagas",
          descricao: "Publique as oportunidades de trabalho que deseja preencher, atraindo os melhores talentos.",
          icone: "fas fa-briefcase" // Ícone FontAwesome para o passo 3
        },
        {
          titulo: "4. Conecte-se com talentos qualificados",
          descricao: "Encontre candidatos ideais, entre em contato diretamente e comece a promover a diversidade e inclusão na sua empresa.",
          icone: "fas fa-handshake" // Ícone FontAwesome para o passo 4
        }
      ],
        perfisValidos: [
          {
            nome: "Hassan Khaled",
            email: "hassan.khaled@email.com",
            telefone: "(21) 98765-4321",
          },
          {
            nome: "Amina Diop",
            email: "amina.diop@email.com",
            telefone: "(11) 91234-5678",
          },
          {
            nome: " Nguyen Minh",
            email: "nguyen.minh@email.com",
            telefone: "(31) 94567-8901",
          },
        ],
      };
    },
    methods: {
      goToPlano() {
      this.$router.push('/PlanoEmpresas');  // Redireciona para a página do plano
    },
    goToPerfis() {
      this.$router.push('/PerfisValidadosEmpresa');  // Redireciona para a página de perfis validados
    },
      // Redirect to external link or handle other actions
      redirectTo(url) {
        window.open(url, "_blank");
      },
    },
  };
  </script>
  
  <style scoped>
  
.saiba-mais{
  margin-bottom: 10px;
}
/* Seção Informativa */
.processo-integracao {
  background-color: #f9f9f9;
  padding: 40px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin: 40px 0;
}

.processo-integracao .conteudo {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.processo-integracao h2 {
  font-size: 32px;
  color: #252f3f;
  margin-bottom: 20px;
  font-weight: bold;
}

.processo-integracao p {
  font-size: 21px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 20px;
  text-align: justify;
}

.processo-integracao p::before {
  
  font-size: 48px;
  color: #45a049;
  position: absolute;
  top: -10px;
  left: 20px;
}

.processo-integracao p::after {
  font-size: 48px;
  color: #45a049;
  position: absolute;
  bottom: -10px;
  right: 20px;
}

/* Container da Imagem */
.imagem-container {
  margin-top: 30px;
  text-align: center;
}

.imagem-container img {
  width: 100%;
  max-width: 800px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Responsividade */
@media (max-width: 768px) {
  .processo-integracao h2 {
    font-size: 28px;
  }

  .processo-integracao p {
    font-size: 16px;
  }

  .imagem-container img {
    max-width: 100%;
  }
}

  /* Seção Informativa */
.importancia-diversidade {
  background-color: #f3f2f2a2;
  padding: 40px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin: 40px 0;
}

.importancia-diversidade .conteudo {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.importancia-diversidade h2 {
  font-size: 32px;
  color: #252f3f;
  margin-bottom: 20px;
  font-weight: bold;
}

.importancia-diversidade p {
  font-size: 20px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 20px;
  text-align: justify;
}

.importancia-diversidade p::before {
  
  font-size: 48px;
  color: #45a049;
  position: absolute;
  top: -10px;
  left: 20px;
}

.importancia-diversidade p::after {
  
  font-size: 48px;
  color: #45a049;
  position: absolute;
  bottom: -10px;
  right: 20px;
}

/* Container da Imagem */
.imagem-container {
  margin-top: 30px;
  text-align: center;
}

.imagem-container img {
  width: 100%;
  max-width: 600px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Responsividade */
@media (max-width: 768px) {
  .importancia-diversidade h2 {
    font-size: 28px;
  }

  .importancia-diversidade p {
    font-size: 16px;
  }

  .imagem-container img {
    max-width: 100%;
  }
}

/* Responsividade */
@media (max-width: 768px) {
  .importancia-diversidade h2 {
    font-size: 28px;
  }

  .importancia-diversidade p {
    font-size: 16px;
  }
}
/* Seção Como Funciona */
.como-funciona {
  padding: 40px 20px;
  background-color: #f4f4f4;
  text-align: center;
}

.como-funciona h2 {
  font-size: 32px;
  color: #252f3f;
  margin-bottom: 20px;
}

.como-funciona .descricao {
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
}

.passos {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
}

.passo {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  flex: 0 1 calc(25% - 20px);
  max-width: 250px;
}

.passo .icone {
  font-size: 40px;
  color: #f78024;
  margin-bottom: 15px;
}

.passo h3 {
  font-size: 20px;
  color: #252f3f;
  margin-bottom: 10px;
}

.passo p {
  font-size: 16px;
  color: #555;
}

/* Responsividade */
@media (max-width: 768px) {
  .passos {
    flex-direction: column;
    align-items: center;
  }

  .passo {
    flex: 0 1 100%;
    margin-bottom: 20px;
  }
}

.navbar {
  background-color: #252f3f;
  padding: 30px;
  text-align: center;
  position: fixed;
  width: 100%;
  z-index: 100;
}

.navbar ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  gap: 30px;
}

.navbar li {
  display: inline;
}

.navbar button {
  background-color: transparent;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
}

.navbar button:hover {
  color: #f78024;
}

.navbar i {
  font-size: 24px;
}

/* Container Geral */
.container {
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  color: #333;
  width: 85%;
  padding-left: 120px;
}

/* Cabeçalho */
.header {
  background-color:#252f3f;
  color: white;
  padding: 20px;
  text-align: center;
  border-radius: 8px;
  margin-top: 90px;
}

.user-notify p {
  font-size: 20px;
  font-weight: bold;
  margin: 0;
}

/* Seção de Apresentação */
.apresentacao {
  margin: 40px 0;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.conteudo-apresentacao {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
}

.texto {
  flex: 1;
  margin-right: 20px;
}

.texto h1 {
  font-size: 32px;
  margin-bottom: 15px;
  color: #252f3f;
}

.texto p {
  font-size: 20px;
  line-height: 1.6;
  color: #666;
}

.imagem img {
  width: 100%;
  max-width: 500px;
  border-radius: 8px;
  margin-top: 20px;
}

/* Seção Plano para Empresas */
.plano-empresas {
  margin: 40px 0;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.card {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 20px auto;
}


.card h2 {
  font-size: 27px;
  font-weight: bold;
  color: #333;
}

.card .preco {
  font-size: 24px;
  font-weight: bold;
  color: #f78024;
  margin: 15px 0;
}

.card .descricao {
  font-size: 18px;
  color: #666;
  margin-bottom: 20px;
  line-height: 1.5;
}


.btn-assinar {
  background-color: #252f3f;
  color: white;
  padding: 12px 25px;
  font-size: 18px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-assinar:hover {
  background-color: #252f3f;
}

.beneficios {
  margin-top: 30px;
  text-align: center;
  padding-left: 15px;
}

.beneficios ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.beneficios li {
  font-size: 18px;
  color: #555;
  margin: 10px 0;
  display: flex;
  align-items: center;
}

.plano-adquirido i{
  color:#45a049;
  margin-right: 5px;
}

.beneficios li i {
  color: #252f3f;
  margin-right: 10px;
}

.card .saiba-mais {
  margin-top: 20px;
  text-align: center;
}

.card .saiba-mais button {
  background-color: transparent;
  color: #f78024;
  border: 2px solid #f78024;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
}

.card .saiba-mais button:hover {
  background-color: #f78024;
  color: white;
}


/* Seção Perfis Validados */
.perfils-validos {
  text-align: center; /* Centraliza o texto e elementos filhos */
  padding: 20px;
}

.veja-todos {
  display: flex; /* Ativa Flexbox */
  justify-content: center; /* Centraliza horizontalmente */
  margin-top: 20px;
}

.veja-todos button {
  background-color: transparent;
  color: #f78024;
  border: 2px solid #f78024;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 40px;
}

.veja-todos button:hover {
  background-color: #f78024;
  color: white;
}

.perfils-validos h2 {
  font-size: 28px;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
}

.perfil-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.perfil {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  flex: 0 1 calc(33.333% - 20px);
  max-width: 300px;
}

.perfil h3 {
  font-size: 22px;
  margin-bottom: 10px;
}

.perfil p {
  font-size: 18px;
  color: #555;
}

/* Seção FAQ */
.faq-section {
  margin: 40px 0;
}

.faq-section h2 {
  font-size: 28px;
  margin-bottom: 20px;
  text-align: center;
  color: #252f3f;
}

.faq-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Duas colunas de tamanho igual */
    gap: 20px; /* Espaço entre as perguntas */
    padding: 20px;
}

.faq-item {
    background-color: #f4f4f4;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.faq-item h3 {
    font-size: 18px;
    color: #333;
    margin-bottom: 10px;
}

.faq-item p {
    font-size: 16px;
    color: #666;
}

/* Responsividade */
@media (max-width: 768px) {
  .conteudo-apresentacao {
    flex-direction: column;
  }

  .texto {
    margin-right: 0;
  }

  .perfil {
    flex: 0 1 calc(100% - 20px);
  }
}
</style>

  