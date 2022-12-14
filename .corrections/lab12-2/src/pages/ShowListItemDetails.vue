<template>
  <div class="container" v-if="show">
    <h1 class="title">{{ show.title }}</h1>
    <CardShow :show="show" @toggle-favorite="store.toggleFavorite(show!.id)" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import CardShow from '@/components/CardShow.vue'
import { useStore } from '@/store'

const props = defineProps(['showId'])

const store = useStore()

const show = computed(() =>
  store.shows.find((s) => s.id === parseInt(props.showId))
)
</script>
