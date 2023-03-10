import { readFileSync } from 'fs'
import { resolve } from 'path'

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
      .replace(/[^\w\s]/gi, '')
      .replace(/\s+/g, '-')}`
  }))

  return sidebar
}
