// Ejercicio 2 - Navegación con Vue Router
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import { mount } from '@vue/test-utils'

describe('HomeView', () => {
  test('Probando la existencia de la vista HomeView', async () => {
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
      //se define la configuración del enrutador local durante el montaje
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.findComponent(HomeView).exists()).toBe(true) // se realiza la aserción, donde se verifica que el componente exista
  })
})
