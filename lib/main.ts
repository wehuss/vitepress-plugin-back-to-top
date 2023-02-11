import { createApp, h } from 'vue'
import BackToTop from './back-to-top.vue'

type VitepressBackToTopOptions = {
  threshold?: number
}

const vitepressBackToTop = (options?: VitepressBackToTopOptions) => {
  window.addEventListener('load', () => {
    const wrapper = document.createElement('div')
    document.body.appendChild(wrapper)
    createApp(
      h(BackToTop, {
        threshold: options?.threshold,
      })
    ).mount(wrapper)
  })
}

export default vitepressBackToTop
