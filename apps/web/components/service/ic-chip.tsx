"use client";

import React from "react";

interface ICChipProps {
  highlightPin?: number;
  activePin?: number;
  className?: string;
}

export function ICChip({
  highlightPin = 4,
  activePin,
  className = "",
}: ICChipProps) {
  const pinCount = 12;
  const topPins = Array.from({ length: pinCount / 2 }, (_, i) => i);
  const bottomPins = Array.from(
    { length: pinCount / 2 },
    (_, i) => pinCount / 2 + i,
  );

  const svgWidth = 600;
  const svgHeight = 500;
  const centerX = svgWidth / 2;
  const centerY = svgHeight / 2;
  const chipWidth = 350;
  const chipHeight = 140;

  // Pin positions
  const topPinY = centerY - chipHeight / 2 - 60;
  const bottomPinY = centerY + chipHeight / 2 + 60;
  const pinSpacing = chipWidth / (pinCount / 2 + 1);
  const leftPinX = centerX - chipWidth / 2;
  const [internalActivePin, setInternalActivePin] =
    React.useState<number>(highlightPin);
  const currentActivePin = activePin ?? internalActivePin;

  const getTopPinX = (index: number) =>
    centerX - chipWidth / 2 + pinSpacing * (index + 1);
  const getBottomPinX = (index: number) =>
    centerX - chipWidth / 2 + pinSpacing * (index + 1);

  const getPinColor = (index: number) =>
    currentActivePin === index ? "#60a5fa" : "#888";
  const getTraceColor = (index: number) =>
    currentActivePin === index ? "#3b82f6" : "#666";
  const getChipNodeColor = (index: number) =>
    currentActivePin === index ? "#93c5fd" : "#666";

  const handlePointerMove = (event: React.PointerEvent<SVGSVGElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * svgWidth;
    const y = ((event.clientY - rect.top) / rect.height) * svgHeight;
    const isBottom = y > centerY;
    const halfPins = pinCount / 2;

    const nearestIndex = Math.min(
      halfPins - 1,
      Math.max(0, Math.round((x - leftPinX) / pinSpacing) - 1),
    );

    setInternalActivePin(isBottom ? halfPins + nearestIndex : nearestIndex);
  };

  return (
    <svg
      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
      className={`h-full w-full ${className}`}
      role="img"
      aria-label="Interactive integrated circuit diagram"
      onPointerMove={handlePointerMove}
      onPointerLeave={() => setInternalActivePin(highlightPin)}
    >
      <defs>
        <linearGradient id="chipStroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#475569" stopOpacity="0.8" />
        </linearGradient>
        <radialGradient id="chipCoreGlow">
          <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.25" />
          <stop offset="60%" stopColor="#60a5fa" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Top traces - curved lines from pins to chip */}
      {topPins.map((i) => {
        const pinX = getTopPinX(i);
        const tracePath = `M ${pinX} ${topPinY + 8} Q ${pinX} ${
          centerY - chipHeight / 2 - 20
        } ${pinX} ${centerY - chipHeight / 2}`;
        return (
          <g key={`top-trace-${i}`}>
            {/* Pin pad */}
            <rect
              x={pinX - 8}
              y={topPinY - 8}
              width={16}
              height={16}
              fill={getPinColor(i)}
              rx={2}
            />
            {/* Trace line */}
            <path
              d={tracePath}
              stroke={getTraceColor(i)}
              strokeWidth={2}
              fill="none"
              strokeLinecap="round"
            />
            <circle r={3} fill={currentActivePin === i ? "#93c5fd" : "#64748b"}>
              <animateMotion
                dur={currentActivePin === i ? "1.6s" : "2.6s"}
                repeatCount="indefinite"
                begin={`${i * 0.14}s`}
                path={tracePath}
              />
              <animate
                attributeName="opacity"
                values="0;1;0"
                dur={currentActivePin === i ? "1.6s" : "2.6s"}
                repeatCount="indefinite"
                begin={`${i * 0.14}s`}
              />
            </circle>
            {/* Circle at pin */}
            <circle cx={pinX} cy={topPinY} r={4} fill={getTraceColor(i)} />
          </g>
        );
      })}

      {/* Bottom traces */}
      {bottomPins.map((i) => {
        const index = i - pinCount / 2;
        const pinX = getBottomPinX(index);
        const tracePath = `M ${pinX} ${bottomPinY - 8} Q ${pinX} ${
          centerY + chipHeight / 2 + 20
        } ${pinX} ${centerY + chipHeight / 2}`;
        return (
          <g key={`bottom-trace-${i}`}>
            {/* Pin pad */}
            <rect
              x={pinX - 8}
              y={bottomPinY - 8}
              width={16}
              height={16}
              fill={getPinColor(i)}
              rx={2}
            />
            {/* Trace line */}
            <path
              d={tracePath}
              stroke={getTraceColor(i)}
              strokeWidth={2}
              fill="none"
              strokeLinecap="round"
            />
            <circle r={3} fill={currentActivePin === i ? "#93c5fd" : "#64748b"}>
              <animateMotion
                dur={currentActivePin === i ? "1.6s" : "2.6s"}
                repeatCount="indefinite"
                begin={`${index * 0.14}s`}
                path={tracePath}
              />
              <animate
                attributeName="opacity"
                values="0;1;0"
                dur={currentActivePin === i ? "1.6s" : "2.6s"}
                repeatCount="indefinite"
                begin={`${index * 0.14}s`}
              />
            </circle>
            {/* Circle at pin */}
            <circle cx={pinX} cy={bottomPinY} r={4} fill={getTraceColor(i)} />
          </g>
        );
      })}

      {/* Left side traces */}
      <g>
        {(() => {
          const leftTracePath = `M ${leftPinX - 12} ${centerY} Q ${
            centerX - chipWidth / 2 - 30
          } ${centerY} ${centerX - chipWidth / 2} ${centerY}`;
          return (
            <>
              {/* Pin pad */}
              <rect
                x={leftPinX - 20}
                y={centerY - 12}
                width={16}
                height={24}
                fill="#60a5fa"
                rx={2}
              />
              {/* Trace line */}
              <path
                d={leftTracePath}
                stroke="#3b82f6"
                strokeWidth={2}
                fill="none"
                strokeLinecap="round"
              />
              <circle r={3} fill="#93c5fd">
                <animateMotion
                  dur="2.4s"
                  repeatCount="indefinite"
                  path={leftTracePath}
                />
                <animate
                  attributeName="opacity"
                  values="0;1;0"
                  dur="2.4s"
                  repeatCount="indefinite"
                />
              </circle>
            </>
          );
        })()}
      </g>

      {/* Right side traces */}
      <g>
        {(() => {
          const rightTracePath = `M ${centerX + chipWidth / 2} ${centerY} Q ${
            centerX + chipWidth / 2 + 30
          } ${centerY} ${centerX + chipWidth / 2 + 12} ${centerY}`;
          return (
            <>
              {/* Pin pad */}
              <rect
                x={centerX + chipWidth / 2 + 4}
                y={centerY - 12}
                width={16}
                height={24}
                fill="#60a5fa"
                rx={2}
              />
              {/* Trace line */}
              <path
                d={rightTracePath}
                stroke="#3b82f6"
                strokeWidth={2}
                fill="none"
                strokeLinecap="round"
              />
              <circle r={3} fill="#93c5fd">
                <animateMotion
                  dur="2.4s"
                  repeatCount="indefinite"
                  path={rightTracePath}
                />
                <animate
                  attributeName="opacity"
                  values="0;1;0"
                  dur="2.4s"
                  repeatCount="indefinite"
                />
              </circle>
            </>
          );
        })()}
      </g>

      {/* Main IC chip body */}
      <rect
        x={centerX - chipWidth / 2}
        y={centerY - chipHeight / 2}
        width={chipWidth}
        height={chipHeight}
        fill="transparent"
        stroke="url(#chipStroke)"
        strokeWidth={2}
        rx={12}
      />

      <rect
        x={centerX - 90}
        y={centerY - 40}
        width={180}
        height={80}
        fill="url(#chipCoreGlow)"
        rx={18}
      />

      <g opacity="0.35">
        <path
          d={`M ${centerX - 130} ${centerY - 20} H ${centerX + 130}`}
          stroke="#64748b"
          strokeWidth={1.5}
          strokeDasharray="6 6"
        />
        <path
          d={`M ${centerX - 130} ${centerY + 20} H ${centerX + 130}`}
          stroke="#64748b"
          strokeWidth={1.5}
          strokeDasharray="6 6"
        />
      </g>

      {/* Chip connection points (small squares on chip edges) */}
      {topPins.map((i) => (
        <rect
          key={`top-chip-${i}`}
          x={getTopPinX(i) - 6}
          y={centerY - chipHeight / 2 - 4}
          width={12}
          height={8}
          fill={getChipNodeColor(i)}
          rx={1}
        />
      ))}

      {bottomPins.map((i) => {
        const index = i - pinCount / 2;
        return (
          <rect
            key={`bottom-chip-${i}`}
            x={getBottomPinX(index) - 6}
            y={centerY + chipHeight / 2 - 4}
            width={12}
            height={8}
            fill={getChipNodeColor(i)}
            rx={1}
          />
        );
      })}

      {/* Left side chip connection points */}
      <rect
        x={centerX - chipWidth / 2 - 4}
        y={centerY - 6}
        width={8}
        height={12}
        fill="#93c5fd"
        rx={1}
      />

      {/* Right side chip connection points */}
      <rect
        x={centerX + chipWidth / 2 - 4}
        y={centerY - 6}
        width={8}
        height={12}
        fill="#93c5fd"
        rx={1}
      />
    </svg>
  );
}
