<template>
  <div>
    <div class="container">
      <nav class="navbar">
        <div class="navbar-brand">
          <RouterLink :to="{ name: 'shows' }" class="navbar-item">
            <img src="./assets/img/logo.jpg" alt="" />
            TV shows store
          </RouterLink>
        </div>
        <div class="navbar-menu is-active">
          <div class="navbar-start">
            <RouterLink
              :to="{ name: 'shows' }"
              :active-class="'is-active'"
              class="navbar-item"
              >List</RouterLink
            >
            <RouterLink
              :to="{ name: 'favorites' }"
              :active-class="'is-active'"
              class="navbar-item"
              >Favorites</RouterLink
            >
          </div>
        </div>
      </nav>
    </div>

    <section class="hero is-primary">
      <RouterView />
    </section>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({})
</script>
