import { Badge } from '@repo/ui/components/ui/badge'
import AnimationContainer from '../global/animation-container'
import { Newspaper } from 'lucide-react'

const BlogHero = () => {
  return (
    <section className="py-20 text-center">
      <AnimationContainer animation="fadeUp" delay={0.1}>
        <Badge
          variant="outline"
          className="mx-auto mb-4 flex w-fit items-center gap-2"
        >
          <Newspaper className="h-4 w-4 text-[#f10a0a]" />
          Blog
        </Badge>
      </AnimationContainer>

      <AnimationContainer animation="fadeUp" delay={0.2}>
        <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
          Creator’s Journal
        </h1>
      </AnimationContainer>

      <AnimationContainer animation="fadeUp" delay={0.3}>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground md:text-lg">
          Deep dives, updates, and lessons from building real products and systems.
        </p>
      </AnimationContainer>
    </section>
  )
}

export default BlogHero
