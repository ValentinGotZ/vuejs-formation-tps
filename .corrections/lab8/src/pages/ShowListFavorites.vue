<template>
  <div class="container">
    <h1 class="title">{{ title }}</h1>
    <CardShow
      v-for="show of favoriteShows"
      :key="show.id"
      :show="show"
      @toggle-favorite="toggleFavorite(show)"
    />
  </div>
</template>

<script>
import CardShow from '@/components/CardShow.vue'
import { API } from '@/api'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    CardShow,
  },
  data: () => ({
    title: 'My favorite TV shows',
    shows: [],
  }),
  methods: {
    toggleFavorite: (show) => {
      show.user.favorited = !show.user.favorited

      API.post(`/shows/${show.id}/favorites`, {
        isFavorite: show.user.favorited,
      })
    },
  },
  computed: {
    favoriteShows() {
      return this.shows.filter((show) => show.user.favorited)
    },
  },
  mounted() {
    API.get('/shows').then((response) => {
      this.shows = response.data
    })
  },
})
</script>
