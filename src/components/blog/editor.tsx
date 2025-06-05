'use client'
import React, { useCallback, useRef, useState, useEffect } from 'react'
import { useEditor, EditorContent, EditorContext, Extension } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import Link from '@tiptap/extension-link'
import Image from '@tiptap/extension-image'
import TextAlign from '@tiptap/extension-text-align'
import TaskList from '@tiptap/extension-task-list'
import TaskItem from '@tiptap/extension-task-item'
import Highlight from '@tiptap/extension-highlight'
import Typography from '@tiptap/extension-typography'
import Superscript from '@tiptap/extension-superscript'
import Subscript from '@tiptap/extension-subscript'
import AnimationContainer from '@/components/global/animation-container'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'

// Placeholder extensions
const TrailingNode = Extension.create({
  name: 'trailingNode',
  addNode() {
    return {
      group: 'block',
      parseHTML: () => [{ tag: 'p' }],
      renderHTML: () => ['p', {}, 0],
    }
  },
})

const Selection = Extension.create({
  name: 'selection',
  addNode() {
    return {
      renderHTML: ({ HTMLAttributes }: { HTMLAttributes: Record<string, any> }) => [
        'div',
        HTMLAttributes,
        0,
      ],
    }
  },
})

const ImageUploadNode = Image.extend({
  name: 'imageUpload',
  addAttributes() {
    return {
      src: { default: null },
      alt: { default: '' },
      title: { default: null },
    }
  },
  addCommands() {
    return {
      setImage:
        options =>
        ({ commands }) =>
          commands.insertContent({ type: this.name, attrs: options }),
    }
  },
})

// Placeholder image upload utility
const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB
const handleImageUpload = async (file: File): Promise<string> => {
  if (file.size > MAX_FILE_SIZE) {
    throw new Error('File size exceeds 5MB')
  }
  return URL.createObjectURL(file)
}

// Debounce utility
const debounce = <T extends (...args: any[]) => void>(func: T, wait: number) => {
  let timeout: NodeJS.Timeout | null = null
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => {
      func(...args)
      timeout = null
    }, wait)
  }
}

// Hooks
const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  return isMobile
}

// UI Components
const Toolbar = React.forwardRef<
  HTMLDivElement,
  { children: React.ReactNode; style?: React.CSSProperties; className?: string }
>(({ children, style, className }, ref) => {
  const isMobile = useMobile()
  return (
    <div
      ref={ref}
      className={cn(
        'sticky top-0 z-10 flex items-center gap-2 rounded-t-lg border-b border-gray-200 bg-white/90 p-2 shadow-sm backdrop-blur-md transition-all duration-300 dark:border-white/20 dark:bg-black/90',
        isMobile ? 'flex-wrap' : 'flex-nowrap overflow-x-auto',
        className,
      )}
      style={style}
      role="toolbar"
      aria-label="Text editor toolbar"
    >
      {children}
    </div>
  )
})
Toolbar.displayName = 'Toolbar'

const ToolbarGroup = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => (
  <div className={cn('flex items-center gap-1', className)} role="group">
    {children}
  </div>
)

const ToolbarSeparator = () => (
  <div className="h-6 w-px bg-gray-200 dark:bg-white/20" aria-hidden="true" />
)

const MarkButton = ({
  type,
  label,
  icon: Icon,
}: {
  type: string
  label: string
  icon?: React.ComponentType<{ className?: string }>
}) => {
  const { editor } = React.useContext(EditorContext)
  const { resolvedTheme } = useTheme()
  if (!editor) return null
  const isActive = editor.isActive(type)
  const action = () => editor.chain().focus().toggleMark(type).run()
  const disabled = !editor.can().chain().focus().toggleMark(type).run()
  return (
    <Button
      size="sm"
      variant={isActive ? 'default' : 'ghost'}
      onClick={action}
      disabled={disabled}
      className={cn(
        'h-8 w-8 rounded-full p-0 transition-colors duration-200',
        isActive
          ? 'bg-red-600 text-white hover:bg-red-700'
          : resolvedTheme === 'dark'
            ? 'text-foreground hover:bg-red-600 hover:text-white'
            : 'text-foreground hover:bg-red-600 hover:text-white',
      )}
      aria-label={label}
      aria-pressed={isActive}
      title={label}
    >
      {Icon ? <Icon className="h-4 w-4" /> : label.charAt(0)}
    </Button>
  )
}

