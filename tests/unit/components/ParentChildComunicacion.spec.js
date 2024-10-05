// Ejercicio 3: Comunicación entre componentes
import { mount } from '@vue/test-utils'
import Parent from '@/components/Parent.vue'

describe('Validar el funcionamiento de la comunicación entre componentes', () => {
  it('recibe el mensaje del componente Child y lo muestra', async () => {
    // Arrange: Montamos el componente Parent
    const wrapper = mount(Parent)

    // Act: Encontramos el input del componente Child usando get con data-test
    const input = wrapper.get('[data-test="ingresoMensaje"]')

    // Simulamos escribir en el input
    await input.setValue('Mensaje de prueba')

    // Simulamos el clic en el botón para enviar el mensaje usando get
    const button = wrapper.get('[data-test="Enviar-Mensaje"]')
    await button.trigger('click')

    // Assert: Verificamos que el mensaje se haya recibido
    const mensajeRecibido = wrapper.get('[data-test="mensaje-Recibido"]')
    expect(mensajeRecibido.text()).toContain('Mensaje de prueba') // Se verifica que el mensaje sea el esperado
  })
})
