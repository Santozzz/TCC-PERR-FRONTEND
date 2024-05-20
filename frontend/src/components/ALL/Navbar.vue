<template>
    <div>
        <header>
            <nav>
              <div class="space">
                <div class="logo">
                    <router-link to="/">PER<strong>R</strong></router-link>
                </div>
                <div class="dropdown" :class="{ 'show': isDropdownOpen }">
                    <button @click="toggleDropdown" class="dropbtn">
                        <i :class="iconClass"></i>
                        <i class="fa-solid fa-user"></i>
                    </button>
                    <div class="dropdown-content">
                        <a href="#">Minha Conta</a>
                        <router-link to="/Cadastro">Sair</router-link>
                    </div>
                </div>
              </div>
            </nav>
        </header>
        <nav class="navbar">

        </nav>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isDropdownOpen: false
    };
  },
  computed: {
    iconClass() {
      return this.isDropdownOpen ? 'fa-solid fa-angle-up' : 'fa-solid fa-angle-down';
    }
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    }
  }
};
</script>

<style scoped>
    .navbar{
      position: fixed;
      height: 90vh;
      width: 18%;
      background-color: #131921;
    }
    header{
      width: 100%;
      height: 10vh;
    }
    .space{
      display: flex;
      width: 95%;
      align-items: center;
      justify-content: space-between;
    }
    nav{
      background-color: #FF9352;
      position: fixed;
      width: 100%;
      height: 10vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .logo a{
      color: #000;
      text-decoration: none;
      font-size: 35px;
      font-style: italic;
      font-weight: 700;
      letter-spacing: 1px;
    }
    .logo a strong{
      color: #fff;
    }
    .dropbtn {
      display: flex;
      align-items: center;
      gap: 10px;
      justify-content: space-between;
      background-color: #FF9352;
      color: #333333;
      padding: 10px;
      font-size: 16px;
      border: none;
      cursor: pointer;
    }
    .dropbtn .fa-user{
      color: #fff;
      padding: 12px 14px;
      background-color: #000;
      border-radius: 50%;
    }
    .perfil {
      display: flex;
      align-items: center;
    }

    .dropdown {
      position: relative;
      display: inline-block;
    }

    .dropdown-content {
      display: none;
      position: absolute;
      border-radius: 5px;
      background-color: #ffffff;
      min-width: 160px;
      box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.2);
      z-index: 1;
      right: 50%;
    }

    .dropdown-content a {
      color: #333333;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
    }

    .dropdown.show .dropdown-content {
      display: flex;
      flex-direction: column;
    }
    /* Animação para o ícone de seta */
    .fa-angle-up {
        transform: rotate(180deg);
    }
</style>
