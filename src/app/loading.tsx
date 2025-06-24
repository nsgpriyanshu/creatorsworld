'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const Loading = () => {
  const { resolvedTheme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  // Ensure theme is resolved after client-side mount
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Theme-responsive colors
  const orbColor = resolvedTheme === 'light' ? '#f10a0a' : '#ff4040'
  const bgGradient =
    resolvedTheme === 'light'
      ? 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
      : 'linear-gradient(135deg, #1a1a1a 0%, #2c3e50 100%)'

  // Animation variants for the orb
  const orbVariants = {
    initial: { scale: 0.8, opacity: 0.6 },
    animate: {
      scale: [0.8, 1.2, 0.8],
      opacity: [0.6, 1, 0.6],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  // Animation variants for orbiting particles
  const particleVariants = {
    animate: (i: number) => ({
      rotate: 360,
      transition: {
        duration: 3 + i * 0.5,
        repeat: Infinity,
        ease: 'linear',
      },
    }),
  }

  // Fade-out animation for the entire loader
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  }

  if (!isMounted) return null // Prevent flash of unstyled content

  return (
    <AnimatePresence>
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="fixed inset-0 flex items-center justify-center"
        style={{ background: bgGradient }}
      >
        <div className="relative flex items-center justify-center">
          {/* Central Pulsing Orb */}
          <motion.div
            variants={orbVariants}
            initial="initial"
            animate="animate"
            className="relative h-24 w-24 rounded-full bg-gradient-to-r from-[#f10a0a] to-[#ff4040] shadow-lg"
            style={{
              boxShadow: `0 0 20px ${orbColor}`,
              background: `radial-gradient(circle, ${orbColor} 0%, transparent 70%)`,
            }}
          >
            {/* Glassmorphism Overlay */}
            <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-md" />
          </motion.div>

          {/* Orbiting Particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={particleVariants}
              animate="animate"
              className="absolute h-4 w-4 rounded-full bg-white/50"
              style={{
                top: '50%',
                left: '50%',
                transform: `translate(-50%, -50%)`,
                boxShadow: `0 0 10px ${orbColor}`,
              }}
              initial={{
                x: Math.cos((i * Math.PI) / 3) * 60,
                y: Math.sin((i * Math.PI) / 3) * 60,
              }}
            />
          ))}

          {/* Text Below Orb */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
            className="text-muted-foreground absolute top-32 text-sm font-medium"
          >
            Entering Creator's Worlds...
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Loading
