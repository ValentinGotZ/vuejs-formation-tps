<template>
  <button class="button is-dark" @click="increment()">Increment</button>
  <table class="table mt-3">
    <thead>
      <tr>
        <th>Counter</th>
        <th>Double counter</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{{ count }}</td>
        <td>{{ doubleCounter }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    step: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      count: 0,
    }
  },
  computed: {
    doubleCounter() {
      return this.count * 2
    },
  },
  methods: {
    increment() {
      this.count += this.step
    },
  },
  watch: {
    count() {
      console.log(`counter is now equal to ${this.count}`)
    },
  },
})
</script>