const NodeButton = ({
  type,
  label,
  icon: Icon,
}: {
  type: string
  label: string
  icon?: React.ComponentType<{ className?: string }>
}) => {
  const { editor } = React.useContext(EditorContext)
  const { resolvedTheme } = useTheme()
  if (!editor) return null
  const isActive = editor.isActive(type)
  const action = () => editor.chain().focus().toggleNode(type, 'paragraph').run()
  const disabled = !editor.can().chain().focus().toggleNode(type, 'paragraph').run()
  return (
    <Button
      size="sm"
      variant={isActive ? 'default' : 'ghost'}
      onClick={action}
      disabled={disabled}
      className={cn(
        'h-8 w-8 rounded-full p-0 transition-colors duration-200',
        isActive
          ? 'bg-red-600 text-white hover:bg-red-700'
          : resolvedTheme === 'dark'
            ? 'text-foreground hover:bg-red-600 hover:text-white'
            : 'text-foreground hover:bg-red-600 hover:text-white',
      )}
      aria-label={label}
      aria-pressed={isActive}
      title={label}
    >
      {Icon ? <Icon className="h-4 w-4" /> : label.charAt(0)}
    </Button>
  )
}

const TextAlignButton = ({
  align,
  label,
  icon: Icon,
}: {
  align: string
  label: string
  icon?: React.ComponentType<{ className?: string }>
}) => {
  const { editor } = React.useContext(EditorContext)
  const { resolvedTheme } = useTheme()
  if (!editor) return null
  const isActive = editor.isActive({ textAlign: align })
  const action = () => editor.chain().focus().setTextAlign(align).run()
  const disabled = !editor.can().chain().focus().setTextAlign(align).run()
  return (
    <Button
      size="sm"
      variant={isActive ? 'default' : 'ghost'}
      onClick={action}
      disabled={disabled}
      className={cn(
        'h-8 w-8 rounded-full p-0 transition-colors duration-200',
        isActive
          ? 'bg-red-600 text-white hover:bg-red-700'
          : resolvedTheme === 'dark'
            ? 'text-foreground hover:bg-red-600 hover:text-white'
            : 'text-foreground hover:bg-red-600 hover:text-white',
      )}
      aria-label={label}
      aria-pressed={isActive}
      title={label}
    >
      {Icon ? <Icon className="h-4 w-4" /> : align.charAt(0).toUpperCase()}
    </Button>
  )
}

const UndoRedoButton = ({ action, label }: { action: 'undo' | 'redo'; label: string }) => {
  const { editor } = React.useContext(EditorContext)
  const { resolvedTheme } = useTheme()
  if (!editor) return null
  const isDisabled = !editor.can()[action]()
  const handleAction = () => editor.chain().focus()[action]().run()
  return (
    <Button
      size="sm"
      variant="ghost"
      onClick={handleAction}
      disabled={isDisabled}
      className={cn(
        'h-8 w-8 rounded-full p-0 transition-colors duration-200',
        resolvedTheme === 'dark'
          ? 'text-foreground hover:bg-red-600 hover:text-white'
          : 'text-foreground hover:bg-red-600 hover:text-white',
      )}
      aria-label={label}
      title={label}
    >
      {action === 'undo' ? '⟲' : '⟳'}
    </Button>
  )
}

const HeadingDropdownMenu = ({ levels }: { levels: number[] }) => {
  const { editor } = React.useContext(EditorContext)
  const { resolvedTheme } = useTheme()
  if (!editor) return null
  const currentLevel = editor.isActive('paragraph')
    ? 0
    : levels.find(level => editor.isActive('heading', { level })) || 0
  return (
    <select
      className={cn(
        'h-8 rounded-md border border-gray-200 bg-transparent px-2 text-xs focus:ring-2 focus:ring-red-600 focus:outline-none dark:border-white/20',
        resolvedTheme === 'dark' ? 'text-foreground' : 'text-foreground',
      )}
      value={currentLevel}
      onChange={e => {
        const level = parseInt(e.target.value)
        if (level) {
          editor.chain().focus().setNode('heading', { level }).run()
        } else {
          editor.chain().focus().setParagraph().run()
        }
      }}
      aria-label="Select heading level"
    >
      <option value="0">P</option>
      {levels.map(level => (
        <option key={level} value={level}>
          H{level}
        </option>
      ))}
    </select>
  )
}

