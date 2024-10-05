<template>
  <main class="d-flex flex-column align-items-center my-4">
    <p class="display-5">Comunicación entre componentes</p>
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
