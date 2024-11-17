import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/index.vue"),
    },
    {
      path: "/Cadastro",
      name: "cadastro",
      component: () => import("../views/Cadastro.vue"),
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
    {
      path: "/SeuCurriculo",
      name: "seucurriculo",
      component: () => import("../views/SeuCurriculo.vue"),
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

export default router;
