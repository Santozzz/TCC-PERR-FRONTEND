import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/index.vue')
    },
    {
      path: '/Cadastro',
      name: 'cadastro',
      component: () => import('../views/Cadastro.vue')
    },
    {
      path: '/Entrar',
      name: 'entrar',
      component: () => import('../views/Entrar.vue')
    },
  ]
})

export default router
