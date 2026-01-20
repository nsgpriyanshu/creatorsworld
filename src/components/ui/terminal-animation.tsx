// src/components/ui/terminal-animation.tsx
'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { TerminalIcon, Maximize2, Minimize2, X } from 'lucide-react'

interface TerminalProps {
  commands: Array<{
    command: string
    response: string
  }>
  typingSpeed?: number
  waitAfterCommand?: number
  className?: string
  autoStart?: boolean
  loop?: boolean
}

export default function Terminal({
  commands = [
    { command: 'npm install next', response: 'Installing packages...\nDone!' },
    {
      command: 'npm run dev',
      response: 'Ready in 2.3s\n\n▲ Next.js 15.0.0\n\nStarted server on localhost:3000',
    },
  ],
  typingSpeed = 50,
  waitAfterCommand = 1000,
  className,
  autoStart = true,
  loop = false,
}: TerminalProps) {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0)
  const [displayedCommand, setDisplayedCommand] = useState('')
  const [displayedResponse, setDisplayedResponse] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const [isTypingCommand, setIsTypingCommand] = useState(false)
  const [isTypingResponse, setIsTypingResponse] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const terminalRef = useRef<HTMLDivElement>(null)

  // Debug: Log component mount
  useEffect(() => {
    console.log('Terminal: Component mounted')
  }, [])

  // Start the animation
  useEffect(() => {
    if (autoStart && !isComplete) {
      console.log('Terminal: Starting animation')
      startTypingCommand()
    }
  }, [autoStart, isComplete])

  // Handle animation completion and looping
  useEffect(() => {
    if (isComplete && loop) {
      console.log('Terminal: Looping animation')
      const timer = setTimeout(() => {
        setCurrentCommandIndex(0)
        setDisplayedCommand('')
        setDisplayedResponse('')
        setIsComplete(false)
        startTypingCommand()
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [isComplete, loop])

  // Blink cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)
    return () => clearInterval(cursorInterval)
  }, [])

  // Scroll to bottom when content changes
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [displayedCommand, displayedResponse])

  const startTypingCommand = () => {
    if (currentCommandIndex >= commands.length) {
      console.log('Terminal: Animation complete')
      setIsComplete(true)
      return
    }

    setIsTypingCommand(true)
    let i = 0
    const command = commands[currentCommandIndex].command
    console.log(`Terminal: Typing command "${command}"`)

    const typeInterval = setInterval(() => {
      if (i < command.length) {
        setDisplayedCommand(prev => prev + command.charAt(i))
        i++
      } else {
        clearInterval(typeInterval)
        setIsTypingCommand(false)
        console.log(`Terminal: Command "${command}" completed`)

        setTimeout(() => {
          startTypingResponse()
        }, waitAfterCommand)
      }
    }, typingSpeed)
    return () => clearInterval(typeInterval)
  }

  const startTypingResponse = () => {
    setIsTypingResponse(true)
    let i = 0
    const response = commands[currentCommandIndex].response
    console.log(`Terminal: Typing response for command ${currentCommandIndex}`)

    const typeInterval = setInterval(() => {
      if (i < response.length) {
        setDisplayedResponse(prev => prev + response.charAt(i))
        i++
      } else {
        clearInterval(typeInterval)
        setIsTypingResponse(false)
        console.log(`Terminal: Response completed for command ${currentCommandIndex}`)

        setTimeout(() => {
          setCurrentCommandIndex(prev => prev + 1)
          setDisplayedCommand('')
          setDisplayedResponse('')
          startTypingCommand()
        }, 1000)
      }
    }, typingSpeed / 2)
    return () => clearInterval(typeInterval)
  }

  const restart = () => {
    console.log('Terminal: Restarting animation')
    setCurrentCommandIndex(0)
    setDisplayedCommand('')
    setDisplayedResponse('')
    setIsComplete(false)
    startTypingCommand()
  }

  return (
    <div
      className={cn(
        'border-border overflow-hidden rounded-xl border shadow-lg bg-muted',
        className,
      )}
    >
      {/* Terminal Header */}
      <div
        className={cn(
          'flex items-center justify-between px-4 py-2 bg-muted',
        )}
      >
        <div className="flex items-center space-x-2">
          <div className="h-3 w-3 rounded-full bg-[#f10a0a]"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-muted-foreground flex items-center">
          <TerminalIcon className="mr-2 h-4 w-4" />
          <span className="text-sm font-medium">Terminal</span>
        </div>
        <div className="text-muted-foreground flex items-center space-x-2">
          <Minimize2 className="h-4 w-4" />
          <Maximize2 className="h-4 w-4" />
          <X className="h-4 w-4" />
        </div>
      </div>

      {/* Terminal Content */}
      <div
        ref={terminalRef}
        className="h-80 overflow-y-auto bg-[#000000] p-4 font-mono text-sm text-gray-100"
      >
        {currentCommandIndex > 0 &&
          commands.slice(0, currentCommandIndex).map((item, index) => (
            <div key={index} className="mb-4">
              <div className="flex">
                <span className="mr-2 text-[#f10a0a]">
                  $
                </span>
                <span className="text-gray-100">{item.command}</span>
              </div>
              {item.response && (
                <div className="mt-1 whitespace-pre-line text-gray-300">{item.response}</div>
              )}
            </div>
          ))}

        {/* Current command being typed */}
        {!isComplete && (
          <div>
            <div className="flex">
              <span className="mr-2 text-[#f10a0a]">
                $
              </span>
              <span className="text-gray-100">{displayedCommand}</span>
              {isTypingCommand && showCursor && <span className="animate-pulse">▋</span>}
            </div>
            {displayedResponse && (
              <div className="mt-1 whitespace-pre-line text-gray-300">
                {displayedResponse}
                {isTypingResponse && showCursor && <span className="animate-pulse">▋</span>}
              </div>
            )}
          </div>
        )}

        {/* Animation complete message */}
        {isComplete && !loop && (
          <div className="mt-4 flex items-center">
            <span className="mr-2 text-yellow-400">Animation complete.</span>
            <button
              onClick={restart}
              className="text-xs text-[#f10a0a] underline hover:text-red-400 transition-colors"
            >
              Restart
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
