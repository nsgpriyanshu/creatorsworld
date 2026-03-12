// "use client";

// import React from "react";
// import Link from "next/link";
// import {
//   Compass,
//   Sparkles,
//   Bot,
//   Server,
//   Users,
//   Rocket,
//   Code2,
//   Terminal,
// } from "lucide-react";

// import Wrapper from "../global/wrapper";
// import AnimationContainer from "../global/animation-container";

// import { Button } from "@repo/ui/components/ui/button";
// import { Badge } from "@repo/ui/components/ui/badge";

// const Hero: React.FC = () => {
//   return (
//     <Wrapper className="relative w-full overflow-hidden pt-32 pb-24">

//       {/* subtle grid background */}
//       <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.25]">
//         <div className="h-full w-full bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:64px_64px]" />
//       </div>

//       <div className="flex flex-col items-center text-center">

//         {/* Badge */}
//         <AnimationContainer animation="fadeDown">
//           <Badge
//             variant="outline"
//             className="flex items-center gap-2 rounded-md px-3 py-1"
//           >
//             <Sparkles className="h-3.5 w-3.5" />
//             World's Largest Bot Server
//           </Badge>
//         </AnimationContainer>

//         {/* Heading */}
//         <AnimationContainer animation="fadeUp" delay={0.1}>
//           <h1 className="mt-8 max-w-4xl text-balance text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
//             Step into the
//             <span className="block text-muted-foreground">
//               Creator's World
//             </span>
//           </h1>
//         </AnimationContainer>

//         {/* Description */}
//         <AnimationContainer animation="fadeUp" delay={0.2}>
//           <p className="mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
//             Build bots, collaborate with developers, and launch projects
//             inside a powerful creator ecosystem.
//           </p>
//         </AnimationContainer>

//         {/* CTA */}
//         <AnimationContainer animation="scaleUp" delay={0.3}>
//           <div className="mt-10">
//             <Link
//               href="https://discord.gg/VUMVuArkst"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Button size="lg" className="gap-2 rounded-md px-8">
//                 <Compass className="h-4 w-4" />
//                 Explore Community
//               </Button>
//             </Link>
//           </div>
//         </AnimationContainer>

//         {/* HERO PARTITION PANEL */}
//         <AnimationContainer
//           animation="fadeUp"
//           delay={0.45}
//           className="w-full"
//         >
//           <div className="mx-auto mt-20 max-w-6xl rounded-md border border-border">

//             {/* header */}
//             <div className="flex items-center justify-between border-b border-dashed border-border px-6 py-3 text-sm text-muted-foreground">
//               <div className="flex items-center gap-2">
//                 <Terminal className="h-4 w-4" />
//                 creator-network.console
//               </div>

//               <span>live overview</span>
//             </div>

//             {/* grid */}
//             <div className="grid grid-cols-1 md:grid-cols-3">

//               {/* Bots */}
//               <div className="border-b border-r border-dashed border-border p-6 transition-colors hover:bg-muted/30">
//                 <Bot className="mb-3 h-5 w-5 text-muted-foreground" />

//                 <p className="text-sm text-muted-foreground mb-1">
//                   Bots Running
//                 </p>

//                 <h3 className="text-xl font-semibold">124K+</h3>
//               </div>

//               {/* Servers */}
//               <div className="border-b border-r border-dashed border-border p-6 transition-colors hover:bg-muted/30">
//                 <Server className="mb-3 h-5 w-5 text-muted-foreground" />

//                 <p className="text-sm text-muted-foreground mb-1">
//                   Servers
//                 </p>

//                 <h3 className="text-xl font-semibold">9,200+</h3>
//               </div>

//               {/* Developers */}
//               <div className="border-b border-dashed border-border p-6 transition-colors hover:bg-muted/30">
//                 <Users className="mb-3 h-5 w-5 text-muted-foreground" />

//                 <p className="text-sm text-muted-foreground mb-1">
//                   Developers
//                 </p>

//                 <h3 className="text-xl font-semibold">3,100+</h3>
//               </div>

//               {/* Tools */}
//               <div className="border-r border-dashed border-border p-6 transition-colors hover:bg-muted/30">
//                 <Code2 className="mb-3 h-5 w-5 text-muted-foreground" />

//                 <p className="text-sm text-muted-foreground mb-1">
//                   Creator Tools
//                 </p>

//                 <h3 className="text-lg font-medium">
//                   Build & Automate
//                 </h3>
//               </div>

//               {/* Community */}
//               <div className="border-r border-dashed border-border p-6 transition-colors hover:bg-muted/30">
//                 <Users className="mb-3 h-5 w-5 text-muted-foreground" />

