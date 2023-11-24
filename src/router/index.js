import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/qea',
      name: "qea",
      component: () => import('../views/QEAView.vue')
    },
    {
      path: '/translate',
      name: "translate",
      component: () => import('../views/TranslateView.vue')
    },
    {
      path: '/SUMUP',
      name: "SUMUP",
      component: () => import('../views/SUMUPView.vue')
    }
  ]
})

export default router
