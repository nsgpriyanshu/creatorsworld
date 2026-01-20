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
          'relative z-50 mx-auto hidden w-full items-center justify-between self-start rounded-full bg-transparent py-4 backdrop-blur lg:flex',
          visible &&
            ' bg-background/60 w-full py-2',
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

          <div className="absolute inset-0 mx-auto hidden w-max flex-1 flex-row items-center justify-center gap-x-2 text-sm font-medium lg:flex">
            <AnimatePresence>
              {NAV_LINKS.map((link, index) => {
                const isActive = pathname === link.link
                return (
                  <AnimationContainer key={index} animation="fadeDown" delay={0.1 * index}>
                    <div className="relative">
                      <Link
                        href={link.link}
                        className={cn(
                          'relative px-2 py-1 font-medium transition-colors duration-300',
                          isActive
                            ? 'text-[#f10a0a]'
                            : 'text-muted-foreground hover:text-foreground'
                        )}
                      >
                        {link.name}
                        {/* Underline for active state */}
                        {isActive && (
                          <motion.div
                            layoutId="activeUnderline"
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#f10a0a]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          />
                        )}
                      </Link>
                    </div>
                  </AnimationContainer>
                )
              })}
            </AnimatePresence>
          </div>

          <AnimationContainer animation="fadeLeft" delay={0.1}>
            <div className="flex items-center gap-x-4">
              <ModeToggle />
              <Link href="https://discord.gg/VUMVuArkst">
                <Button size="sm" className='rounded-full px-5'>Join Now</Button>
              </Link>
            </div>
          </AnimationContainer>
        </Wrapper>
      </motion.div>

      {/* Mobile */}
      <motion.div
        animate={{
          y: visible ? 20 : 0,
          borderTopLeftRadius: open ? 'rounded-full' : '1.5rem',
          borderTopRightRadius: open ? 'rounded-full' : '1.5rem',
          borderBottomLeftRadius: open ? '0' : '1.5rem',
          borderBottomRightRadius: open ? '0' : '1.5rem',
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 50,
        }}
        className={cn(
          'relative z-60 mx-auto my-4 flex w-11/12 flex-col items-center justify-between py-4 lg:hidden',
          open
            ? 'bg-background dark:bg-background rounded-[0.75rem]' // Solid color when open
            : 'rounded-3xl bg-neutral-100/10 backdrop-blur-md dark:bg-neutral-950/10', // Glassmorphism when closed
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
                <ModeToggle/>
                <Link href="https://discord.gg/VUMVuArkst" target="_blank" rel="noopener noreferrer">
                  <Button size="sm" className='rounded-full px-5'>
                    Join Now
                  </Button>
                </Link>
                {open ? (
                  <XIcon className="text-foreground cursor-pointer" onClick={() => setOpen(!open)} />
                ) : (
                  <MenuIcon className="text-foreground cursor-pointer" onClick={() => setOpen(!open)} />
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
              className="absolute inset-x-0 top-18 z-50 flex w-full flex-col items-start justify-start gap-2 rounded-b-xl bg-background/10 backdrop-blur-md border border-border/50 px-4 py-8 shadow-xl"
            >
              {NAV_LINKS.map((navItem: { link: string; name: string }, idx: number) => {
                const isActive = pathname === navItem.link
                return (
                  <AnimationContainer
                    key={`link-${idx}`}
                    animation="fadeRight"
                    delay={0.1 * (idx + 1)}
                    className="w-full"
                  >
                    <Link
                      href={navItem.link}
                      onClick={() => setOpen(false)}
                      className={cn(
                        'relative block w-full rounded-lg px-4 py-2 font-medium transition-all duration-300',
                        isActive
                          ? 'text-[#f10a0a] underline underline-offset-2'
                          : 'text-muted-foreground hover:text-foreground'
                      )}
                    >
                      <motion.span>{navItem.name}</motion.span>
                    </Link>
                  </AnimationContainer>
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
