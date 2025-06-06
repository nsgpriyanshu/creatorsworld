'use client'

import React from 'react'
import Wrapper from '@/components/global/wrapper'
import SectionBadge from '@/components/ui/section-badge'
import AnimationContainer from '@/components/global/animation-container'
import { cn } from '@/lib/utils'

type Section = {
  title: string
  description: string
  list?: string[]
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
      'Our primary colors are #f10a0a (highlight red), #000000 (dark base), and #ffffff (light base). Please use these when referencing or integrating our brand.',
    list: ['Primary Red: #f10a0a', 'Black: #000000', 'White: #ffffff'],
  },
  //   {
  //     title: '3. Typography',
  //     description:
  //       'Our preferred typeface for digital assets is Inter. You are encouraged to use system fonts or clean sans-serif fonts when referencing us in UI/UX.',
  //     list: ['Primary Font: Geist-Mono', 'Fallbacks: system-ui, sans-serif'],
  //   },
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
    list: [
      '[Download Logo - Light Version](/icons/cwicon_light.png)',
      '[Download Logo - Dark Version](/icons/cwicon_dark.png)',
      '[Pure PNG without Background](/icons/cw2025.png)',
      '[Download SVG Pack](/icons/)',
    ],
  },
  {
    title: '5. Contact',
    description:
      'For partnerships, press kits, or questions about brand usage, contact us at https://contact-priyanshu-ps.vercel.app/ or via Discord.',
  },
]

const Brand = () => {
  return (
    <Wrapper className="relative h-full min-h-screen w-full flex-1 pt-20 lg:pt-32">
      <div className="flex h-full w-full flex-col items-start gap-10 py-8">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-4">
          <AnimationContainer animation="fadeUp" delay={0.2}>
            <SectionBadge title="Last Updated: 6 June 2025" />
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.4}>
            <h1 className="from-foreground bg-gradient-to-b to-neutral-400 bg-clip-text text-2xl !leading-tight font-medium text-transparent md:text-4xl lg:text-5xl">
              Brand Guidelines
            </h1>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.6}>
            <p className="text-muted-foreground text-sm md:text-base lg:text-lg">
              This page provides the official assets and guidelines for referencing Creator’s World
              in media, community content, apps, or collaborations. Please use them responsibly.
            </p>
          </AnimationContainer>
        </div>

        {/* Guidelines Cards */}
        <div className="flex flex-col gap-6 px-1 md:px-0">
          {brandGuidelines.map((section, index) => (
            <AnimationContainer key={section.title} animation="fadeUp" delay={0.8 + index * 0.1}>
              <div
                className={cn(
                  'relative h-auto overflow-hidden rounded-2xl border bg-white/10 backdrop-blur-md dark:border-white/20',
                  'dark:bg-black/10',
                )}
              >
                <div className="flex flex-col p-6">
                  <h2 className="text-xl font-medium text-[#f10a0a] md:text-2xl dark:text-[#f10a0a]">
                    {section.title}
                  </h2>
                  <p className="text-muted-foreground mt-4 text-sm md:text-base lg:text-lg">
                    {section.description}
                  </p>
                  {section.list && (
                    <ul className="text-muted-foreground mt-4 list-inside list-disc text-sm md:text-base lg:text-lg">
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
                </div>
              </div>
            </AnimationContainer>
          ))}
        </div>
      </div>
    </Wrapper>
  )
}

export default Brand
