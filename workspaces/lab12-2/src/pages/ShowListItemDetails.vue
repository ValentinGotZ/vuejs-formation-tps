<template>
  <div class="container" v-if="show">
    <h1 class="title">{{ show.title }}</h1>
    <CardShow :show="show" @toggle-favorite="store.toggleFavorite(show!.id)" />
  </div>
</template>

<script setup lang="ts">
import CardShow from '@/components/CardShow.vue'
import { useStore } from '@/store'
import { computed } from 'vue'

const props = defineProps<{
  showId: string
}>()

const show = computed(() => {
  return store.shows.find((s) => s.id === parseInt(props.showId))
})

const store = useStore()
</script>
