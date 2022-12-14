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
      v-for="show of filteredShows"
      :key="show.id"
      :show="show"
      @toggle-favorite="toggleFavorite(show)"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import CardShow from '@/components/CardShow.vue'
import { API } from '@/api'

export default defineComponent({
  components: {
    CardShow,
  },
  data: () => ({
    title: 'My TV shows',
    shows: [],
    searchTerm: '',
  }),
  computed: {
    filteredShows() {
      return this.shows.filter((show) =>
        show.title.toUpperCase().includes(this.searchTerm.toUpperCase())
      )
    },
  },
  methods: {
    toggleFavorite: (show) => {
      show.user.favorited = !show.user.favorited

      API.post(`/shows/${show.id}/favorites`, {
        isFavorite: show.user.favorited,
      })
    },
  },
  async mounted() {
    const response = await API.get('/shows')
    this.shows = response.data
  },
})
</script>
