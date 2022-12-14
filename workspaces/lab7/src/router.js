import { createRouter, createWebHistory } from 'vue-router'
import ShowList from './pages/ShowList.vue'
import ShowListFavorites from './pages/ShowListFavorites.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: ShowList,
      name: 'shows',
    },
    {
      path: '/favorites',
      component: ShowListFavorites,
      name: 'favorites',
    },
    {
      path: '/shows/:id',
      component: () => import('./pages/ShowListItemDetails.vue'),
      name: 'showDetail',
      props: true,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
})
