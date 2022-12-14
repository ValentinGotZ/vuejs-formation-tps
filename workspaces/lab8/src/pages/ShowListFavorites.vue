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
import { defineComponent } from 'vue'
import CardShow from '@/components/CardShow.vue'
import { getShows, setShowFavorite } from '../api'

export default defineComponent({
  components: {
    CardShow,
  },
  data: () => ({
    title: 'My favorite TV shows',
    shows: [],
  }),
  async created() {
    this.shows = await getShows()
  },
  methods: {
    async toggleFavorite() {
      this.show = await setShowFavorite(this.show.id, !this.show.user.favorited)
    },
  },
  computed: {
    favoriteShows() {
      return this.shows.filter((show) => show.user.favorited)
    },
  },
})
</script>
