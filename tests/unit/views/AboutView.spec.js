// Ejercicio 2 - Navegación con Vue Router
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '@/views/AboutView.vue'

describe('AboutView', () => {
  test('Probando la existencia de la AboutView ', async () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: '/about',
          name: 'AboutViewVue',
          component: AboutView
        }
      ]
    })
    router.push('/about')
    await router.isReady()

    const wrapper = mount(AboutView, {
      global: {
        plugins: [router]
      }
    })
    expect(wrapper.findComponent(AboutView).exists()).toBe(true)
  })
})
