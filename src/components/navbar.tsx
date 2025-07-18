'use client'

import { Button } from '@/components/ui/button'
import { NAV_LINKS } from '@/constants'
import { useClickOutside } from '@/hooks'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { MenuIcon, XIcon } from 'lucide-react'
import Link from 'next/link'
import { RefObject, useRef, useState } from 'react'
import AnimationContainer from './global/animation-container'
import Wrapper from './global/wrapper'
import { cn } from '@/lib/utils'
import { ModeToggle } from './global/theme-toggle'
import Image from 'next/image'

const Navbar = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [open, setOpen] = useState(false)
  const [visible, setVisible] = useState<boolean>(false)

  const mobileMenuRef = useClickOutside(() => {
    if (open) setOpen(false)
  })

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', latest => {
    if (latest > 100) {
      setVisible(true)
    } else {
      setVisible(false)
    }
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
        style={{
          minWidth: '800px',
        }}
        className={cn(
          'relative z-[50] mx-auto hidden w-full items-center justify-between self-start rounded-full bg-transparent py-4 backdrop-blur lg:flex',
          visible &&
            'border-x-foreground/15 border-b-foreground/10 border-t-foreground/20 bg-background/60 w-full border py-2',
        )}
      >
        <Wrapper className="flex items-center justify-between lg:px-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/icons/cwicon_dark.png"
                alt="cwicon"
                width={28}
                height={28}
                className="-mt-1"
              />
            </Link>
          </motion.div>

          <div className="text-muted-foreground absolute inset-0 mx-auto hidden w-max flex-1 flex-row items-center justify-center gap-x-2 text-sm font-medium lg:flex">
            <AnimatePresence>
              {NAV_LINKS.map((link, index) => (
                <AnimationContainer key={index} animation="fadeDown" delay={0.1 * index}>
                  <div className="relative">
                    <Link
                      href={link.link}
                      className="hover:bg-accent hover:text-foreground rounded-md px-4 py-2 transition-all duration-500"
                    >
                      {link.name}
                    </Link>
                  </div>
                </AnimationContainer>
              ))}
            </AnimatePresence>
          </div>

          <AnimationContainer animation="fadeLeft" delay={0.1}>
            <div className="flex items-center gap-x-4">
              <ModeToggle />
              <Link href="https://discord.gg/VUMVuArkst">
                <Button size="sm">Join Now</Button>
              </Link>
            </div>
          </AnimationContainer>
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
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 50,
        }}
        className={cn(
          'relative z-[60] mx-auto my-4 flex w-11/12 flex-col items-center justify-between py-4 lg:hidden',
          open
            ? 'bg-background dark:bg-background rounded-[0.75rem] border border-white/20' // Solid color when open
            : 'rounded-[1.5rem] border border-white/20 bg-white/10 backdrop-blur-md dark:bg-neutral-950/10', // Glassmorphism when closed
        )}
      >
        <Wrapper className="flex items-center justify-between lg:px-4">
          <div className="flex w-full items-center justify-between gap-x-4">
            <AnimationContainer animation="fadeRight" delay={0.1}>
              <Link href="/">
                <Image
                  src="/icons/cwicon_dark.png"
                  alt="cwicon"
                  width={28}
                  height={28}
                  className="-mt-1"
                />
              </Link>
            </AnimationContainer>

            <AnimationContainer animation="fadeLeft" delay={0.1}>
              <div className="flex items-center justify-center gap-x-4">
                <Button size="sm">
                  <Link href="https://discord.gg/VUMVuArkst" className="flex items-center">
                    Join Now
                  </Link>
                </Button>
                {open ? (
                  <XIcon className="text-black dark:text-white" onClick={() => setOpen(!open)} />
                ) : (
                  <MenuIcon className="text-black dark:text-white" onClick={() => setOpen(!open)} />
                )}
              </div>
            </AnimationContainer>
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
              className="absolute inset-x-0 top-[4.5rem] z-[50] flex w-full flex-col items-start justify-start gap-2 rounded-b-xl border border-white/20 bg-white/10 px-4 py-8 shadow-xl shadow-neutral-950/50 backdrop-blur-md dark:bg-neutral-950/10" // Glassmorphism for dropdown
            >
              {NAV_LINKS.map((navItem: any, idx: number) => (
                <AnimationContainer
                  key={`link=${idx}`}
                  animation="fadeRight"
                  delay={0.1 * (idx + 1)}
                  className="w-full"
                >
                  <Link
                    href={navItem.link}
                    onClick={() => setOpen(false)}
                    className="relative w-full gap-y-2 rounded-lg px-4 py-2 hover:bg-white/10 dark:text-neutral-300 dark:hover:bg-neutral-800/50"
                  >
                    <motion.span>{navItem.name}</motion.span>
                  </Link>
                </AnimationContainer>
              ))}
              <AnimationContainer animation="fadeUp" delay={0.5} className="w-full">
                <div className="mt-4 flex justify-center">
                  <ModeToggle />
                </div>
              </AnimationContainer>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  )
}

export default Navbar
