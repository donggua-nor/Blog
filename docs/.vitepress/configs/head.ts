import type { HeadConfig } from 'vitepress'
import { basePath } from './utils'

const favicon = `${basePath}favicon.ico`

export const head: HeadConfig[] = [
  ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
  ['link', { rel: 'icon', type: 'image/x-icon', href: favicon }],
  ['meta', { name: 'application-name', content: "Donggua's Blog" }],
  ['meta', { name: 'apple-mobile-web-app-title', content: 'Donggua' }],
  ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ['meta', { name: 'msapplication-TileImage', content: favicon }],
  ['meta', { name: 'msapplication-TileColor', content: '#3eaf7c' }],
  ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
  ['script', { src: 'https://kit.fontawesome.com/b61423b84a.js', crossorigin: 'anonymous' }]
]
