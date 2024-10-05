<template>
  <header class="text-center my-4">
    <p class="display-5">Contador</p>
  </header>
  <main class="container text-center">
    <div class="mb-4">
      <h3>
        El valor del contador es: <span class="badge bg-info">{{ contador }}</span>
      </h3>
    </div>
    <div class="d-flex justify-content-center gap-3">
      <button @click="incrementar" class="btn btn-success">
        <i class="fas fa-plus"></i> Incrementar contador
      </button>
      <button @click="decrementar" class="btn btn-danger">
        <i class="fas fa-minus"></i> Disminuir contador
      </button>
    </div>
  </main>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Contador',
  // 'computed' permite crear propiedades, en donde usamos "mapState"
  // Mapea el estado de vuex a las propiedades computadas
  computed: {
    ...mapState(['contador'])
  },
  methods: {
    ...mapActions(['incrementar', 'decrementar']) //se usa "mapActions" para llamar a las acciones de vuex
  }
}
</script>

<style scoped></style>
