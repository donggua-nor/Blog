import type { DefaultTheme } from 'vitepress'
import { genFallbackSidebar } from './utils'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/notes/': [
    {
      text: 'JavaScript',
      collapsed: false,
      items: [
        { text: '数据类型', link: '/notes/js/types' },
        { text: '对象的拷贝', link: '/notes/js/clone' },
        { text: '原型与原型链', link: '/notes/js/prototype' },
        { text: '编译执行流程', link: '/notes/js/execution' },
        { text: '异步编程', link: '/notes/js/async' },
        { text: '垃圾回收机制', link: '/notes/js/recycle' }
      ]
    },
    {
      text: 'Node',
      collapsed: false,
      items: [
        { text: 'CommonJS', link: '/notes/node/cjs' },
        { text: 'ES Module', link: '/notes/node/esm' },
        { text: 'package.json', link: '/notes/node/pkg' }
      ]
    },
    {
      text: 'TypeScript',
      link: '/notes/ts/'
    },
    {
      text: 'Canvas',
      items: [
        {
          text: '基础知识 <sup>2d</sup>',
          link: '/notes/canvas/basic'
        }
      ]
    }
  ],
  '/pg/': [
    {
      text: 'JavaScript',
      items: genFallbackSidebar()
    }
  ],
  '/workflows/': [
    { text: 'Workflows', link: '/workflows/' },
    { text: 'Experience', link: '/workflows/exp' }
  ]
}
