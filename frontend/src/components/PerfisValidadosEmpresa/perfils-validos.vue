<template>
    <div>
        <!-- Navbar -->
    <nav class="navbar">
    <ul>
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
    </nav>
    <div class="perfils-validados">
      <h1>Perfis Validados</h1>
      <p class="descricao">
      Os perfis abaixo passaram por uma validação criteriosa realizada por nossa equipe, garantindo a autenticidade das informações e a qualificação dos profissionais. Conecte-se com confiança!
    </p>

    <!-- Barra de Pesquisa -->
    <div class="barra-pesquisa">
      <input 
        type="text" 
        v-model="pesquisa" 
        placeholder="Pesquise por nome, email ou telefone..." 
      />
      <button @click="filtrarPerfis">Pesquisar</button>
    </div>

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
  export default {
    name: "PerfilsValidados",
    data() {
      return {
        filtrarPerfis() {
      // A filtragem já é feita na propriedade computada, mas o botão pode ser usado para outros fins.
      console.log("Pesquisa realizada:", this.pesquisa);
    },
        perfisValidos: [
          { nome: "Carlos Ramirez", email: "carlos.ramirez@email.com", telefone: "(21) 91234-5678" },
          { nome: "Amina Hassan", email: "amina.hassan@email.com", telefone: "(11) 93456-7890" },
          { nome: "Chen Wei", email: "chen.wei@email.com", telefone: "(31) 94567-8901" },
          { nome: "Juan Pablo Rodríguez", email: "juan.rodriguez@email.com", telefone: "(77) 98765-4321" },
          { nome: "Carolina Torres", email: "carolina.torres@email.com", telefone: "(42) 94567-8901" },
          { nome: "Luis Fernando Vásquez", email: "luis.vasquez@email.com", telefone: "(85) 93456-7890" },
          { nome: "Maria Alejandra Pérez ", email: "maria.perez@email.com", telefone: "(11) 94567-8901" },
          { nome: "Ángel Eduardo Gómez", email: "angel.gomez@email.com", telefone: "(23) 95678-9012" },
          { nome: "Vanessa Rojas", email: "vanessa.rojas@email.com", telefone: "(37)  97890-1234" },
          { nome: "Kofi Nkrumah", email: "kofi.nkrumah@email.com", telefone: "(62) 98901-2345" },
          { nome: "Amina Ibrahim", email: "amina.ibrahim@email.com", telefone: "(83) 91234-5678" },
          { nome: "Chen Li", email: "chen.li@email.com", telefone: "(25) 93456-7890" },
          { nome: "Siti Rahmawati", email: "siti.rahmawati@email.com", telefone: "(28) 94567-8901" },
          { nome: "Adama Diallo", email: "adama.diallo@email.com", telefone: "(49) 95678-9012" },
          { nome: "Mei Wong", email: "mei.wong@email.com", telefone: "(14) 97890-1234" },
          { nome: "Diego Martínez", email: "diego.martinez@email.com", telefone: "(69) 98765-4321" },
          { nome: "Fatoumata Diop", email: "fatoumata.diop@email.com", telefone: "(48) 93456-7890" },
          { nome: "Haruto Takahashi", email: "haruto.takahashi@email.com", telefone: "(65) 94567-8900" },
        ],
      };
    },
    methods: {
    goToHome() {
      this.$router.push('/HomeEmpresas'); // Supondo que você tenha uma rota chamada 'home'
    },
    goToPlano() {
      this.$router.push('/PlanoEmpresas');  // Redireciona para a página do plano
    },
  },

  };
  </script>
  <style scoped>

  /* Navbar Estilo */
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
  