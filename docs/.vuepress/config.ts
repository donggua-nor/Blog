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
        activeMatch: '^/js',
        link: '/js/base/types'
      },
      {
        text: 'Vue',
        activeMatch: '^/vue',
        link: '/vue/base'
      },
      {
        text: 'TypeScript',
        activeMatch: '^/ts',
        link: '/ts/base'
      }
    ],
    sidebar: {
      '/js/': [
        {
          text: 'JavaScript基础',
          children: ['/js/base/types', '/js/base/clone']
        }
      ],
      '/vue/': [],
      '/ts/': []
    },
    // a11y
    openInNewWindow: '在新窗口打开',
    toggleDarkMode: '切换夜间模式',
    toggleSidebar: '切换侧边栏'
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
