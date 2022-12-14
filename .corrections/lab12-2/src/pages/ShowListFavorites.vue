<template>
  <div class="container">
    <h1 class="title">{{ title }}</h1>
    <CardShow
      v-for="show of favoriteShows"
      :key="show.id"
      :show="show"
      @toggle-favorite="store.toggleFavorite(show.id)"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import CardShow from '@/components/CardShow.vue'

import { useStore } from '@/store/index'

const title = ref('My favorite TV shows')

const store = useStore()

const favoriteShows = computed(() => store.favoriteShows)
</script>
