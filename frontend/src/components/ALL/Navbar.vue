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
          <ul class="nav-list">
            <li>
              <div class="icon">
                <i class="fa-solid fa-home"></i>
              </div>
              <div class="namePage">
                <router-link to="/">Página inicial</router-link>
              </div>
            </li>
            <li>
              <div class="icon">
                <i class="fa-solid fa-briefcase"></i>
              </div>
              <div class="namePage">
                <router-link to="/vagaemprego">Vagas de Emprego</router-link>
              </div>
            </li>
            <li>
              <div class="icon">
                <i class="fa-solid fa-bell"></i>
              </div>
              <div class="namePage">
                <router-link to="/index.vue">Notificações</router-link>
              </div>
            </li>
            <li>
              <div class="icon">
                <i class="fa-solid fa-book-open"></i>
              </div>
              <div class="namePage">
                <router-link to="/index.vue">Seu Currículo</router-link>
              </div>
            </li>
            <li>
              <div class="icon">
                <i class="fa-solid fa-bookmark"></i>
              </div>
              <div class="namePage">
                <router-link to="/index.vue">Favoritos</router-link>
              </div>
            </li>
            <li>
              <div class="icon">
                <i class="fa-solid fa-laptop"></i>
              </div>
              <div class="namePage">
                <router-link to="/index.vue">Cursos</router-link>
              </div>
            </li>
            <li>
              <div class="icon">
                <i class="fa-solid fa-headset"></i>
              </div>
              <div class="namePage">
                <router-link to="/index.vue">Entrevista</router-link>
              </div>
            </li>
          </ul>
          <div class="container-contact">
            <div class="line"></div>
            <div class="contacts">
              <i class="fa-brands fa-whatsapp"></i>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-instagram"></i>
            </div>
          </div>
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
      display: flex;
      flex-direction: column;
      justify-content: space-around;
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
    .nav-list{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      height: 55vh;
      list-style: none;
      margin-top: 10%;
    }
    .nav-list li{
      display: flex;
      justify-content: space-between;
      padding: 10px;
      width: 100%;
      border-radius: 10px;
      transition: .5s ease;
    }
    .nav-list li:hover{
      background-color: #252c35;
      cursor: pointer;
    }
    .nav-list li .icon{
      width: 10%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .nav-list li i{
      color: #fff;
    }
    .nav-list li .namePage{
      width: 80%;
      display: flex;
      justify-content: start;
      align-items: center;
    }
    .nav-list li a{
      color: #fff;
      font-size: 14px;
      font-weight: 500;
      letter-spacing: 1px;
      text-decoration: none;
    }
    .line{
      height: 1px;
      width: 80%;
      background-color: #fff;
    }
    .container-contact{
      width: 90%;
      height: 30%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
    }
    .contacts{
      display: flex;
      width: 55%;
      justify-content: space-between;
      align-items: center;
    }
    .contacts i{
      color: #fff;
      font-size: 15px;
      border: 1px solid #fff;
      border-radius: 50%;
      padding: 8px;
      cursor: pointer;
    }
</style>
