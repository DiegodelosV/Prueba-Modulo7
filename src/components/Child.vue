<template>
  <div>
    <input
      v-model="inputMensaje"
      type="text"
      placeholder="Escribe un mensaje"
      data-test="ingresoMensaje"
    />
    <!-- se usa el atributo data-test para las pruebas -->
    <button @click="enviarMensaje" data-test="Enviar-Mensaje">Enviar mensaje</button>
  </div>
</template>

<script>
export default {
  name: 'Child',
  data() {
    return {
      inputMensaje: ''
    }
  },

  methods: {
    enviarMensaje() {
      if (this.inputMensaje.trim()) {
        // Verificar que el campo de entrada no este vacío
        this.$emit('enviar', this.inputMensaje) // Emite el evento 'enviar' con el valor del campo de entrada
        this.inputMensaje = '' // Limpiar el campo de entrada
      }
    }
  }
}
</script>
