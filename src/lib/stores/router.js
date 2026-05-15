import { writable } from 'svelte/store'

function createRouter() {
  const initial = { page: 'feed', params: {} }

  if (typeof window !== 'undefined') {
    const hash = window.location.hash.slice(1)
    if (hash.startsWith('/profile/')) {
      const slug = hash.split('/')[2]
      initial.page = 'profile'
      initial.params = { slug }
    } else if (hash.startsWith('/news/')) {
      const slug = hash.split('/')[2]
      initial.page = 'news'
      initial.params = { slug }
    }
  }

  const { subscribe, set } = writable(initial)

  function navigate(page, params = {}) {
    set({ page, params })
    if (page === 'feed') {
      window.location.hash = ''
    } else if (page === 'profile') {
      window.location.hash = `#/profile/${params.slug}`
    } else if (page === 'news') {
      window.location.hash = `#/news/${params.slug}`
    }
  }

  if (typeof window !== 'undefined') {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1)
      if (hash.startsWith('/profile/')) {
        const slug = hash.split('/')[2]
        set({ page: 'profile', params: { slug } })
      } else if (hash.startsWith('/news/')) {
        const slug = hash.split('/')[2]
        set({ page: 'news', params: { slug } })
      } else {
        set({ page: 'feed', params: {} })
      }
    })
  }

  return { subscribe, navigate }
}

export const router = createRouter()
