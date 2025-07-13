'use client'

import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const Loading = () => {
  const { resolvedTheme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  const orbColor = resolvedTheme === 'light' ? '#f10a0a' : '#f10a0a'

  return (
    <div className="bg-background fixed inset-0 flex flex-col items-center justify-center gap-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0.6 }}
        animate={{
          scale: [0.8, 1.2, 0.8],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="h-20 w-20 rounded-full"
        style={{
          background: `radial-gradient(circle, ${orbColor} 0%, transparent 70%)`,
          boxShadow: `0 0 20px ${orbColor}`,
        }}
      />

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-muted-foreground text-sm"
      >
        Stepping into Creator&apos;s World...
      </motion.p>
    </div>
  )
}

export default Loading
