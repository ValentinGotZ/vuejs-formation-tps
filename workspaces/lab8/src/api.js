import axios from 'axios'

const httpClient = axios.create({
  baseURL:
    'http://ttm4iaskqknqxpiju-6194b65177002e34636cf4e0.labs.strigo.io:4000/rest',
  headers: { Accept: 'application/json' },
})

export const getShows = async () => {
  return (await httpClient.get('shows')).data
}

export const getShowById = async (id) => {
  return (await httpClient.get(`shows/${id}`)).data
}

export const setShowFavorite = async (id, isFavorite) => {
  return (
    await httpClient.post(`shows/${id}/favorites`, {
      isFavorite,
    })
  ).data
}
