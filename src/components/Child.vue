<template>
  <div class="child text-center">
    <div class="input-group mb-3">
      <input
        v-model="inputMensaje"
        type="text"
        class="form-control"
        placeholder="Escribe un mensaje"
        data-test="ingresoMensaje"
      />
      <!-- se usa el atributo data-test para las pruebas -->
      <button class="btn btn-primary" @click="enviarMensaje" data-test="Enviar-Mensaje">
        Enviar mensaje
      </button>
    </div>
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
        // Verificar que el campo de entrada no esté vacío
        this.$emit('enviar', this.inputMensaje) // Emite el evento 'enviar' con el valor del campo de entrada
        this.inputMensaje = '' // Limpiar el campo de entrada
      }
    }
  }
}
</script>
