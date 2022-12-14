<template>
  <div class="container">
    <h1 class="title">{{ title }}</h1>
    <CardShow
      v-for="show of store.favoriteShows"
      :key="show.id"
      :show="show"
      @toggle-favorite="store.toggleFavorite(show.id)"
    />
  </div>
</template>

<script setup lang="ts">
import CardShow from '@/components/CardShow.vue'
import { useStore } from '@/store'

const title = 'My favorite TV shows'
const store = useStore()
</script>
