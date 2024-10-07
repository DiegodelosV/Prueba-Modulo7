<template>
  <div class="text-center my-4">
    <p class="display-5">Es el componente The Welcome</p>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'TheWelcome',
  props: {
    msg: String
  }
}
</script>
