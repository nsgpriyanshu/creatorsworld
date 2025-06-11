'use client'

import React from 'react'
import Wrapper from '@/components/global/wrapper'
import SectionBadge from '@/components/ui/section-badge'
import AnimationContainer from '@/components/global/animation-container'
import { MagicCard } from '@/components/ui/magic-card'

type Section = {
  title: string
  description: string
  list?: string[]
  colors?: { name: string; hex: string }[]
  downloads?: { name: string; url: string; preview: string }[]
}

const brandGuidelines: Section[] = [
  {
    title: '1. Logo & Usage Guidelines',
    description:
      'Our logo represents the identity of Creator’s World. You may use it to reference our brand in videos, websites, articles, and collaborations. Please do not modify, distort, or recolor it.',
  },
  {
    title: '2. Color Palette',
    description:
      'Our primary colors are shown below. Please use these when referencing or integrating our brand.',
    colors: [
      { name: 'Primary Red', hex: '#f10a0a' },
      { name: 'Primary Black', hex: '#000000' },
      { name: 'Primary White', hex: '#ffffff' },
      { name: 'Secondary Black', hex: '#191919' },
    ],
  },
  {
    title: '3. Do’s and Don’ts',
    description: 'To maintain consistency, follow these basic brand rules.',
    list: [
      'Use the logo as provided without modification.',
      'Keep clear space around the logo.',
      'Don’t stretch, rotate, or recolor the logo.',
      'Don’t place the logo over busy backgrounds.',
    ],
  },
  {
    title: '4. Downloads',
    description: 'You can download high-quality assets for light and dark use cases below:',
    downloads: [
      {
        name: 'Logo - Light Version',
        url: '/icons/cwicon_light.png',
        preview: '/icons/cwicon_light.png',
      },
      {
        name: 'Logo - Dark Version',
        url: '/icons/cwicon_dark.png',
        preview: '/icons/cwicon_dark.png',
      },
      { name: 'PNG', url: '/icons/cw2025.png', preview: '/icons/cw2025.png' },
      { name: 'SVG', url: '/icons/cw2025.svg', preview: '/icons/cw2025.svg' },
    ],
  },
  {
    title: '5. Contact',
    description:
      'For partnerships, press kits, or questions about brand usage, contact us at https://creatorsworld.vercel.app/contact or via Discord.',
  },
]

const Brand = () => {
  return (
    <Wrapper className="relative h-full min-h-screen w-full flex-1 pt-20 lg:pt-32">
      <div className="flex h-full w-full flex-col items-start gap-10 py-8">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-4 px-4 sm:px-6 md:px-0">
          <AnimationContainer animation="fadeUp" delay={0.2}>
            <SectionBadge title="Last Updated: 6 June 2025" />
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.4}>
            <h1 className="from-foreground bg-gradient-to-b to-neutral-400 bg-clip-text text-2xl !leading-tight font-medium text-transparent md:text-4xl lg:text-5xl">
              Creator's World Brand Guidelines
            </h1>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.6}>
            <p className="text-muted-foreground text-sm md:text-base lg:text-lg">
              These guidelines outline the proper use of Creator's World's brand assets, including
              logos, colors, and typography, to ensure consistency and professionalism across all
              media, community content, applications, and collaborations. Adhere to these standards
              to represent our brand accurately.
            </p>
          </AnimationContainer>
        </div>

        {/* Single Magic Card */}
        <div className="flex w-full flex-col gap-6 px-4 sm:px-6 md:px-0">
          <MagicCard className="mt-10 rounded-xl p-6 sm:p-8 md:p-8">
            <AnimationContainer animation="fadeUp" delay={0.6}>
              <div className="flex flex-col gap-8">
                {brandGuidelines.map((section, index) => (
                  <div key={section.title} className="flex flex-col gap-4">
                    <h2 className="text-xl font-medium text-[#f10a0a] md:text-2xl dark:text-[#f10a0a]">
                      {section.title}
                    </h2>
                    <p className="text-muted-foreground text-sm sm:text-base md:text-base lg:text-lg">
                      {section.description}
                    </p>
                    {section.list && (
                      <ul className="text-muted-foreground list-inside list-disc text-sm sm:text-base md:text-base lg:text-lg">
                        {section.list.map((item, i) => (
                          <li key={i}>
                            {item.startsWith('[') ? (
                              <a
                                href={item.match(/\((.*?)\)/)?.[1] || '#'}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline"
                              >
                                {item.match(/\[(.*?)\]/)?.[1]}
                              </a>
                            ) : (
                              item
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                    {section.colors && (
                      <div className="flex flex-wrap gap-4">
                        {section.colors.map((color, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div
                              className="h-10 w-10 rounded-md border border-neutral-200 dark:border-neutral-700"
                              style={{ backgroundColor: color.hex }}
                            ></div>
                            <span className="text-primary text-sm sm:text-base md:text-base lg:text-lg">
                              {color.name} ({color.hex})
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                    {section.downloads && (
                      <div className="flex flex-wrap gap-4">
                        {section.downloads.map((download, i) => (
                          <div key={i} className="flex flex-col items-start gap-2">
                            <a
                              href={download.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary text-sm sm:text-base md:text-base lg:text-lg"
                            >
                              {download.name}
                            </a>
                            <img
                              src={download.preview}
                              alt={download.name}
                              className="h-16 w-16 rounded-md object-contain"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </AnimationContainer>
          </MagicCard>
        </div>
      </div>
    </Wrapper>
  )
}

export default Brand