const ListDropdownMenu = ({ types }: { types: string[] }) => {
  const { editor } = React.useContext(EditorContext)
  const { resolvedTheme } = useTheme()
  if (!editor) return null
  return (
    <select
      className={cn(
        'h-8 rounded-md border border-gray-200 bg-transparent px-2 text-xs focus:ring-2 focus:ring-red-600 focus:outline-none dark:border-white/20',
        resolvedTheme === 'dark' ? 'text-foreground' : 'text-background',
      )}
      onChange={e => {
        const type = e.target.value
        if (type === 'bulletList') {
          editor.chain().focus().toggleBulletList().run()
        } else if (type === 'orderedList') {
          editor.chain().focus().toggleOrderedList().run()
        } else if (type === 'taskList') {
          editor.chain().focus().toggleTaskList().run()
        } else {
          editor.chain().focus().liftListItem('listItem').run()
        }
      }}
      aria-label="Select list type"
    >
      <option value="">None</option>
      <option value="bulletList">• List</option>
      <option value="orderedList">1. List</option>
      <option value="taskList">☑ List</option>
    </select>
  )
}

const ImageUploadButton = ({ text }: { text: string }) => {
  const { editor } = React.useContext(EditorContext)
  const { resolvedTheme } = useTheme()
  if (!editor) return null
  return (
    <Button
      size="sm"
      variant="ghost"
      className={cn(
        'h-8 w-8 rounded-full p-0 transition-colors duration-200',
        resolvedTheme === 'dark'
          ? 'text-foreground hover:bg-red-600 hover:text-white'
          : 'text-foreground hover:bg-red-600 hover:text-white',
      )}
      onClick={() => {
        const input = document.createElement('input')
        input.type = 'file'
        input.accept = 'image/*'
        input.onchange = async e => {
          const file = (e.target as HTMLInputElement).files?.[0]
          if (file) {
            try {
              const url = await handleImageUpload(file)
              editor.chain().focus().setImage({ src: url, alt: file.name }).run()
            } catch (error) {
              console.error('Upload failed:', error)
            }
          }
        }
        input.click()
      }}
      aria-label="Upload image"
      title="Upload image"
    >
      🖼
    </Button>
  )
}

const HighlightPopover = () => {
  const { editor } = React.useContext(EditorContext)
  const { resolvedTheme } = useTheme()
  if (!editor) return null
  const colors = ['#FFFF00', '#FF0000', '#00FF00', '#0000FF']
  return (
    <div className="relative">
      <select
        className={cn(
          'h-8 rounded-md border border-gray-200 bg-transparent px-2 text-xs focus:ring-2 focus:ring-red-600 focus:outline-none dark:border-white/20',
          resolvedTheme === 'dark' ? 'text-foreground' : 'text-foreground',
        )}
        onChange={e => {
          const color = e.target.value
          if (color) {
            editor.chain().focus().setHighlight({ color }).run()
          } else {
            editor.chain().focus().unsetHighlight().run()
          }
        }}
        aria-label="Select highlight color"
      >
        <option value="">No Highlight</option>
        {colors.map(color => (
          <option key={color} value={color}>
            {color}
          </option>
        ))}
      </select>
    </div>
  )
}

const HighlighterButton = ({ onClick }: { onClick: () => void }) => {
  const { resolvedTheme } = useTheme()
  return (
    <Button
      size="sm"
      variant="ghost"
      onClick={onClick}
      className={cn(
        'h-8 w-8 rounded-full p-0 transition-colors duration-200',
        resolvedTheme === 'dark'
          ? 'text-foreground hover:bg-red-600 hover:text-white'
          : 'text-foreground hover:bg-red-600 hover:text-white',
      )}
      aria-label="Open highlight color picker"
      title="Highlight"
    >
      ✽
    </Button>
  )
}

