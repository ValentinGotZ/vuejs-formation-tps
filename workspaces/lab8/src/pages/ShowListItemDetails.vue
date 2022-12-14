<template>
  <div class="container" v-if="show">
    <h1 class="title">{{ show.title }}</h1>
    <CardShow :show="show" @toggle-favorite="toggleFavorite(show)" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import CardShow from '@/components/CardShow.vue'
import { getShowById, setShowFavorite } from '../api'

export default defineComponent({
  components: {
    CardShow,
  },
  props: ['showId'],
  data() {
    return {
      show: null,
    }
  },
  async created() {
    this.show = await getShowById(parseInt(this.showId, 10))
  },
  methods: {
    async toggleFavorite() {
      this.show = await setShowFavorite(this.show.id, !this.show.user.favorited)
    },
  },
})
</script>
