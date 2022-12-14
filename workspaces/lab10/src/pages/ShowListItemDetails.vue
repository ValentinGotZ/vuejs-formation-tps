<template>
  <div class="container" v-if="show">
    <h1 class="title">{{ show.title }}</h1>
    <CardShow :show="show" @toggle-favorite="toggleFavorite(show.id)" />
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
  props: ['showId'],
  computed: {
    ...mapState(useStore, {
      show(store) {
        return store.shows.find((s) => s.id === parseInt(this.showId))
      },
    }),
  },
  methods: {
    ...mapActions(useStore, ['toggleFavorite']),
  },
})
</script>
