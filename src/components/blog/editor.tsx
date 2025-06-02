'use client'

import React from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import Link from '@tiptap/extension-link'
import Image from '@tiptap/extension-image'

interface EditorProps {
  content: string
  setContent: (content: string) => void
}

const MenuBar = ({ editor }: { editor: ReturnType<typeof useEditor> | null }) => {
  if (!editor) {
    return null
  }

  return (
    <div className="mb-3 flex flex-wrap gap-2 border-b border-gray-300 pb-2">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'is-active' : ''}
        type="button"
      >
        Bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? 'is-active' : ''}
        type="button"
      >
        Italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        disabled={!editor.can().chain().focus().toggleUnderline().run()}
        className={editor.isActive('underline') ? 'is-active' : ''}
        type="button"
      >
        Underline
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={editor.isActive('strike') ? 'is-active' : ''}
        type="button"
      >
        Strike
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        disabled={!editor.can().chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'is-active' : ''}
        type="button"
      >
        Bullet List
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        disabled={!editor.can().chain().focus().toggleOrderedList().run()}
        className={editor.isActive('orderedList') ? 'is-active' : ''}
        type="button"
      >
        Ordered List
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        disabled={!editor.can().chain().focus().toggleBlockquote().run()}
        className={editor.isActive('blockquote') ? 'is-active' : ''}
        type="button"
      >
        Blockquote
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        disabled={!editor.can().chain().focus().toggleCodeBlock().run()}
        className={editor.isActive('codeBlock') ? 'is-active' : ''}
        type="button"
      >
        Code Block
      </button>
      <button
        onClick={() => {
          const url = window.prompt('Enter URL')
          if (url) {
            editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
          }
        }}
        type="button"
      >
        Add Link
      </button>
      <button
        onClick={() => editor.chain().focus().unsetLink().run()}
        disabled={!editor.isActive('link')}
        type="button"
      >
        Remove Link
      </button>
    </div>
  )
}

export default function TiptapEditor({ content, setContent }: EditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link.configure({
        openOnClick: false,
      }),
      Image,
    ],
    content,
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML())
    },
  })

  return (
    <div className="rounded-md border p-4">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} className="prose prose-sm min-h-[250px] max-w-full" />
    </div>
  )
}
