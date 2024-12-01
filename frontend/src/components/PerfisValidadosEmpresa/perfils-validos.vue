<template>
  <div>
    <!-- Navbar -->
    <nav class="navbar">
      <ul class="navbar-links">
        <li>
          <button @click="goToHome">
            <i class="fas fa-home"></i> Home
          </button>
        </li>
        <li>
          <button @click="goToPlano">
            <i class="fas fa-credit-card"></i> Plano Mensal
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

    <div class="perfils-validados">
      <h1>Perfis Validados</h1>
      <p class="descricao">
        Os perfis abaixo passaram por uma validação criteriosa realizada por nossa equipe, garantindo a autenticidade das informações e a qualificação dos profissionais. Conecte-se com confiança!
      </p>

      <div class="perfil-container">
        <div class="perfil" v-for="(perfil, index) in perfisValidos" :key="index">
          <h3>{{ perfil.nome }}</h3>
          <p><strong>Email:</strong> {{ perfil.email }}</p>
          <p><strong>Telefone:</strong> {{ perfil.telefone }}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: "PerfilsValidados",
  data() {
    return {
      perfisValidos: [], // Dados dos perfis validados
    };
  },
  methods: {
    // Requisição para buscar os usuários validados
    async fetchPerfisValidos() {
      try {
        const response = await axios.get(
          "https://tcc-perr-backend-h5b7.onrender.com/usuarios/validados"
        ); // Endpoint para buscar usuários validados
        this.perfisValidos = response.data; // Popula os dados dos perfis validados
      } catch (error) {
        console.error("Erro ao buscar os perfis validados:", error);
      }
    },
    goToHome() {
      this.$router.push("/HomeEmpresas");
    },
    goToPlano() {
      this.$router.push("/PlanoEmpresas");
    },
    logout() {
      // Lógica de logout
      this.$router.push("/CadastroEmpresa");
    },
  },
  mounted() {
    this.fetchPerfisValidos(); // Carregar os perfis validados ao montar o componente
  },
};
</script>


  <style scoped>

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


.barra-pesquisa {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  gap: 10px;
}

.barra-pesquisa input {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
}

.barra-pesquisa button {
  padding: 10px 20px;
  font-size: 16px;
  color: #f78024; /* Cor do texto */
  background-color: transparent; /* Fundo transparente */
  border: 2px solid #f78024; /* Adiciona uma borda sólida de 2px */
  border-radius: 5px; /* Bordas arredondadas */
  cursor: pointer;
}

.barra-pesquisa button:hover {
  background-color: #f78024; /* Cor de fundo ao passar o mouse */
  color: white; /* Cor do texto ao passar o mouse */
}


.descricao {
  text-align: center;
  font-size: 19px;
  color: #555;
  margin-bottom: 20px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}


  .perfils-validados {
    font-family: Arial, sans-serif;
    padding: 20px;
    background-color: #f9f9f9;
    color: #333;
    padding-top: 120px;
  }
  
  h1 {
    text-align: center;
    color: #252f3f;
    margin-bottom: 20px;
  }
  
  .perfil-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    width: 70%;
    padding-left: 250px;
  }
  
  .perfil {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: calc(33.33% - 20px); /* Divide a largura por 3 e considera o gap */
  max-width: 300px; /* Limita a largura máxima para telas maiores */
  box-sizing: border-box;
}

  
  .perfil h3 {
    font-size: 20px;
    margin-bottom: 10px;
    color: #333;
  }
  
  .perfil p {
    font-size: 16px;
    color: #555;
  }

  @media (max-width: 900px) {
  .perfil {
    width: calc(50% - 20px); /* Ajusta para 2 por linha em telas menores */
  }
}

@media (max-width: 600px) {
  .perfil {
    width: 100%; /* Um por linha em telas muito pequenas */
  }
}
  </style>
  