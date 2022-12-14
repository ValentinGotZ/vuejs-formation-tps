<template>
  <div class="container" v-if="show">
    <h1 class="title">{{ show.title }}</h1>
    <CardShow :show="show" @toggle-favorite="toggleFavorite($event.id)" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CardShow from '@/components/CardShow.vue'
import { mapActions, mapState } from 'pinia'
import { useStore } from '@/store'
import type { ShowInterface } from '@/model'

export default defineComponent({
  components: {
    CardShow,
  },
  props: {
    showId: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapState(useStore, ['shows']),
    show(): ShowInterface | undefined {
      return this.shows.find((s) => s.id === parseInt(this.showId, 10))
    },
  },
  methods: {
    ...mapActions(useStore, ['toggleFavorite']),
  },
})
</script>
