// src/components/ui/terminal-animation.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { TerminalIcon, Maximize2, Minimize2, X } from "lucide-react";

interface TerminalProps {
  commands: Array<{
    command: string;
    response: string;
  }>;
  typingSpeed?: number;
  waitAfterCommand?: number;
  className?: string;
  autoStart?: boolean;
  loop?: boolean;
}

export default function Terminal({
  commands = [
    { command: "npm install next", response: "Installing packages...\nDone!" },
    { command: "npm run dev", response: "Ready in 2.3s\n\n▲ Next.js 15.0.0\n\nStarted server on localhost:3000" },
  ],
  typingSpeed = 50,
  waitAfterCommand = 1000,
  className,
  autoStart = true,
  loop = false,
}: TerminalProps) {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [displayedCommand, setDisplayedCommand] = useState("");
  const [displayedResponse, setDisplayedResponse] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [isTypingCommand, setIsTypingCommand] = useState(false);
  const [isTypingResponse, setIsTypingResponse] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Debug: Log component mount
  useEffect(() => {
    console.log("Terminal: Component mounted");
  }, []);

  // Start the animation
  useEffect(() => {
    if (autoStart && !isComplete) {
      console.log("Terminal: Starting animation");
      startTypingCommand();
    }
  }, [autoStart, isComplete]);

  // Handle animation completion and looping
  useEffect(() => {
    if (isComplete && loop) {
      console.log("Terminal: Looping animation");
      const timer = setTimeout(() => {
        setCurrentCommandIndex(0);
        setDisplayedCommand("");
        setDisplayedResponse("");
        setIsComplete(false);
        startTypingCommand();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isComplete, loop]);

  // Blink cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  // Scroll to bottom when content changes
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [displayedCommand, displayedResponse]);

  const startTypingCommand = () => {
    if (currentCommandIndex >= commands.length) {
      console.log("Terminal: Animation complete");
      setIsComplete(true);
      return;
    }

    setIsTypingCommand(true);
    let i = 0;
    const command = commands[currentCommandIndex].command;
    console.log(`Terminal: Typing command "${command}"`);

    const typeInterval = setInterval(() => {
      if (i < command.length) {
        setDisplayedCommand((prev) => prev + command.charAt(i));
        i++;
      } else {
        clearInterval(typeInterval);
        setIsTypingCommand(false);
        console.log(`Terminal: Command "${command}" completed`);

        setTimeout(() => {
          startTypingResponse();
        }, waitAfterCommand);
      }
    }, typingSpeed);
    return () => clearInterval(typeInterval);
  };

  const startTypingResponse = () => {
    setIsTypingResponse(true);
    let i = 0;
    const response = commands[currentCommandIndex].response;
    console.log(`Terminal: Typing response for command ${currentCommandIndex}`);

    const typeInterval = setInterval(() => {
      if (i < response.length) {
        setDisplayedResponse((prev) => prev + response.charAt(i));
        i++;
      } else {
        clearInterval(typeInterval);
        setIsTypingResponse(false);
        console.log(`Terminal: Response completed for command ${currentCommandIndex}`);

        setTimeout(() => {
          setCurrentCommandIndex((prev) => prev + 1);
          setDisplayedCommand("");
          setDisplayedResponse("");
          startTypingCommand();
        }, 1000);
      }
    }, typingSpeed / 2);
    return () => clearInterval(typeInterval);
  };

  const restart = () => {
    console.log("Terminal: Restarting animation");
    setCurrentCommandIndex(0);
    setDisplayedCommand("");
    setDisplayedResponse("");
    setIsComplete(false);
    startTypingCommand();
  };

  return (
    <div
      className={cn(
        "rounded-xl overflow-hidden border border-border shadow-lg",
        "dark:bg-[#1a1a1a] light:bg-gray-200", // Header background
        className
      )}
    >
      {/* Terminal Header */}
      <div
        className={cn(
          "px-4 py-2 flex items-center justify-between",
          "dark:bg-[#1a1a1a] light:bg-gray-200"
        )}
      >
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#f10a0a] dark:bg-[#f10a0a] light:bg-[#d10909]"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex items-center text-muted-foreground">
          <TerminalIcon className="w-4 h-4 mr-2" />
          <span className="text-sm font-medium">Terminal</span>
        </div>
        <div className="flex items-center space-x-2 text-muted-foreground">
          <Minimize2 className="w-4 h-4" />
          <Maximize2 className="w-4 h-4" />
          <X className="w-4 h-4" />
        </div>
      </div>

      {/* Terminal Content */}
      <div
        ref={terminalRef}
        className="bg-[#000000] text-gray-100 p-4 font-mono text-sm h-80 overflow-y-auto"
      >
        {currentCommandIndex > 0 &&
          commands.slice(0, currentCommandIndex).map((item, index) => (
            <div key={index} className="mb-4">
              <div className="flex">
                <span className="text-[#f10a0a] dark:text-[#f10a0a] light:text-[#d10909] mr-2">$</span>
                <span>{item.command}</span>
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
              <span className="text-[#f10a0a] dark:text-[#f10a0a] light:text-[#d10909] mr-2">$</span>
              <span>{displayedCommand}</span>
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
            <span className="text-yellow-400 mr-2">Animation complete.</span>
            <button
              onClick={restart}
              className="text-[#f10a0a] dark:text-[#f10a0a] light:text-[#d10909] underline text-xs hover:text-[#ff4040] dark:hover:text-[#ff4040] light:hover:text-[#e63939]"
            >
              Restart
            </button>
          </div>
        )}
      </div>
    </div>
  );
}