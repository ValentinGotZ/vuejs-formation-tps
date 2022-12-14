<template>
  <div class="container">
    <h1 class="title">{{ title }}</h1>
    <div class="field">
      <label class="label">Search</label>
      <div class="control">
        <input
          class="input"
          type="text"
          data-cy="search"
          placeholder="Game of Thrones, Breaking Bad, ..."
          v-model.lazy="searchTerm"
          v-focus
        />
      </div>
    </div>
    <CardShow
      v-for="show of filteredShows"
      :key="show.id"
      :show="show"
      @toggle-favorite="store.toggleFavorite(show.id)"
    />
  </div>
</template>

<script setup lang="ts">
import CardShow from '@/components/CardShow.vue'
import { useStore } from '@/store'
import { ref, computed } from 'vue'

const title = ref('My TV shows')

const store = useStore()

const filteredShows = computed(() => store.filteredShows)

const searchTerm = computed({
  get(): string {
    return store.searchTerm
  },
  set(searchTerm: string): void {
    store.searchTerm = searchTerm
  },
})
</script>
