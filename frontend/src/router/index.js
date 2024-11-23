import { createRouter, createWebHistory } from "vue-router";
import axios from "axios";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/index.vue"),
    },

    {
      path: "/HomeEmpresas",
      name: "homeempresa",
      component: () => import("../views/homedaempresa.vue"),
    },

    {
      path: "/Cadastro",
      name: "cadastro",
      component: () => import("../views/Cadastro.vue"),
    },
    {
      path: "/CadastroEmpresa",
      name: "cadastroEmpresa",
      component: () => import("../views/CadastrodaEmpresa.vue"),
    },
    {
      path: "/CadastroVaga",
      name: "cadastrovaga",
      component: () => import("../views/CadastroVaga.vue"),
    },
    {
      path: "/CadastroCurso",
      name: "cadastrocurso",
      component: () => import("../views/CadastroCurso.vue"),
    },
    {
      path: "/DashboardUser",
      name: "dashboarduser",
      component: () => import("../views/DashboardUser.vue"),
    },
    {
      path: "/MinhaConta",
      name: "minhaconta",
      component: () => import("../views/Conta.vue"),
    },
    {
      path: "/Entrar",
      name: "entrar",
      component: () => import("../views/Entrar.vue"),
    },
    {
      path: "/VagaEmprego",
      name: "vagaemprego",
      component: () => import("../views/VagaEmprego.vue"),
    },
    // {
    //   path: "/Notificacoes",
    //   name: "notificacoes",
    //   component: () => import("../views/Notificacoes.vue"),
    // },




    
    //{
      //path: "/CadastrodaEmpresa",
      //name: "cadastrodaempresa",
      //component: () => import("../views/CadastrodaEmpresa.vue"),
    //},
      {
        path: "/SeuCurriculo",
        name: "seucurriculo",
        component: () => import("../views/SeuCurriculo.vue"),
        meta: { requiresAuth: true }, // Protege a rota
      },
      
   // {
    //  path: "/Favoritos",
    //  name: "favoritos",
     // component: () => import("../views/Favoritos.vue"),
// },
    {
      path: "/Cursos",
      name: "cursos",
      component: () => import("../views/Cursos.vue"),
    },
    // {
    //   path: "/Entrevista",
    //   name: "entrevista",
    //   component: () => import("../views/Entrevista.vue"),
    // },
    {
      path: "/Colaboradores",
      name: "colaboradores",
      component: () => import("../views/Colaboradores.vue"),
    },

    {
      path: "/Termos",
      name: "termos",
      component: () => import("../views/TermosePriv.vue"),
    },
  ],


  

});

async function verificarSessao() {
  try {
    const response = await axios.get("https://tcc-perr-backend-h5b7.onrender.com/checkSession", { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error("Erro ao verificar a sessão:", error);
    return { loggedIn: false }; // Retorna loggedIn: false em caso de erro
  }
}


// Guard de navegação global
// Guard de navegação global
router.beforeEach(async (to, from, next) => {
  // Verifica se a rota requer autenticação
  if (to.meta.requiresAuth) {
    try {
      // Verifica a sessão do usuário
      const session = await verificarSessao();
      if (session.loggedIn) {
        next(); // Usuário autenticado, permite acesso à rota
      } else {
        next("/Entrar"); // Redireciona para a página de login se não estiver autenticado
      }
    } catch (error) {
      console.error("Erro ao verificar sessão:", error);
      next("/Entrar"); // Caso ocorra erro, redireciona para a página de login
    }
  } else {
    next(); // Rota pública, permite acesso
  }
});

export default router;
