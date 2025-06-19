'use client'

import React from 'react'
import Wrapper from '@/components/global/wrapper'
import SectionBadge from '@/components/ui/section-badge'
import AnimationContainer from '@/components/global/animation-container'
import { cn } from '@/lib/utils'
import { MagicCard } from '../ui/magic-card'

type Term = {
  title: string
  description: string
  list?: string[]
}

const terms: Term[] = [
  {
    title: '1. Acceptance of Terms',
    description:
      "By accessing Creator's World and its Discord server, you agree to these Terms of Service. Staff members must create an account to manage administrative tasks, while users only need a Discord account to participate.",
  },
  {
    title: '2. User-Generated Content',
    description:
      'Users can submit content on the website and Discord. All content is moderated to keep the community safe and welcoming.',
  },
  {
    title: '3. Monetization',
    description:
      'Creator’s World may offer paid services such as website building and Discord bot development in the future.',
  },
  {
    title: '4. Data Collection',
    description:
      'We only collect the minimum data necessary for authentication and do not use tracking cookies or collect extra personal information.',
  },
  {
    title: '5. Minors',
    description:
      'Minors are welcome to participate in our Discord server, which is maintained as a safe community space.',
  },
  {
    title: '6. Content Removal and Suspension',
    description:
      'We reserve the right to remove content or suspend users who violate our community guidelines or these Terms.',
  },
  {
    title: '7. Third-Party Services',
    description:
      'We use third-party services like Discord, Supabase, and GitHub. We are not responsible for their content or uptime.',
  },
  {
    title: '8. Liability Disclaimer',
    description:
      'Creator’s World is not liable for user-posted content or issues caused by third-party services.',
  },
  {
    title: '9. Changes to Terms',
    description:
      'These Terms may change occasionally. We will notify users through Discord and the website when significant updates occur.',
  },
  {
    title: '10. Contact Us',
    description:
      'If you have questions about these Terms, please reach out via our contact page at https://creatorsworld.vercel.app/contact or contact us on Discord.',
  },
]

const TermsOfService = () => {
  return (
    <Wrapper className="relative h-full min-h-screen w-full flex-1 pt-20 lg:pt-32">
      <div className="flex h-full w-full flex-col items-start gap-10 py-8">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-4 px-4 sm:px-6 md:px-0">
          <AnimationContainer animation="fadeUp" delay={0.2}>
            <SectionBadge title="Effective Date: 1 June 2025" />
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.4}>
            <h1 className="from-foreground bg-gradient-to-b to-neutral-400 bg-clip-text text-2xl !leading-tight font-medium text-transparent md:text-4xl lg:text-5xl">
              Terms of Service
            </h1>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.6}>
            <p className="text-muted-foreground text-sm md:text-base lg:text-lg">
              Welcome to Creator's World! These rules help keep our platform safe and fun for
              everyone.
            </p>
          </AnimationContainer>
        </div>

        {/* Glassmorphic Cards */}
        <div className="flex w-full flex-col gap-6 px-4 sm:px-6 md:px-0">
          {terms.map((term, index) => (
            <AnimationContainer key={term.title} animation="fadeUp" delay={0.8 + index * 0.1}>
              <MagicCard className="mt-10 w-full rounded-xl p-4 sm:p-6 md:p-4">
                <div className="flex flex-col p-6">
                  <h2 className="light:text-[#d10909] text-xl font-medium text-[#f10a0a] md:text-2xl dark:text-[#f10a0a]">
                    {term.title}
                  </h2>
                  <p
                    className={cn(
                      'text-muted-foreground mt-4 text-sm sm:text-base md:text-base lg:text-lg',
                      'break-all sm:break-words',
                    )}
                  >
                    {term.title === '10. Contact Us' ? (
                      <>
                        {term.description.split('https://creatorsworld.vercel.app/contact')[0]}
                        <a
                          href="https://creatorsworld.vercel.app/contact"
                          className="text-primary hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          https://creatorsworld.vercel.app/contact
                        </a>
                        {term.description.split('https://creatorsworld.vercel.app/contact')[1]}
                      </>
                    ) : (
                      term.description
                    )}
                  </p>
                  {term.list && (
                    <ul className="text-muted-foreground mt-2 list-inside list-disc text-sm sm:text-base md:text-base lg:text-lg">
                      {term.list.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </MagicCard>
            </AnimationContainer>
          ))}
        </div>
      </div>
    </Wrapper>
  )
}

export default TermsOfService
