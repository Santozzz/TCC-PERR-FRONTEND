<template>
    <!-- Navbar -->
     <div>
<nav class="navbar">
    <ul class="navbar-links">
        <li>
            <button @click="goToHome">
                <i class="fas fa-home"></i> Home
            </button>
        </li>
        <li>
            <button @click="goToPerfis">
                <i class="fas fa-users"></i> Perfis Validados
            </button>
        </li>
    </ul>
    <!-- Botão de Sair -->
    <ul class="navbar-right">
    <li>
      <button class="sair-btn" @click="logout">
        <i class="fas fa-sign-out-alt"></i> Sair
      </button>
    </li>
  </ul>
</nav>

    <div class="plano-mensal">
      <div class="container">
        <!-- Introdução ao Plano -->
        <header class="plano-header">
          <h1>Plano Mensal: Acesso Exclusivo a Talentos Diversificados</h1>
          <p class="intro-text">
            Com um custo acessível de R$ 13,99 mensais, nossa plataforma conecta empresas a um banco de talentos diversificados, 
            com foco em refugiados e imigrantes qualificados. Promova a diversidade e a inclusão no seu ambiente de trabalho e 
            adicione novas perspectivas ao seu time.
          </p>
        </header>
  
        <!-- Benefícios do Plano -->
        <section class="beneficios">
            <div class="beneficios-card">
    <h2>Benefícios do Plano</h2>
    <div class="cards">
      <div class="card">
        <i class="fas fa-users"></i>
        <h3>Acesso a Talentos Diversificados</h3>
        <p>Conecte-se com candidatos de diversas origens e culturas, trazendo novos perfis e experiências para sua empresa.</p>
      </div>
      <div class="card">
        <i class="fas fa-people-carry"></i>
        <h3>Diversidade e Inclusão no Ambiente de Trabalho</h3>
        <p>Crie um ambiente mais inclusivo e multicultural, aumentando a inovação e o engajamento dentro da sua equipe.</p>
      </div>
      <div class="card">
        <i class="fas fa-headset"></i>
        <h3>Suporte Contínuo</h3>
        <p>Contamos com suporte contínuo para garantir uma integração tranquila e eficaz dos novos colaboradores.</p>
      </div>
      
    </div>
  </div>
        </section>
  
                <!-- Como Funciona o Plano -->
        <section class="como-funciona">
        <h2>Como Funciona o Plano</h2>
        <div class="passos">
            <div class="passo">
            <i class="fas fa-clipboard-list"></i>
            <h3>Assinatura Simples</h3>
            <p>Basta preencher um formulário simples e efetuar o pagamento via boleto ou cartão de crédito.</p>
            </div>
            <div class="passo">
            <i class="fas fa-check-circle"></i>
            <h3>Acesso Imediato</h3>
            <p>Após a assinatura, você terá acesso imediato ao banco de talentos da nossa plataforma.</p>
            </div>
            <div class="passo">
            <i class="fas fa-ban"></i>
            <h3>Sem Taxas Extras</h3>
            <p>O valor mensal cobre todos os serviços, sem taxas adicionais.</p>
            </div>
        </div>
        </section>
  
                <!-- Preços e Condições -->
        <section class="precos">
        <h2>Preços e Condições</h2>
        <div class="detalhes-preco">
            <div class="detalhe">
            <h3>Valor do Plano</h3>
            <p class="plain"><strong>R$ 13,99 por mês</strong></p>
            </div>
            <div class="detalhe">
            <h3>Opções de Pagamento</h3>
            <p>Cartão de crédito, boleto bancário, entre outros métodos.</p>
            </div>
            <div class="detalhe">
            <h3>Cancelamento Flexível</h3>
            <p>O plano pode ser cancelado a qualquer momento sem custos adicionais.</p>
            </div>
        </div>
                <div class="status-plano">
                    
            <h3>Plano Assinado <div class="green"><i class="fas fa-check-circle"></i> </div></h3>
            <p>Seu plano foi assinado até <strong>06/2025</strong>.</p>
        </div>
        <button class="btn-cancelar">Cancelar Plano Agora</button>
        </section>
  
        <!-- Testemunhos de Empresas -->
        <section class="testemunhos">
          <h2>O que dizem nossos clientes</h2>
          <div class="aviso">
            <p>Este espaço está vazio por enquanto. Aguarde novas atualizações!</p>
            <i class="fas fa-sync-alt fa-3x"></i> <!-- Ícone de atualização -->
         </div>
        </section>
  
        
  
            
        <!-- Suporte -->
        <section class="suporte">
        <h2>Precisa de Ajuda?</h2>
        <p>Se você tiver alguma dúvida ou precisar de assistência, entre em contato com nosso suporte.</p>
        <form @submit.prevent="enviarMensagem">
            <div class="input-group">
            <input type="text" placeholder="Seu nome" v-model="nome" required />
            </div>
            <div class="input-group">
            <input type="email" placeholder="Seu e-mail" v-model="email" required />
            </div>
            <div class="input-group">
            <textarea placeholder="Sua mensagem" v-model="mensagem" required></textarea>
            </div>
            <button type="submit">Enviar Mensagem</button>
        </form>
        </section>
      </div>
    </div>
