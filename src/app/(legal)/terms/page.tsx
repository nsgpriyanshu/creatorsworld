'use client'

import React from 'react'
import Wrapper from '@/components/global/wrapper'
import SectionBadge from '@/components/ui/section-badge'
import AnimationContainer from '@/components/global/animation-container'
import { cn } from '@/lib/utils'

const terms = [
  {
    title: '1. Accepting These Rules',
    description:
      "By using NotEase, you're agreeing to follow these Terms of Service. If you don't agree, you can't use our site.",
  },
  {
    title: '2. Your Account',
    description: 'To use NotEase, you’ll need an account. When you sign up, please:',
    list: [
      'Give us real and true information.',
      'Keep your password secret.',
      'Tell us right away if you think someone else is using your account.',
    ],
  },
  {
    title: '3. Using Our Stuff',
    description: 'All the notes and study materials are for you to learn from. Please don’t:',
    list: ['Copy or sell them without asking.', 'Say you made the notes that Priyanshu uploaded.'],
  },
  {
    title: '4. Your Responsibilities',
    description: 'When you use NotEase, please:',
    list: [
      'Use it nicely and follow the rules.',
      'Respect the people who made the notes.',
      'Don’t share anything mean or bad.',
    ],
  },
  {
    title: '5. Things You Can’t Do',
    description: 'We don’t allow:',
    list: [
      'Trying to hack or break our site.',
      'Putting bad programs or viruses on our site.',
      'Using our site to send spam or trick people.',
    ],
    extra: 'If you do these things, your account might get blocked.',
  },
  {
    title: '6. Sometimes We Might Be Down',
    description:
      'We’ll try to keep NotEase working, but sometimes we might need to fix things. We’re not responsible if the site isn’t working for a bit.',
  },
  {
    title: '7. Ending Your Account',
    description:
      'We can close your account if you break these rules. You can also ask us to close your account anytime.',
  },
  {
    title: '8. We’re Not Perfect',
    description:
      'We try to make sure everything is right, but we can’t promise it’s perfect. We’re not responsible if you have problems because of something on our site.',
  },
  {
    title: '9. We Might Change These Rules',
    description: 'We might change these rules sometimes. We’ll tell you if we make big changes.',
  },
  {
    title: '10. Talk to Us',
    description: 'If you have any questions, you can contact us at through contact section.',
  },
]

export default function TermsOfServicePage() {
  return (
    <Wrapper className="relative h-full min-h-screen w-full flex-1 pt-20 lg:pt-32">
      <div className="flex h-full w-full flex-col items-start gap-10 py-8">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-4">
          <AnimationContainer animation="fadeUp" delay={0.2}>
            <SectionBadge title="Effective Date: 14 March 2025" />
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.4}>
            <h1 className="from-foreground bg-gradient-to-b to-neutral-400 bg-clip-text text-2xl !leading-tight font-medium text-transparent md:text-4xl lg:text-5xl">
              Terms of Service
            </h1>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.6}>
            <p className="text-muted-foreground text-sm md:text-base lg:text-lg">
              Welcome to NotEase! These rules help keep our platform safe and fun for everyone.
            </p>
          </AnimationContainer>
        </div>

        {/* Glassmorphic Cards */}
        <div className="flex flex-col gap-6 px-1 md:px-0">
          {terms.map((term, index) => (
            <AnimationContainer key={term.title} animation="fadeUp" delay={0.8 + index * 0.1}>
              <div
                className={cn(
                  'relative h-auto overflow-hidden rounded-2xl border bg-white/10 backdrop-blur-md dark:border-white/20',
                  'dark:bg-black/10',
                )}
              >
                <div className="flex flex-col p-6">
                  <h2 className="light:text-[#d10909] text-xl font-medium text-[#f10a0a] md:text-2xl dark:text-[#f10a0a]">
                    {term.title}
                  </h2>
                  <p className="text-muted-foreground mt-4 text-sm md:text-base lg:text-lg">
                    {term.description}
                  </p>
                  {term.list && (
                    <ul className="text-muted-foreground mt-2 list-inside list-disc text-sm md:text-base lg:text-lg">
                      {term.list.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {term.extra && (
                    <p className="text-muted-foreground mt-2 text-sm md:text-base lg:text-lg">
                      {term.extra}
                    </p>
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
