import { render, h } from 'vue'
import BackToTop from './back-to-top.vue'

type VitepressBackToTopOptions = {
  threshold?: number
}

const vitepressBackToTop = (options?: VitepressBackToTopOptions) => {
  if (typeof window === 'undefined') return
  window.addEventListener('load', () => {
    const wrapper = document.createElement('div')
    document.body.appendChild(wrapper)
    render(
      h(BackToTop, {
        threshold: options?.threshold,
      }),
      wrapper
    )
  })
}

export default vitepressBackToTop
