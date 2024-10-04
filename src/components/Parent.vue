<template>
  <div>
    <Child @enviar="MensajeRecibido" />
    <p v-if="mensaje">mensaje recibido: {{ mensaje }}</p>
  </div>
</template>

<script>
import Child from './Child.vue'

export default {
  name: 'Parent',
  components: {
    Child
  },

  data() {
    return {
      mensaje: ''
    }
  },

  methods: {
    MensajeRecibido(text) {
      this.mensaje = text
    }
  }
}
</script>
