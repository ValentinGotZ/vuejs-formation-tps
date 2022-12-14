import { defineStore } from 'pinia'
import type { ShowInterface } from '@/model'

import { API } from '@/api'

export const useStore = defineStore('main', {
  state: () => {
    return {
      shows: [] as ShowInterface[],
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
      const { data } = await API.get<ShowInterface[]>('/shows')
      this.shows = data
    },
    async toggleFavorite(showId: number) {
      const show = this.shows.find((s) => s.id === showId)
      if (!show) {
        console.error('there is no show matching this ID')
        return
      }

      show.user.favorited = !show.user.favorited

      return await API.post<ShowInterface>(`/shows/${showId}/favorites`, {
        isFavorite: show.user.favorited,
      })
    },
  },
})