</div>
  </template>
  
  <script>
  export default {
    name: "PlanoMensal",
    data() {
      return {
        nome: "",
        email: "",
        mensagem: "",
      };
    },
    methods: {
        goToHome() {
      this.$router.push('/HomeEmpresas'); // Supondo que você tenha uma rota chamada 'home'
    },
    goToPerfis() {
      this.$router.push('/PerfisValidadosEmpresa');  // Redireciona para a página de perfis validados
    },
      goToPlano() {
        // Redirecionar para a página de assinatura (pode ser uma outra página ou abrir um modal)
        console.log("Assinatura do plano");
      },
      enviarMensagem() {
        // Enviar mensagem para o suporte (exemplo simples)
        console.log("Mensagem enviada:", this.nome, this.email, this.mensagem);
      },
      // Função de Logout
      logout() {
        // Aqui você pode adicionar qualquer lógica de logout, como limpar o localStorage, cookies ou estado
        // Exemplo: localStorage.removeItem('user'); ou qualquer outro método de autenticação que esteja utilizando.
        
        // Redireciona para a página de login após sair
        this.$router.push('/CadastroEmpresa');  // Ajuste conforme o caminho da sua página de login
      }
    },
  };
  </script>
  
  
  <style scoped>
  .testemunhos {
    text-align: center;
    padding: 40px 0;
}

.aviso {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px; /* Espaçamento entre o texto e o ícone */
    font-size: 18px;
    color: #333;
    margin-top: 20px;
}

.aviso i {
    color: #f78024; /* Cor do ícone, você pode alterar conforme necessário */
}
  .plano-header p{
    width: 80%;
    padding-left: 110px;
  }
/* Navbar Estilo */
.navbar {
  background-color: #252f3f;
  padding: 20px 30px;
  display: flex;
  justify-content: space-between; /* Distância entre os elementos */
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
}

.navbar-links {
  display: flex;
  justify-content: flex-start; /* Alinha os itens à esquerda */
  align-items: center;
  gap: 15px; /* Distância entre os itens centrais */
  list-style: none;
  flex-grow: 1; /* Ocupa o espaço restante */
  margin: 0;
  padding: 0;
  padding-left: 30px;
}

