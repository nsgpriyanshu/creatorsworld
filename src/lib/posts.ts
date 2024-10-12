import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { Post } from '@/app/blog/types'
import { JSDOM } from 'jsdom'
import DOMPurify from 'dompurify'

const postsDirectory = path.join(process.cwd(), 'src/app/blog/posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: string): Post | null {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = path.join(postsDirectory, `${realSlug}.md`)
  if (!fs.existsSync(fullPath)) return null

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const window = new JSDOM('').window
  const purify = DOMPurify(window as unknown as Window)
  return {
    ...data,
    slug: purify.sanitize(realSlug),
    content,
  } as Post
}

export async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown)
  const window = new JSDOM('').window
  const purify = DOMPurify(window as unknown as Window)
  return purify.sanitize(result.toString())
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs()
  const posts = slugs.map(slug => getPostBySlug(slug)).filter(post => post !== null) as Post[]
  return posts
}
