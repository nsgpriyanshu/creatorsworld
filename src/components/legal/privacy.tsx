'use client'

import React from 'react'
import Wrapper from '@/components/global/wrapper'
import SectionBadge from '@/components/ui/section-badge'
import AnimationContainer from '@/components/global/animation-container'
import { cn } from '@/lib/utils'
import { MagicCard } from '../ui/magic-card'

const policies = [
  {
    title: '1. Privacy Policy Updates',
    description:
      'We may update this privacy policy at any time. When we do, we will post the new policy here with the updated date. Please check back regularly to stay informed.',
  },
  {
    title: '2. Information We Collect',
    description:
      "We do not collect any personal information other than your Discord account for accessing the Creator's World server.",
  },
  {
    title: '3. Data Storage',
    description:
      'We use Supabase as our third-party service to securely store necessary user data.',
  },
  {
    title: '4. Cookies and Tracking',
    description: 'We do not use cookies or any other tracking technologies on our website.',
  },
  {
    title: '5. Data Sharing',
    description: 'We do not share your personal data with any third parties.',
  },
  {
    title: '6. Your Rights',
    description:
      'You have the right to access, correct, or delete your personal data stored with us. Contact us if you want to exercise these rights.',
  },
  {
    title: '7. Marketing Communications',
    description: 'We do not send marketing or promotional emails.',
  },
  {
    title: '8. Discord Server Data',
    description:
      "Your Discord data is managed by Discord's own privacy policies. We recommend reviewing Discord's Privacy Policy for more details.",
  },
  {
    title: '9. Data Retention',
    description:
      'We retain your data for up to 1 year after account inactivity or deletion, after which it will be permanently removed from our systems.',
  },
  {
    title: '10. Contact Us',
    description:
      'If you have any questions or concerns about your data or this privacy policy, please contact us at https://contact-priyanshu-ps.vercel.app/  via Discord.',
  },
]

const PrivacyPolicy = () => {
  return (
    <Wrapper className="relative h-full min-h-screen w-full flex-1 pt-20 lg:pt-32">
      <div className="flex h-full w-full flex-col items-start gap-10 py-8">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-4">
          <AnimationContainer animation="fadeUp" delay={0.2}>
            <SectionBadge title="Last Updated: 1 June 2025" />
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
              <MagicCard className="mt-10 rounded-xl p-2 md:p-4">
                <div className="flex flex-col p-6">
                  <h2 className="light:text-[#d10909] text-xl font-medium text-[#f10a0a] md:text-2xl dark:text-[#f10a0a]">
                    {policy.title}
                  </h2>
                  <p className="text-muted-foreground mt-4 text-sm md:text-base lg:text-lg">
                    {policy.description}
                  </p>
                </div>
              </MagicCard>
            </AnimationContainer>
          ))}
        </div>
      </div>
    </Wrapper>
  )
}

export default PrivacyPolicy
