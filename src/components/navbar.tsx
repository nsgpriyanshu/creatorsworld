'use client'

import { Button } from '@/components/ui/button'
import { NAV_LINKS } from '@/constants'
import { useClickOutside } from '@/hooks'
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion'
import { MenuIcon, XIcon } from 'lucide-react'
import Link from 'next/link'
import { useRef, useState } from 'react'
import AnimationContainer from './global/animation-container'
import Wrapper from './global/wrapper'
import { cn } from '@/lib/utils'
import { ModeToggle } from './global/theme-toggle'
import Image from 'next/image'

/* ===============================
   Types
================================ */
type NavLink = {
  name: string
  link: string
}

const Navbar = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [open, setOpen] = useState<boolean>(false)
  const [visible, setVisible] = useState<boolean>(false)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const mobileMenuRef = useClickOutside(() => {
    if (open) setOpen(false)
  })

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest: number) => {
    setVisible(latest > 100)
  })

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full">
      {/* ===============================
         Desktop
      =============================== */}
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
          visible && 'bg-background/60 py-2',
        )}
      >
        <Wrapper className="flex items-center justify-between lg:px-4">
          {/* Logo */}
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

          {/* Nav Links with Shared Underline */}
          <div className="absolute inset-0 mx-auto hidden w-max flex-1 items-center justify-center gap-x-3 text-sm font-medium lg:flex">
            {(NAV_LINKS as NavLink[]).map((link, index) => (
              <AnimationContainer
                key={link.name}
                animation="fadeDown"
                delay={0.1 * index}
              >
                <motion.div
                  onHoverStart={() => setActiveIndex(index)}
                  onHoverEnd={() => setActiveIndex(null)}
                  className="relative px-2 py-1"
                >
                  <Link
                    href={link.link}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>

                  {activeIndex === index && (
                    <motion.span
                      layoutId="navbar-underline"
                      transition={{
                        type: 'spring',
                        stiffness: 500,
                        damping: 30,
                      }}
                      className="absolute left-0 -bottom-1 h-0.5 w-full rounded-full bg-foreground"
                    />
                  )}
                </motion.div>
              </AnimationContainer>
            ))}
          </div>

          {/* Right Actions */}
          <AnimationContainer animation="fadeLeft" delay={0.1}>
            <div className="flex items-center gap-x-4">
              <ModeToggle />
              <Link href="https://discord.gg/VUMVuArkst">
                <Button size="sm" className="rounded-full px-5">Join Now</Button>
              </Link>
            </div>
          </AnimationContainer>
        </Wrapper>
      </motion.div>

      {/* ===============================
         Mobile
      =============================== */}
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
          'relative z-60 mx-auto my-4 flex w-11/12 flex-col items-center justify-between py-4 lg:hidden',
          open
            ? 'bg-background dark:bg-background rounded-[0.75rem]'
            : 'rounded-3xl bg-primary/10 backdrop-blur-md dark:bg-neutral-950/10',
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
                <ModeToggle />
                <Button size="sm">
                  <Link
                    href="https://discord.gg/VUMVuArkst"
                    className="flex items-center"
                  >
                    Join Now
                  </Link>
                </Button>
                {open ? (
                  <XIcon
                    className="text-foreground"
                    onClick={() => setOpen(false)}
                  />
                ) : (
                  <MenuIcon
                    className="text-foreground"
                    onClick={() => setOpen(true)}
                  />
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
              className="absolute inset-x-0 top-18 z-50 flex w-full flex-col items-start gap-2 rounded-b-xl bg-primary/10 px-4 py-8 backdrop-blur-md dark:bg-neutral-950/10"
            >
              {(NAV_LINKS as NavLink[]).map((navItem, idx) => (
                <AnimationContainer
                  key={navItem.name}
                  animation="fadeRight"
                  delay={0.1 * (idx + 1)}
                  className="w-full"
                >
                  <Link
                    href={navItem.link}
                    onClick={() => setOpen(false)}
                    className="relative w-full rounded-lg px-4 py-2 text-base font-medium text-foreground hover:bg-muted"
                  >
                    <motion.span>{navItem.name}</motion.span>
                  </Link>
                </AnimationContainer>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  )
}

export default Navbar