//                 <p className="text-sm text-muted-foreground mb-1">
//                   Community
//                 </p>

//                 <h3 className="text-lg font-medium">
//                   Collaborate
//                 </h3>
//               </div>

//               {/* Deploy */}
//               <div className="p-6 transition-colors hover:bg-muted/30">
//                 <Rocket className="mb-3 h-5 w-5 text-muted-foreground" />

//                 <p className="text-sm text-muted-foreground mb-1">
//                   Deployment
//                 </p>

//                 <h3 className="text-lg font-medium">
//                   Ship Faster
//                 </h3>
//               </div>

//             </div>
//           </div>
//         </AnimationContainer>

//       </div>
//     </Wrapper>
//   );
// };

// export default Hero;

"use client";

import React from "react";
import Link from "next/link";
import {
  Sparkles,
  Compass,
  Bot,
  Server,
  Users,
  Rocket,
  Code2,
  Terminal,
} from "lucide-react";

import Wrapper from "../global/wrapper";
import AnimationContainer from "../global/animation-container";

import { Button } from "@repo/ui/components/ui/button";
import { Badge } from "@repo/ui/components/ui/badge";

const Hero: React.FC = () => {
  return (
    <Wrapper className="relative w-full overflow-hidden pt-24 pb-12 md:pt-24 md:pb-16">
      {/* subtle background grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.25]">
        <div className="h-full w-full bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <AnimationContainer animation="fadeUp" className="w-full">
        <div className="mx-auto max-w-6xl rounded-md border border-border">
          {/* Badge */}
          <div className="flex justify-center border-b border-dashed border-border p-4">
            <Badge
              variant="outline"
              className="group relative overflow-hidden border-border bg-background/70 px-4 py-1.5 backdrop-blur-md"
            >
              <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-linear-to-r from-transparent via-muted/40 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />

              <span className="relative flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:rotate-12" />
                <span className="bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                  World's Largest Bot Server
                </span>
              </span>
            </Badge>
          </div>

          {/* Heading */}
          <div className="border-b border-dashed border-border px-6 py-10 text-center">
            <h1 className="mx-auto max-w-3xl text-balance text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
              Step into the
              <span className="block text-muted-foreground">
                Creator's World
              </span>
            </h1>
          </div>

          {/* Description */}
          <div className="border-b border-dashed border-border px-6 py-8 text-center">
            <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
              Build bots, collaborate with developers, and deploy powerful tools
              for communities around the world.
            </p>
          </div>

          {/* CTA row */}
          <div className="grid md:grid-cols-2 border-b border-dashed border-border">
            <div className="flex items-center justify-center border-r border-dashed border-border p-6">
              <Link
                href="https://discord.gg/VUMVuArkst"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="gap-2 rounded-md px-8">
                  <Compass className="h-4 w-4" />
                  Explore Community
                </Button>
              </Link>
            </div>

            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground p-6">
              <Terminal className="h-4 w-4" />
              creator-network.console
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-3">
            <div className="border-r border-b border-dashed border-border p-6 hover:bg-muted/30 transition-colors">
              <Bot className="mb-3 h-5 w-5 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">Bots Running</p>
              <h3 className="text-xl font-semibold">124K+</h3>
            </div>

            <div className="border-r border-b border-dashed border-border p-6 hover:bg-muted/30 transition-colors">
              <Server className="mb-3 h-5 w-5 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">Servers</p>
              <h3 className="text-xl font-semibold">9,200+</h3>
            </div>

            <div className="border-b border-dashed border-border p-6 hover:bg-muted/30 transition-colors">
              <Users className="mb-3 h-5 w-5 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">Developers</p>
              <h3 className="text-xl font-semibold">3,100+</h3>
            </div>

            <div className="border-r border-dashed border-border p-6 hover:bg-muted/30 transition-colors">
              <Code2 className="mb-3 h-5 w-5 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">Creator Tools</p>
              <h3 className="text-lg font-medium">Build & Automate</h3>
            </div>

            <div className="border-r border-dashed border-border p-6 hover:bg-muted/30 transition-colors">
              <Users className="mb-3 h-5 w-5 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">Community</p>
              <h3 className="text-lg font-medium">Collaborate</h3>
            </div>

            <div className="p-6 hover:bg-muted/30 transition-colors">
              <Rocket className="mb-3 h-5 w-5 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">Deployment</p>
              <h3 className="text-lg font-medium">Ship Faster</h3>
            </div>
          </div>
        </div>
      </AnimationContainer>
    </Wrapper>
  );
};

export default Hero;
