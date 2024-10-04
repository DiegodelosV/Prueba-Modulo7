import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Ejercicio1View from '../views/Ejercicio1View.vue'
import Ejercicio3View from '@/views/Ejercicio3View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },

    {
      path: '/ejercicio1',
      name: 'ejercicio1',
      component: Ejercicio1View
    },

    {
      path: '/ejercicio3',
      name: 'ejercicio3',
      component: Ejercicio3View
    }
  ]
})

export default router
