// constants/what-you-get.ts

import { Palette, Code2, Gauge, LifeBuoy } from "lucide-react";

export const WHAT_YOU_GET = [
  {
    title: "Design",
    description:
      "Modern, clean UI crafted to match your brand and convert users effectively.",
    icon: Palette,
    points: [
      "Custom UI/UX design",
      "Responsive across devices",
      "Consistent design system",
    ],
  },
  {
    title: "Development",
    description:
      "Robust, scalable code built with performance and maintainability in mind.",
    icon: Code2,
    points: [
      "Modern tech stack",
      "Clean architecture",
      "Production-ready code",
    ],
  },
  {
    title: "Performance",
    description:
      "Fast-loading, optimized websites that deliver a smooth user experience.",
    icon: Gauge,
    points: [
      "Core Web Vitals optimization",
      "SEO-friendly structure",
      "Asset & bundle optimization",
    ],
  },
  // {
  //   title: "Support",
  //   description:
  //     "Ongoing support to keep your website running smoothly post-launch.",
  //   icon: LifeBuoy,
  //   points: [
  //     "Post-launch assistance",
  //     "Bug fixes & improvements",
  //     "Guided maintenance",
  //   ],
  // },
] as const;
