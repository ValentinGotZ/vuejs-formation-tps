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

<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  step: {
    type: Number,
    default: 1,
  },
})

const count = ref(0)

const doubleCounter = computed(() => count.value * 2)

function increment() {
  count.value += props.step
}

watch(count, () => {
  console.log(`counter is now equal to ${count.value}`)
})
</script>
