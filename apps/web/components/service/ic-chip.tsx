'use client';

import React from 'react';

interface ICChipProps {
  highlightPin?: number;
  className?: string;
}

export function ICChip({ highlightPin = 4, className = "" }: ICChipProps) {
  const pinCount = 12;
  const topPins = Array.from({ length: pinCount / 2 }, (_, i) => i);
  const bottomPins = Array.from({ length: pinCount / 2 }, (_, i) => pinCount / 2 + i);

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

  const getTopPinX = (index: number) => centerX - chipWidth / 2 + pinSpacing * (index + 1);
  const getBottomPinX = (index: number) => centerX - chipWidth / 2 + pinSpacing * (index + 1);

  return (
    <svg
      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
      className={`h-full w-full ${className}`}
    >
      {/* Top traces - curved lines from pins to chip */}
      {topPins.map((i) => {
        const isHighlight = false;
        const pinX = getTopPinX(i);
        return (
          <g key={`top-trace-${i}`}>
            {/* Pin pad */}
            <rect
              x={pinX - 8}
              y={topPinY - 8}
              width={16}
              height={16}
              fill="#888"
              rx={2}
            />
            {/* Trace line */}
            <path
              d={`M ${pinX} ${topPinY + 8} Q ${pinX} ${centerY - chipHeight / 2 - 20} ${pinX} ${centerY - chipHeight / 2}`}
              stroke="#666"
              strokeWidth={2}
              fill="none"
              strokeLinecap="round"
            />
            {/* Circle at pin */}
            <circle cx={pinX} cy={topPinY} r={4} fill="#666" />
          </g>
        );
      })}

      {/* Bottom traces */}
      {bottomPins.map((i) => {
        const index = i - pinCount / 2;
        const isHighlight = false;
        const pinX = getBottomPinX(index);
        return (
          <g key={`bottom-trace-${i}`}>
            {/* Pin pad */}
            <rect
              x={pinX - 8}
              y={bottomPinY - 8}
              width={16}
              height={16}
              fill="#888"
              rx={2}
            />
            {/* Trace line */}
            <path
              d={`M ${pinX} ${bottomPinY - 8} Q ${pinX} ${centerY + chipHeight / 2 + 20} ${pinX} ${centerY + chipHeight / 2}`}
              stroke="#666"
              strokeWidth={2}
              fill="none"
              strokeLinecap="round"
            />
            {/* Circle at pin */}
            <circle cx={pinX} cy={bottomPinY} r={4} fill="#666" />
          </g>
        );
      })}

      {/* Left side traces */}
      <g>
        {/* Pin pad */}
        <rect
          x={leftPinX - 20}
          y={centerY - 12}
          width={16}
          height={24}
          fill="#888"
          rx={2}
        />
        {/* Trace line */}
        <path
          d={`M ${leftPinX - 12} ${centerY} Q ${centerX - chipWidth / 2 - 30} ${centerY} ${centerX - chipWidth / 2} ${centerY}`}
          stroke="#666"
          strokeWidth={2}
          fill="none"
          strokeLinecap="round"
        />
      </g>

      {/* Right side traces */}
      <g>
        {/* Pin pad */}
        <rect
          x={centerX + chipWidth / 2 + 4}
          y={centerY - 12}
          width={16}
          height={24}
          fill="#888"
          rx={2}
        />
        {/* Trace line */}
        <path
          d={`M ${centerX + chipWidth / 2} ${centerY} Q ${centerX + chipWidth / 2 + 30} ${centerY} ${centerX + chipWidth / 2 + 12} ${centerY}`}
          stroke="#666"
          strokeWidth={2}
          fill="none"
          strokeLinecap="round"
        />
      </g>

      {/* Main IC chip body */}
      <rect
        x={centerX - chipWidth / 2}
        y={centerY - chipHeight / 2}
        width={chipWidth}
        height={chipHeight}
        fill="#2a2a2a"
        stroke="#555"
        strokeWidth={2}
        rx={12}
      />

      {/* Chip connection points (small squares on chip edges) */}
      {topPins.map((i) => (
        <rect
          key={`top-chip-${i}`}
          x={getTopPinX(i) - 6}
          y={centerY - chipHeight / 2 - 4}
          width={12}
          height={8}
          fill="#666"
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
            fill="#666"
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
        fill="#666"
        rx={1}
      />

      {/* Right side chip connection points */}
      <rect
        x={centerX + chipWidth / 2 - 4}
        y={centerY - 6}
        width={8}
        height={12}
        fill="#666"
        rx={1}
      />
    </svg>
  );
}
