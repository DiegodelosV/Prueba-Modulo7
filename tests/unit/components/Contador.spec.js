// Ejercicio 1: Manejo del estado con Vuex
import { shallowMount } from '@vue/test-utils'
import Contador from '@/components/Contador.vue'
import store from '@/store' // Importar el store de Vuex

describe('Contador.vue', () => {
  let component // se declara la variable que almacenara el componente por cada prueba.
  //funcion "beforeEach" que se ejecuta antes de cada prueba
  beforeEach(() => {
    // Montar el componente con el store de Vuex antes de cada prueba
    component = shallowMount(Contador, {
      global: {
        plugins: [store] // Usar el store
      }
    })
  })

  test('El valor inicial del contador es 0', () => {
    // Aserción para verificar que el valor inicial del contador es 0
    expect(component.vm.$store.state.contador).toBe(0)
  })

  test('Incrementa el valor del contador al hacer clic en el botón', async () => {
    // Simular el clic en el botón de incrementar
    await component.find('button').trigger('click')

    // Verificar que el contador haya incrementado a 1
    expect(component.vm.$store.state.contador).toBe(1)
  })

  test('Decrementa el valor del contador al hacer clic en el botón de decremento', async () => {
    // Simular el clic en el botón de decremento
    await component.findAll('button')[1].trigger('click')

    // Verificar que el contador haya vuelto a 0
    expect(component.vm.$store.state.contador).toBe(0)
  })
})
