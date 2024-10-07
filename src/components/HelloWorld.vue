<template>
  <div class="my-4 text-center">
    <p class="display-5">Componente Hello World!</p>
    <ul class="list-group">
      <li v-for="post in posts" :key="post.id">
        {{ post.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PostsView',
  data() {
    return {
      posts: [
        { id: 1, name: 'Bienvenido' },
        { id: 2, name: 'Prueba Modulo 7' },
        { id: 3, name: 'Desarrollo de aplicaciones front-end con framework Vue' }
      ]
    }
  }
}
</script>