.navbar-right {
  display: flex;
  justify-content: flex-end; /* Mantém o botão "Sair" à direita */
  gap: 10px; /* Ajusta a distância entre o botão "Sair" e os itens centrais */
  padding-right: 70px;
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

.sair-btn {
  background-color: transparent;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
}

.sair-btn:hover {
  color: #f78024;
}

/* Verifique se o botão não está sendo escondido por algum elemento sobreposto */
.navbar-right li {
  margin-left: 20px; /* Distância do botão em relação ao lado direito */
}

.sair-btn:hover {
  color: #f78024;
}

.navbar button:hover {
  color: #f78024;
}

.navbar i {
  font-size: 24px;
}

.status-plano {
  background-color: #f4f4f4;
  padding: 15px;
  border-radius: 8px;
  margin-top: 20px;
  text-align: center;
}

.status-plano h3 {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #252f3f;
}

.status-plano p {
  font-size: 18px;
  color:#252f3f;
}

.status-plano {
    color: green;
}
.btn-cancelar {
  background-color: rgb(228, 65, 65);
  color: #ccc;
  padding: 12px 25px;
  font-size: 18px;
  border: 2px solid rgb(228, 65, 65); /* Borda vermelha */
  border-radius: 30px; /* Borda mais arredondada */
  cursor: pointer;
  margin-top: 35px;
}

.btn-cancelar:hover {
  background-color: rgb(228, 101, 101);
}

.green{
    color: green;
}

.beneficios-card {
  text-align: center;
  margin-bottom: 30px;
}

.beneficios-card h2 {
  font-size: 28px;
  color: #252f3f;
  margin-bottom: 20px;
}

.cards {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
}

.card {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 22%;
  text-align: center;
  transition: transform 0.3s ease-in-out;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Garante que o conteúdo se espalhe dentro do card */
}

.card:hover {
  transform: translateY(-5px);
}

.card i {
  font-size: 40px;
  color: #f78024;
  margin-bottom: 15px;
  padding-top: 20px;
}

.card h3 {
  font-size: 20px;
  color: #252f3f;
  margin-bottom: 10px;
}

.card p {
  font-size: 16px;
  color: #555;
  margin-bottom: 10px;
}
  .plano-mensal {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    padding: 40px 0;
    display: flex;
    justify-content: center;
    text-align: left;
    text-align: justify;
    
  }
  
  .container {
    background-color: white;
    padding: 40px;
    width: 67%;
    max-width: 1200px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding-top: 80px;
    
  }
  
  .plano-header {
    text-align: center;
    margin-bottom: 40px;
  }
  
  .plano-header h1 {
    font-size: 36px;
    color: #252f3f;
  }
  
  .plano-header .intro-text {
    font-size: 20px;
    color: #555;
  }
  
  .beneficios, .como-funciona, .precos, .testemunhos, .faq, .suporte {
    margin-bottom: 40px;
  }
  
  .beneficios h2, .como-funciona h2, .precos h2, .testemunhos h2, .faq h2, .suporte h2 {
    font-size: 28px;
    color: #252f3f;
  }
  
  .beneficios ul {
    list-style-type: none;
    padding-left: 0;
  }
  
  .beneficios ul li {
    font-size: 18px;
    margin: 10px 0;
    color: #555;
  }
  
  .beneficios ul li i {
    color: #f78024;
    margin-right: 10px;
  }
  
  .como-funciona {
  text-align: center;
  background-color: #f0f4f8;
  padding: 60px 20px;
  border-radius: 8px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
}

.como-funciona h2 {
  font-size: 32px;
  color: #252f3f;
  margin-bottom: 40px;
}

.passos {
  display: flex;
  justify-content: space-around;
  gap: 40px;
  flex-wrap: wrap;
}

.passo {
  background-color: #ffffff;
  padding: 30px;
  border-radius: 15px;
  width: 30%;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
}

.passo:hover {
  transform: translateY(-10px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.passo i {
  font-size: 50px;
  color: #f78024;
  margin-bottom: 15px;
  transition: color 0.3s ease;
}

.passo:hover i {
  color: #f56c00;
}

.passo h3 {
  font-size: 22px;
  color: #252f3f;
  margin-bottom: 15px;
}

.passo p {
  font-size: 16px;
  color: #555;
  margin-top: -10px;
}
  
  .testemunhos .depoimento {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
  }
  
  .cta {
    text-align: center;
    margin-top: 40px;
  }
  
  .cta .btn-cta {
    background-color: #f78024;
    color: white;
    padding: 12px 25px;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .cta .btn-cta:hover {
    background-color: #d97020;
  }
  
  .faq .faq-item {
    margin-bottom: 20px;
  }
  
  .faq .faq-item h3 {
    font-size: 22px;
    color: #252f3f;
  }
  
  .suporte form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .plain{
    font-size: 26px;
    color: #ff8121;
    margin-top: 25px;
    width: 90%;
  }

  .suporte {
  background-color: #fafafa;
  padding: 40px 20px;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin: 40px 0;
}

.suporte h2 {
  font-size: 28px;
  margin-bottom: 10px;
}

.suporte p {
  font-size: 16px;
  color: #555;
  margin-bottom: 20px;
}

.input-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}

.suporte input, .suporte textarea {
  width: 100%;
  padding: 12px 15px;
  border-radius: 6px;
  border: 1px solid #ddd;
  font-size: 16px;
  box-sizing: border-box;
  transition: all 0.3s ease;
}

.suporte input:focus, .suporte textarea:focus {
  border-color: #f78024;
  outline: none;
}

.suporte button {
  padding: 12px 20px;
  background-color: #f78024;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.suporte button:hover {
  background-color: #f78024;
}

  .precos {
  background-color: #252f3f;
  color: #fff;
  padding: 60px 30px;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.precos h2 {
  font-size: 36px;
  margin-bottom: 20px;
  font-weight: 700;
  color: #f78024;
  padding-top: 10px;
  text-align: center;
}

.detalhes-preco {
  display: flex;
  justify-content: space-around;
  gap: 30px;
  flex-wrap: wrap;
  margin-bottom: 40px;
}

.detalhe {
  background-color: #ffffff;
  color: #252f3f;
  padding: 30px;
  border-radius: 12px;
  width: 25%;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: left;
  height: 85px;
}

.detalhe:hover {
  transform: translateY(-10px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

.detalhe h3 {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 10px;
  text-align: center;
  margin-top: -10px;
}

.detalhe p {
  font-size: 17spx;
  line-height: 1.5;
  text-align: center;
  padding: 0 20px;
}

.btn-assinar {
  background-color: #f78024;
  color: white;
  padding: 15px 30px;
  font-size: 18px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.btn-assinar:hover {
  background-color: #f56c00;
}
  </style>
  