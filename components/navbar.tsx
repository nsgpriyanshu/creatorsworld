'use client'

import { Button } from '@/components/ui/button'
import { NAV_LINKS } from '@/constants'
import { useClickOutside } from '@/hooks'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { MenuIcon, XIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRef, useState } from 'react'
import AnimationContainer from './global/animation-container'
import Wrapper from './global/wrapper'
import { cn } from '@/lib/utils'
import { ModeToggle } from './global/theme-toggle'
import Image from 'next/image'

const Navbar = () => {
  const pathname = usePathname()
  const ref = useRef<HTMLDivElement | null>(null)
  const [open, setOpen] = useState(false)
  const [visible, setVisible] = useState<boolean>(false)

  const mobileMenuRef = useClickOutside(() => {
    if (open) setOpen(false)
  })

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', latest => {
    setVisible(latest > 100)
  })

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full">
      {/* Desktop */}
      <motion.div
        animate={{
          width: visible ? '40%' : '100%',
          y: visible ? 20 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 40,
        }}
        style={{ minWidth: '800px' }}
        className={cn(
          'relative z-50 mx-auto hidden w-full items-center justify-between rounded-full bg-transparent py-4 backdrop-blur lg:flex',
          visible && 'bg-background/60 py-2',
        )}
      >
        <Wrapper className="flex items-center justify-between lg:px-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/icons/dark/android-chrome-512x512.png"
              alt="CW Icon"
              width={28}
              height={28}
              className="-mt-1 dark:hidden"
            />
            <Image
              src="/icons/light/android-chrome-512x512.png"
              alt="CW Icon"
              width={28}
              height={28}
              className="-mt-1 hidden dark:block"
            />
          </Link>

          <div className="text-muted-foreground absolute inset-0 mx-auto hidden w-max items-center justify-center gap-x-2 text-sm font-medium lg:flex">
            <AnimatePresence>
              {NAV_LINKS.map((link, index) => {
                const isActive = pathname === link.link

                return (
                  <AnimationContainer key={index} animation="fadeDown" delay={0.1 * index}>
                    <Link
                      href={link.link}
                      className={cn(
                        'text-foreground relative px-2 py-1 font-medium',
                        'after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-[#f10a0a] after:transition-transform after:duration-300',
                        'hover:after:scale-x-100',
                        isActive && 'after:scale-x-100',
                      )}
                    >
                      {link.name}
                    </Link>
                  </AnimationContainer>
                )
              })}
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-x-4">
            <ModeToggle />
            <Link href="https://discord.gg/VUMVuArkst">
              <Button size="sm">Join Now</Button>
            </Link>
          </div>
        </Wrapper>
      </motion.div>

      {/* Mobile */}
      <motion.div
        animate={{
          y: visible ? 20 : 0,
          borderTopLeftRadius: open ? '0.75rem' : '1.5rem',
          borderTopRightRadius: open ? '0.75rem' : '1.5rem',
          borderBottomLeftRadius: open ? '0' : '1.5rem',
          borderBottomRightRadius: open ? '0' : '1.5rem',
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 50 }}
        className={cn(
          'relative z-60 mx-auto my-4 flex w-11/12 flex-col py-4 lg:hidden',
          open ? 'bg-background rounded-2xl' : 'bg-muted/40 rounded-[1.5rem] backdrop-blur-md',
        )}
      >
        <Wrapper className="flex items-center justify-between">
          <Link href="/">
            <Image
              src="/icons/dark/android-chrome-512x512.png"
              alt="CW Icon"
              width={28}
              height={28}
              className="-mt-1 dark:hidden"
            />
            <Image
              src="/icons/light/android-chrome-512x512.png"
              alt="CW Icon"
              width={28}
              height={28}
              className="-mt-1 hidden dark:block"
            />
          </Link>

          <div className="flex items-center gap-x-4">
            <ModeToggle />
            <Button size="sm">
              <Link href="https://discord.gg/VUMVuArkst">Join Now</Link>
            </Button>
            {open ? (
              <XIcon className="text-foreground" onClick={() => setOpen(false)} />
            ) : (
              <MenuIcon className="text-foreground" onClick={() => setOpen(true)} />
            )}
          </div>
        </Wrapper>

        <AnimatePresence>
          {open && (
            <motion.div
              ref={mobileMenuRef}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="bg-muted/40 absolute inset-x-0 top-18 z-50 flex flex-col gap-2 rounded-b-xl px-4 py-8 backdrop-blur-md"
            >
              {NAV_LINKS.map((link, idx) => {
                const isActive = pathname === link.link

                return (
                  <Link
                    key={idx}
                    href={link.link}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'text-muted-foreground relative px-4 py-2',
                      'after:absolute after:-bottom-0.5 after:left-4 after:h-0.5 after:w-[calc(100%-2rem)] after:origin-left after:scale-x-0 after:bg-[#f10a0a] after:transition-transform after:duration-300',
                      isActive && 'after:scale-x-100',
                    )}
                  >
                    {link.name}
                  </Link>
                )
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  )
}

export default Navbar
