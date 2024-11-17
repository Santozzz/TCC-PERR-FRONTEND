<template>
    <div>
      <NavbarAdm />  
      <div class="table-container">
        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Telefone</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in items" :key="index">
              <td>{{ item.id }}</td>
              <td>{{ item.nome }}</td>
              <td>{{ item.telefone }}</td>
              <td style="text-align: center;">
                <button class="btn btn-action1" @click="handleAction1(item)">Validar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>

  import axios from 'axios'; 
  export default {

    data() {
      return {
        items: [],  
      }
    },
    methods: {
      async getUsuarios() {
        try {
          const response = await axios.get('https://tcc-perr-backend-h5b7.onrender.com/usuarios'); // Confirme se a URL está correta
          this.items = response.data; // Armazena os dados recebidos no array items
        } catch (error) {
          console.error('Erro ao buscar usuários:', error);
        }
      },
      handleAction1(item) {
        console.log('Validar:', item); // Ação de validação
      },
      handleAction2(item) {
        console.log('Não Validar:', item); // Ação de não validação
      }
    },
    mounted() {
      this.getUsuarios(); // Faz a chamada para buscar os usuários quando o componente é montado
    }
  }
  </script>
  
  
  <style scoped>
  
  .table-container {
    display: flex;
    justify-content: center; 
    align-items: center; 
    height: 100vh; 
  }
  
  table {
    width: 60%;
    border: 1px solid #ddd;
    border-collapse: collapse;
  }
  
  th, td {
    padding: 8px;
    border: 1px solid #ddd;
    text-align: left;
  }
  
  button:focus {
    outline: none;
  }
  .btn {
    padding: 5px 10px;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    font-size: 14px;
    margin-right: 10px; 
  }
  
  
  .btn-action1 {
    background-color: #e77517; 
  }
  
  .btn-action1:hover {
    background-color:#a95511;
  }
  
  .btn-action2 {
    background-color: white; 
    color: #d46f1d; 
    border: 1.5px solid #e77619; 
  }
  
  .btn-action2:hover {
    background-color: #f8d7da; 
  }
  
  </style>    