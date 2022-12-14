<template>
  <div class="container">
    <h1 class="title">{{ title }}</h1>
    <CardShow
      v-for="show of favoriteShows"
      :key="show.id"
      :show="show"
      @toggle-favorite="toggleFavorite(show.id)"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import CardShow from '@/components/CardShow.vue'
import { mapActions, mapState } from 'pinia'
import { useStore } from '@/store'

export default defineComponent({
  components: {
    CardShow,
  },
  data: () => ({
    title: 'My favorite TV shows',
  }),
  methods: {
    ...mapActions(useStore, ['toggleFavorite']),
  },
  computed: {
    ...mapState(useStore, ['favoriteShows']),
  },
})
</script>
