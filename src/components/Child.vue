<template>
  <div>
    <input v-model="inputMensaje" type="text" placeholder="Escribe un mensaje" />
    <button @click="enviarMensaje">Enviar mensaje</button>
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
        this.$emit('enviar', this.inputMensaje)
        this.inputMensaje = '' // Limpiar el campo de entrada
      }
    }
  }
}
</script>
