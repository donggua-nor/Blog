import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
export default defineUserConfig<DefaultThemeOptions>({
  lang: 'zh-CN',
  title: 'Donggua',
  description: "Donggua's Blog",
  base: '/Blog/',
  dest: 'dist',
  cache: '.cache',
  temp: '.temp',
  head: [
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['meta', { name: 'application-name', content: "Donggua's Blog" }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'Donggua' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/images/icons/apple-touch-icon.png` }],
    ['meta', { name: 'msapplication-TileImage', content: '/favicon.ico' }],
    ['meta', { name: 'msapplication-TileColor', content: '#3eaf7c' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }]
  ],

  theme: '@vuepress/theme-default',
  themeConfig: {
    lastUpdated: true,
    repo: 'https://github.com/donggua-nor/Blog',
    repoLabel: 'Github',
    editLink: false,
    contributors: false,
    navbar: [
      {
        text: 'JavaScript',
        link: '/js/types'
      },
      {
        text: 'Vue',
        link: '/vue/base'
      },
      {
        text: 'TypeScript',
        link: '/ts/base'
      }
    ],
    sidebar: 'auto'
  },

  plugins: [
    ['@vuepress/plugin-pwa'],
    [
      '@vuepress/plugin-pwa-popup',
      {
        locales: {
          '/': {
            message: 'new features are coming',
            buttonText: 'refresh'
          }
        }
      }
    ]
  ]
})
