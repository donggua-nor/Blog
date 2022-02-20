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
    ['link', { rel: 'manifest', href: '/Blog/manifest.webmanifest' }],
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/Blog/favicon.ico' }],
    ['meta', { name: 'application-name', content: "Donggua's Blog" }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'Donggua' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileImage', content: '/favicon.ico' }],
    ['meta', { name: 'msapplication-TileColor', content: '#3eaf7c' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }]
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
        text: 'Notes',
        activeMatch: '^/notes',
        link: '/notes/js/types'
      },
      {
        text: 'Vue',
        activeMatch: '^/vue',
        link: '/vue/introduction/'
      },
      {
        text: 'Playground',
        activeMatch: '^/pg',
        link: '/pg/js'
      }
    ],
    sidebar: {
      '/notes/': [
        {
          text: 'JavaScript',
          children: [
            '/notes/js/types',
            '/notes/js/clone',
            '/notes/js/prototype',
            '/notes/js/execution',
            '/notes/js/async',
            '/notes/js/recycle'
          ]
        },
        {
          text: 'Node',
          children: ['/notes/node/cjs', '/notes/node/esm']
        }
      ],
      '/vue/': [
        {
          text: 'Vue2源码解析',
          collapsible: false,
          children: ['/vue/introduction/']
        },
        {
          text: 'Vue初始化',
          collapsible: false,
          children: ['/vue/initialization/entry']
        }
      ],
      '/pg/': ['/pg/js', '/pg/ts']
    },
    // a11y
    openInNewWindow: '在新窗口打开',
    toggleDarkMode: '切换夜间模式',
    toggleSidebar: '切换侧边栏'
  },

  markdown: {
    extractHeaders: {
      level: [2, 3, 4, 5]
    }
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
