<template>
  <div class="container" v-if="show">
    <h1 class="title">{{ show.title }}</h1>
    <CardShow :show="show" @toggle-favorite="toggleFavorite(show)" />
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
  props: ['showId'],
  data: () => ({
    show: null,
  }),
  mounted() {
    API.get(`/shows/${this.showId}`).then((response) => {
      this.show = response.data
    })
  },
  methods: {
    toggleFavorite: (show) => {
      show.user.favorited = !show.user.favorited

      API.post(`/shows/${show.id}/favorites`, {
        isFavorite: show.user.favorited,
      })
    },
  },
})
</script>
