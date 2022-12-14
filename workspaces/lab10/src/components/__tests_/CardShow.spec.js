import CardShow from '@/components/CardShow.vue'
import { render, screen, fireEvent, cleanup } from '@testing-library/vue'
import { createRouter, createWebHistory } from 'vue-router'
import { expect, describe, it, beforeEach, afterEach } from 'vitest'

import { routes } from '@/router'

// see https://test-utils.vuejs.org/guide/advanced/vue-router.html#using-a-real-router
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

let show = null

beforeEach(() => {
  show = {
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
})

afterEach(() => {
  cleanup()
})

const factory = () =>
  render(CardShow, {
    global: {
      plugins: [router],
    },
    props: {
      show,
    },
  })

describe('CardShow.vue', () => {
  it('emit toggle-favorite event when click on link', async () => {
    const wrapper = factory()

    await fireEvent.click(screen.getByLabelText('Toggle favorite'))

    expect(wrapper.emitted()['toggle-favorite']).toBeTruthy()
  })

  describe('title binding', () => {
    it('renders title as favorite', () => {
      show.user.favorited = true
      factory()

      expect(screen.getByTestId('title').textContent).toEqual(
        `${show.title} is your favorite!`
      )
    })

    it('renders title not as favorite', () => {
      show.user.favorited = false
      factory()

      expect(screen.getByTestId('title').textContent).toEqual(
        `${show.title} is not your favorite!`
      )
    })
  })

  describe('star binding', () => {
    it('renders correctly the star icon when is favorite is true', () => {
      show.user.favorited = true
      factory()

      expect(screen.getByTestId('favoriteIcon').className).to.contains(
        'is-favorite'
      )
    })
    it('renders correctly the star when is favorite is false', () => {
      show.user.favorited = false
      factory()

      expect(screen.getByTestId('favoriteIcon').className).not.to.contains(
        'is-favorite'
      )
    })
  })

  describe('status binding', () => {
    it('renders correctly the status when is ended', () => {
      show.status = 'Ended'
      factory()

      expect(screen.getByTestId('statusTag').className).to.contains('is-danger')
      expect(screen.getByTestId('statusTag').className).not.to.contains(
        'is-warning'
      )
    })

    it('renders correctly the status when is continuing', () => {
      show.status = 'Continuing'
      factory()

      expect(screen.getByTestId('statusTag').className).to.contains(
        'is-warning'
      )
      expect(screen.getByTestId('statusTag').className).not.to.contains(
        'is-danger'
      )
    })
  })
})
