import ShowList from '@/pages/ShowList.vue'
import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  { name: 'shows', path: '/', component: ShowList },
  {
    name: 'showDetail',
    path: '/shows/:showId',
    component: () => import('@/pages/ShowListItemDetails.vue'),
    props: true,
  },
  {
    name: 'favorites',
    path: '/favorites',
    component: () => import('@/pages/ShowListFavorites.vue'),
  },
  { name: 'notFound', path: '/:catchAll(.*)', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
