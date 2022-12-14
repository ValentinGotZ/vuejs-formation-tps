import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

createApp(App)
  .directive('auto-focus', (el, binding) => {
    el.focus()
  })
  .mount('#app')
