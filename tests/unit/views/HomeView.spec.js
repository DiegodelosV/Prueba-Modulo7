// Ejercicio 2 - Navegación con Vue Router
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import { mount } from '@vue/test-utils'

describe('HomeView', () => {
  test('Probando la existencia del componente o vista HomeView', async () => {
    // Crear el router
    const router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: '/',
          name: 'home',
          component: HomeView
        }
      ]
    })

    router.push('/')
    await router.isReady()

    const wrapper = mount(HomeView, {
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.findComponent(HomeView).exists()).toBe(true)
  })
})
