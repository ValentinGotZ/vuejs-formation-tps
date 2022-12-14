<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    show: {
      type: Object,
      required: true,
    },
  },
  emits: ['toggle-favorite'],
  methods: {
    toggleFavorite() {
      this.$emit('toggle-favorite', this.show)
    },
  },
  computed: {
    titleFavorite() {
      return `${this.show.title} is ${
        this.show.user.favorited ? '' : 'NOT '
      }your favorite!`
    },
  },
})
</script>

<template>
  <div class="card card-result">
    <div class="card-header">
      <p class="card-header-title">{{ titleFavorite }}</p>
      <a class="card-header-icon" @click="toggleFavorite()">
        <span class="icon" :class="{ 'is-favorite': show.user.favorited }">
          <i class="fa fa-star"></i>
        </span>
      </a>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-128x200">
            <img :src="show.images.poster" alt="" />
          </figure>
        </div>
        <div class="media-content">
          <p>Created in {{ show.creation }} - {{ show.seasons }} seasons</p>
          <p class="tags">
            <span
              v-for="(genre, index) in show.genres"
              :key="index"
              class="tag"
              >{{ genre }}</span
            >
          </p>
          <p class="tags">
            <span
              class="tag"
              :class="[
                show.status === 'Continuing' ? 'is-warning' : 'is-danger',
              ]"
            >
              {{ show.status }}
            </span>
          </p>
          <div class="content">
            {{ show.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
