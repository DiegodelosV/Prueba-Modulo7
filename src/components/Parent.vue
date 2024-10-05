<template>
  <div class="parent d-flex flex-column align-items-center mt-3">
    <Child @enviar="MensajeRecibido" />
    <p v-if="mensaje" class="fw-bold">Mensaje recibido: {{ mensaje }}</p>
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
<style scoped>
.parent {
  width: 500px;
  background-color: #f5f5f5;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
</style>
