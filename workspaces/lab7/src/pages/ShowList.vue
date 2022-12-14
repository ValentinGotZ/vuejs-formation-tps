<script>
import { defineComponent } from 'vue'
import CardShow from '@/components/CardShow.vue'
import shows from '../../../../resources/server-formation-vue/shows'

export default defineComponent({
  name: 'ShowList',
  components: {
    CardShow,
  },
  data() {
    return {
      title: 'My TV shows',
      shows,
      searchTerm: '',
    }
  },
  computed: {
    filteredShows() {
      return this.shows.filter((show) =>
        show.title.toUpperCase().includes(this.searchTerm.toUpperCase())
      )
    },
  },
  methods: {
    toggleFavorite(show) {
      console.log(`${show.title} toggled favorite state`)
      show.user.favorited = !show.user.favorited
    },
  },
})
</script>

<template>
  <div class="hero-body">
    <div class="container">
      <h1 class="title">{{ title }}</h1>
      <div class="field">
        <label class="label">Search</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Game of Thrones, Breaking Bad, ..."
            v-model.lazy="searchTerm"
            v-focus
          />
        </div>
      </div>
      <CardShow
        v-for="show of filteredShows"
        :key="show.id"
        :show="show"
        @toggle-favorite="toggleFavorite(show)"
      >
      </CardShow>
    </div>
  </div>
</template>

<style scoped></style>
