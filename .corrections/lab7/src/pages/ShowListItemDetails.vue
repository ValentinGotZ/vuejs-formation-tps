<template>
  <div class="container" v-if="show">
    <h1 class="title">{{ show.title }}</h1>
    <CardShow :show="show" @toggle-favorite="toggleFavorite(show)" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import CardShow from '@/components/CardShow.vue'
import shows from '@/../../../resources/server-formation-vue/shows'

export default defineComponent({
  components: {
    CardShow,
  },
  props: ['showId'],
  data() {
    return {
      show: null,
      shows,
    }
  },
  mounted() {
    this.show = this.shows.find((show) => show.id === parseInt(this.showId, 10))
  },
  methods: {
    toggleFavorite: (show) => {
      show.user.favorited = !show.user.favorited
    },
  },
})
</script>