const LinkPopover = () => {
  const { editor } = React.useContext(EditorContext)
  const [url, setUrl] = useState('')
  const { resolvedTheme } = useTheme()
  if (!editor) return null
  return (
    <div className="flex items-center gap-1">
      <input
        type="url"
        placeholder="Enter URL"
        value={url}
        onChange={e => setUrl(e.target.value)}
        className={cn(
          'h-8 rounded-md border border-gray-200 bg-transparent px-2 text-xs focus:ring-2 focus:ring-red-600 focus:outline-none dark:border-white/20',
          resolvedTheme === 'dark' ? 'text-foreground' : 'text-foreground',
        )}
        aria-label="Enter link URL"
      />
      <Button
        size="sm"
        variant="ghost"
        onClick={() => {
          if (url) {
            editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
            setUrl('')
          }
        }}
        className={cn(
          'h-8 rounded-md px-2 text-xs transition-colors duration-200',
          resolvedTheme === 'dark'
            ? 'text-foreground hover:bg-red-600 hover:text-white'
            : 'text-foreground hover:bg-red-600 hover:text-white',
        )}
        aria-label="Set link"
        title="Set link"
      >
        Set
      </Button>
      {editor.isActive('link') && (
        <Button
          size="sm"
          variant="ghost"
          onClick={() => editor.chain().focus().unsetLink().run()}
          className={cn(
            'h-8 rounded-md px-2 text-xs transition-colors duration-200',
            resolvedTheme === 'dark'
              ? 'text-foreground hover:bg-red-600 hover:text-white'
              : 'text-foreground hover:bg-red-600 hover:text-white',
          )}
          aria-label="Remove link"
          title="Remove link"
        >
          Unset
        </Button>
      )}
    </div>
  )
}

const LinkButton = ({ onClick }: { onClick: () => void }) => {
  const { resolvedTheme } = useTheme()
  return (
    <Button
      size="sm"
      variant="ghost"
      onClick={onClick}
      className={cn(
        'h-8 w-8 rounded-full p-0 transition-colors duration-200',
        resolvedTheme === 'dark'
          ? 'text-foreground hover:bg-red-600 hover:text-white'
          : 'text-foreground hover:bg-red-600 hover:text-white',
      )}
      aria-label="Open link input"
      title="Link"
    >
      🔗
    </Button>
  )
}

const MainToolbarContent = ({
  onHighlighterClick,
  onLinkClick,
}: {
  onHighlighterClick: () => void
  onLinkClick: () => void
}) => {
  const isMobile = useMobile()

  return (
    <>
      <ToolbarGroup>
        <UndoRedoButton action="undo" label="Undo" />
        <UndoRedoButton action="redo" label="Redo" />
      </ToolbarGroup>

      <ToolbarSeparator />

      <ToolbarGroup>
        <MarkButton type="bold" label="Bold" />
        <MarkButton type="italic" label="Italic" />
        <MarkButton type="underline" label="Underline" />
        <HighlighterButton onClick={onHighlighterClick} />
        <LinkButton onClick={onLinkClick} />
      </ToolbarGroup>

      <ToolbarSeparator />

      <ToolbarGroup>
        <HeadingDropdownMenu levels={[1, 2, 3]} />
        <ListDropdownMenu types={['bulletList', 'orderedList', 'taskList']} />
      </ToolbarGroup>

      {!isMobile && (
        <>
          <ToolbarSeparator />
          <ToolbarGroup>
            <NodeButton type="codeBlock" label="Code Block" />
            <NodeButton type="blockquote" label="Blockquote" />
          </ToolbarGroup>
          <ToolbarSeparator />
          <ToolbarGroup>
            <TextAlignButton align="left" label="Left" />
            <TextAlignButton align="center" label="Center" />
            <TextAlignButton align="right" label="Right" />
            <TextAlignButton align="justify" label="Justify" />
          </ToolbarGroup>
        </>
      )}

      <ToolbarSeparator />

      <ToolbarGroup>
        <ImageUploadButton text="🖼" />
      </ToolbarGroup>
    </>
  )
}

