<script>
import CardShow from '@/components/CardShow.vue'
import { defineComponent } from 'vue'
import shows from '../../../../resources/server-formation-vue/shows'

export default defineComponent({
  name: 'ShowListItemDetails',
  components: {
    CardShow,
  },
  props: ['id'],
  //  data() {
  //    return {
  //      show: null,
  //    }
  //  },
  //  mounted() {
  //    this.show = shows.find((show) => show.id === parseInt(this.id, 10))
  //  },
  computed: {
    show() {
      return shows.find((show) => show.id === parseInt(this.id, 10))
    },
  },
})
</script>

<template>
  <CardShow v-if="show" :show="show" />
</template>

<style scoped></style>
