'use client'

import React from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import Link from '@tiptap/extension-link'
import Image from '@tiptap/extension-image'
import AnimationContainer from '@/components/global/animation-container'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'

interface EditorProps {
  content: string
  setContent: (content: string) => void
}

const MenuBar = ({ editor }: { editor: ReturnType<typeof useEditor> | null }) => {
  const { resolvedTheme } = useTheme()

  if (!editor) {
    return null
  }

  const buttons = [
    {
      label: 'Bold',
      action: () => editor.chain().focus().toggleBold().run(),
      disabled: !editor.can().chain().focus().toggleBold().run(),
      isActive: editor.isActive('bold'),
    },
    {
      label: 'Italic',
      action: () => editor.chain().focus().toggleItalic().run(),
      disabled: !editor.can().chain().focus().toggleItalic().run(),
      isActive: editor.isActive('italic'),
    },
    {
      label: 'Underline',
      action: () => editor.chain().focus().toggleUnderline().run(),
      disabled: !editor.can().chain().focus().toggleUnderline().run(),
      isActive: editor.isActive('underline'),
    },
    {
      label: 'Strike',
      action: () => editor.chain().focus().toggleStrike().run(),
      disabled: !editor.can().chain().focus().toggleStrike().run(),
      isActive: editor.isActive('strike'),
    },
    {
      label: 'Bullet List',
      action: () => editor.chain().focus().toggleBulletList().run(),
      disabled: !editor.can().chain().focus().toggleBulletList().run(),
      isActive: editor.isActive('bulletList'),
    },
    {
      label: 'Ordered List',
      action: () => editor.chain().focus().toggleOrderedList().run(),
      disabled: !editor.can().chain().focus().toggleOrderedList().run(),
      isActive: editor.isActive('orderedList'),
    },
    {
      label: 'Blockquote',
      action: () => editor.chain().focus().toggleBlockquote().run(),
      disabled: !editor.can().chain().focus().toggleBlockquote().run(),
      isActive: editor.isActive('blockquote'),
    },
    {
      label: 'Code Block',
      action: () => editor.chain().focus().toggleCodeBlock().run(),
      disabled: !editor.can().chain().focus().toggleCodeBlock().run(),
      isActive: editor.isActive('codeBlock'),
    },
    {
      label: 'Add Link',
      action: () => {
        const url = window.prompt('Enter URL')
        if (url) {
          editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
        }
      },
      disabled: false,
      isActive: false,
    },
    {
      label: 'Remove Link',
      action: () => editor.chain().focus().unsetLink().run(),
      disabled: !editor.isActive('link'),
      isActive: false,
    },
    {
      label: 'Add Image',
      action: () => {
        const url = window.prompt('Enter image URL')
        if (url) {
          editor.chain().focus().setImage({ src: url }).run()
        }
      },
      disabled: false,
      isActive: false,
    },
  ]

  return (
    <AnimationContainer animation="fadeUp" delay={0.2}>
      <div className="mb-4 flex flex-wrap gap-2 border-b border-white/20 pb-3">
        {buttons.map((button, index) => (
          <Button
            key={index}
            onClick={button.action}
            disabled={button.disabled}
            size="sm"
            variant={button.isActive ? 'default' : 'outline'}
            className={`rounded-lg text-xs transition-all duration-200 md:text-sm ${
              button.isActive
                ? 'bg-[#f10a0a] text-white hover:bg-[#d10909]'
                : resolvedTheme === 'dark'
                  ? 'text-foreground border-white/20 bg-black/10 hover:bg-[#f10a0a] hover:text-white'
                  : 'text-foreground border-white/20 bg-white/10 hover:bg-[#f10a0a] hover:text-white'
            }`}
          >
            {button.label}
          </Button>
        ))}
      </div>
    </AnimationContainer>
  )
}

export default function TiptapEditor({ content, setContent }: EditorProps) {
  const { resolvedTheme } = useTheme()

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
    <AnimationContainer animation="fadeUp" delay={0.3}>
      <div
        className={`rounded-2xl border border-white/20 p-4 ${
          resolvedTheme === 'dark' ? 'bg-black/10' : 'bg-white/10'
        } backdrop-blur-md`}
      >
        <MenuBar editor={editor} />
        <EditorContent
          editor={editor}
          className="prose prose-sm text-foreground min-h-[300px] max-w-full text-sm md:text-base"
        />
      </div>
    </AnimationContainer>
  )
}
