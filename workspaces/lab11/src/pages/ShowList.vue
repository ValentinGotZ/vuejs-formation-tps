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
      @toggle-favorite="toggleFavorite(show.id)"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { mapActions, mapState, mapWritableState } from 'pinia'

import CardShow from '@/components/CardShow.vue'
import { useStore } from '@/store'

export default defineComponent({
  components: {
    CardShow,
  },
  data: () => ({
    title: 'My TV shows',
  }),
  computed: {
    ...mapState(useStore, ['filteredShows']),
    ...mapWritableState(useStore, ['searchTerm']),
  },
  methods: {
    ...mapActions(useStore, ['toggleFavorite']),
  },
})
</script>
