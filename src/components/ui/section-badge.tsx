import React from 'react'

interface Props {
  title: string
}

const SectionBadge = ({ title }: Props) => {
  return (
    <div className="bg-primary/10 flex items-center justify-center gap-2 rounded-full border border-white/20 px-2.5 py-1 backdrop-blur-md">
      {/* Glassmorphism effect: added semi-transparent black background, medium blur, and subtle white border to enhance badge appearance */}
      <div className="relative flex h-1.5 w-1.5 items-center justify-center rounded-full bg-[#f10a0a]/40">
        <div className="flex h-2 w-2 animate-ping items-center justify-center rounded-full bg-[#f10a0a]/60">
          <div className="flex h-2 w-2 animate-ping items-center justify-center rounded-full bg-[#f10a0a]/60"></div>
        </div>
        <div className="absolute top-1/2 left-1/2 flex h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#f10a0a]"></div>
      </div>
      <span className="from-primary bg-gradient-to-r to-neutral-500 bg-clip-text text-xs font-medium text-transparent">
        {title}
      </span>
    </div>
  )
}

export default SectionBadge
