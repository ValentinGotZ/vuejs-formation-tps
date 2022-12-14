import { defineStore } from 'pinia'
import { getShows, getShowById, setShowFavorite } from '../api'

export const useStore = defineStore('main', {
  state: () => {
    return {
      showsMap: new Map(),
      searchTerm: '',
    }
  },
  getters: {
    shows: (state) => Array.from(state.showsMap.values()),
    getCurrentShow: (state) => (showId) => state.showsMap.get(showId),
    searchedShows: (state) =>
      state.shows.filter((show) =>
        show.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    favoriteShows: (state) => state.shows.filter((show) => show.user.favorited),
  },
  actions: {
    async fetchShows() {
      const shows = await getShows()

      this.showsMap = new Map(shows.map((show) => [show.id, show]))
    },
    async fetchShowById(showId) {
      if (!this.showsMap.has(showId)) {
        const show = await getShowById(showId)
        this.showsMap.set(show.id, show)
      }
    },
    async toggleFavorite(show) {
      const updatedShow = await setShowFavorite(show.id, !show.user.favorited)

      this.showsMap.set(updatedShow.id, updatedShow)
    },
  },
})
