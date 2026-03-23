"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@repo/ui/lib/utils";

const INTERACTIVE_SELECTOR = [
  "a",
  "button",
  "[role='button']",
  "summary",
  "label",
  "input",
  "textarea",
  "select",
  "[data-cursor='invert']",
].join(", ");

const TEXT_INPUT_SELECTOR = [
  "input",
  "textarea",
  "select",
  "[contenteditable='true']",
].join(", ");

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export default function CrystalCursor() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [interactive, setInteractive] = useState(false);
  const [isTextInput, setIsTextInput] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [corePosition, setCorePosition] = useState({ x: 0, y: 0 });
  const [haloPosition, setHaloPosition] = useState({ x: 0, y: 0 });

  const targetRef = useRef({ x: 0, y: 0 });
  const coreRef = useRef({ x: 0, y: 0 });
  const haloRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number | null>(null);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduceMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const syncBodyClass = () => {
      const enabled = mediaQuery.matches && !reduceMotionQuery.matches;
      document.body.classList.toggle("custom-cursor-enabled", enabled);
      setMounted(enabled);
    };

    const tick = () => {
      const target = targetRef.current;

      coreRef.current.x += (target.x - coreRef.current.x) * 0.28;
      coreRef.current.y += (target.y - coreRef.current.y) * 0.28;

      haloRef.current.x += (target.x - haloRef.current.x) * 0.14;
      haloRef.current.y += (target.y - haloRef.current.y) * 0.14;

      setCorePosition({ ...coreRef.current });
      setHaloPosition({ ...haloRef.current });

      animationFrameRef.current = window.requestAnimationFrame(tick);
    };

    const handleMove = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const interactiveTarget =
        target?.closest<HTMLElement>(INTERACTIVE_SELECTOR);
      const textInputTarget = target?.closest(TEXT_INPUT_SELECTOR);

      let x = event.clientX;
      let y = event.clientY;

      if (interactiveTarget && !textInputTarget) {
        const rect = interactiveTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        x += clamp((centerX - x) * 0.14, -16, 16);
        y += clamp((centerY - y) * 0.14, -16, 16);
      }

      targetRef.current = { x, y };
      setVisible(true);
      setInteractive(Boolean(interactiveTarget) && !textInputTarget);
      setIsTextInput(Boolean(textInputTarget));
    };

    const handleLeave = () => setVisible(false);
    const handleDown = () => setPressed(true);
    const handleUp = () => setPressed(false);
    const handleScroll = () => {
      setScrolling(true);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        setScrolling(false);
      }, 220);
    };

    syncBodyClass();
    animationFrameRef.current = window.requestAnimationFrame(tick);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseout", handleLeave);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    window.addEventListener("wheel", handleScroll, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    mediaQuery.addEventListener("change", syncBodyClass);
    reduceMotionQuery.addEventListener("change", syncBodyClass);

    return () => {
      document.body.classList.remove("custom-cursor-enabled");
      if (animationFrameRef.current) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseout", handleLeave);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("scroll", handleScroll);
      mediaQuery.removeEventListener("change", syncBodyClass);
      reduceMotionQuery.removeEventListener("change", syncBodyClass);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  if (!mounted || isTextInput) return null;

  return (
    <>
      {/* Outer ring */}
      <div
        aria-hidden
        className={cn(
          "pointer-events-none fixed left-0 top-0 z-[9998] hidden rounded-full transition-[width,height,opacity,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] md:block",
          "mix-blend-difference",
          visible ? "opacity-100" : "opacity-0",
          interactive
            ? "h-9 w-9 border border-white/50"
            : "h-6 w-6 border border-white/30",
          pressed && "opacity-70 h-5 w-5",
        )}
        style={{
          transform: `translate3d(${haloPosition.x}px, ${haloPosition.y}px, 0) translate(-50%, -50%)`,
        }}
      />

      {/* Inner dot */}
      <div
        aria-hidden
        className={cn(
          "pointer-events-none fixed left-0 top-0 z-[9999] hidden rounded-full transition-[width,height,opacity] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] md:block",
          "mix-blend-difference",
          visible ? "opacity-100" : "opacity-0",
          interactive ? "h-2 w-2 bg-white/90" : "h-1.5 w-1.5 bg-white/80",
          pressed && "opacity-70 h-1 w-1",
        )}
        style={{
          transform: `translate3d(${corePosition.x}px, ${corePosition.y}px, 0) translate(-50%, -50%)`,
        }}
      />
    </>
  );
}
