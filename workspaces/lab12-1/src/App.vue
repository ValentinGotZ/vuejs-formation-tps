<template>
  <div class="container">
    <div class="section">
      <h1 class="title">API Composition Playground</h1>
      <CounterBtn :step="2" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import CounterBtn from '@/components/CounterBtn.vue'
export default defineComponent({
  components: {
    CounterBtn,
  },
})
</script>
