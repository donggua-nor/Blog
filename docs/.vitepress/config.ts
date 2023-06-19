import { defineConfig } from 'vitepress'
import { head, nav, sidebar } from './configs'
import { basePath } from './configs/utils'

export default defineConfig({
  lang: 'zh-CN',
  title: 'donggua',
  description: "Donggua's Blog",
  base: basePath,
  outDir: '../dist',
  cacheDir: '../.cache',
  lastUpdated: true,
  head,
  themeConfig: {
    // siteTitle: false,
    logo: 'https://avatars.githubusercontent.com/u/37831399',

    nav,
    sidebar,

    outline: {
      level: [2, 4]
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/donggua-nor' }],

    footer: {
      copyright: 'MIT Licensed | Copyright © 2021-present Donggua'
    },

    docFooter: {
      prev: false,
      next: false
    }
  },

  markdown: {
    theme: 'one-dark-pro'
  }
})
