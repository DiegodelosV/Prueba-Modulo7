<template>
  <main class="d-flex flex-column align-items-center">
    <p class="display-3">Ejercicio 3: Comunicación entre componentes</p>
    <Parent />
  </main>
</template>

<script>
import Parent from '../components/Parent.vue'

export default {
  components: {
    Parent
  }
}
</script>

<style scoped></style>
