<template>
    <div>
      <div class="container">
        <div class="header">
          <div class="user-notify">
            <p>Seja Bem-Vindo ao nosso site de Conexão com Refugiados!</p>
          </div>
        </div>
        <section class="apresentacao">
          <div class="conteudo-apresentacao">
            <div class="texto">
              <h1>Conectando Refugiados ao Mercado de Trabalho</h1>
              <p>
                Facilitamos a integração de refugiados ao mercado de trabalho, conectando empresas com candidatos qualificados que promovem diversidade e inclusão. A plataforma oferece acesso a talentos comprometidos e capacitados para agregar valor ao seu time.
              </p>
            </div>
            <div class="imagem">
              <img src="../../assets/img/Home/categ-adm.jpg" alt="Imagem representativa" />
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
            <button class="btn-assinar">Assine Agora</button>
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
        </section>
  
        <!-- Seção FAQ -->
        <section class="faq-section">
          <h2>Perguntas Frequentes</h2>
          <div class="faq-container">
            <div class="faq-item">
              <h3>A plataforma é gratuita?</h3>
              <p>A plataforma oferece acesso gratuito para refugiados e imigrantes. As empresas podem assinar um plano mensal.</p>
            </div>
            <div class="faq-item">
              <h3>Como garantir que os candidatos tenham as habilidades descritas no currículo?</h3>
              <p>Os candidatos validam suas informações através de entrevistas ou testes práticos que garantem a precisão do seu perfil.</p>
            </div>
            <div class="faq-item">
              <h3>Como posso visualizar os perfis dos refugiados?</h3>
              <p>A plataforma exibe perfis validados que incluem informações como habilidades, experiência e dados de contato.</p>
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
        perfisValidos: [
          {
            nome: "Maria Souza",
            email: "maria.souza@email.com",
            telefone: "(11) 91234-5678",
          },
          {
            nome: "Ahmed Al Fayed",
            email: "ahmed.alfayed@email.com",
            telefone: "(21) 93456-7890",
          },
          {
            nome: "Sara Kim",
            email: "sara.kim@email.com",
            telefone: "(31) 94567-8901",
          },
        ],
      };
    },
    methods: {
      // Redirect to external link or handle other actions
      redirectTo(url) {
        window.open(url, "_blank");
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    padding: 20px;
  }
  
  .header {
    background-color: #f4f4f4;
    padding: 10px;
  }
  
  .user-notify p {
    font-size: 18px;
    font-weight: bold;
  }
  
  .apresentacao {
    margin: 30px 0;
  }
  
  .conteudo-apresentacao {
    display: flex;
    justify-content: space-between;
  }
  
  .texto h1 {
    font-size: 28px;
    margin-bottom: 10px;
  }
  
  .texto p {
    font-size: 18px;
    color: #555;
  }
  
  .imagem img {
    width: 100%;
    max-width: 500px;
  }
  
  .plano-empresas {
    background-color: #f9f9f9;
    padding: 20px;
    margin: 30px 0;
  }
  
  .card h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  .card .preco {
    font-size: 20px;
    color: #333;
  }
  
  .card .descricao {
    margin: 10px 0;
  }
  
  .btn-assinar {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    font-size: 18px;
    border: none;
    cursor: pointer;
  }
  
  .beneficios {
    margin-top: 20px;
  }
  
  .beneficios ul {
    list-style-type: none;
    padding: 0;
  }
  
  .beneficios li {
    font-size: 18px;
  }
  
  .perfils-validos {
    margin: 30px 0;
  }
  
  .perfil-container {
    display: flex;
    flex-direction: column;
  }
  
  .perfil {
    background-color: #fff;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .perfil h3 {
    font-size: 22px;
    margin-bottom: 5px;
  }
  
  .perfil p {
    font-size: 18px;
    margin: 5px 0;
  }
  
  .faq-section {
    margin-top: 40px;
  }
  
  .faq-container {
    margin-top: 20px;
  }
  
  .faq-item {
    margin-bottom: 15px;
  }
  
  .faq-item h3 {
    font-size: 20px;
    font-weight: bold;
  }
  
  .faq-item p {
    font-size: 18px;
    color: #555;
  }
  </style>
  