import focusPlugin from '@/plugins/focus'
import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import { router } from './router'

const app = createApp(App)

app.use(focusPlugin)
app.use(router)

app.mount('#app')
