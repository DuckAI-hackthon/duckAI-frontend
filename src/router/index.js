import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/GetStartedView.vue')
    },
    {
      path: '/login',
      name: 'login',
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
    },
    {
      path: '/keyWords',
      name: "keyWords",
      component: () => import('../views/KeysView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue')
    }
  ]
})

export default router
