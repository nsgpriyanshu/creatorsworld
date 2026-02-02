import { BlogBlock } from '../../lib/db/types'

type Props = {
  blocks: BlogBlock[]
}

const BlogContent = ({ blocks }: Props) => {
  return (
    <article className="prose prose-neutral dark:prose-invert mx-auto max-w-3xl">
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'heading':
            return block.level === 2 ? (
              <h2 key={index}>{block.text}</h2>
            ) : (
              <h3 key={index}>{block.text}</h3>
            )

          case 'paragraph':
            return <p key={index}>{block.text}</p>

          case 'quote':
            return (
              <blockquote key={index}>
                {block.text}
              </blockquote>
            )

          case 'image':
            return (
              <img
                key={index}
                src={block.src}
                alt={block.alt ?? ''}
                className="rounded-xl"
              />
            )

          case 'code':
            return (
              <pre key={index}>
                <code>{block.code}</code>
              </pre>
            )

          default:
            return null
        }
      })}
    </article>
  )
}

export default BlogContent
