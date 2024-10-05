<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-dark">
      <div class="container-fluid">
        <RouterLink to="/" class="navbar-brand text-light">Prueba Modulo 7</RouterLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink to="/" class="nav-link text-light" exact-active-class="active"
                >Home</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink to="/ejercicio1" class="nav-link text-light" exact-active-class="active"
                >Contador</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink to="/ejercicio3" class="nav-link text-light" exact-active-class="active"
                >Parent-Child</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink to="/about" class="nav-link text-light" exact-active-class="active"
                >About</RouterLink
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <main>
      <RouterView />
    </main>
  </header>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'NavBar',
  components: {
    RouterLink
  }
}
</script>
