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
      <div
        aria-hidden
        className={cn(
          "pointer-events-none fixed left-0 top-0 z-[9998] hidden rounded-full transition-[width,height,opacity,transform,background-color,border-color,border-radius,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:block",
          "mix-blend-difference backdrop-blur-md",
          visible ? "opacity-100" : "opacity-0",
          scrolling
            ? "h-16 w-10 rounded-[54%_54%_78%_78%/34%_34%_100%_100%]"
            : "",
          interactive
            ? "h-16 w-16 border border-white/35 bg-white/16 shadow-[0_0_50px_rgba(255,255,255,0.18)]"
            : "h-10 w-10 border border-white/20 bg-white/10 shadow-[0_0_28px_rgba(255,255,255,0.12)]",
          pressed &&
            "opacity-85 border-white/25 bg-white/12 shadow-[0_0_24px_rgba(255,255,255,0.10)]",
        )}
        style={{
          transform: `translate3d(${haloPosition.x}px, ${haloPosition.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        <span className="absolute inset-[10%] rounded-full border border-white/15" />
        <span
          className={cn(
            "absolute bg-white/8",
            scrolling
              ? "left-[28%] right-[28%] top-[16%] bottom-[14%] rounded-[52%_52%_76%_76%/32%_32%_100%_100%]"
              : "inset-[28%] rounded-full",
          )}
        />
      </div>

      <div
        aria-hidden
        className={cn(
          "pointer-events-none fixed left-0 top-0 z-[9999] hidden rounded-full transition-[width,height,opacity,transform,background-color,border-color,border-radius,box-shadow] duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] md:block",
          "mix-blend-difference",
          visible ? "opacity-100" : "opacity-0",
          scrolling
            ? "h-12 w-7 rounded-[54%_54%_80%_80%/28%_28%_100%_100%]"
            : "",
          interactive
            ? "h-12 w-12 border border-white/70 bg-white/85 shadow-[0_0_28px_rgba(255,255,255,0.28)]"
            : "h-7 w-7 border border-white/60 bg-white/65 shadow-[0_0_20px_rgba(255,255,255,0.18)]",
          pressed &&
            "opacity-90 border-white/55 bg-white/70 shadow-[0_0_12px_rgba(255,255,255,0.12)]",
        )}
        style={{
          transform: `translate3d(${corePosition.x}px, ${corePosition.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        <span
          className={cn(
            "absolute border border-black/10",
            scrolling
              ? "inset-x-[24%] bottom-[12%] top-[18%] rounded-[54%_54%_80%_80%/28%_28%_100%_100%]"
              : "inset-[22%] rounded-full",
          )}
        />
        <span
          className={cn(
            "absolute bg-white/80",
            scrolling
              ? "left-[34%] top-[16%] h-[20%] w-[32%] rounded-full"
              : "inset-[38%] rounded-full",
          )}
        />
      </div>
    </>
  );
}
