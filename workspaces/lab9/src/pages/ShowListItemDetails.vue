<template>
  <div class="container" v-if="show">
    <h1 class="title">{{ show.title }}</h1>
    <CardShow :show="show" @toggle-favorite="toggleFavorite(show)" />
  </div>
</template>

<script>
import CardShow from '@/components/CardShow.vue'
import { useStore } from '@/stores'
import { mapActions, mapState } from 'pinia'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    CardShow,
  },
  props: ['showId'],
  data: () => ({
    show: null,
  }),
  async created() {
    await this.fetchShowById(parseInt(this.showId, 10))

    // Du coup pas rappelé au toggleFavorite, à voir
    this.show = this.getCurrentShow(parseInt(this.showId, 10))
  },
  computed: {
    ...mapState(useStore, ['getCurrentShow']),
  },
  methods: {
    ...mapActions(useStore, ['fetchShowById']),
    ...mapActions(useStore, ['toggleFavorite']),
  },
})
</script>
