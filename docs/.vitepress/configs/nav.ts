import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  {
    text: 'Notes',
    activeMatch: '^/notes',
    link: '/notes/js/types'
  },
  {
    text: 'Playground',
    activeMatch: '^/pg',
    link: '/pg/js'
  },
  {
    text: 'Workflows',
    activeMatch: '^/workflows',
    link: '/workflows/'
  }
]