const MobileToolbarContent = ({
  type,
  onBack,
}: {
  type: 'highlighter' | 'link'
  onBack: () => void
}) => (
  <div className="animate-slide-in flex w-full items-center gap-2">
    <ToolbarGroup>
      <Button
        size="sm"
        variant="ghost"
        onClick={onBack}
        className="text-foreground h-8 w-8 rounded-full p-0 transition-colors duration-200 hover:bg-red-600 hover:text-white"
        aria-label={`Back to main toolbar from ${type} controls`}
      >
        ←
      </Button>
    </ToolbarGroup>
    <ToolbarSeparator />
    <ToolbarGroup className="flex-1">
      {type === 'highlighter' ? <HighlightPopover /> : <LinkPopover />}
    </ToolbarGroup>
  </div>
)

interface EditorProps {
  content: string
  setContent: (content: string) => void
}

export default function TiptapEditor({ content, setContent }: EditorProps) {
  const { resolvedTheme } = useTheme()
  const isMobile = useMobile()
  const [mobileView, setMobileView] = useState<'main' | 'highlighter' | 'link'>('main')
  const toolbarRef = useRef<HTMLDivElement>(null)

  const debouncedSetContent = useCallback(
    debounce((html: string) => {
      setContent(html)
    }, 500),
    [setContent],
  )

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3, 4],
        },
      }),
      Underline,
      Link.configure({ openOnClick: false }),
      Image,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      TaskList,
      TaskItem.configure({ nested: true }),
      Highlight.configure({ multicolor: true }),
      Typography,
      Superscript,
      Subscript,
      TrailingNode,
      Selection,
      ImageUploadNode.configure(),
    ],
    content,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML()
      debouncedSetContent(html)
    },
    editorProps: {
      attributes: {
        autocomplete: 'off',
        autocorrect: 'off',
        autocapitalize: 'off',
        'aria-label': 'Main content area, start typing to enter text.',
        class: 'focus:outline-none',
      },
    },
    immediatelyRender: false,
  })

  return (
    <AnimationContainer animation="fadeUp" delay={0.3}>
      <EditorContext.Provider value={{ editor }}>
        <div className="mx-auto max-w-4xl">
          <Toolbar ref={toolbarRef} className={isMobile ? 'fixed top-0 right-0 left-0 z-50' : ''}>
            {mobileView === 'main' ? (
              <MainToolbarContent
                onHighlighterClick={() => setMobileView('highlighter')}
                onLinkClick={() => setMobileView('link')}
              />
            ) : (
              <MobileToolbarContent type={mobileView} onBack={() => setMobileView('main')} />
            )}
          </Toolbar>
          <div
            className={cn(
              'mt-2 rounded-lg border border-gray-200 bg-white/80 p-4 backdrop-blur-md dark:border-white/20 dark:bg-black/80',
              isMobile ? 'pt-16 pb-4' : '',
            )}
          >
            <EditorContent
              editor={editor}
              className={cn(
                'prose prose-sm text-foreground min-h-[300px] max-w-full p-4',
                resolvedTheme === 'dark' ? 'prose-invert' : '',
              )}
              role="textbox"
              aria-label="Text editor content"
            />
          </div>
        </div>
      </EditorContext.Provider>
    </AnimationContainer>
  )
}

// 'use client'

// import React from 'react'
// import { useEditor, EditorContent } from '@tiptap/react'
// import StarterKit from '@tiptap/starter-kit'
// import Underline from '@tiptap/extension-underline'
// import Link from '@tiptap/extension-link'
// import Image from '@tiptap/extension-image'
// import AnimationContainer from '@/components/global/animation-container'
// import { Button } from '@/components/ui/button'
// import { useTheme } from 'next-themes'

// interface EditorProps {
//   content: string
//   setContent: (content: string) => void
// }

// const MenuBar = ({ editor }: { editor: ReturnType<typeof useEditor> | null }) => {
//   const { resolvedTheme } = useTheme()

//   if (!editor) {
//     return null
//   }

