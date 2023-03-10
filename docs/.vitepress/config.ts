import { defineConfig } from 'vitepress'
import { head, nav, sidebar } from './configs'

export default defineConfig({
  lang: 'zh-CN',
  title: 'donggua',
  description: "Donggua's Blog",
  base: process.env.APP_BASE_PATH || '/',
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
      level: [2, 3]
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/donggua-nor' }],

    footer: {
      copyright: 'MIT Licensed | Copyright © 2021-present Donggua'
    }
  }
})
