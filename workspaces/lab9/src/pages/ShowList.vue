<template>
  <div class="container">
    <h1 class="title">{{ title }}</h1>
    <div class="field">
      <label class="label">Search</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Game of Thrones, Breaking Bad, ..."
          v-model.lazy="searchTerm"
          v-focus
        />
      </div>
    </div>
    <CardShow
      v-for="show of searchedShows"
      :key="show.id"
      :show="show"
      @toggle-favorite="toggleFavorite(show)"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import CardShow from '@/components/CardShow.vue'
import { mapActions, mapState, mapWritableState } from 'pinia'
import { useStore } from '@/stores'

export default defineComponent({
  components: {
    CardShow,
  },
  data: () => ({
    title: 'My TV shows',
  }),
  computed: {
    ...mapWritableState(useStore, ['searchTerm']),
    ...mapState(useStore, ['searchedShows']),
  },
  methods: {
    ...mapActions(useStore, ['fetchShows']),
    ...mapActions(useStore, ['toggleFavorite']),
  },
  async created() {
    await this.fetchShows()
  },
})
</script>
