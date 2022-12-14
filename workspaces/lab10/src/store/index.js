import { defineStore } from 'pinia'

import { API } from '@/api'

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
