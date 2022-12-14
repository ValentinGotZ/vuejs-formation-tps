import { defineStore } from 'pinia'
import { API } from '@/api'
import { computed, ref } from 'vue'

export const useShowStoreSetupSyntax = defineStore('shows', () => {
  const shows = ref([])
  const searchTerm = ref('')

  const filteredShows = computed(() =>
    shows.value.filter((show) =>
      show.title.toUpperCase().includes(searchTerm.value.toUpperCase())
    )
  )
  const favoriteShows = computed(() =>
    shows.value.filter((show) => show.user.favorited)
  )

  const fetchShows = async () => {
    const { data } = await API.get('/shows')
    shows.value = data
  }
  const toggleFavorite = async (showId) => {
    const show = shows.value.find((s) => s.id === showId)
    if (!show) {
      console.error('there is no show matching this ID')
      return
    }

    show.user.favorited = !show.user.favorited

    return await API.post(`/shows/${showId}/favorites`, {
      isFavorite: show.user.favorited,
    })
  }

  return {
    shows,
    filteredShows,
    favoriteShows,
    searchTerm,
    fetchShows,
    toggleFavorite,
  }
})

export const useStore = defineStore('main', {
  state: () => {
    return {
      shows: [],
      searchTerm: '',
    }
  },
  getters: {
    filteredShows: (state) =>
      state.shows.filter((show) =>
        show.title.toUpperCase().includes(state.searchTerm.toUpperCase())
      ),
    favoriteShows: (state) => state.shows.filter((show) => show.user.favorited),
  },
  actions: {
    async fetchShows() {
      const { data } = await API.get('/shows')
      this.shows = data
    },
    async toggleFavorite(showId) {
      const show = this.shows.find((s) => s.id === showId)
      if (!show) {
        console.error('there is no show matching this ID')
        return
      }

      show.user.favorited = !show.user.favorited

      return await API.post(`/shows/${showId}/favorites`, {
        isFavorite: show.user.favorited,
      })
    },
  },
})
