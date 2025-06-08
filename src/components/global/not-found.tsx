'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Wrapper from '@/components/global/wrapper'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Sparkles } from 'lucide-react'
import { MagicCard } from '@/components/ui/magic-card'

const NotFound = () => {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [hovered, setHovered] = useState(false)

  // Handle mounting for SSR
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Wrapper className="relative h-full min-h-screen w-full flex-1">
      {/* Main content */}
      <div className="flex h-screen w-full items-center justify-center px-4">
        <MagicCard
          className={`relative w-full max-w-4xl overflow-hidden rounded-3xl border ${
            resolvedTheme === 'dark' ? 'border-white/10 bg-black/40' : 'border-black/5 bg-white/40'
          } p-1 backdrop-blur-xl`}
          gradientColor={resolvedTheme === 'dark' ? '#4B4B4B' : '#D9D9D9'}
        >
          <div
            className={`absolute inset-0 opacity-10 ${resolvedTheme === 'dark' ? 'bg-grid-white/10' : 'bg-grid-black/10'}`}
          />

          <div className="relative overflow-hidden rounded-[inherit] p-8 md:p-12">
            {/* Animated gradient border */}
            <div className="pointer-events-none absolute inset-0">
              <div
                className="via-primary absolute inset-0 bg-gradient-to-r from-transparent to-transparent opacity-20 blur-xl"
                style={{
                  maskImage: 'linear-gradient(to bottom, transparent, black, transparent)',
                  WebkitMaskImage: 'linear-gradient(to bottom, transparent, black, transparent)',
                }}
              />
            </div>

            <div className="flex flex-col items-center gap-12 md:flex-row">
              {/* 404 Text */}
              <motion.div
                className="flex-1"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.div
                  className="border-primary/20 bg-primary/10 text-primary mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <Sparkles className="h-3 w-3" />
                  <span>404 Error</span>
                </motion.div>

                <motion.h1
                  className="mb-4 text-4xl font-bold tracking-tight md:text-6xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  <span className="block">Oops!</span>
                  <span className="from-primary mt-1 block bg-gradient-to-r to-[#f10a0a] bg-clip-text text-transparent">
                    Page Not Found
                  </span>
                </motion.h1>

                <motion.p
                  className="text-muted-foreground mb-8 max-w-md"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  It seems you've ventured into uncharted digital territory. Let's get you back to
                  familiar ground.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                >
                  <Link href="/">
                    <motion.div
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Button size="lg" className="group relative overflow-hidden rounded-full">
                        <AnimatePresence>
                          {hovered && (
                            <motion.div
                              className="from-primary/20 absolute inset-0 bg-gradient-to-r to-[#f10a0a]"
                              initial={{ opacity: 0, x: -100 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: 100 }}
                              transition={{ duration: 0.3 }}
                            />
                          )}
                        </AnimatePresence>
                        <span className="relative flex items-center gap-2">
                          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                          Return to Homepage
                        </span>
                      </Button>
                    </motion.div>
                  </Link>
                </motion.div>
              </motion.div>

              {/* 3D Illustration */}
              <motion.div
                className="flex flex-1 justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 2, 0, -2, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: 'reverse',
                  }}
                  className="relative w-full max-w-[300px]"
                >
                  <Image
                    src="/assets/not-found.svg?height=300&width=300"
                    width={300}
                    height={300}
                    alt="404 Illustration"
                    className="drop-shadow-2xl"
                  />

                  {/* Animated rings */}
                  {[1, 2, 3].map(ring => (
                    <motion.div
                      key={ring}
                      className="border-primary/30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border"
                      style={{
                        width: `${100 + ring * 40}px`,
                        height: `${100 + ring * 40}px`,
                      }}
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.1, 0.3, 0.1],
                      }}
                      transition={{
                        duration: 3,
                        delay: ring * 0.5,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: 'reverse',
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </MagicCard>
      </div>
    </Wrapper>
  )
}

export default NotFound
