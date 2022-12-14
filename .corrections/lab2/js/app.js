const app = Vue.createApp({
  data() {
    return {
      title: 'My TV shows',
    }
  },
})

console.log(app)

const mountedApp = app.mount('#app')

console.log(mountedApp)
