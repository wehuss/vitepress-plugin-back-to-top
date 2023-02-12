# vitepress-plugin-back-to-top

> Back-to-top plugin for VitePress

# Installation

Available as an [npm package](https://www.npmjs.com/package/vitepress-plugin-back-to-top)

```bash
// with npm
npm i vitepress-plugin-back-to-top
// with yarn
yarn add vitepress-plugin-back-to-top
```

# Usage

```js
// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import vitepressBackToTop from 'vitepress-plugin-back-to-top'
import 'vitepress-plugin-back-to-top/dist/style.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    vitepressBackToTop({
      // default
      threshold:300
    })
  },
}


```

# Preview Gif

![preview](https://github.com/wehuss/vitepress-plugin-back-to-top/raw/master/vitepress-plugin-back-to-top-preview.gif)