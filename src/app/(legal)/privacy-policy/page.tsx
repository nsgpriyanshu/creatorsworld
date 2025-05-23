'use client'

import React from 'react'
import Wrapper from '@/components/global/wrapper'
import SectionBadge from '@/components/ui/section-badge'
import AnimationContainer from '@/components/global/animation-container'
import { cn } from '@/lib/utils'

const policies = [
  {
    title: 'Information We Collect',
    description:
      "When you sign up, we ask for your username, name, and email. This is just so we know it's really you logging in! Think of it like a secret handshake. We only ask for what we need to let you use the site. We promise we won't ask for your address, phone number, or anything else unless you tell us it's okay.",
  },
  {
    title: 'How We Use Your Information',
    description:
      "We use your login details to make sure you're you! We use a super secure service called Clerk to do this – it's like a really good lock on a door. This helps us manage your account so you can get to all the awesome notes. We won't share your info with anyone else, and we won't use it to send you ads or anything like that.",
  },
  {
    title: 'Data Security',
    description:
      'We use top-notch security to keep your info safe. We use Clerk for logins (like a bodyguard for your account) and Supabase to store your data (like a super strong vault). Only people who are logged in can download the notes, and all the notes are uploaded by Priyanshu, so you know they’re safe.',
  },
  {
    title: 'No Tracking Technologies',
    description:
      "We don't use cookies (those little files that websites use to track you) or any other sneaky tricks to see what you're doing on our site. We respect your privacy, and we want you to feel safe.",
  },
  {
    title: 'Your Rights',
    description:
      'You have the right to know what info we have about you, and you can ask us to delete it anytime. Just send us a message, and we’ll help you out. It’s like having a "delete" button for your info.',
  },
  {
    title: 'Our Commitment',
    description:
      'We don’t allow hackers or spammers on our site. We want everyone to have a safe and fun time. If you see anything suspicious, please let us know!',
  },
  {
    title: 'Policy Updates',
    description:
      'We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any significant changes by posting the new policy on our website with a revised "Last Updated" date. Please review this policy periodically for any updates.',
  },
]

export default function PolicyPage() {
  return (
    <Wrapper className="relative h-full min-h-screen w-full flex-1 pt-20 lg:pt-32">
      <div className="flex h-full w-full flex-col items-start gap-10 py-8">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-4">
          <AnimationContainer animation="fadeUp" delay={0.2}>
            <SectionBadge title="Last Updated: 14 March 2025" />
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.4}>
            <h1 className="from-foreground bg-gradient-to-b to-neutral-400 bg-clip-text text-2xl !leading-tight font-medium text-transparent md:text-4xl lg:text-5xl">
              Privacy Policy
            </h1>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp" delay={0.6}>
            <p className="text-muted-foreground text-sm md:text-base lg:text-lg">
              Your privacy is important to us. This policy explains what information we collect, how
              we use it, and your rights regarding that information.
            </p>
          </AnimationContainer>
        </div>

        {/* Glassmorphic Cards */}
        <div className="flex flex-col gap-6 px-1 md:px-0">
          {policies.map((policy, index) => (
            <AnimationContainer key={policy.title} animation="fadeUp" delay={0.8 + index * 0.1}>
              <div
                className={cn(
                  'relative h-auto overflow-hidden rounded-2xl border bg-white/10 backdrop-blur-md dark:border-white/20',
                  'dark:bg-black/10',
                )}
              >
                <div className="flex flex-col p-6">
                  <h2 className="light:text-[#d10909] text-xl font-medium text-[#f10a0a] md:text-2xl dark:text-[#f10a0a]">
                    {policy.title}
                  </h2>
                  <p className="text-muted-foreground mt-4 text-sm md:text-base lg:text-lg">
                    {policy.description}
                  </p>
                </div>
              </div>
            </AnimationContainer>
          ))}
        </div>
      </div>
    </Wrapper>
  )
}
