<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <RouterLink to="/" class="navbar-brand">Prueba Modulo 7</RouterLink>
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
              <RouterLink to="/" class="nav-link" exact-active-class="active">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/ejercicio1" class="nav-link" exact-active-class="active"
                >Ejercicio 1</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink to="/ejercicio3" class="nav-link" exact-active-class="active"
                >Ejercicio 3</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink to="/about" class="nav-link" exact-active-class="active"
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
