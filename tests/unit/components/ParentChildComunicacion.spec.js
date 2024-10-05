// Ejercicio 3: Comunicación entre componentes
import { mount } from '@vue/test-utils'
import Parent from '@/components/Parent.vue'

describe('Validar el funcionamiento de la comunicación entre componentes', () => {
  it('recibe el mensaje del componente Child y lo muestra', async () => {
    // Arrange: Se monta el componente Parent para la interuacción
    const wrapper = mount(Parent)

    // Act: ejecutamos la interacción entre los componentes
    const input = wrapper.get('[data-test="ingresoMensaje"]')

    // Act: Se simula el ingreso de un mensaje en el componente Child
    await input.setValue('Mensaje de prueba')

    // Act: se prueba el envio del mensaje en el componente Parent
    const button = wrapper.get('[data-test="Enviar-Mensaje"]')
    await button.trigger('click') // Se simula el clic con la funcion trigger

    // Assert: Verificamos que el mensaje se haya recibido
    expect(wrapper.text()).toContain('mensaje recibido: Mensaje de prueba') // Se compara el texto del componente con el texto esperado
  })
})
