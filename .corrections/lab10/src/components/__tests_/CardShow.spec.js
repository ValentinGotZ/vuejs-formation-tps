import { describe, it, expect } from 'vitest'
import CardShow from '@/components/CardShow.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { mount } from '@vue/test-utils'

import { routes } from '@/router.js'

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
  it('emit event when click on link', async () => {
    const wrapper = factory()

    await wrapper.find('.card-header-icon').trigger('click')
    await wrapper.vm.$nextTick()

    expect(wrapper.emitted()['toggle-favorite']).toBeTruthy()
  })

  describe('title binding', () => {
    it('renders title when passed', () => {
      const wrapper = factory()

      expect(wrapper.find('.card-header-title').text()).toContain(show.title)
    })

    it('renders title as favorite when passed', () => {
      const wrapper = factory({
        user: {
          favorited: true,
        },
      })

      expect(wrapper.find('.card-header-title').text()).toContain(
        'is your favorite'
      )
    })

    it('renders title not as favorite when passed', () => {
      const wrapper = factory({
        user: {
          favorited: false,
        },
      })

      expect(wrapper.find('.card-header-title').text()).toContain(
        'is not your favorite'
      )
    })
  })

  describe('star binding', () => {
    it('renders correctly the star when is favorite is true', () => {
      const wrapper = factory({
        user: {
          favorited: true,
        },
      })

      expect(wrapper.find('.card-header-icon .icon').classes()).toContain(
        'is-favorite'
      )
    })

    it('renders correctly the star when is favorite is false', () => {
      const wrapper = factory({
        user: {
          favorited: false,
        },
      })

      expect(wrapper.find('.card-header-icon .icon').classes()).not.toContain(
        'is-favorite'
      )
    })
  })

  describe('status binding', () => {
    it('renders correctly the status when is ended', () => {
      const wrapper = factory({
        status: 'Ended',
      })

      expect(wrapper.find('.status').classes()).toContain('is-danger')
    })

    it('renders correctly the status when is continuing', () => {
      const wrapper = factory({
        status: 'Continuing',
      })

      expect(wrapper.find('.status').classes()).toContain('is-warning')
    })
  })
})
