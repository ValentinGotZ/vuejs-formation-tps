import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import focus from './plugins/focus'

const app = createApp(App)
app.use(focus)
app.mount('#app')
