import CardShow from '@/components/CardShow.vue'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import { expect, describe, it } from 'vitest'

import { routes } from '@/router'

// see https://test-utils.vuejs.org/guide/advanced/vue-router.html#using-a-real-router
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

const show = {
  id: 1161,
  title: 'Game of Thrones',
  description:
    "Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and the icy horrors beyond.",
  seasons: '8',
  creation: '2011',
  genres: ['Adventure', 'Drama', 'Fantasy'],
  status: 'Ended',
  images: {
    poster: '/posters/game-of-thrones.jpg',
  },
  user: {
    favorited: false,
  },
}

const factory = (props) => {
  const wrapper = mount(CardShow, {
    global: {
      plugins: [router],
    },
    props: {
      show: { ...show, ...props },
    },
  })

  return wrapper
}

describe('CardShow.vue', () => {
  it('emit toggle-favorite event when click on link', async () => {
    const wrapper = factory()

    await wrapper.find('.card-header-icon').trigger('click')
    await wrapper.vm.$nextTick()

    expect(wrapper.emitted()['toggle-favorite']).toBeTruthy()
  })

  describe('title binding', () => {
    it('renders title', () => {
      const wrapper = factory()

      expect(wrapper.find('.card-header-title').text()).toContain(show.title)
    })

    it('renders title as favorite', () => {
      // todo
    })

    it('renders title not as favorite', () => {
      // todo
    })
  })

  describe('star binding', () => {
    it('renders correctly the star icon when is favorite is true', () => {
      // todo
    })

    it('renders correctly the star when is favorite is false', () => {
      // todo
    })
  })

  describe('status binding', () => {
    it('renders correctly the status when is ended', () => {
      // todo
    })

    it('renders correctly the status when is continuing', () => {
      // todo
    })
  })
})
