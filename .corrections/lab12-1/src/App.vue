<template>
  <div class="container">
    <div class="section">
      <h1 class="title">API Composition Playground</h1>
      <CounterBtn :step="2" />
    </div>
  </div>
</template>

<script setup>
import CounterBtn from '@/components/CounterBtn.vue'
</script>
