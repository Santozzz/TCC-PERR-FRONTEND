<template>
    <div class="table-container">
        <NavbarAdm />  
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
        <tr v-for="(item, ) in items" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.phone }}</td>
          <td>
            <button class="btn btn-action1" @click="handleAction1(item)">  Validar  </button>
            <button class="btn btn-action2" @click="handleAction2(item)">Não Validar</button>
          </td>
        </tr>
      </tbody>
    </table>
    </div>

</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, name: "Gabriel Antas" , phone: "(11) 91234-5678" },
        { id: 2, name: "Danilo Quente" , phone: "(11) 91234-5678"},
        { id: 3, name: "David Serie B" , phone: "(11) 91234-5678"},
        { id: 4, name: "Cintia pinheiro" , phone: "(11) 91234-5678"},
        { id: 5, name: "Anderson venezuela" , phone: "(11) 91234-5678"},
        { id: 6, name: "Enzo siqueda" , phone: "(11) 91234-5678"},
        { id: 7, name: "Danilo Coreia do Sul" , phone: "(11) 91234-5678"},
      ],
    };
  },
  methods: {
    handleClick(item) {
      alert(`Button clicked for ${item.name}`);
    },
  },
};
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