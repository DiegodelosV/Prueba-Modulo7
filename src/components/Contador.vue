<template>
  <header>
    <h1>Contador</h1>
  </header>
  <main>
    <div>
      <h3>El valor del contador es: {{ contador }}</h3>
    </div>
    <div>
      <button @click="incrementar">Incrementar contador</button>
      <button @click="decrementar">Disminuir contador</button>
    </div>
  </main>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Contador',
  computed: {
    ...mapState(['contador'])
  },
  methods: {
    ...mapActions(['incrementar', 'decrementar'])
  }
}
</script>
