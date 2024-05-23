<template>
    <div>
        <header>
            <nav>
              <div class="space">
                <div class="mob-logo">
                  <div class="openMenu">
                    <i @click="toggleMenu" :class="{ 'menuOpen': isMenuOpen }" class="fa-solid fa-bars"></i>
                  </div>
                  <div class="logo">
                      <router-link to="/">PER<strong>R</strong></router-link>
                  </div>
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
        <nav class="navbar" :class="['navbar', { 'navbarOpen': isMenuOpen }]">
          <ul class="nav-list">
            <router-link to="/">
              <li>
                <div class="icon">
                  <i class="fa-solid fa-home"></i>
                </div>
                <div class="namePage">
                  <p>Página inicial</p>
                </div>
              </li>
            </router-link>
            <router-link to="/VagaEmprego">
              <li>
                <div class="icon">
                  <i class="fa-solid fa-briefcase"></i>
                </div>
                <div class="namePage">
                  <p>Vagas de Emprego</p>
                </div>
              </li>
            </router-link>
            <router-link to="/">
              <li>
                <div class="icon">
                  <i class="fa-solid fa-bell"></i>
                </div>
                <div class="namePage">
                  <p>Notificações</p>
                </div>
              </li>
            </router-link>
            <router-link to="/">
              <li>
                <div class="icon">
                  <i class="fa-solid fa-book-open"></i>
                </div>
                <div class="namePage">
                  <p>Seu currículo</p>
                </div>
              </li>
            </router-link>
            <router-link to="/">
              <li>
                <div class="icon">
                  <i class="fa-solid fa-bookmark"></i>
                </div>
                <div class="namePage">
                  <p>Favoritos</p>
                </div>
              </li>
            </router-link>
            <router-link to="/">
              <li>
                <div class="icon">
                  <i class="fa-solid fa-laptop"></i>
                </div>
                <div class="namePage">
                  <p>Cursos</p>
                </div>
              </li>
            </router-link>
            <router-link to="/">
              <li>
                <div class="icon">
                  <i class="fa-solid fa-headset"></i>
                </div>
                <div class="namePage">
                  <p>Entrevista</p>
                </div>
              </li>
            </router-link>
            
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
      isDropdownOpen: false,
      isMenuOpen: false,
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
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
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
      align-items: center;
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
    .mob-logo{
      display: flex;
      width: 15%;
      justify-content: space-between;
      align-items: center;
    }
    .openMenu i{
      color: #fff;
      font-size: 30px;
      transition: .5s ease;
      cursor: pointer;
    }
    .openMenu i:active{
      transform: scale(.9);
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
      color: #ffffff;
      text-decoration: none;
      font-size: 35px;
      font-style: italic;
      font-weight: 700;
      letter-spacing: 1px;
    }
    .logo a strong{
      color: #000000;
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
      background-color: #252F3F;
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
      height: 60%;
      width: 90%;
      list-style: none;
    }
    .nav-list a{
      text-decoration: none;
      width: 100%;
      display: flex;
      justify-content: center;
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
      width: 15%;
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
    .namePage p{
      font-weight: 400;
    }
    .nav-list a li{
      color: #fff;
      font-size: 14px;
      font-weight: 500;
      letter-spacing: 1px;
      text-decoration: none;
    }
    .line{
      height: 1px;
      width: 90%;
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
      width: 65%;
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
    @media screen and (min-width: 1261px){
        .openMenu{
          display: none;
        }
    }
    @media screen and (max-width: 1260px){
        .navbar{
          transform: translateX(-100%);
          opacity: 0;
        }
        .navbar.navbarOpen{
          transform: translateX(0);
          opacity: 1;
          animation: slideIn 1s forwards;
        }
        @keyframes slideIn {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
      }
    @media screen and (max-width: 1252px){
      .navbar{
        width: 20%;
      }
    }
    @media screen and (max-width: 1137px){
      .navbar{
        width: 23%;
      }
    }
    @media screen and (max-width: 1000px){
        .mob-logo{
          width: 18%;
        }
        .navbar{
          width: 25%;
        }
    }
    @media screen and (max-width: 910px){
        .navbar{
          width: 28%;
        }
    }
    @media screen and (max-width: 835px){
        .mob-logo{
          width: 22%;
        }
        .navbar{
          width: 31%;
        }
    }
    @media screen and (max-width: 730px){
        .navbar{
          width: 35%;
        }
    }
    @media screen and (max-width: 650px){
        .mob-logo{
          width: 26%;
        }
        .navbar{
          width: 44%;
        }
    }
    @media screen and (max-width: 535px){
        .mob-logo{
          width: 32%;
        }
        .navbar{
          width: 49%;
        }
    }
    @media screen and (max-width: 468px){
        .navbar{
          width: 54%;
        }
    }
    @media screen and (max-width: 425px){
        .mob-logo{
          width: 38%;
        }
        .navbar{
          width: 64%;
        }
    }
    @media screen and (max-width: 360px){
        .mob-logo{
          width: 43%;
        }
        .navbar{
          width: 68;
        }
    }
</style>
