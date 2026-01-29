'use client'

import Wrapper from '../global/wrapper'
import AnimationContainer from '../global/animation-container'
import { Badge } from '@repo/ui/components/ui/badge'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@repo/ui/components/ui/tooltip'
import { Avatar, AvatarFallback, AvatarImage } from '@repo/ui/components/ui/avatar'
import { ShieldCheck, Crown } from 'lucide-react'
import { cn } from '@repo/ui/lib/utils'
import { REGENTS } from '../../constants'

/* ---------------------------------------------
 * Types
 * -------------------------------------------*/
type Regent = {
  id: number
  name: string
  designation: string
  image: string
}

/* ---------------------------------------------
 * Component
 * -------------------------------------------*/
const Regents = () => {
  const regents = REGENTS as Regent[]

  return (
    <Wrapper className="relative overflow-hidden py-20 lg:py-32">
      {/* Smooth grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(241,10,10,0.06),transparent_60%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(circle_at_center,black_45%,transparent_75%)]"
      />

      {/* Header */}
      <div className="mx-auto mb-16 flex max-w-3xl flex-col items-center text-center">
        <AnimationContainer animation="fadeUp" delay={0.2}>
          <Badge
            variant="outline"
            className="flex items-center gap-2 bg-background px-4 py-1.5 text-foreground"
          >
            <ShieldCheck className="h-4 w-4 text-[#f10a0a]" />
            Leadership
          </Badge>
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.3}>
          <h2 className="mt-6 text-balance text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
            Regents of Creator&apos;s World
          </h2>
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.4}>
          <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
            The core leadership guiding the vision, operations, and growth of
            Creator&apos;s World.
          </p>
        </AnimationContainer>
      </div>

      {/* Regents avatars */}
      <TooltipProvider>
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-6">
          {regents.map((regent, index) => {
            const isCEO = regent.designation
              .toLowerCase()
              .includes('chief executive')

            return (
              <AnimationContainer
                key={regent.id}
                animation="fadeUp"
                delay={0.2 + index * 0.08}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div
                      className={cn(
                        'group relative cursor-default rounded-full p-1',
                        isCEO && 'ring-2 ring-[#f10a0a]/40',
                      )}
                    >
                      {/* Hover glow */}
                      <div
                        aria-hidden
                        className={cn(
                          'absolute inset-0 -z-10 rounded-full opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100',
                          isCEO
                            ? 'bg-[#f10a0a]/40'
                            : 'bg-[#f10a0a]/25',
                        )}
                      />

                      <Avatar className="size-16 transition-transform duration-300 group-hover:scale-105 md:size-20">
                        <AvatarImage
                          src={regent.image}
                          alt={regent.name}
                        />
                        <AvatarFallback>
                          {regent.name.replace('@', '').slice(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>

                      {/* CEO crown */}
                      {isCEO && (
                        <div className="absolute -top-1 -right-1 flex size-5 items-center justify-center rounded-full bg-background shadow">
                          <Crown className="h-3 w-3 text-[#f10a0a]" />
                        </div>
                      )}
                    </div>
                  </TooltipTrigger>

                  <TooltipContent
                    side="top"
                    className="rounded-xl border bg-background px-4 py-2 text-center shadow-lg"
                  >
                    <p className="text-sm font-semibold text-foreground">
                      {regent.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {regent.designation}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </AnimationContainer>
            )
          })}
        </div>
      </TooltipProvider>

      {/* Footer note */}
      <AnimationContainer animation="fadeUp" delay={0.6}>
        <p className="mx-auto mt-14 max-w-lg text-center text-sm text-muted-foreground">
          Regents are responsible for leadership decisions, platform integrity,
          and long-term direction.
        </p>
      </AnimationContainer>
    </Wrapper>
  )
}

export default Regents