//   const buttons = [
//     {
//       label: 'Bold',
//       action: () => editor.chain().focus().toggleBold().run(),
//       disabled: !editor.can().chain().focus().toggleBold().run(),
//       isActive: editor.isActive('bold'),
//     },
//     {
//       label: 'Italic',
//       action: () => editor.chain().focus().toggleItalic().run(),
//       disabled: !editor.can().chain().focus().toggleItalic().run(),
//       isActive: editor.isActive('italic'),
//     },
//     {
//       label: 'Underline',
//       action: () => editor.chain().focus().toggleUnderline().run(),
//       disabled: !editor.can().chain().focus().toggleUnderline().run(),
//       isActive: editor.isActive('underline'),
//     },
//     {
//       label: 'Strike',
//       action: () => editor.chain().focus().toggleStrike().run(),
//       disabled: !editor.can().chain().focus().toggleStrike().run(),
//       isActive: editor.isActive('strike'),
//     },
//     {
//       label: 'Bullet List',
//       action: () => editor.chain().focus().toggleBulletList().run(),
//       disabled: !editor.can().chain().focus().toggleBulletList().run(),
//       isActive: editor.isActive('bulletList'),
//     },
//     {
//       label: 'Ordered List',
//       action: () => editor.chain().focus().toggleOrderedList().run(),
//       disabled: !editor.can().chain().focus().toggleOrderedList().run(),
//       isActive: editor.isActive('orderedList'),
//     },
//     {
//       label: 'Blockquote',
//       action: () => editor.chain().focus().toggleBlockquote().run(),
//       disabled: !editor.can().chain().focus().toggleBlockquote().run(),
//       isActive: editor.isActive('blockquote'),
//     },
//     {
//       label: 'Code Block',
//       action: () => editor.chain().focus().toggleCodeBlock().run(),
//       disabled: !editor.can().chain().focus().toggleCodeBlock().run(),
//       isActive: editor.isActive('codeBlock'),
//     },
//     {
//       label: 'Add Link',
//       action: () => {
//         const url = window.prompt('Enter URL')
//         if (url) {
//           editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
//         }
//       },
//       disabled: false,
//       isActive: false,
//     },
//     {
//       label: 'Remove Link',
//       action: () => editor.chain().focus().unsetLink().run(),
//       disabled: !editor.isActive('link'),
//       isActive: false,
//     },
//     {
//       label: 'Add Image',
//       action: () => {
//         const url = window.prompt('Enter image URL')
//         if (url) {
//           editor.chain().focus().setImage({ src: url }).run()
//         }
//       },
//       disabled: false,
//       isActive: false,
//     },
//   ]

//   return (
//     <AnimationContainer animation="fadeUp" delay={0.2}>
//       <div className="mb-4 flex flex-wrap gap-2 border-b border-white/20 pb-3">
//         {buttons.map((button, index) => (
//           <Button
//             key={index}
//             onClick={button.action}
//             disabled={button.disabled}
//             size="sm"
//             variant={button.isActive ? 'default' : 'outline'}
//             className={`rounded-lg text-xs transition-all duration-200 md:text-sm ${
//               button.isActive
//                 ? 'bg-[#f10a0a] text-white hover:bg-[#d10909]'
//                 : resolvedTheme === 'dark'
//                   ? 'text-foreground border-white/20 bg-black/10 hover:bg-[#f10a0a] hover:text-white'
//                   : 'text-foreground border-white/20 bg-white/10 hover:bg-[#f10a0a] hover:text-white'
//             }`}
//           >
//             {button.label}
//           </Button>
//         ))}
//       </div>
//     </AnimationContainer>
//   )
// }

// export default function TiptapEditor({ content, setContent }: EditorProps) {
//   const { resolvedTheme } = useTheme()

//   const editor = useEditor({
//     extensions: [
//       StarterKit,
//       Underline,
//       Link.configure({
//         openOnClick: false,
//       }),
//       Image,
//     ],
//     content,
//     onUpdate: ({ editor }) => {
//       setContent(editor.getHTML())
//     },
//   })

//   return (
//     <AnimationContainer animation="fadeUp" delay={0.3}>
//       <div
//         className={`rounded-2xl border border-white/20 p-4 ${
//           resolvedTheme === 'dark' ? 'bg-black/10' : 'bg-white/10'
//         } backdrop-blur-md`}
//       >
//         <MenuBar editor={editor} />
//         <EditorContent
//           editor={editor}
//           className="prose prose-sm text-foreground min-h-[300px] max-w-full text-sm md:text-base"
//         />
//       </div>
//     </AnimationContainer>
//   )
// }
