"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import createGlobe from "cobe";

const INITIAL_PHI = 0;
const INITIAL_THETA = 0.5;
const AUTO_ROTATE_SPEED = 0.0025;

const MARKERS = [
  { location: [12.97, 77.59] as [number, number], size: 0.04 },
  { location: [37.78, -122.44] as [number, number], size: 0.04 },
  { location: [51.51, -0.13] as [number, number], size: 0.04 },
  { location: [-33.87, 151.21] as [number, number], size: 0.04 },
  { location: [35.68, 139.65] as [number, number], size: 0.04 },
  { location: [55.75, 37.62] as [number, number], size: 0.04 },
];

const CobeGlobe = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const [size, setSize] = useState(0);
  const { resolvedTheme } = useTheme();

  const currentPhiRef = useRef(INITIAL_PHI);
  const targetPhiRef = useRef(INITIAL_PHI);
  const currentThetaRef = useRef(INITIAL_THETA);
  const targetThetaRef = useRef(INITIAL_THETA);
  const draggingRef = useRef(false);
  const lastPointerRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      setSize(Math.max(220, Math.round(entry.contentRect.width)));
    });

    resizeObserver.observe(element);
    setSize(Math.max(220, Math.round(element.getBoundingClientRect().width)));

    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    if (!canvasRef.current || size === 0) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const isDark = resolvedTheme === "dark";
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: dpr,
      width: size * dpr,
      height: size * dpr,
      phi: INITIAL_PHI,
      theta: INITIAL_THETA,
      dark: isDark ? 1 : 0,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6.0,
      mapBaseBrightness: isDark ? 0.4 : 0.0,
      baseColor: isDark ? [0.08, 0.08, 0.08] : [1, 1, 1],
      markerColor: isDark ? [0.96, 0.96, 0.96] : [0.14, 0.14, 0.14],
      glowColor: isDark ? [0.08, 0.08, 0.08] : [1, 1, 1],
      scale: 1,
      offset: [0, 0],
      markers: MARKERS,
      markerElevation: 0,
    });

    const animate = () => {
      if (!draggingRef.current) {
        targetPhiRef.current += AUTO_ROTATE_SPEED;
      }

      currentPhiRef.current +=
        (targetPhiRef.current - currentPhiRef.current) * 0.08;
      currentThetaRef.current +=
        (targetThetaRef.current - currentThetaRef.current) * 0.08;

      globe.update({
        phi: currentPhiRef.current,
        theta: currentThetaRef.current,
      });

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      globe.destroy();
    };
  }, [resolvedTheme, size]);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();

    if (draggingRef.current && lastPointerRef.current) {
      const deltaX = event.clientX - lastPointerRef.current.x;
      const deltaY = event.clientY - lastPointerRef.current.y;

      targetPhiRef.current += deltaX * 0.008;
      targetThetaRef.current = Math.max(
        -0.4,
        Math.min(0.18, targetThetaRef.current - deltaY * 0.004),
      );

      lastPointerRef.current = {
        x: event.clientX,
        y: event.clientY,
      };
      return;
    }

    const offsetX = (event.clientX - bounds.left) / bounds.width - 0.5;
    const offsetY = (event.clientY - bounds.top) / bounds.height - 0.5;

    targetPhiRef.current = INITIAL_PHI + offsetX * 0.45;
    targetThetaRef.current = INITIAL_THETA + offsetY * -0.24;
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    draggingRef.current = true;
    lastPointerRef.current = { x: event.clientX, y: event.clientY };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const resetInteraction = () => {
    draggingRef.current = false;
    lastPointerRef.current = null;
  };

  return (
    <div
      ref={containerRef}
      className="relative mx-auto aspect-square w-full max-w-[16rem] sm:max-w-[18rem] md:max-w-[22rem] lg:max-w-[24rem]"
      onPointerMove={handlePointerMove}
      onPointerDown={handlePointerDown}
      onPointerUp={resetInteraction}
      onPointerLeave={resetInteraction}
    >
      <canvas
        ref={canvasRef}
        className="h-full w-full cursor-grab active:cursor-grabbing"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default CobeGlobe;
