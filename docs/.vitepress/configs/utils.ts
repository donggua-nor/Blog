import { readFileSync } from 'fs'
import { resolve } from 'path'

export const basePath = process.env.APP_BASE_PATH || '/'

export const genFallbackSidebar = () => {
  const root = process.cwd()
  const playgroundFile = resolve(root, 'docs', 'pg', 'js.md')
  const content = readFileSync(playgroundFile, 'utf-8')

  const reg = /(?<=##\s)(.+)/g
  const titles = content.match(reg) as string[]

  const sidebar = titles.map((title) => ({
    text: title,
    link: `/pg/js#${title
      .toLowerCase()
      .replace(/[&+]/gi, '') /* hack: maybe need to read markdown-it */
      .replace(/[^\w\s\、\u4e00-\u9fa5]/gi, ' ')
      .replace(/\s+/g, '-')}`
  }))

  return sidebar
}
